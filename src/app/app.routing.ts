import { Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { LoginComponent } from "./pages/pages/login/login.component"
import { AuthGuard } from './guards/auth-guard.service';

export const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "pages/login",
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
        //canActivate : [AuthGuard]
      },
      // {
      //   path: "",
      //   loadChildren: "./pages/branches/branches.module#BranchesModule",
      //   canActivate : [AuthGuard]
      // },
      // {
      //   path: "",
      //   loadChildren: "./pages/audit/audit.module#AuditModule",
      //   canActivate : [AuthGuard]
      // },
      // {
      //   path: "",
      //   loadChildren: "./pages/genledger/gl.module#GlModule",
      //   canActivate : [AuthGuard]
      // },
      //  {
      //   path: "",
      //   loadChildren: "./pages/products/products.module#ProductsModule",
      //   canActivate : [AuthGuard]
      // },
      // {
      //   path: "branchlink",
      //   loadChildren:
      //     "./pages/branchlink/branchlink.module#BranchlinkModule",
      //     canActivate : [AuthGuard]
      // },
      // {
      //   path: "ghipss",
      //   loadChildren:
      //     "./pages/ghipss/ghipss.module#GhipssModule",
      //     canActivate : [AuthGuard]
      // },
      //  {
      //   path: "nostro",
      //   loadChildren:
      //     "./pages/nostro/nostro.module#NostroModule",
      //     canActivate : [AuthGuard]
      // },
      // {
      //   path: "vostro",
      //   loadChildren:
      //     "./pages/vostro/vostro.module#VostroModule",
      //     canActivate : [AuthGuard]
      // },
      // {
      //   path: "gls",
      //   loadChildren:
      //     "./pages/gls/gl.module#GLModule",
      //     canActivate : [AuthGuard]
      // },
      // {
      //   path: "components",
      //   loadChildren:
      //     "./pages/components/components.module#ComponentsPageModule",
      //     canActivate : [AuthGuard]
      // },
      // {
      //   path: "forms",
      //   loadChildren: "./pages/forms/forms.module#Forms",
      //   canActivate : [AuthGuard]
      // },
      // {
      //   path: "tables",
      //   loadChildren: "./pages/tables/tables.module#TablesModule",
      //   canActivate : [AuthGuard]
      // },
      // {
      //   path: "maps",
      //   loadChildren: "./pages/maps/maps.module#MapsModule",
      //   canActivate : [AuthGuard]
      // },
      // {
      //   path: "widgets",
      //   loadChildren: "./pages/widgets/widgets.module#WidgetsModule",
      //   canActivate : [AuthGuard]
      // },
      // {
      //   path: "charts",
      //   loadChildren: "./pages/charts/charts.module#ChartsModule",
      //   canActivate : [AuthGuard]
      // },
      // {
      //   path: "calendar",
      //   loadChildren: "./pages/calendar/calendar.module#CalendarModulee",
      //   canActivate : [AuthGuard]
      // },
      // {
      //   path: "",
      //   loadChildren:
      //     "./pages/pages/user-profile/user-profile.module#UserModule",
      //     canActivate : [AuthGuard]
      // },
      // {
      //   path: "",
      //   loadChildren: "./pages/pages/timeline/timeline.module#TimelineModule",
      //   canActivate : [AuthGuard]
      // }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "pages",
        loadChildren: "./pages/pages/pages.module#PagesModule",
       
      }
    ]
  }
];
