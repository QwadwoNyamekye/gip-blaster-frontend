import { AppService } from '../app/app.service';
import { AppComponent } from 'src/app/app.component';


//let host="10.1.15.72";
//let host="localhost";
let host = '172.27.10.230'
export const environment = {
 
 
//$P{auth_status}.equals("2") ? "Approved" : "Declined" By :
  production: true,
  sendingUrl:'http://'+host+':8003',
  receivingUrl:'http://'+host+':8004',

};
