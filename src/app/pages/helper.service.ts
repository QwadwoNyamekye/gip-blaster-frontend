import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";
import swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public spinnerLoad=false
  public spinnerMsg="Please Wait..."
  data:any
   constructor(private spinner:NgxSpinnerService,private http: HttpClient,private toastr: ToastrService,private router: Router) { 

   }
  

////////////GET DETAILS CALL////////////////////


getDataCall(url){
  console.log(url)
    return  this.http.get(url).pipe(map((response: Response)=> response))
}

///////////////////////////////////////////

putCall(url,data){
  this.spinnerLoad=true
  this.spinner.show()


}


postCall(url,data,headers){

  this.spinnerLoad=true
  this.spinner.show()
  this.http.post(url, data,{ headers }).subscribe({
    next: data => {
      
      this.data=data;
      console.log(data)
      if(this.data.errCode==0){
        return this.data;
      }else{
        let msg;
            if(this.data.errCode==1 || this.data.errCode==2 ||this.data.errCode==9 ){
              msg=this.data.errMsg 
            }else{
              msg='Error Occured during operation' 
            }
            this.errorSpecifiedToast(JSON.stringify(this.data),msg)
            return false;
      }
    },          
      error: error => {
      this.spinnerLoad=false
      setTimeout(()=>this.spinner.hide(),500 )  
      console.error('There was an error!', error);
      this.errorDefaultToast(error)
      return false;

    }
  })
}

uploadOneFileCall(url,uploadFile: File,headers:any,successurl){
  const formdata: FormData = new FormData();
  console.log(uploadFile)
  formdata.append('file', uploadFile);
  this.spinnerLoad=true
  this.spinner.show()
  console.log(url)
  
  this.http.post(url,formdata,{headers}).subscribe({
    next: data => {
      
      this.data=data;
      console.log(data)
      if(this.data.errCode==0){
        this.successAlert('File Upload Successful')
        this.router.navigate([successurl])
      }else{
        let msg;
                if(this.data.errCode==1 || this.data.errCode==2 ||this.data.errCode==9 ){
                  msg=this.data.errMsg 
                }else{
                  msg='Error Occured during operation' 
                }

                this.errorSpecifiedToast(JSON.stringify(this.data),msg)
                return false;
      }
    },          
      error: error => {
      this.errorDefaultToast(error)
      return false;

    }
  })
}

uploadTwoFilesCall(igorurl,atmurl,igorFile: File,atmFile:File,headers:any,successurl){
  const formdata: FormData = new FormData();
  formdata.append('file', igorFile);
  this.spinnerLoad=true
  this.spinner.show()  
  this.http.post(igorurl,formdata,{headers}).subscribe({
    next: data => {
      
      this.data=data;
      console.log(data)
      if(this.data.errCode==0){
        
        this.uploadOneFileCall(atmurl,atmFile,headers,successurl)

      }else{
        let msg;
                if(this.data.errCode==1 || this.data.errCode==2 ||this.data.errCode==9 ){
                  msg=this.data.errMsg 
                }else{
                  msg='Error Occured during Igor Upload' 
                }

                this.errorSpecifiedToast(JSON.stringify(this.data),msg)
      }
    },          
      error: error => {
      this.errorDefaultToast(error)
    }
  })
}

errorDefaultToast(error:any){
  this.spinnerLoad=false
  setTimeout(()=>this.spinner.hide(),500 )  
  console.error('There was an error!', error);
  this.toastr.error(
    '<span class="now-ui-icons ui-1_bell-53"></span> Error Occured' ,
    "",
    {
      timeOut: 5000,
      enableHtml: true,
      closeButton: true,
      toastClass: "alert alert-danger alert-with-icon",
      
    }
  );
}

errorSpecifiedToast(error:any,message){
  this.spinnerLoad=false
  setTimeout(()=>this.spinner.hide(),500 )  
  console.error('There was an error!', error);
  this.toastr.error(
    '<span class="now-ui-icons ui-1_bell-53"></span> '+message ,
    "",
    {
      timeOut: 5000,
      enableHtml: true,
      closeButton: true,
      toastClass: "alert alert-danger alert-with-icon",
      
    }
  );
}

infoToast(message){
  this.toastr.info(
    '<span class="now-ui-icons ui-1_bell-53"></span> '+message ,
    "",
    {
      timeOut: 2000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon",
      
    }
  );
}

warningToast(message){
  this.toastr.warning(
    '<span class="now-ui-icons ui-1_bell-53"></span> '+message ,
    "",
    {
      timeOut: 4000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon",
      
    }
  );
}

successToast(message:string){
  this.spinnerLoad=false
  setTimeout(()=>this.spinner.hide(),500 )  
  this.toastr.success(
    '<span class="now-ui-icons ui-1_bell-53"></span> '+message ,
    "",
    {
      timeOut: 5000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-success alert-with-icon",
      
    });
}

successAlert(message){
  setTimeout(()=>this.spinner.hide(),5000)
        this.spinnerLoad=false 
         swal({
            text: message,
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
            timer: 2000,
            type: "success"
          }).catch(swal.noop);
}

  

reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/dashboard', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}




confirmProcess(message:string){

  swal({
        text: message,
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-danger",
        buttonsStyling: false
      }).then(result => {
        if (result.value) {
          console.log(result.value)
           return "true";
        }else {
          this.cancelAlert();
          return false;
        }
      });
}

cancelAlert(){
  swal({
    title: "Cancelled",
    type: "error",
    confirmButtonClass: "btn btn-info",
    buttonsStyling: false
  }).catch(swal.noop);
}





}



