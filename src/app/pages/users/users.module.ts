import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ComponentsModule } from "src/app/components/components.module";
import { ChartsModule } from "../charts/charts.module";
import { UsersComponent } from "./users.component";
import { UsersRoutes } from "./users.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
    imports: [
      CommonModule,
      NgbModule,
      RouterModule.forChild(UsersRoutes),
      ComponentsModule,
      ChartsModule,
      NgxDatatableModule,
      FormsModule, 
      ReactiveFormsModule,
      AngularMultiSelectModule,
      NgxSpinnerModule
    ],
    declarations: [UsersComponent],
    exports: [UsersComponent]
  })
  export class UsersModule {}