import { Component, OnInit, OnDestroy } from "@angular/core";
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
  public selectedItems :any[] = [];
  dropdownSettings = {};
  rows:any={
      "all_accepted" : 0,
      "all_hold": 0,
      "all_pending": 0,
      "all_rejected": 0,
      "all_total": 0,
      "daily_accepted": 0,
      "daily_hold": 0,
      "daily_pending" : 0,
      "daily_rejected": 0,
      "daily_total": 0,
      "total_uploaders": 0,
      "total_branches": 0,
      "total_admins": 0,
      "total_viewers": 0,
      "total_users": 0,
      "total_products": 0,
      "total_authorizers": 0,
      "total_gls": 0
  }
  constructor(private service:Service) {

              // //this.user=JSON.parse(sessionStorage.getItem('currentUser'))

              //   this.service.getData(this.user.role_id).subscribe(
              //     data=>{
              //       this.rows=[]
              //       this.rows=data      
              //       console.log(data)
              //     },
              //     error=>{console.log(error)},
              //     ()=>{console.log('terminated')
              //   }
              //   );

          // this.service.getAllRecon().subscribe(
          //         data=>{
          //           this.rows2=[]
          //           this.rows2=data  
          //           let id=this.user.role_id;

          //           let today1 = new Date();
          //           let dd = String(today1.getDate()).padStart(2, '0');
          //           let mm = String(today1.getMonth() + 1).padStart(2, '0');
          //           let yyyy = today1.getFullYear();
          //           let today = yyyy +'-'+ mm + '-' + dd ;
          //           let recons;
          //           let today_recons;

          //           if(id==='1'){
          //                 recons=this.rows2.filter(el=>(el.branch_id===this.user.branch_id ))
          //                  today_recons=this.rows2.filter(el=>(el.recon_date===today && el.branch_id===this.user.branch_id))
          //           }
          //           else if( id==='2'){
          //                 recons=this.rows2.filter(el=>el.auth_status==='1' ||el.auth_status==='2' || el.auth_status==='3')
          //                 recons=recons.filter(el=>el.branch_id===this.user.branch_id )
          //                 today_recons=this.rows2.filter(el=>el.auth_status==='1' ||el.auth_status==='2' || el.auth_status==='3')
          //                 today_recons=today_recons.filter(el=>(el.recon_date===today && el.branch_id===this.user.branch_id))
          //           }
          //           else if( id==='3' || id==='4'){
          //                  recons=this.rows2.filter(el=>el.auth_status==='1' ||el.auth_status==='2' || el.auth_status==='3')
          //                  today_recons=this.rows2.filter(el=>(el.recon_date===today))

          //           }else if(id==='5'){
          //              this.service.getData(this.user.role_id).subscribe(
          //                 data=>{
          //                   this.rows=[]
          //                   this.rows=data      
          //                   console.log(data)
          //                 },
          //                 error=>{console.log(error)},
          //                 ()=>{console.log('terminated')
          //               }
          //               );
          //               return;
          //           }    

          //             //TOTAL
          //             let hold=recons.filter(el=>(el.auth_status==='0')).length
          //             let pending=recons.filter(el=>(el.auth_status==='1')).length
          //             let approve=recons.filter(el=>(el.auth_status==='2')).length
          //             let rejected=recons.filter(el=>(el.auth_status==='3')).length
          //             console.log(recons.length)

          //             //TODAY                  
          //             console.log(today_recons.length)
          //             let today_hold=today_recons.filter(el=>(el.auth_status==='0')).length
          //             let today_pending=today_recons.filter(el=>(el.auth_status==='1')).length
          //             let today_approve=today_recons.filter(el=>(el.auth_status==='2')).length
          //             let today_rejected=today_recons.filter(el=>(el.auth_status==='3')).length


          //             this.rows={                  
          //               "all_accepted" : approve,
          //               "all_hold": hold,
          //               "all_pending": pending,
          //               "all_rejected": rejected,
          //               "all_total": recons.length,
          //               "daily_accepted": today_approve,
          //               "daily_hold": today_hold,
          //               "daily_pending" : today_pending,
          //               "daily_rejected": today_rejected,
          //               "daily_total": today_recons.length
          //             }
          //         },
          //         error=>{console.log(error)},
          //         ()=>{console.log('terminated')
          //       }
          //       );
  }

  ngOnInit() {
      console.log('test here')
   
  }

  ngOnDestroy(){
            console.log('destroyed');
  }
  changeData(value){
    if(value==='All'){

          this.service.getData(this.user.role_id).subscribe(
              data=>{
                this.rows=[]
                this.rows=data
                 console.log(data)
              },
              error=>{console.log(error)},
              ()=>{console.log('terminated')
            }
            );
    }else if(value==='Daily'){

              this.service.getData(this.user.role_id).subscribe(
              data=>{
                this.rows=[]
                this.rows=data
                console.log(data)
 
              },
              error=>{console.log(error)},
              ()=>{console.log('terminated')
            }
            );
    }
  }
}
