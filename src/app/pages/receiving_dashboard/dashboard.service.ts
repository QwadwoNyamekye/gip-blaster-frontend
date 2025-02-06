import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: "root",
})
export class Service {
  user;
  public dash: any;
  constructor(
    public spinner: NgxSpinnerService,
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  admin_url = environment.sendingUrl;

  public tableData: any;
  data: any;
  rows: any = [];
  rows2: any = [];

  public temp: any = [];
  public temp2: any = [];
  public spinnerLoad = true;
  public spinnerMsg = "Please Wait.";
  root_url = environment.sendingUrl;

  /////GET UPLOADS//////////

  getFIStatus() {
    let url = this.root_url + "/blaster/api/v1/status";
    let statusList = this.http.get(url).pipe(map((response: any) => response));
    return statusList;
  }
}
