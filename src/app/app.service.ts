import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
    public baseUrl:any;
    constructor(private http: HttpClient) { 
       this.baseUrl=this.getUrls();
    }

    getUrls(){
        let baseUrl:any
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