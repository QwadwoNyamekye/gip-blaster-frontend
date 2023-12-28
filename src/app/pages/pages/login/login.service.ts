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

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public spinnerLoad=false

  data:any
  auth:boolean
   constructor(private spinner:NgxSpinnerService,private http: HttpClient,private toastr: ToastrService,private router: Router) {}
  root_url=environment.adminUrl
  
 

/////USER CREATION//////////
  login(userData:any){
   // let url=this.root_url+'/admin/api/v1/authenticate_user';
    //   this.spinnerLoad=true
    //  this.spinner.show()
    alert(JSON.stringify(userData))

     this.router.navigate(['/dashboard'])
/////////


//   this.http.post(url, userData).subscribe({
//     next: data => {
      
//       this.data=data;
//       console.log(data)
 
//       if(this.data.errorCode==0){
     	

//      	this.auth=true
//           this.router.navigate(['/dashboard'])
//           localStorage.setItem('currentUser',JSON.stringify(this.data.userDetail))

//           setTimeout(()=>this.spinner.hide(),2000)
//           this.spinnerLoad=false 

        
//       }else {
//         let msg;
//         if(this.data.errorCode==1){
//           msg='<span class="now-ui-icons ui-1_bell-53"></span> Error: '+this.data.errorMessage 
//         }else{
//           msg='<span class="now-ui-icons ui-1_bell-53"></span> Login Error' 
//         }
//          this.spinnerLoad=false
//         setTimeout(()=>this.spinner.hide(),500 )  
//        console.error('error!', this.data.errMsg);
//         this.toastr.error(msg
//         ,
//         "",
//         {
//           timeOut: 5000,
//           enableHtml: true,
//           closeButton: true,
//           toastClass: "alert alert-danger alert-with-icon",
          
//         }); 
//       }
 
        

//     },
//     error: error => {
//       this.spinnerLoad=false
//       setTimeout(()=>this.spinner.hide(),500 )  
//       console.error('There was an error!', error);
//       this.toastr.error(
//         '<span class="now-ui-icons ui-1_bell-53"></span> Login error' ,
//         "",
//         {
//           timeOut: 5000,
//           enableHtml: true,
//           closeButton: true,
//           toastClass: "alert alert-danger alert-with-icon",
          
//         }
//       );
//   }
// }).add(() => {
  
//   });

  }

}

