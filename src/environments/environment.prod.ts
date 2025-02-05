import {AppService} from '../app/app.service';
import {AppComponent} from 'src/app/app.component';


//let host="10.1.15.72";
//let host="localhost";
let host = '172.27.10.230';
export const environment = {

    qrhost: `${window.location.host}/ghqr-generation`,
//$P{auth_status}.equals("2") ? "Approved" : "Declined" By :
    production: true,
    sendingUrl: 'http://' + host + ':8003',
    receivingUrl: 'http://' + host + ':8004',

    qrUrl: 'http://172.27.21.31:8889'
};
