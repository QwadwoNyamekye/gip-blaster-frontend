import { Routes,CanActivate } from "@angular/router";
import { AuthGuard } from '../../guards/auth-guard.service';

import { DashboardComponent } from "./dashboard.component";

export const DashboardRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        //canActivate: [AuthGuard]
      }
    ]
  }
];
