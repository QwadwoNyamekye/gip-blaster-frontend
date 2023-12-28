import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-ngx-datatable",
  templateUrl: "./ngx-datatable.component.html",
  styleUrls: ["./ngx-datatable.component.css"]
})
export class NgxDatatableComponent implements OnInit {
  test: any =  `<button (click)="onSelect($event)">Click me</button>`;
  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any =[{"id":"1425","cardNumber":"3340 ","reference":"209610803","amount":"5.00","transactionDate":"25-11-2020 ","date":"29-Dec-20","fileId":"IGR-20210127142057","description":"ATM WITHDRAWAL US-ON-THEM CARD **3340 ON 25-11-2020 18:18:00 / HEAD OFFICE /"},
  {"id":"1430","cardNumber":"2488 ","reference":"209607352","amount":"10.00","transactionDate":"25-11-2020 ","date":"29-Dec-20","fileId":"IGR-20210127142057","description":"ATM WITHDRAWAL US-ON-THEM CARD **2488 ON 25-11-2020 13:22:00 / LEGON BRANCH /"},
  {"id":"1461","cardNumber":"4151 ","reference":"209604959","amount":"40.00","transactionDate":"25-11-2020 ","date":"29-Dec-20","fileId":"IGR-20210127142057","description":"ATM WITHDRAWAL US-ON-THEM CARD **4151 ON 25-11-2020 15:21:00 / Abuakwa Shell /"},
  {"id":"1484","cardNumber":"1731 ","reference":"209604782","amount":"50.00","transactionDate":"25-11-2020 ","date":"29-Dec-20","fileId":"IGR-20210127142057","description":"ATM WITHDRAWAL US-ON-THEM CARD **1731 ON 25-11-2020 11:56:00 / KASOA MAIN /"},
  {"id":"1485","cardNumber":"0771 ","reference":"209603641","amount":"50.00","transactionDate":"25-11-2020 ","date":"29-Dec-20","fileId":"IGR-20210127142057","description":"ATM WITHDRAWAL US-ON-THEM CARD **0771 ON 25-11-2020 14:20:00 / NSAWAM /"}
  ];

  constructor() {
    this.temp = this.rows.map((prop,key)=>{
      return {
        ...prop,
        id: key
      };

    });
  }
  entriesChange($event){
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {

      for(var key in d){
        if(d[key].toLowerCase().indexOf(val) !== -1){
          return true;
        }
      }
      return false;
    });
  }
  onSelect($event) {
   console.log('Select Event', $event);
 }
 onActivate(event) {
    this.activeRow = event.row;
  }
  likeFunction($event){
    $event.preventDefault();
    let details = "You've clicked LIKE button on \n{\n";
    for(var key in this.activeRow){
      details += key + ": " + this.activeRow[key] + "\n";
    }
    details += "}.";
    alert(details);
  }
  editFunction($event){
    $event.preventDefault();
    let details = "You've clicked EDIT button on \n{\n";
    for(var key in this.activeRow){
      details += key + ": " + this.activeRow[key] + "\n";
    }
    details += "}.";
    alert(details);
  }
  deleteFunction($event){
    $event.preventDefault();
    this.temp = this.rows.filter(entry => entry.id !== this.activeRow.id);
  }
  ngOnInit() {}
}
