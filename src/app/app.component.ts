import { Component } from "@angular/core";
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { AppService } from "./app.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  constructor (private http: HttpClient,private serv:AppService) { }
  public baseUrl: any;

  ngOnInit () {
    //this.baseUrl=this.serv.getUrls()
  }

}
