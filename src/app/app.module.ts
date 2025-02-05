import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from './components/components.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {AppRoutes} from './app.routing';
import {AuthGuard} from './guards/auth-guard.service';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';


@NgModule({
    declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent],
    imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot(AppRoutes, {
            useHash: false
        }),
        NgbModule,
        ToastrModule.forRoot(), // ToastrModule added
        ComponentsModule,

    ],
    providers: [AuthGuard, {provide: LocationStrategy, useClass: PathLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
