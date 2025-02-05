import {Component, OnInit, SecurityContext} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {Service} from './dashboard.service';
// import * as Stomp from "stompjs";
import {CompatClient, Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import {AppService} from 'src/app/app.service';
import {environment} from 'src/environments/environment.prod';
import {document} from '@swimlane/ngx-datatable/src/utils/facade/browser';
import {ajax} from 'rxjs/ajax';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {ResponseContentType} from '@angular/http';
import {map, tap, timeout} from 'rxjs/operators';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import * as printJS from 'print-js';

import {RouterModule, Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';


pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    user: any;
    rows2: any;
    dashInterval;
    dropdownList: any;
    temp = [];
    public selectedItems: any[] = [];
    dropdownSettings = {};
    rows = [];
    public stompClient: CompatClient;
    public msg = [];
    editRecord: any;
    closeResult: string;
    tempFiStatus: any;
    onlineCount: number;
    offlineCount: number;
    warningCount: number;
    allCount: number;
    status: string;
    current = 0;
    current_image: any = '';
    from: number = 0;
    to: number = 0;
    bankCode = 0;
    url = environment.qrUrl;
    max: number;
    data: any = [
        {
            image: '/assets/img/prada.jpg',
            terminalId: '00001',
            'name': 'Test 1'
        },
        {
            image: '/assets/img/angular2-logo-white.png',
            terminalId: '00002',
            'name': 'Test 2'
        },
        {
            image: '/assets/img/mike.jpg',
            terminalId: '00003',
            'name': 'Test 3'
        }
    ];

    allItems: HTMLElement[];
    merchant_id: string;
    merchant_name: string;
    terminal_id: string;
    authObject: any;

    constructor(
        private modalService: NgbModal,
        public service: Service,
        private appService: AppService,
        private toastrService: ToastrService, protected sanitizer: DomSanitizer, private http: HttpClient, private toastr: ToastrService,
        private router: Router,
        private dataroute: ActivatedRoute
    ) {
        // this.initializeWebSocketConnection();
    }

    ngOnInit() {
        console.log("************************");
        // let token = this.dataroute.snapshot.paramMap.get('token');

        let op = sessionStorage.getItem('authObject')
        console.log(op);
        if (!op){
            console.log(window.location);
            let token_array = window.location.href.split('/');
            let token = token_array[token_array.length - 1];

            console.log(token);

            this.authenticate_token(token)
        }

        this.authObject = JSON.parse(op);
        this.bankCode = this.authObject.bankCode;


        // this.authenticate_token(token)
    }

    authenticate_token(token) {
        const url = `${this.url}/api/v1/ghqr/img/validate_encrypted_token/${token}`; // Replace with your file URL

        this.http.get(url).subscribe(response => {
                this.authObject = response;
                console.log('------------------------------');
                console.log(response);

                if (this.authObject.errorCode == '0') {
                    this.bankCode = Number(this.authObject.bankCode);
                    sessionStorage.setItem('authObject', JSON.stringify(this.authObject));
                    sessionStorage.setItem('token', token);
                } else {
                    console.log('++++++++++++++++++++++');
                    console.log({'token': token});
                    // sessionStorage.clear();
                    // window.location.href = 'http://172.27.21.31:3000/';
                }
            }
        );
    }


    viewSheet(item: any) {


        this.current_image = this.data[this.current + item].image;
        this.current += item;

        this.submitSingle(this.data[this.current]);


    }


    submitSingle(terminalId) {
        // this.from = document.getElementById('from').value;
        // this.to = document.getElementById('to').value;
        // this.bankCode = document.getElementById('bankCode').value;

        const url = `${this.url}/api/v1/ghqr/img/generate_qr_image_with_terminal_id/${this.bankCode}/${terminalId}`; // Replace with your file URL

        this.http.get(url, {
            observe: 'response',  // this allows you to get the full response including headers
            responseType: 'blob'  // set the response type to blob
        }).subscribe(response => {

            // Access the Blob from the response
            const fileBlob: Blob = response.body;

            // Access the headers from the response
            const headers = response.headers;


            this.merchant_id = headers.get('merchant-id');
            this.merchant_name = headers.get('merchant-name');
            this.terminal_id = headers.get('terminal-id');


            // You can now download the Blob, or handle it as needed

            const current_image = URL.createObjectURL(fileBlob);
            this.current_image = this.sanitizer.bypassSecurityTrustUrl(current_image);
        }, error => {
            console.error('Error fetching the file:', error);
        });
    }

    submit() {
        this.from = document.getElementById('from').value;
        this.to = document.getElementById('to').value;
        this.bankCode = document.getElementById('bankCode').value;

        if (!document.getElementById('from').value || document.getElementById('from').value == '' || !document.getElementById('to').value || !document.getElementById('bankCode').value || document.getElementById('bankCode').value == '') {
            this.toastr.warning('All details are required'
                ,
                '',
                {
                    timeOut: 5000,
                    enableHtml: true,
                    closeButton: true,
                    toastClass: 'alert alert-danger alert-with-icon',

                });
            // Handle timeout error, for example, you can return a custom error message
            return [];
        }


        if ((this.to - this.from) > 100) {
            this.toastr.warning('Maximum range is 100 per request'
                ,
                '',
                {
                    timeOut: 5000,
                    enableHtml: true,
                    closeButton: true,
                    toastClass: 'alert alert-danger alert-with-icon',

                });
            // Handle timeout error, for example, you can return a custom error message
            return [];
        }

        if (this.to < this.from) {
            this.toastr.warning('From Terminal ID cannot be greater than To Terminal ID'
                ,
                '',
                {
                    timeOut: 5000,
                    enableHtml: true,
                    closeButton: true,
                    toastClass: 'alert alert-danger alert-with-icon',

                });
            // Handle timeout error, for example, you can return a custom error message
            return [];
        }

        const url = `${this.url}/api/v1/ghqr/img/get_terminal_id_range/${this.from}/${this.to}/${this.bankCode}`; // Replace with your file URL

        this.http.get(url).subscribe(response => {

            // Access the Blob from the response
            this.data = response;

            if (this.data.length > 0) {
                this.submitSingle(this.data[this.current]);
            } else {
                this.toastr.warning('No Terminal IDs found'
                    ,
                    '',
                    {
                        timeOut: 5000,
                        enableHtml: true,
                        closeButton: true,
                        toastClass: 'alert alert-danger alert-with-icon',

                    });
                // Handle timeout error, for example, you can return a custom error message
                return [];
            }
        }, error => {
            console.error('Error fetching the file:', error);
        });


    }

    // submit() {
    //     this.from = document.getElementById('from').value;
    //     this.to = document.getElementById('to').value;
    //     this.bankCode = document.getElementById('bankCode').value;
    //
    //
    //     this.http.get(`${this.url}/api/v1/ghqr/img/generate_qr_image_with_terminal_id/${this.bankCode}/${this.from}`, {
    //         responseType: 'blob',
    //         observe: 'response'
    //     }).pipe(
    //         result => {
    //             result.subscribe(result => {
    //
    //
    //                 // const pdf = new Blob([response], {type: 'image/png'});
    //                 const current_image = URL.createObjectURL(result);
    //                 this.current_image = this.sanitizer.bypassSecurityTrustUrl(current_image);
    //                 // const blobUrl = URL.createObjectURL(pdf);
    //                 // const iframe = document.createElement('iframe');
    //                 // iframe.style.display = 'none';
    //                 // iframe.src = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl));
    //                 // document.body.appendChild(iframe);
    //                 // iframe.contentWindow.print();
    //             });
    //         }
    //     );
    //
    //
    //     // this.http.get(`${this.url}/api/v1/ghqr/img/generate_qr_image_with_terminal_id/${this.bankCode}/${this.from}`, {
    //     //     responseType: 'blob',
    //     //     observe: 'response'
    //     // }).pipe(
    //     //     tap((result:any) => {
    //     //         const current_image = URL.createObjectURL(result);
    //     //         this.current_image = this.sanitizer.bypassSecurityTrustUrl(current_image);
    //     //     }));
    //
    //
    // }

    printPdf() {


        this.toastr.info('Download initiated'
            ,
            '',
            {
                timeOut: 5000,
                enableHtml: true,
                closeButton: true,
                toastClass: 'alert alert-info alert-with-icon',

            });
        const url = environment.qrUrl;
        this.http.get(`${url}/api/v1/ghqr/img/print_single_qr_image/${this.bankCode}/${this.data[this.current]}`, {responseType: 'blob'}).subscribe(
            (response) => { // download file
                const pdf = new Blob([response], {type: 'application/pdf'});
                const blobUrl = URL.createObjectURL(pdf);

                //------------------------TOASTR-----------------------------------------//


                //
                //
                // pdfMake.createPdf(docDefinition).open();


                // const iframe = document.createElement('iframe');
                // iframe.style.display = 'none';
                // iframe.src = window.URL.createObjectURL(new Blob([response], { type: 'application/pdf' }));
                // document.body.appendChild(iframe);
                // iframe.load = () => {
                //     setTimeout(() => {
                //         iframe.focus();
                //         iframe.contentWindow.print();
                //
                //     });
                // };

                // Open a new window and load the PDF into it


                const printWindow = window.open(blobUrl);

                // printWindow.onload = () => {
                //     printWindow.print();
                // };

                // const printWindow = window.open('', '_blank');
                // if (printWindow) {
                //     printWindow.document.write(`
                //         <html lang="en">
                //           <head>
                //             <meta charset="UTF-8" />
                //             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                //             <title>Print PDF</title>
                //           </head>
                //           <body>
                //             <!-- Embed the PDF securely -->
                //             <iframe src="${blobUrl}" width="100%" height="100%" type="application/pdf"></iframe>
                //           </body>
                //         </html>
                //
                //               `);
                //     printWindow.document.close();
                //     printWindow.addEventListener('load', () => {
                //         setTimeout(function () {
                //             printWindow.print();
                //             printWindow.close();
                //         }, 1000);
                //     });

                //}
                // let iframe = document.createElement('iframe');
                // //iframe.style.display = 'hidden';
                // iframe.src = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl));
                // document.body.appendChild(iframe);

                // iframe.contentWindow.print();


            });

    }

    printAll() {

        this.toastr.info('Download initiated'
            ,
            '',
            {
                timeOut: 5000,
                enableHtml: true,
                closeButton: true,
                toastClass: 'alert alert-info alert-with-icon',

            });
        const url = environment.qrUrl;
        this.http.get(`${url}/api/v1/ghqr/img/print_multiple_qr_images/${this.bankCode}/${this.data.join(',')}`, {responseType: 'blob'}).subscribe(
            (response) => { // download file
                const pdf = new Blob([response], {type: 'application/pdf'});
                const blobUrl = URL.createObjectURL(pdf);

                const printWindow = window.open(blobUrl);

                // printWindow.onload = () => {
                //     printWindow.print();
                // };

                // if (printWindow) {
                //     printWindow.document.write(`
                //         <html lang="en">
                //           <head>
                //             <meta charset="UTF-8" />
                //             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                //             <title>Print PDF</title>
                //           </head>
                //           <body>
                //             <!-- Embed the PDF securely -->
                //             <iframe [src]="blogUrl" width="100%" height="100%" type="application/pdf"></iframe>
                //           </body>
                //         </html>
                //
                //               `);
                //     printWindow.document.close();
                //     printWindow.addEventListener('load', () => {
                //         setTimeout(function () {
                //             printWindow.print();
                //             printWindow.close();
                //         }, 1000);
                //     });
                // }
            });
    }

    setMax() {
        this.max = Number(document.getElementById('from').value) + 100;
    }
}
