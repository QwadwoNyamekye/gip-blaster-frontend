import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ChartsModule } from "ng2-charts/ng2-charts";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ComponentsModule } from "../../components/components.module";
import { AuthGuard } from '../../guards/auth-guard.service';
import { DashboardRoutes } from "./dashboard.routing";
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(DashboardRoutes),
    ComponentsModule,
    ChartsModule,
    AngularMultiSelectModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers :[AuthGuard]
})
export class DashboardModule {}
