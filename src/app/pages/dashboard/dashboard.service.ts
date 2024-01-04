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
export class Service {
user
public dash:any
   constructor(private spinner:NgxSpinnerService,private http: HttpClient,private toastr: ToastrService,private router: Router) {
             //this.user=JSON.parse(sessionStorage.getItem('currentUser'))
    }

  admin_url=environment.adminUrl

  public tableData:any;
  data:any
     rows:any=[];
    rows2:any=[];

  public temp:any=[];
  public temp2:any=[];
  public spinnerLoad=false
  public spinnerMsg="Please Wait."
  

  /////GET UPLOADS//////////
 
  getData(id:string){
    let url
    //this.user=JSON.parse(sessionStorage.getItem('currentUser'))
    if(id==='1'){
        url=this.admin_url+'/admin/api/v1/uploader_dashboard/'+this.user.branch_id
    }else if( id==='2' || id==='3' || id==='4'){
        url=this.admin_url+'/admin/api/v1/authorizer_dashboard/'+this.user.branch_id+'/'+id;

    }else if(id==='5'){
        url=this.admin_url+'/admin/api/v1/admin_dashboard/'+id;
    }
   console.log(url)
      
    this.dash=this.http.get(url)//.pipe(map((response: Response)=> response))
    console.log(this.dash)
    return this.dash
  }

  getAllRecon(){
    let url=this.admin_url+'/admin/api/v1/get_all_recons';
    let dash=this.http.get(url)//.pipe(map((response: Response)=> response))
    return dash;

  }




}
