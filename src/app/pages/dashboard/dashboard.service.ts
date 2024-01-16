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
import { catchError, timeout } from "rxjs/operators";


@Injectable({
  providedIn: "root",
})
export class Service {
  user;
  public dash: any;
  constructor(
    private spinner: NgxSpinnerService,
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  admin_url = environment.adminUrl;

  public tableData: any;
  data: any;
  rows: any = [];
  rows2: any = [];

  public temp: any = [];
  public temp2: any = [];
  public spinnerLoad = true;
  public spinnerMsg = "Please Wait.";
  root_url = environment.adminUrl;

  /////GET UPLOADS//////////

  getFIStatus() {
    let url = this.root_url + "/blaster/api/v1/status";
    let statusList = this.http.get(url).pipe(map((response: any) => response));
    return statusList;
  }
}
