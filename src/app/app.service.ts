import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActiveToast } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class AppService {
  public baseUrl: any;
  constructor(private http: HttpClient) {
    this.baseUrl = this.getUrls();
  }

  errorToastr: ActiveToast<any>;
  getUrls() {
    let baseUrl: any;
    // this.http.get('C://Users/ARDIL SALIA/Desktop/baseurl.json').subscribe({
    //     next :data => {
    //       baseUrl = data as string [];	 // FILL THE ARRAY WITH DATA.
    //         console.log(baseUrl);
    //         return baseUrl;
    //     },
    //     error: error => {

    //       console.log (error.message);
    //       return baseUrl
    //     }
    // });
  }
}
