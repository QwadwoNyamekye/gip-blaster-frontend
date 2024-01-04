import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";
import swal from "sweetalert2";
import { environment } from 'src/environments/environment.prod';
import { catchError, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Service {
  public spinnerLoad=false
  public spinnerMsg="Please Wait."
  data:any
  public necData: any;
   constructor(private spinner:NgxSpinnerService,private http: HttpClient,private toastr: ToastrService,private router: Router) { }
  root_url=environment.adminUrl
   requestTimeout=60000
  //requestTimeout=5000




///////////////////NEC///////////////////////
confirmNecSubmit(data:any){

  swal({
        //title: "Are you sure?",
        text: `Are you sure you want to submit ${data.count} requests for ${data.destAccount} to ${data.destBank}`, //"+userData.fullName,
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-danger",
        buttonsStyling: false
      }).then(result => {
        if (result.value) {
           this.necData = this.sendNec(data)
           //return response;
        } else {
          swal({
            title: "Cancelled",
            //text: "Your imaginary file is safe :)",
            type: "error",
            confirmButtonClass: "btn btn-info",
            buttonsStyling: false
          }).catch(swal.noop);
          //this.router.navigate(['/ghipss/etm'])
        }
      });
}


getBanks(){
  let url=this.root_url+'/blaster/api/v1/banks'
  let bankList = this.http.get(url).pipe(
    map((response: any)=>response)
  )
  return bankList
}

sendNec(userData:any){
  let url=this.root_url+'/blaster/api/v1/nec';
    this.spinnerLoad=true
   this.spinner.show()


 //return this.http.post(url, userData).pipe(map((response: Response)=> response))
 
 return this.http.post(url, userData).pipe(
  timeout(this.requestTimeout),
  map((response: any) => response),
  catchError((error) => {
    console.log(error)
    if (error.name === 'TimeoutError') {
      console.error('Request timed out:', error);
      this.spinnerLoad=false
      this.spinner.hide()
      this.toastr.error("Request Timed Out. Kindly try again"
        ,
        "",
        {
          timeOut: 5000,
          enableHtml: true,
          closeButton: true,
          toastClass: "alert alert-danger alert-with-icon",
          
        }); 
      // Handle timeout error, for example, you can return a custom error message
      return [];
      
    }
    this.spinnerLoad=false
    this.spinner.hide()
    this.toastr.error("Error Occured. Kindly try again"
        ,
        "",
        {
          timeOut: 5000,
          enableHtml: true,
          closeButton: true,
          toastClass: "alert alert-danger alert-with-icon",
          
        }); 
    // Handle other errors
    return [];
  })
);
}

//  subscribe({
//   next: data => {
    
//     this.data=data;

//     if(this.data.length>0){
//       //alert(this.data.errorMessage)

//       //this.spinnerMsg="File Upload Succesful"
      
//       setTimeout(()=>this.spinner.hide(),5000)
//       this.spinnerLoad=false 
//        swal({
//          // title: "Good job!",
//           text: "Results Found",
//           buttonsStyling: false,
//           confirmButtonClass: "btn btn-success",
//           timer: 2000,
//           type: "success"
//         }).catch(swal.noop);

//         this.necData= data
//         return this.data
           
//      // this.router.navigate(['/ghipss/etm/recon'])
//    //this.reloadCurrentRoute()

//     }else{
// let msg;
//       //if(this.data.errorCode==1){
//         msg='<span class="now-ui-icons ui-1_bell-53"></span> No Data Found'; 
//       // }else{
//       //   msg='<span class="now-ui-icons ui-1_bell-53"></span> User creation error' 
//       // }
//        this.spinnerLoad=false
//       setTimeout(()=>this.spinner.hide(),500 )  
//     // console.error('error!', this.data.errorMessage);
//       this.toastr.error(msg,  
//       "",
//       {
//         timeOut: 5000,
//         enableHtml: true,
//         closeButton: true,
//         toastClass: "alert alert-danger alert-with-icon",
        
//       }); 
//     }

 

//   },
//   error: error => {
//     this.spinnerLoad=false
//     setTimeout(()=>this.spinner.hide(),500 )  
//     console.error('There was an error!', error);
//     this.necData=[];
//     this.toastr.error(
//       '<span class="now-ui-icons ui-1_bell-53"></span> Error Occured' ,
//       "",
//       {
//         timeOut: 5000,
//         enableHtml: true,
//         closeButton: true,
//         toastClass: "alert alert-danger alert-with-icon",
        
//       }
//     );
// }
// }).add(() => {
// //console.log('reload')
//    // this.reloadCurrentRoute()
//    this.necData=[];
//    return this.necData;
// });


}
