import { Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { LoginComponent } from "./pages/pages/login/login.component"
import { AuthGuard } from './guards/auth-guard.service';

export const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: "./pages/dashboard/dashboard.module#DashboardModule",
        //canActivate : [AuthGuard]

      },
      {
        path: "",
        loadChildren: "./pages/users/users.module#UsersModule",
        canActivate : [AuthGuard]
      }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: "./pages/pages/pages.module#PagesModule",
       
      }
    ]
  }
];
