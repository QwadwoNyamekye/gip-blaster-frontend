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
  user:any;
   constructor(private spinner:NgxSpinnerService,private http: HttpClient,private toastr: ToastrService,private router: Router) { 
    this.user=sessionStorage.getItem('currentUser')
  }
  root_url=environment.adminUrl
   requestTimeout=45000
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

clearTable(status){
  this.spinnerLoad=true
  this.spinner.show()
  let url = this.root_url+'/blaster/api/v1/clear'
  if (!status){
    url = url+'/'+this.user
  }
  return this.http.post(url, {}).pipe(
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
    setTimeout(()=>this.spinner.hide(),500)

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



getNecs(){
  let url=this.root_url+'/blaster/api/v1/nec_list';

   return  this.http.get(url).pipe(
    timeout(this.requestTimeout),
    map((response: Response)=> response)
    )
}

successToast(msg){
  this.toastr.success(msg
          ,
          "",
          {
            timeOut: 5000,
            enableHtml: true,
            closeButton: true,
            toastClass: "alert alert-success alert-with-icon",
            
          }); 
}

}
