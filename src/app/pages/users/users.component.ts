import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Service } from "./service.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Http } from "@angular/http";
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { formatDate } from "@angular/common";
import swal from "sweetalert2";
import { HelperService } from "../helper.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit, AfterViewInit {
  @ViewChild("productDropdown") pDrop: ElementRef;
  closeResult: string;
  private registerForm: FormGroup;
  private register = false;
  private editForm: FormGroup;
  private edit = false;
  dropdownList: any;
  public selectedItems: any[] = [];
  public productList: any[] = [];
  public productSelectedItems: any[] = [];
  dropdownList1: any;
  selectedItems1 = [];
  dropdownSettings = {};
  dropdownSettings1 = {};
  productSettings = {};
  public branchSelected: string;
  userData;
  editRecord: any;
  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  public rows: any;
  prod: any[] = [];
  disabled = true;
  user: any;
  //1:Uploader,2:Authorizer,3:Super Authorizer,4:Viewer,5:Administrator
  constructor(
    private helper: HelperService,
    private router: Router,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private service: Service
  ) {
    //this.user=JSON.parse(localStorage.getItem('currentUser'))
    // if(this.user.role_id==='5'){
    //   //this.router.navigate(['/ghipss/scb/recon'])
    // }else{
    //   this.router.navigate(['/pages/login'])
    // }
    // this.rows=JSON.parse(localStorage.getItem('userData'))
    //        this.service.getBranches().subscribe(
    //         data=>{
    //           this.dropdownList=data
    //           //this.rows.forEach(this.changeString)
    //            this.dropdownList.forEach(
    //               function(element,i){
    //                element.itemName=element.name
    //                delete element.name
    //               }
    //             )
    //          console.log(this.dropdownList)
    //         },
    //         error=>{console.log(error)},
    //         ()=>{console.log('terminated')}
    //       );
    
  }

  ngOnInit() {
    this.service.spinnerLoad = false;

    //localStorage.setItem('userData','[]')

    this.dropdownList = [
      // {id: null, itemName:null},
      { id: 300394, itemName: "VODAFONE" },
      { id: 300591, itemName: "MTN" },
      { id: 300592, itemName: "AIRTELTIGO" },
      {id: 300574, itemName:"G-MONEY"},
      {id: 300302, itemName:"STANDARD CHARTERED BANK"},
      {id: 300303, itemName:"ABSA BANK GHANA LIMITED"},
      {id: 300304, itemName:"GCB BANK LIMITED"},
      {id: 300305, itemName:"NATIONAL INVESTMENT BANK"},
      {id: 300306, itemName:"ARB APEX BANK LIMITED"},
      {id: 300307, itemName:"AGRICULTURAL DEVELOPMENT BANK"},
      {id: 300308, itemName:"SOCIETE GENERALE GHANA"},
      {id: 300309, itemName:"UNIVERSAL MERCHANT BANK"},
      {id: 300310, itemName:"REPUBLIC BANK LIMITED"},
      {id: 300311, itemName:"ZENITH BANK GHANA LTD"},
      {id: 300312, itemName:"ECOBANK GHANA LTD"},
      {id: 300313, itemName:"CAL BANK LIMITED"},
      {id: 300316, itemName:"FIRST ATLANTIC BANK"},
      {id: 300317, itemName:"PRUDENTIAL BANK LTD"},
      {id: 300318, itemName:"STANBIC BANK"},
      {id: 300319, itemName:"FIRST BANK OF NIGERIA"},
      {id: 300320, itemName:"BANK OF AFRICA"},
      {id: 300322, itemName:"GUARANTY TRUST BANK"},
      {id: 300323, itemName:"FIDELITY BANK LIMITED"},
      {id: 300324, itemName:"OMNIBSIC"},
      {id: 300325, itemName:"UNITED BANK OF AFRICA"},
      {id: 300328, itemName:"BANK OF GHANA"},
      {id: 300329, itemName:"ACCESS BANK LTD"},
      {id: 300331, itemName:"CONSOLIDATED BANK GHANA"},
      {id: 300334, itemName:"FIRST NATIONAL BANK"},
      {id: 300335, itemName:"BESTPOINT SAVINGS AND LOANS"},
      {id: 300341, itemName:"AFINITY GHANA SAVINGS AND LOANS"},
      {id: 300345, itemName:"ADEHYEMAN SAVINGS AND LOANS"},
      {id: 300349, itemName:"OPPORTUNITY INTERNALTIONAL SAVINGS AND LOANS"},
      {id: 300356, itemName:"SINAPI ABA SAVINGS AND LOANS"},
      {id: 300361, itemName:"SERVICES INTEGRITY SAVINGS & LOANS"},
      {id: 300369, itemName:"LETSHEGO SAVINGS AND LOANS"},
      {id: 300479, itemName:"ZEEPAY GHANA LIMITED"}
    ];
    this.selectedItems = [
      // {id: "", itemName:""},
      //{id: 300394, itemName:"Vodafone"}
    ];
    this.selectedItems1 = [];

    this.dropdownSettings = {
      singleSelection: true,
      idField: "id",
      textField: "itemName",
      // selectAllText: 'Select All',
      // unSelectAllText: 'UnSelect All',
      //itemsShowLimit: 3,
      allowSearchFilter: true,
      enableSearchFilter: true,
      //groupBy: "category"
    };

    this.dropdownSettings1 = {
      singleSelection: true,
      idField: "id",
      textField: "itemName",
      // selectAllText: 'Select All',
      // unSelectAllText: 'UnSelect All',
      //itemsShowLimit: 3,
      allowSearchFilter: true,
      enableSearchFilter: true,
      //groupBy: "category"
    };

    this.productSettings = {
      singleSelection: false,
      idField: "id",
      textField: "itemName",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      //itemsShowLimit: 3,
      allowSearchFilter: true,
      enableSearchFilter: true,
      //groupBy: "category"
    };

    this.registerForm = this.formBuilder.group({
      destBank: [, [Validators.required]],
      destAccount: ["", [Validators.required]],
      count: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
  
    });

    this.editForm = this.formBuilder.group({
    
    });

    //this.loadTable()
  }

  ngAfterViewInit() {}
  ///dropdown branch///

  onItemSelect(item: any) {}
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(this.selectedItems);
    //console.log(this.selectedItems[0].itemName)
    this.selectedItems = [];

    this.registerForm.patchValue({ branch: null });
  }
  onItemSelect1(item: any) {
    //alert('type selected')
    console.log(item);
  }
  OnItemDeSelect1(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll1(items: any) {
    console.log(items);
  }

  onDeSelectAll1(items: any) {
    this.selectedItems1 = [];
    this.registerForm.patchValue({ type: null });
  }

  onItemSelectProd(item: any) {
    this.productSelectedItems = [];
    this.productSelectedItems.push(item);
  }
  OnItemDeSelectProd(item: any) {}
  onSelectAllProd(items: any) {}
  onDeSelectAllProd(items: any) {}

  /////////////

  get registerF() {
    return this.registerForm.controls;
  }

  get editF() {
    return this.registerForm.controls;
  }

  onRegister() {
 
    if (this.registerForm.invalid) {
      return;
    }

    console.log(this.registerForm.value);
    this.modalService.dismissAll();
    this.registerForm.value["destBank"] = String(this.selectedItems[0].id);

     this.submitNec(this.registerForm.value)

    this.rows = this.service.necData;

    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
    this.modalService.dismissAll();
    this.service.spinnerLoad = false;
  }

  ////modal///////////////////
  open(content, type, modalDimension) {
    this.modalService.open(content, { size: "lg", centered: true }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
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

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  /////////////////////////////////////////////////////////

  /////////TABLE FUNCTIONS/////////////////////
  entriesChange($event) {
    this.entries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value.toLowerCase();
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key].toString().toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }



  onSelect($event) {
    console.log("Select Event", $event);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  loadTable() {
    // this.rows = [
    //   {
    //     sessionId: "962046803705",
    //     trackingNum: "579035",
    //     amount: "000000000000",
    //     srcInstitution: "300300",
    //     destInstitution: "300315",
    //     srcAccountNumber: "3003000000",
    //     destAccountNumber: "3453535345345",
    //     requestTimestamp: "2023-12-19 10:36:52",
    //     responseTimestamp: "2023-12-19 10:36:53",
    //     actionCode: "114",
    //   },
    //   {
    //     sessionId: "889008149893",
    //     trackingNum: null,
    //     amount: null,
    //     srcInstitution: null,
    //     destInstitution: null,
    //     srcAccountNumber: null,
    //     destAccountNumber: "3453535345345",
    //     requestTimestamp: "2023-12-19 10:36:52",
    //     responseTimestamp: "2023-12-19 10:37:13",
    //     actionCode: "912",
    //   },
    //   {
    //     sessionId: "102579791292",
    //     trackingNum: "664514",
    //     amount: "000000000000",
    //     srcInstitution: "300300",
    //     destInstitution: "300315",
    //     srcAccountNumber: "3003000000",
    //     destAccountNumber: "3453535345345",
    //     requestTimestamp: "2023-12-19 10:36:52",
    //     responseTimestamp: "2023-12-19 10:37:13",
    //     actionCode: "114",
    //   },
    //   {
    //     sessionId: "840695261193",
    //     trackingNum: "788392",
    //     amount: "000000000000",
    //     srcInstitution: "300300",
    //     destInstitution: "300315",
    //     srcAccountNumber: "3003000000",
    //     destAccountNumber: "3453535345345",
    //     requestTimestamp: "2023-12-19 10:36:52",
    //     responseTimestamp: "2023-12-19 10:37:13",
    //     actionCode: "114",
    //   },
    //   {
    //     sessionId: "571346031426",
    //     trackingNum: "516441",
    //     amount: "000000000000",
    //     srcInstitution: "300300",
    //     destInstitution: "300315",
    //     srcAccountNumber: "3003000000",
    //     destAccountNumber: "3453535345345",
    //     requestTimestamp: "2023-12-19 10:36:52",
    //     responseTimestamp: "2023-12-19 10:37:13",
    //     actionCode: "114",
    //   },
    // ];

    this.service.getNecs().subscribe(
              data=>{
                this.rows=data
                //this.rows.forEach(this.changeString)
                if(this.rows.length>0){
                  this.rows.reverse()
                  this.temp = this.rows.map((prop, key) => {
                    return {
                      ...prop,
                      id: key,
                    };
                  });
                }
               console.log(this.rows)
              },
              error=>{console.log(error)},
              ()=>{console.log('al necs loaded')}
            );
            
    this.modalService.dismissAll();
    this.service.spinnerLoad = false;
  }

  confirmNecSubmit(data: any) {
    swal({
      //title: "Are you sure?",
      text: `Are you sure you want to submit ${data.count} requests for Account ${data.destAccount} to Bank ${data.destBank}`, //"+userData.fullName,
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      confirmButtonClass: "btn btn-success",
      cancelButtonClass: "btn btn-danger",
      buttonsStyling: false,
    }).then((result) => {
      if (result.value) {
        this.service.sendNec(data).subscribe((data) => {
          console.log("data", data);
          this.rows = data;
          console.log("data", this.rows);
          this.temp = this.rows.map((prop, key) => {
            return {
              ...prop,
              id: key,
            };
          });
          this.modalService.dismissAll();
          this.service.spinnerLoad = false;
        });

        //return response;
      } else {
        swal({
          title: "Cancelled",
          //text: "Your imaginary file is safe :)",
          type: "error",
          confirmButtonClass: "btn btn-info",
          buttonsStyling: false,
        }).catch(swal.noop);
        //this.router.navigate(['/ghipss/etm'])
      }
    });
  }
  submitNec(data: any) {
    this.service.sendNec(data).subscribe((data) => {
      console.log("data", data);
      this.rows = data;
      console.log("data", this.rows);
      this.temp = this.rows.map((prop, key) => {
        return {
          ...prop,
          id: key,
        };
      });
      this.modalService.dismissAll();
      this.service.spinnerLoad = false;
    });
  }
  confirmCancel(data: any) {
    this.service.spinnerLoad = false;
    swal({
      //title: "Are you sure?",
      text: `Are you sure you want to cancel the request?`, //"+userData.fullName,
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      confirmButtonClass: "btn btn-success",
      cancelButtonClass: "btn btn-danger",
      buttonsStyling: false,
    }).then((result) => {
      if (result.value) {
        this.service.spinnerLoad = false;
        this.helper.reloadCurrentRoute();
      } else {
        this.service.spinnerLoad = true;
      }
    });
  }

  cancel() {}
}
