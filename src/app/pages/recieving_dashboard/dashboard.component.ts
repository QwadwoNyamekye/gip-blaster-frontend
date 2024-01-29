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
export class DashboardComponent implements OnInit {
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
  onlineNECCount: number;
  offlineNECCount: number;
  warningNECCount: number;
  onlineFTCCount: number;
  offlineFTCCount: number;
  warningFTCCount: number;
  cardTitle: string;
  recievedNECData: any;
  recievedFTCData: any;
  tempNECStatus: any;
  tempFTCStatus: any;

  constructor(private modalService: NgbModal, private service: Service) {
    this.user = sessionStorage.getItem("currentUser");
    this.tempNECStatus = JSON.parse(localStorage.getItem("tempNECStatus"));
    this.tempFTCStatus = JSON.parse(localStorage.getItem("tempFTCStatus"));
    // this.recievedNECData = this.service.getRecievingStatus("nec");
    // this.recievedFTCData = this.service.getRecievingStatus("ftc");
  }

  ngOnInit() {
    console.log("test here");
    if (!this.tempNECStatus) {
      this.cardTitle = "NEC SERVER STATUS"
      this.service.spinnerLoad = true;
      this.service.spinner.show()
    }
    else{
      this.temp = this.tempNECStatus
      this.cardTitle = "NEC SERVER STATUS"
      this.onlineNECCount = this.tempNECStatus.filter((row) => row.status == 'ONLINE').length
      this.offlineNECCount = this.tempNECStatus.filter((row) => row.status == 'OFFLINE').length
      this.warningNECCount = this.tempNECStatus.filter((row) => row.status == 'WARNING').length
    }
    //  this.getFIStatus();
    this.initializeNECWebSocketConnection();
    this.initializeFTCWebSocketConnection();
  }

  ngOnDestroy() {
    console.log("destroyed");
  }

  initializeNECWebSocketConnection() {
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
        that.temp = txn;
        that.tempNECStatus = that.temp;
        that.onlineNECCount = that.tempNECStatus.filter(
          (row) => row.status == "ONLINE"
        ).length;
        that.offlineNECCount = that.tempNECStatus.filter(
          (row) => row.status == "OFFLINE"
        ).length;
        that.warningNECCount = that.tempNECStatus.filter(
          (row) => row.status == "WARNING"
        ).length;
        localStorage.setItem("tempNECStatus", JSON.stringify(that.temp));
        if (message.body) {
          that.service.spinnerLoad = false;
        }
      });
    });
  }
  initializeFTCWebSocketConnection() {
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
        that.temp = txn;
        that.tempFTCStatus = that.temp;
        that.onlineFTCCount = that.tempFTCStatus.filter(
          (row) => row.status == "ONLINE"
        ).length;
        that.offlineFTCCount = that.tempFTCStatus.filter(
          (row) => row.status == "OFFLINE"
        ).length;
        that.warningFTCCount = that.tempFTCStatus.filter(
          (row) => row.status == "WARNING"
        ).length;
        localStorage.setItem("tempFTCStatus", JSON.stringify(that.temp));
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

  onButtonGroupClick($event, type: boolean) {
    let clickedElement = $event.target || $event.srcElement;
    console.log($event.target);
    if (clickedElement.nodeName === "BUTTON") {
      let isCertainButtonAlreadyActive =
        clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }
      clickedElement.className += " active";
      if (type) {
        this.temp = this.tempNECStatus;
        this.cardTitle = "NEC SERVER STATUS";
      } else if (!type) {
        this.temp = this.tempFTCStatus;
        this.cardTitle = "FTC SERVER STATUS";
      }
    }
  }
}
