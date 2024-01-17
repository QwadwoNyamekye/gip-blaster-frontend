import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { map } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";
import swal from "sweetalert2";
import { environment } from "src/environments/environment.prod";
import { catchError, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class LoginService {
  public spinnerLoad = false;

  data: any;
  auth: boolean;
  constructor(
    private spinner: NgxSpinnerService,
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}
  root_url = environment.adminUrl;

  /////USER CREATION//////////
  login(userData: any) {
    let url = this.root_url + "/blaster/api/v1/login";
    this.spinnerLoad = true;
    this.spinner.show();
    //alert(JSON.stringify(userData.username))

    this.http
      .post(url, userData).pipe(
        timeout(45000),
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
          this.toastr.error("Error Occured. Kindly try again in error"
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
      )
      .subscribe({
        next: (data) => {
          this.data = data;

          if (this.data.errorCode == 0) {
            this.auth = true;
            sessionStorage.setItem("currentUser", userData.username);
            this.router.navigate(["dashboard"]);

            // setTimeout(() => this.spinner.hide(), 2000);
            // this.spinnerLoad = false;
          } else {
            let msg;
            if (this.data.errorCode == 1) {
              msg =
                '<span class="now-ui-icons ui-1_bell-53"></span> Error: ' +
                this.data.errorMessage;
            } else {
              msg =
                '<span class="now-ui-icons ui-1_bell-53"></span> Login Error';
            }
            this.spinnerLoad = false;
            setTimeout(() => this.spinner.hide(), 500);
            console.error("error!", this.data.errMsg);
            this.toastr.error(msg, "", {
              timeOut: 5000,
              enableHtml: true,
              closeButton: true,
              toastClass: "alert alert-danger alert-with-icon",
            });
          }
        },
        error: (error) => {
          this.spinnerLoad = false;
          setTimeout(() => this.spinner.hide(), 500);
          console.error("There was an error!", error);
          this.toastr.error(
            '<span class="now-ui-icons ui-1_bell-53"></span> Login error',
            "",
            {
              timeOut: 5000,
              enableHtml: true,
              closeButton: true,
              toastClass: "alert alert-danger alert-with-icon",
            }
          );
        },
      })
      .add(() => {});
  }
}
