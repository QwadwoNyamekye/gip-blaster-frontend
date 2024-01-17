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
  banks = [
    {
      id: 300394,
      itemName: "VODAFONE",
    },
    {
      id: 300591,
      itemName: "MTN",
    },
    {
      id: 300592,
      itemName: "AIRTELTIGO",
    },
    {
      id: 300574,
      itemName: "G-MONEY",
    },
    {
      id: 300302,
      itemName: "STANDARD CHARTERED BANK",
    },
    {
      id: 300303,
      itemName: "ABSA BANK GHANA LIMITED",
    },
    {
      id: 300304,
      itemName: "GCB BANK LIMITED",
    },
    {
      id: 300305,
      itemName: "NATIONAL INVESTMENT BANK",
    },
    {
      id: 300306,
      itemName: "ARB APEX BANK LIMITED",
    },
    {
      id: 300307,
      itemName: "AGRICULTURAL DEVELOPMENT BANK",
    },
    {
      id: 300308,
      itemName: "SOCIETE GENERALE GHANA",
    },
    {
      id: 300309,
      itemName: "UNIVERSAL MERCHANT BANK",
    },
    {
      id: 300310,
      itemName: "REPUBLIC BANK LIMITED",
    },
    {
      id: 300311,
      itemName: "ZENITH BANK GHANA LTD",
    },
    {
      id: 300312,
      itemName: "ECOBANK GHANA LTD",
    },
    {
      id: 300313,
      itemName: "CAL BANK LIMITED",
    },
    {
      id: 300316,
      itemName: "FIRST ATLANTIC BANK",
    },
    {
      id: 300317,
      itemName: "PRUDENTIAL BANK LTD",
    },
    {
      id: 300318,
      itemName: "STANBIC BANK",
    },
    {
      id: 300319,
      itemName: "FIRST BANK OF NIGERIA",
    },
    {
      id: 300320,
      itemName: "BANK OF AFRICA",
    },
    {
      id: 300322,
      itemName: "GUARANTY TRUST BANK",
    },
    {
      id: 300323,
      itemName: "FIDELITY BANK LIMITED",
    },
    {
      id: 300324,
      itemName: "OMNIBSIC",
    },
    {
      id: 300325,
      itemName: "UNITED BANK OF AFRICA",
    },
    {
      id: 300328,
      itemName: "BANK OF GHANA",
    },
    {
      id: 300329,
      itemName: "ACCESS BANK LTD",
    },
    {
      id: 300331,
      itemName: "CONSOLIDATED BANK GHANA",
    },
    {
      id: 300334,
      itemName: "FIRST NATIONAL BANK",
    },
    {
      id: 300335,
      itemName: "BESTPOINT SAVINGS AND LOANS",
    },
    {
      id: 300341,
      itemName: "AFINITY GHANA SAVINGS AND LOANS",
    },
    {
      id: 300345,
      itemName: "ADEHYEMAN SAVINGS AND LOANS",
    },
    {
      id: 300349,
      itemName: "OPPORTUNITY INTERNALTIONAL SAVINGS AND LOANS",
    },
    {
      id: 300356,
      itemName: "SINAPI ABA SAVINGS AND LOANS",
    },
    {
      id: 300361,
      itemName: "SERVICES INTEGRITY SAVINGS & LOANS",
    },
    {
      id: 300369,
      itemName: "LETSHEGO SAVINGS AND LOANS",
    },
    {
      id: 300479,
      itemName: "ZEEPAY GHANA LIMITED",
    },
    {
      id: 300595,
      itemName: "GHANA PAY",
    },
  ];
  constructor(private modalService: NgbModal, private service: Service) {
    this.user = sessionStorage.getItem("currentUser");
  }
  ngAfterViewInit(): void {
    // throw new Error("Method not implemented.");
  }

  ngOnInit() {
    console.log("test here");
    this.service.spinnerLoad = true;
    //this.
    // this.getFIStatus();
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
        // txn.forEach((element) => {
        //   element.bankName = that.banks.find(
        //     (bank) => bank.id == element.destInstitution
        //   );
        //   element.bankName = element.bankName
        //     ? element.bankName.itemName
        //     : null;
        //   //console.log(element);
        // });
        txn = txn.sort((a) => {
          if (a.status == "OFFLINE") {
            return -1;
          } else if (a.status == "WARNING") {
            return 0;
          } else if (a.status == "ONLINE") {
            return 1;
          }
        });
        //console.log(txn);
        that.temp = txn;
        // that.service.spinnerLoad=false
      });
    });
  }
}
