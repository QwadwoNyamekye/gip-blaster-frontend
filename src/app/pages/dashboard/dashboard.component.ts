import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import * as Chartist from "chartist";
import { Service } from "./dashboard.service";
import * as Stomp from "stompjs";
import * as SockJS from "sockjs-client";
import { environment } from "src/environments/environment.prod";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  user: any;
  rows2: any;
  dashInterval;
  dropdownList: any;
  temp = [];
  public selectedItems: any[] = [];
  dropdownSettings = {};
  rows = [];
  public stompClient;
  public msg = [];
  editRecord: any;
  closeResult: string;

  constructor(private modalService: NgbModal, private service: Service) {
    this.user = sessionStorage.getItem("currentUser");
  }
  ngAfterViewInit(): void {
    // throw new Error("Method not implemented.");
  }

  ngOnInit() {
    console.log("test here");
    this.service.spinnerLoad = true;
    //  this.getFIStatus();
    this.initializeWebSocketConnection();
  }

  ngOnDestroy() {
    console.log("destroyed");
  }

  initializeWebSocketConnection() {
    const serverUrl = environment.adminUrl + "/blaster";
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe("/realtime/nec", (message) => {
        let txn = JSON.parse(message.body);
        let keys = {
          OFFLINE: -1,
          WARNING: 0,
          ONLINE: 1,
        };
        txn = txn.sort((a, b) => {
          if (keys[a.status] < keys[b.status]) {
            return -1;
          } else if (keys[a.status] > keys[b.status]) {
            return 0;
          } else if (keys[a.status] == keys[b.status]) {
            return 1;
          }
        });
        //console.log(txn);
        that.temp = txn;
        if (message.body) {
          that.service.spinnerLoad = false;
        }
      });
    });
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  openEdit(content, type, modalDimension, value) {
    this.editRecord = value;
    this.modalService.open(content, { size: "lg", centered: true }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  // getFIStatus(){
  //   let custom_order = {
  //     'OFFLINE':-1,
  //     'WARNING':0,
  //     'ONLINE':1
  //   }
  //   this.temp = this.temp.sort((a,b) => {

  //     if (custom_order[a.status] < custom_order[b.status] ) {
  //       return -1;
  //     } else if (custom_order[a.status] > custom_order[b.status]) {
  //       return 0;
  //     } else if (custom_order[a.status] == custom_order[b.status]) {
  //       return 1;
  //     }
  //   });
  //   //JSON.parse(payload)
  // }
}
