import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import * as Chartist from "chartist";
import { Service } from "./dashboard.service"
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
 
  user:any
  rows2:any
  dashInterval
  dropdownList :any;
  temp = [];
  public selectedItems :any[] = [];
  dropdownSettings = {};
  rows =[];
  constructor(
    private modalService: NgbModal,
    private service: Service
  ) {
    this.user=sessionStorage.getItem('currentUser')
    
  }

  ngOnInit() {
      console.log('test here')
      this.getFIStatus()
   
  }

  ngOnDestroy(){
            console.log('destroyed');
  }

  
  getFIStatus() {
        this.temp = [
      { id: 300394, itemName: "VODAFONE" , status: "Online", lastTimeOnline: "09:04:23"},
      { id: 300591, itemName: "MTN" , status: "Warning", lastTimeOnline: "09:04:23"},
      { id: 300592, itemName: "AIRTELTIGO", status: "Online", lastTimeOnline: "09:04:23" },
      {id: 300574, itemName:"G-MONEY", status: "Warning", lastTimeOnline: "09:04:23"},
      {id: 300302, itemName:"STANDARD CHARTERED BANK", status: "Online", lastTimeOnline: "09:04:23"},
      {id: 300303, itemName:"ABSA BANK GHANA LIMITED", status: "Offline", lastTimeOnline: "09:04:23"},
      {id: 300304, itemName:"GCB BANK LIMITED", status: "Offline", lastTimeOnline: "09:04:23"},
      {id: 300305, itemName:"NATIONAL INVESTMENT BANK", status: "Online", lastTimeOnline: "09:04:23"},
      {id: 300306, itemName:"ARB APEX BANK LIMITED", status: "Offline", lastTimeOnline: "09:04:23"},
      {id: 300307, itemName:"AGRICULTURAL DEVELOPMENT BANK", status: "Online", lastTimeOnline: "09:04:23"},
      {id: 300308, itemName:"SOCIETE GENERALE GHANA", status: "Warning", lastTimeOnline: "09:04:23"},
      {id: 300309, itemName:"UNIVERSAL MERCHANT BANK", status: "Online", lastTimeOnline: "09:04:23"},
      {id: 300310, itemName:"REPUBLIC BANK LIMITED", status: "Offline", lastTimeOnline: "09:04:23"},
      {id: 300311, itemName:"ZENITH BANK GHANA LTD", status: "Warning", lastTimeOnline: "09:04:23"},
      {id: 300312, itemName:"ECOBANK GHANA LTD", status: "Online", lastTimeOnline: "09:04:23"},
      {id: 300313, itemName:"CAL BANK LIMITED", status: "Offline", lastTimeOnline: "09:04:23"},
      {id: 300316, itemName:"FIRST ATLANTIC BANK", status: "Warning", lastTimeOnline: "09:04:23"},
      {id: 300317, itemName:"PRUDENTIAL BANK LTD", status: "Online", lastTimeOnline: "09:04:23"},
      {id: 300318, itemName:"STANBIC BANK", status: "Offline", lastTimeOnline: "09:04:23"},
      {id: 300319, itemName:"FIRST BANK OF NIGERIA", status: "Online", lastTimeOnline: "09:04:23"},
      {id: 300320, itemName:"BANK OF AFRICA", status: "Offline", lastTimeOnline: "09:04:23"},
      {id: 300322, itemName:"GUARANTY TRUST BANK", status: "Warning", lastTimeOnline: "09:04:23"},
      {id: 300323, itemName:"FIDELITY BANK LIMITED", status: "Warning", lastTimeOnline: "09:04:23"},
      {id: 300324, itemName:"OMNIBSIC", status: "Warning", lastTimeOnline: "09:04:23"},
      {id: 300325, itemName:"UNITED BANK OF AFRICA", status: "Online", lastTimeOnline: "09:04:23"},
      {id: 300328, itemName:"BANK OF GHANA", status: "Warning", lastTimeOnline: "09:04:23"},
      {id: 300329, itemName:"ACCESS BANK LTD", status: "Offline", lastTimeOnline: "09:04:23"},
      {id: 300331, itemName:"CONSOLIDATED BANK GHANA", status: "Warning", lastTimeOnline: "09:04:23"},
      {id: 300334, itemName:"FIRST NATIONAL BANK", status: "Warning", lastTimeOnline: "09:04:23"},
      {id: 300335, itemName:"BESTPOINT SAVINGS AND LOANS", status: "Online", lastTimeOnline: "09:04:23"},
      {id: 300341, itemName:"AFINITY GHANA SAVINGS AND LOANS", status: "Warning", lastTimeOnline: "09:04:23"},
      {id: 300345, itemName:"ADEHYEMAN SAVINGS AND LOANS", status: "Offline", lastTimeOnline: "09:04:23"},
      {id: 300349, itemName:"OPPORTUNITY INTERNALTIONAL SAVINGS AND LOANS", status: "Online", lastTimeOnline: "09:04:23"},
      {id: 300356, itemName:"SINAPI ABA SAVINGS AND LOANS", status: "Offline", lastTimeOnline: "09:04:23"},
      {id: 300361, itemName:"SERVICES INTEGRITY SAVINGS & LOANS", status: "Offline", lastTimeOnline: "09:04:23"},
      {id: 300369, itemName:"LETSHEGO SAVINGS AND LOANS", status: "Online", lastTimeOnline: "09:04:23"},
      {id: 300479, itemName:"ZEEPAY GHANA LIMITED", status: "Offline", lastTimeOnline: "09:04:23"}
    ];
            
    this.modalService.dismissAll();
    this.service.spinnerLoad = false;
  }
}
