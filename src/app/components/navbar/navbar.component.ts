import {Component, OnInit, ElementRef} from '@angular/core';
import {ROUTES} from '../sidebar/sidebar.component';
import {Title} from '@angular/platform-browser';
import {
    Location,
    LocationStrategy,
    PathLocationStrategy,
} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {filter, map} from 'rxjs/operators';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    public isCollapsed = false;
    private listTitles: any[];
    public location: Location;
    private sidebarVisible: boolean;
    private mobile_menu_visible: any = 0;
    private toggleButton: any;
    url = environment.qrUrl;
    redirectUrl = environment.redirectUrl;
    user: any;
    authObject: any;
    bankCode = 0;
    userName = '';

    constructor(
        location: Location,
        private element: ElementRef,
        private router: Router,
        private dataroute: ActivatedRoute,
        private http: HttpClient,
        private titleService: Title,
    ) {
        this.location = location;
        this.sidebarVisible = false;
        this.user = sessionStorage.getItem('currentUser');
    }

    ngOnInit() {
        console.log(environment.production);
        this.titleService.setTitle('GhQR DECAL');

        // let token = this.dataroute.snapshot.paramMap.get('token');

        let token_array = window.location.href.split('/');
        let token = token_array[token_array.length - 1];
        //

        this.authenticate_token(token);

    }

    authenticate_token(token) {
        console.log('url', this.url);
        const url_ = `${this.url}/api/v1/ghqr/img/validate_encrypted_token/${token}`; // Replace with your file URL

        this.http.get(url_).subscribe(response => {
                this.authObject = response;
                console.log('------------------------------');
                console.log(response);

                if (this.authObject.errorCode == '0') {
                    this.bankCode = Number(this.authObject.bankCode);
                    this.userName = this.authObject.fullName;
                    sessionStorage.setItem('authObject', JSON.stringify(this.authObject));
                    sessionStorage.setItem('token', token);
                } else {
                    sessionStorage.clear();
                    window.location.href = `${this.redirectUrl}`                }
            }
        );
    }

    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (let i = 0; i < this.listTitles.length; i++) {
            if (
                this.listTitles[i].type === 'link' &&
                this.listTitles[i].path === titlee
            ) {
                return this.listTitles[i].title;
            } else if (this.listTitles[i].type === 'sub') {
                for (let j = 0; j < this.listTitles[i].children.length; j++) {
                    let subtitle =
                        this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                    // console.log(subtitle)
                    // console.log(titlee)
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        return 'Dashboard';
    }

    collapse() {
        this.isCollapsed = !this.isCollapsed;
        const navbar = document.getElementsByTagName('nav')[0];
        if (this.isCollapsed) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('bg-white');
        } else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('bg-white');
        }
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const mainPanel = <HTMLElement>(
            document.getElementsByClassName('main-panel')[0]
        );
        const html = document.getElementsByTagName('html')[0];

        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);

        html.classList.add('nav-open');

        this.sidebarVisible = true;
    }

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        const mainPanel = <HTMLElement>(
            document.getElementsByClassName('main-panel')[0]
        );

        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }

    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];

        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
        const html = document.getElementsByTagName('html')[0];

        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);

            this.mobile_menu_visible = 0;
        } else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);

            var $layer = document.createElement('div');
            $layer.setAttribute('id', 'bodyClick');

            if (html.getElementsByTagName('body')) {
                document.getElementsByTagName('body')[0].appendChild($layer);
            }

            $layer.onclick = function () {
                //asign a function
                html.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
                const mainPanel = <HTMLElement>(
                    document.getElementsByClassName('main-panel')[0]
                );

                if (window.innerWidth < 991) {
                    setTimeout(function () {
                        mainPanel.style.position = '';
                    }, 500);
                }
            }.bind(this);

            html.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    }

    logout() {
        sessionStorage.clear();
        // window.top.close()  Scripts may close only the windows that were opened by them
        window.location.href = `${this.redirectUrl}`;
    }

    goToLogin() {
        sessionStorage.setItem('currentUser', '');
        this.router.navigate(['login']);
    }
}
