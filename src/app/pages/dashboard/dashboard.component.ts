import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
} from "@angular/core";
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
  tempFiStatus: any;
  onlineCount: number;
  offlineCount: number;
  warningCount: number;
  allCount: number;
  status: string;

  constructor(private modalService: NgbModal, private service: Service) {
    this.user = sessionStorage.getItem("currentUser");
    this.tempFiStatus = JSON.parse(localStorage.getItem("tempFiStatus"));
  }

  ngOnInit() {
    console.log("test here");
    document.getElementById("offline").focus();
    if (!this.tempFiStatus) {
      this.service.spinnerLoad = true;
      this.service.spinner.show();
    } else {
      this.temp = this.tempFiStatus;
      this.onlineCount = this.tempFiStatus.filter(
        (row) => row.status == "ONLINE"
      ).length;
      this.offlineCount = this.tempFiStatus.filter(
        (row) => row.status == "OFFLINE"
      ).length;
      this.warningCount = this.tempFiStatus.filter(
        (row) => row.status == "WARNING"
      ).length;
      this.allCount = this.tempFiStatus.length;
    }
    //  this.getFIStatus();
    this.initializeWebSocketConnection();
    this.filterTable("offline");
  }

  ngOnDestroy() {
    console.log("destroyed");
  }

  initializeWebSocketConnection() {
    const serverUrl = environment.sendingUrl + "/blaster";
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
        that.tempFiStatus = that.temp;
        that.onlineCount = that.tempFiStatus.filter(
          (row) => row.status == "ONLINE"
        ).length;
        that.offlineCount = that.tempFiStatus.filter(
          (row) => row.status == "OFFLINE"
        ).length;
        that.warningCount = that.tempFiStatus.filter(
          (row) => row.status == "WARNING"
        ).length;
        that.allCount = that.tempFiStatus.length;
        localStorage.setItem("tempFiStatus", JSON.stringify(that.temp));
        if (message.body) {
          that.service.spinnerLoad = false;
        }
        console.log("Filtering status");
        that.filterTable(that.status);
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

  filterTable(status) {
    let val = status.toLowerCase();
    this.status = status;
    if (val == "all") {
      this.temp = this.tempFiStatus;
      return true;
    }
    this.temp = this.tempFiStatus.filter(function (d) {
      for (var key in d) {
        d[key] = d[key] ? d[key] : "";
        if (d[key].toString().toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
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
    }
  }
}
