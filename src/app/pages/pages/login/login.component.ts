
import { LoginService } from './login.service';
import { Component, OnInit,ViewChild,AfterViewInit,ElementRef ,OnDestroy} from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { Http } from "@angular/http";
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { formatDate }from "@angular/common"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {
  public focus;
  public focus2;
  public loginForm: FormGroup;
  public login = false;
  
  constructor(public modalService: NgbModal, public formBuilder: FormBuilder,public service:LoginService,public router: Router) {
    sessionStorage.setItem('currentUser','')
    // localStorage.setItem('tempFiStatus',null)
    // localStorage.setItem('tempNECStatus',null)
    // localStorage.setItem('tempFTCStatus',null)
  }

  ngOnInit() {

    var $page = document.getElementsByClassName("full-page")[0];
    var image_src;
    var image_container = document.createElement("div");
    image_container.classList.add("full-page-background");
    image_container.style.backgroundImage = "url(assets/img/loginback.jpg)";
    $page.appendChild(image_container);
    $page.classList.add("login-page");

        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });

  }
  ngOnDestroy() {
    var $page = document.getElementsByClassName("full-page")[0];
    $page.classList.remove("login-page");
  }


  onLogin(){
    //this.router.navigate(['/nec'])
    this.service.login(this.loginForm.value);

  }
}

