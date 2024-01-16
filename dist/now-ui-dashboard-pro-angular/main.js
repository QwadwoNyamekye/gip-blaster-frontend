(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/file-input/file-input.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/file-input/file-input.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group form-file-upload form-file-simple\">\r\n  <input\r\n    type=\"text\"\r\n    class=\"form-control inputFileVisible\"\r\n    placeholder=\"Simple chooser...\"\r\n    value=\"{{ state.fileNames }}\"\r\n    *ngIf=\"!multiple\"\r\n    (focus)=\"onFocus($event)\"\r\n  />\r\n\r\n  <input\r\n    type=\"text\"\r\n    class=\"form-control inputFileVisible\"\r\n    placeholder=\"Multiple chooser...\"\r\n    value=\"{{ state.fileNames }}\"\r\n    *ngIf=\"multiple\"\r\n    (focus)=\"onFocus($event)\"\r\n  />\r\n\r\n  <input\r\n    type=\"file\"\r\n    class=\"inputFileHidden\"\r\n    (change)=\"addFile($event)\"\r\n    multiple=\"{{ multiple }}\"\r\n    style=\"z-index: -1;\"\r\n    #input\r\n  />\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fixed-plugin/fixed-plugin.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fixed-plugin/fixed-plugin.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"fixed-plugin\">\r\n  <div ngbDropdown>\r\n    <a href=\"javascript:void(0)\" ngbDropdownToggle id=\"dropdownConfig\">\r\n        <i class=\"fa fa-cog fa-2x\"> </i>\r\n    </a>\r\n    <ul x-placement=\"bottom-start\" style=\"position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-231px, 38px, 0px);\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\r\n      <li class=\"header-title\"> Sidebar Background</li>\r\n      <li class=\"adjustments-line\">\r\n        <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\r\n          <div class=\"badge-colors text-center\">\r\n            <span class=\"badge filter badge-yellow\" [ngClass]=\"{'active':sidebarColor==='yellow'}\" (click)=\"changeSidebarColor('yellow')\"></span>\r\n            <span class=\"badge filter badge-blue\" [ngClass]=\"{'active':sidebarColor==='blue'}\" (click)=\"changeSidebarColor('blue')\"></span>\r\n            <span class=\"badge filter badge-green\" [ngClass]=\"{'active':sidebarColor==='green'}\" (click)=\"changeSidebarColor('green')\"></span>\r\n            <span class=\"badge filter badge-orange active\" [ngClass]=\"{'active':sidebarColor==='orange'}\" (click)=\"changeSidebarColor('orange')\"></span>\r\n            <span class=\"badge filter badge-red\" [ngClass]=\"{'active':sidebarColor==='red'}\" (click)=\"changeSidebarColor('red')\"></span>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </a>\r\n      </li>\r\n\r\n\r\n      <li class=\"header-title\">\r\n        Sidebar Mini\r\n      </li>\r\n      <li class=\"adjustments-line\">\r\n\r\n        <div class=\"togglebutton switch-sidebar-mini\">\r\n          <span class=\"label-switch\">OFF</span>\r\n          <bSwitch\r\n            [switch-on-color]=\"'primary'\"\r\n            [switch-off-text]=\"' '\"\r\n            [switch-on-text]=\"' '\"\r\n            [(ngModel)]=\"state\"\r\n            (onChangeState)=\"onChange($event)\"\r\n            (click)=\"onChange($event)\"\r\n          ></bSwitch>\r\n          <span class=\"label-switch label-right\">ON</span>\r\n        </div>\r\n      </li>\r\n        <br>\r\n        <br>\r\n        <span></span>\r\n    </ul>\r\n  </div>\r\n</div>\r\n -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\r\n\t\r\n  <div class=\"container-fluid\">\r\n  \t\t<!-- Powered By Test {{CurrentYear}} &copy; -->\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-upload/image-upload.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-upload/image-upload.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fileinput text-center\" #input>\r\n  <div [ngClass]=\"{ 'img-circle': isRound }\" class=\"thumbnail img-raised\">\r\n    <img src=\"{{ state.imagePreviewUrl }}\" alt=\"...\" />\r\n  </div>\r\n  <div>\r\n    <button\r\n      class=\"btn btn-raised btn-round btn-default btn-file\"\r\n      (click)=\"handleClick()\"\r\n      *ngIf=\"!this.state.file\"\r\n    >\r\n      Select image\r\n    </button>\r\n    <button\r\n      class=\"btn btn-raised btn-round btn-default btn-file\"\r\n      (click)=\"handleClick()\"\r\n      *ngIf=\"this.state.file\"\r\n    >\r\n      Change\r\n    </button>\r\n    <button\r\n      class=\"btn btn-danger btn-round fileinput-exists\"\r\n      (click)=\"handleRemove()\"\r\n      *ngIf=\"this.state.file\"\r\n    >\r\n      <i class=\"now-ui-icons ui-1_simple-remove\"></i> Remove\r\n    </button>\r\n  </div>\r\n  <input type=\"file\" />\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"btn btn-primary\" (click)=\"open(classic, '', '')\">\r\n  Classic modal\r\n</button>\r\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header justify-content-center\">\r\n    <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\r\n      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n    </button>\r\n    <h4 class=\"title title-up\">Modal title</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>\r\n      Far far away, behind the word mountains, far from the countries Vokalia\r\n      and Consonantia, there live the blind texts. Separated they live in\r\n      Bookmarksgrove right at the coast of the Semantics, a large language\r\n      ocean. A small river named Duden flows by their place and supplies it with\r\n      the necessary regelialia. It is a paradisematic country, in which roasted\r\n      parts of sentences fly into your mouth.\r\n    </p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\">Nice Button</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">\r\n      Close\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<button class=\"btn btn-info\" (click)=\"open(Notice, '', '')\">\r\n  Notice modal\r\n</button>\r\n<ng-template #Notice let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\r\n      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n    </button>\r\n    <h5 class=\"modal-title\" id=\"myModalLabel\">\r\n      How Do You Become an Affiliate?\r\n    </h5>\r\n  </div>\r\n  <div class=\"modal-body text-center\">\r\n    <div class=\"instruction\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n          <strong>1. Register</strong>\r\n          <p class=\"description\">\r\n            The first step is to create an account at\r\n            <a href=\"https://www.creative-tim.com/\">Creative Tim</a>. You can\r\n            choose a social network or go for the classic version, whatever\r\n            works best for you.\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"picture\">\r\n            <img\r\n              src=\"assets/img/bg1.jpg\"\r\n              alt=\"Thumbnail Image\"\r\n              class=\"rounded img-raised\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"instruction\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n          <strong>2. Apply</strong>\r\n          <p class=\"description\">\r\n            The first step is to create an account at\r\n            <a href=\"https://www.creative-tim.com/\">Creative Tim</a>. You can\r\n            choose a social network or go for the classic version, whatever\r\n            works best for you.\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"picture\">\r\n            <img\r\n              src=\"assets/img/bg3.jpg\"\r\n              alt=\"Thumbnail Image\"\r\n              class=\"rounded img-raised\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <p>\r\n      If you have more questions, don't hesitate to contact us or send us a\r\n      tweet @creativetim. We're here to help!\r\n    </p>\r\n  </div>\r\n  <div class=\"modal-footer justify-content-center\">\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-info btn-round\"\r\n      (click)=\"c('Close click')\"\r\n    >\r\n      Sounds good!\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<button class=\"btn btn-default\" (click)=\"open(modal_mini, 'modal_mini', 'sm')\">\r\n  Small alert modal\r\n</button>\r\n<ng-template #modal_mini let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header justify-content-center\">\r\n    <div class=\"modal-profile\">\r\n      <i class=\"now-ui-icons users_circle-08\"></i>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-body\"><p>Always have an access to your profile</p></div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-link btn-neutral\">Back</button>\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-link btn-neutral\"\r\n      (click)=\"c('Close click')\"\r\n    >\r\n      Close\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\r\n  class=\"navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute\"\r\n>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-wrapper\">\r\n      <div class=\"navbar-toggle\">\r\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\r\n          <span class=\"navbar-toggler-bar bar1\"></span>\r\n          <span class=\"navbar-toggler-bar bar2\"></span>\r\n          <span class=\"navbar-toggler-bar bar3\"></span>\r\n        </button>\r\n      </div>\r\n     <!--  <a class=\"navbar-brand\" href=\"#pablo\">{{ getTitle() }}</a> -->\r\n    </div>\r\n    <!-- <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\r\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n    </button> -->\r\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"!isCollapsed\">\r\n   <!--    <form>\r\n        <div class=\"input-group no-border\">\r\n          <input\r\n            type=\"text\"\r\n            value=\"\"\r\n            class=\"form-control\"\r\n            placeholder=\"Search...\"\r\n          />\r\n          <div class=\"input-group-append\">\r\n            <div class=\"input-group-text\">\r\n              <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>-->\r\n      <ul class=\"navbar-nav\">\r\n       <li class=\"nav-item\">\r\n          \r\n        </li> \r\n        <li class=\"nav-item dropdown\" ngbDropdown>\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            id=\"dropdownBasic1\"\r\n            ngbDropdownToggle\r\n          >\r\n          <span>{{user}}</span> \r\n            <i class=\"now-ui-icons users_single-02\"></i>\r\n            <p><span class=\"d-lg-none d-md-block\">Some Actions</span></p>\r\n          </a>\r\n          <div\r\n            class=\"dropdown-menu dropdown-menu-right\"\r\n            ngbDropdownMenu\r\n            aria-labelledby=\"dropdownBasic1\"\r\n          >\r\n            <!-- <span  class=\"dropdown-item curs\">Name : {{user.fullname}}</span>-->\r\n           <!-- <span  class=\"dropdown-item curs\">{{user}}</span>  -->\r\n            <span class=\"dropdown-item curs\" (click)=\"logout()\">Logout</span>\r\n          </div>\r\n        </li>\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#pablo\">\r\n            <i class=\"now-ui-icons users_single-02\"></i>\r\n            <p><span class=\"d-lg-none d-md-block\">Account</span></p>\r\n          </a>\r\n        </li> -->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/picture-upload/picture-upload.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/picture-upload/picture-upload.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"picture-container\">\r\n  <div class=\"picture\">\r\n    <img\r\n      src=\"{{ state.imagePreviewUrl }}\"\r\n      class=\"picture-src\"\r\n      alt=\"...\"\r\n    />\r\n    <input type=\"file\" (change)=\"this.handleImageChange($event)\" id=\"wizard-picture\"/>\r\n  </div>\r\n  <h6 class=\"description\">Choose Picture</h6>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar\" data-color=\"boa\">\r\n  <div class=\"logo\">\r\n \r\n    <a routerLink=\"/dashboard\" class=\"simple-text logo-normal\">\r\n      <b>NEC</b>\r\n    </a>\r\n    <div class=\"navbar-minimize\">\r\n      <button\r\n        id=\"minimizeSidebar\"\r\n        class=\"btn btn-simple btn-icon btn-neutral btn-round\"\r\n        (click)=\"minimizeSidebar()\"\r\n      >\r\n        <i\r\n          class=\"now-ui-icons text_align-center visible-on-sidebar-regular\"\r\n        ></i>\r\n        <i\r\n          class=\"now-ui-icons design_bullet-list-67 visible-on-sidebar-mini\"\r\n        ></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"sidebar-wrapper\">\r\n    <!-- <div class=\"user\">\r\n      <div class=\"photo\"><img src=\"../assets/img/james.jpg\" /></div>\r\n      <div class=\"info\">\r\n        <a\r\n          data-toggle=\"collapse\"\r\n          href=\"#collapseExample\"\r\n          (click)=\"isCollapsed = !isCollapsed; myFunc($event)\"\r\n          [attr.aria-expanded]=\"!isCollapsed\"\r\n          aria-controls=\"collapseExample\"\r\n        >\r\n          <span> James Amos <b class=\"caret\"></b> </span>\r\n        </a>\r\n        <div class=\"collapse\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n          <ul class=\"nav\">\r\n            <li>\r\n              <a href=\"javascript:void(0)\" >\r\n                <span class=\"sidebar-mini-icon\">MP</span>\r\n                <span class=\"sidebar-normal\">My Profile</span>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"javascript:void(0)\">\r\n                <span class=\"sidebar-mini-icon\">EP</span>\r\n                <span class=\"sidebar-normal\">Edit Profile</span>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"javascript:void(0)\">\r\n                <span class=\"sidebar-mini-icon\">S</span>\r\n                <span class=\"sidebar-normal\">Settings</span>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <ul class=\"nav\">\r\n      <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\">\r\n        <!--If is a single link-->\r\n        <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\">\r\n          <i class=\"now-ui-icons {{ menuitem.icontype }}\"></i>\r\n          <p><b>{{ menuitem.title }}</b></p>\r\n        </a>\r\n        <!--If it have a submenu-->\r\n        <a\r\n          data-toggle=\"collapse\"\r\n          href=\"#{{ menuitem.collapse }}\"\r\n          *ngIf=\"menuitem.type === 'sub'\"\r\n          (click)=\"\r\n            myFunc($event, menuitem);\r\n            menuitem.isCollapsing === undefined &&\r\n              (menuitem.isCollapsed = !menuitem.isCollapsed)\r\n          \"\r\n          [attr.aria-expanded]=\"!menuitem.isCollapsed\"\r\n        >\r\n          <i class=\"now-ui-icons {{ menuitem.icontype }}\"></i>\r\n          <p><b>{{ menuitem.title }}</b><b class=\"caret\"></b></p>\r\n        </a>\r\n\r\n        <!--Display the submenu items-->\r\n        <div\r\n          id=\"{{ menuitem.collapse }}\"\r\n          class=\"collapse\"\r\n          *ngIf=\"menuitem.type === 'sub'\"\r\n          [ngbCollapse]=\"menuitem.isCollapsed\"\r\n        >\r\n          <ul class=\"nav\">\r\n            <li\r\n              routerLinkActive=\"active\"\r\n              *ngFor=\"let childitem of menuitem.children\"\r\n            >\r\n            <!--*ngIf='user.products.includes(childitem.title)'-->\r\n              <a  [routerLink]=\"[menuitem.path, childitem.path]\">\r\n                <span class=\"sidebar-mini-icon\">{{ childitem.ab }}</span>\r\n                <span class=\"sidebar-normal\">{{ childitem.title }}</span>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vector-map/vector-map.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vector-map/vector-map.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<dx-vector-map\r\n  id=\"vector-map\"\r\n  [bounds]=\"[0, 0, 0, 0]\"\r\n  (onClick)=\"click($event)\"\r\n>\r\n  <dxo-tooltip [enabled]=\"true\" [customizeTooltip]=\"customizeTooltip\">\r\n    <dxo-font color=\"#fff\"></dxo-font>\r\n    <dxo-border [visible]=\"false\"></dxo-border>\r\n  </dxo-tooltip>\r\n  <dxi-layer [dataSource]=\"worldMap\" [customize]=\"customizeLayers\"> </dxi-layer>\r\n</dx-vector-map>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <app-sidebar></app-sidebar>\r\n  <div class=\"main-panel\">\r\n    <app-navbar></app-navbar>\r\n    <router-outlet></router-outlet>\r\n    <app-footer></app-footer>\r\n  </div>\r\n</div>\r\n<app-fixed-plugin></app-fixed-plugin>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\r\n  class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute bg-primary \"\r\n>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-wrapper\">\r\n     <!--  <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\"><b>CHECKPOINT</b></a> -->\r\n    </div>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\r\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n    </button>\r\n<!--     <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"!isCollapsed\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\r\n            <i class=\"now-ui-icons design_app\"></i> Dashboard\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/pages/register']\">\r\n            <i class=\"now-ui-icons tech_mobile\"></i> Register\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/pages/login']\">\r\n            <i class=\"now-ui-icons users_circle-08\"></i> Login\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/pages/pricing']\">\r\n            <i class=\"now-ui-icons now-ui-icons business_money-coins\"></i>\r\n            Pricing\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/pages/lock']\">\r\n            <i class=\"now-ui-icons ui-1_lock-circle-open\"></i> Lock\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div> -->\r\n  </div>\r\n</nav>\r\n<div class=\"wrapper wrapper-full-page \">\r\n  <div class=\"full-page section-image\" filter-color=\"black\">\r\n    <router-outlet></router-outlet>\r\n    <app-footer></app-footer>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/dashboard/dashboard.module": [
		"./src/app/pages/dashboard/dashboard.module.ts",
		"default~pages-dashboard-dashboard-module~pages-pages-pages-module~pages-users-users-module",
		"default~pages-dashboard-dashboard-module~pages-users-users-module",
		"pages-dashboard-dashboard-module"
	],
	"./pages/pages/pages.module": [
		"./src/app/pages/pages/pages.module.ts",
		"default~pages-dashboard-dashboard-module~pages-pages-pages-module~pages-users-users-module",
		"pages-pages-pages-module"
	],
	"./pages/users/users.module": [
		"./src/app/pages/users/users.module.ts",
		"default~pages-dashboard-dashboard-module~pages-pages-pages-module~pages-users-users-module",
		"default~pages-dashboard-dashboard-module~pages-users-users-module",
		"pages-users-users-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AppComponent = /** @class */ (function () {
    function AppComponent(http, serv) {
        this.http = http;
        this.serv = serv;
        this.title = "app";
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.baseUrl=this.serv.getUrls()
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_7__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__["AuthLayoutComponent"]],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutes"], {
                    useHash: true
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
            ],
            providers: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AppRoutes = [
    {
        path: "",
        redirectTo: "pages/login",
        pathMatch: "full"
    },
    {
        path: "",
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [
            {
                path: "",
                loadChildren: "./pages/dashboard/dashboard.module#DashboardModule",
                canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
            },
            {
                path: "",
                loadChildren: "./pages/users/users.module#UsersModule",
                canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
            }
        ]
    },
    {
        path: "",
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        children: [
            {
                path: "pages",
                loadChildren: "./pages/pages/pages.module#PagesModule",
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.baseUrl = this.getUrls();
    }
    AppService.prototype.getUrls = function () {
        var baseUrl;
        // this.http.get('C://Users/ARDIL SALIA/Desktop/baseurl.json').subscribe({
        //     next :data => {
        //       baseUrl = data as string [];	 // FILL THE ARRAY WITH DATA.
        //         console.log(baseUrl);
        //         return baseUrl;
        //     },
        //     error: error => {
        //       console.log (error.message);
        //       return baseUrl
        //     }
        // });
    };
    AppService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/fesm5/devextreme-angular.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vector-map/vector-map.component */ "./src/app/components/vector-map/vector-map.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./image-upload/image-upload.component */ "./src/app/components/image-upload/image-upload.component.ts");
/* harmony import */ var _file_input_file_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./file-input/file-input.component */ "./src/app/components/file-input/file-input.component.ts");
/* harmony import */ var _picture_upload_picture_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./picture-upload/picture-upload.component */ "./src/app/components/picture-upload/picture-upload.component.ts");
/* harmony import */ var _fixed_plugin_fixed_plugin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fixed-plugin/fixed-plugin.component */ "./src/app/components/fixed-plugin/fixed-plugin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__["JwBootstrapSwitchNg2Module"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_6__["DxVectorMapModule"]],
            declarations: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_11__["VectorMapComponent1"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalBasic"],
                _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_13__["ImageUploadComponent"],
                _file_input_file_input_component__WEBPACK_IMPORTED_MODULE_14__["FileInputComponent"],
                _picture_upload_picture_upload_component__WEBPACK_IMPORTED_MODULE_15__["PictureUploadComponent"],
                _fixed_plugin_fixed_plugin_component__WEBPACK_IMPORTED_MODULE_16__["FixedPluginComponent"]
            ],
            exports: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_11__["VectorMapComponent1"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalBasic"],
                _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_13__["ImageUploadComponent"],
                _picture_upload_picture_upload_component__WEBPACK_IMPORTED_MODULE_15__["PictureUploadComponent"],
                _file_input_file_input_component__WEBPACK_IMPORTED_MODULE_14__["FileInputComponent"],
                _fixed_plugin_fixed_plugin_component__WEBPACK_IMPORTED_MODULE_16__["FixedPluginComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/file-input/file-input.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/file-input/file-input.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmlsZS1pbnB1dC9maWxlLWlucHV0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/file-input/file-input.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/file-input/file-input.component.ts ***!
  \***************************************************************/
/*! exports provided: FileInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInputComponent", function() { return FileInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FileInputComponent = /** @class */ (function () {
    function FileInputComponent() {
        this.state = {};
    }
    FileInputComponent.prototype.ngOnInit = function () { };
    FileInputComponent.prototype.onFocus = function (e) {
        this.input.nativeElement.click(e);
    };
    FileInputComponent.prototype.handleSubmit = function (e) {
        e.preventDefault();
        // this.state.file is the file/image uploaded
        // in this function you can save the image (this.state.file) on form submit
        // you have to call it yourself
    };
    FileInputComponent.prototype.addFile = function (e) {
        var fileNames = "";
        var files = e.target.files;
        for (var i = 0; i < e.target.files.length; i++) {
            fileNames = fileNames + e.target.files[i].name;
            if (i !== e.target.files.length - 1) {
                fileNames = fileNames + ", ";
            }
        }
        this.state.fileNames = fileNames;
        this.state.files = files;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FileInputComponent.prototype, "multiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("input"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FileInputComponent.prototype, "input", void 0);
    FileInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-file-input",
            template: __importDefault(__webpack_require__(/*! raw-loader!./file-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/file-input/file-input.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./file-input.component.css */ "./src/app/components/file-input/file-input.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FileInputComponent);
    return FileInputComponent;
}());



/***/ }),

/***/ "./src/app/components/fixed-plugin/fixed-plugin.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/fixed-plugin/fixed-plugin.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fixed-plugin .dropdown .dropdown-toggle:after{\r\n  display: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maXhlZC1wbHVnaW4vZml4ZWQtcGx1Z2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpeGVkLXBsdWdpbi9maXhlZC1wbHVnaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXhlZC1wbHVnaW4gLmRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGU6YWZ0ZXJ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/fixed-plugin/fixed-plugin.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/fixed-plugin/fixed-plugin.component.ts ***!
  \*******************************************************************/
/*! exports provided: FixedPluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function() { return FixedPluginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var FixedPluginComponent = /** @class */ (function () {
    function FixedPluginComponent(config, toastr) {
        this.toastr = toastr;
        this.sidebarColor = "red";
        this.state = true;
        // customize default values of dropdowns used by this component tree
        config.placement = 'bottom-left';
        config.autoClose = false;
    }
    FixedPluginComponent.prototype.changeSidebarColor = function (color) {
        var sidebar = document.querySelector('.sidebar');
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data-color', color);
        }
    };
    FixedPluginComponent.prototype.showSidebarMessage = function (message) {
        this.toastr.show('<span class="now-ui-icons ui-1_bell-53"></span>', message, {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: "toast-top-right"
        });
    };
    FixedPluginComponent.prototype.onChange = function (event) {
        var body = document.getElementsByTagName('body')[0];
        if (this.state === true) {
            body.classList.remove('sidebar-mini');
            this.showSidebarMessage('Sidebar mini deactivated...');
        }
        else {
            body.classList.add('sidebar-mini');
            this.showSidebarMessage('Sidebar mini activated...');
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    FixedPluginComponent.prototype.ngOnInit = function () {
    };
    FixedPluginComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    FixedPluginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fixed-plugin',
            template: __importDefault(__webpack_require__(/*! raw-loader!./fixed-plugin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fixed-plugin/fixed-plugin.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./fixed-plugin.component.css */ "./src/app/components/fixed-plugin/fixed-plugin.component.css")).default]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], FixedPluginComponent);
    return FixedPluginComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
        this.CurrentYear = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-footer",
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/image-upload/image-upload.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/image-upload/image-upload.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fileinput input {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS11cGxvYWQvQzpcXFVzZXJzXFxkT3Bwb25nLU5rcnVtYWhcXERvY3VtZW50c1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGltYWdlLXVwbG9hZFxcaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlLXVwbG9hZC9pbWFnZS11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlLXVwbG9hZC9pbWFnZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZWlucHV0IGlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiIsIi5maWxlaW5wdXQgaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/image-upload/image-upload.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/image-upload/image-upload.component.ts ***!
  \*******************************************************************/
/*! exports provided: ImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ImageUploadComponent = /** @class */ (function () {
    function ImageUploadComponent() {
        this.isRound = false;
        this.state = {};
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    ImageUploadComponent.prototype.ngOnInit = function () {
        this.state = {
            file: null,
            imagePreviewUrl: this.image !== undefined
                ? this.image
                : this.isRound
                    ? "assets/img/placeholder.jpg"
                    : "assets/img/image_placeholder.jpg"
        };
    };
    ImageUploadComponent.prototype.ngAfterViewInit = function () {
        this.input.nativeElement.children[2].onchange = this.handleImageChange;
    };
    ImageUploadComponent.prototype.handleImageChange = function (e) {
        var _this = this;
        e.preventDefault();
        var reader = new FileReader();
        var file = e.target.files[0];
        reader.onloadend = function () {
            _this.state.file = file;
            _this.state.imagePreviewUrl = reader.result;
            // this.state.imagePreviewUrl1 = reader.result;
        };
        reader.readAsDataURL(file);
    };
    ImageUploadComponent.prototype.handleSubmit = function (e) {
        e.preventDefault();
        // this.state.file is the file/image uploaded
        // in this function you can save the image (this.state.file) on form submit
        // you have to call it yourself
    };
    ImageUploadComponent.prototype.handleClick = function () {
        this.input.nativeElement.children[2].click();
    };
    ImageUploadComponent.prototype.handleRemove = function () {
        this.state.file = null;
        this.state.imagePreviewUrl =
            this.image !== undefined
                ? this.image
                : this.isRound
                    ? "assets/img/placeholder.jpg"
                    : "assets/img/image_placeholder.jpg";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ImageUploadComponent.prototype, "isRound", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImageUploadComponent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("input"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImageUploadComponent.prototype, "input", void 0);
    ImageUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-image-upload",
            template: __importDefault(__webpack_require__(/*! raw-loader!./image-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-upload/image-upload.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./image-upload.component.scss */ "./src/app/components/image-upload/image-upload.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ImageUploadComponent);
    return ImageUploadComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasic", function() { return NgbdModalBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBasic.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === "sm" && type === "modal_mini") {
            this.modalService
                .open(content, { windowClass: "modal-mini modal-primary", size: "sm" })
                .result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension == undefined && type === "Login") {
            this.modalService
                .open(content, { windowClass: "modal-login modal-primary" })
                .result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }
    ]; };
    NgbdModalBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ngbd-modal-component",
            template: __importDefault(__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html")).default
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".curs {    \r\n    cursor: pointer;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cnMgeyAgICBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router) {
        this.element = element;
        this.router = router;
        this.isCollapsed = false;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
        this.user = sessionStorage.getItem('currentUser');
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementById('bodyClick');
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee) {
                return this.listTitles[i].title;
            }
            else if (this.listTitles[i].type === "sub") {
                for (var j = 0; j < this.listTitles[i].children.length; j++) {
                    var subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                    // console.log(subtitle)
                    // console.log(titlee)
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName('nav')[0];
        if (this.isCollapsed) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('bg-white');
        }
        else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('bg-white');
        }
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var html = document.getElementsByTagName('html')[0];
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
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('id', 'bodyClick');
            if (html.getElementsByTagName('body')) {
                document.getElementsByTagName('body')[0].appendChild($layer);
            }
            $layer.onclick = function () {
                html.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
                var mainPanel = document.getElementsByClassName('main-panel')[0];
                if (window.innerWidth < 991) {
                    setTimeout(function () {
                        mainPanel.style.position = '';
                    }, 500);
                }
            }.bind(this);
            html.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.logout = function () {
        sessionStorage.setItem('currentUser', '');
        this.router.navigate(['pages/login']);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-navbar",
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/picture-upload/picture-upload.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/picture-upload/picture-upload.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGljdHVyZS11cGxvYWQvcGljdHVyZS11cGxvYWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/picture-upload/picture-upload.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/picture-upload/picture-upload.component.ts ***!
  \***********************************************************************/
/*! exports provided: PictureUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureUploadComponent", function() { return PictureUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var PictureUploadComponent = /** @class */ (function () {
    function PictureUploadComponent() {
        this.state = {};
        this.handleImageChange = this.handleImageChange.bind(this);
    }
    PictureUploadComponent.prototype.ngOnInit = function () {
        this.state = {
            file: null,
            imagePreviewUrl: "assets/img/default-avatar.png"
        };
    };
    PictureUploadComponent.prototype.handleImageChange = function ($event) {
        var _this = this;
        $event.preventDefault();
        var reader = new FileReader();
        var file = $event.target.files[0];
        reader.onloadend = function () {
            _this.state.file = file;
            _this.state.imagePreviewUrl = reader.result;
            // this.state.imagePreviewUrl1 = reader.result;
        };
        reader.readAsDataURL(file);
    };
    PictureUploadComponent.prototype.handleSubmit = function ($event) {
        $event.preventDefault();
        // this.state.file is the file/image uploaded
        // in this function you can save the image (this.state.file) on form submit
        // you have to call it yourself
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PictureUploadComponent.prototype, "image", void 0);
    PictureUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-picture-upload',
            template: __importDefault(__webpack_require__(/*! raw-loader!./picture-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/picture-upload/picture-upload.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./picture-upload.component.css */ "./src/app/components/picture-upload/picture-upload.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PictureUploadComponent);
    return PictureUploadComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: AdminROUTES, AuthRoutes, AllRoutes, ReconROUTES, ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminROUTES", function() { return AdminROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutes", function() { return AuthRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRoutes", function() { return AllRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReconROUTES", function() { return ReconROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var misc = {
    sidebar_mini_active: true
};
//Menu Items
var AdminROUTES = [
    {
        path: "/dashboard",
        title: "Dashboard",
        type: "link",
        icontype: "design_app"
    },
    {
        path: "/nec",
        title: "NEC",
        type: "link",
        icontype: "users_single-02"
    },
];
var AuthRoutes = [
    {
        path: "/dashboard",
        title: "Dashboard",
        type: "link",
        icontype: "design_app"
    },
    {
        path: "/ghipss/gip/history/pending",
        title: "Reconciliations",
        type: "link",
        icontype: "design_bullet-list-67"
    },
    {
        path: "/ghipss/atm/analyze",
        title: "ATM Analyzer",
        type: "link",
        icontype: "education_atom"
    }
];
var AllRoutes = [
    {
        path: "/dashboard",
        title: "Dashboard",
        type: "link",
        icontype: "design_app"
    },
    {
        path: "/ghipss/gip/history/pending",
        title: "Reconciliations",
        type: "link",
        icontype: "design_bullet-list-67"
    },
    {
        path: "/ghipss/atm/analyze",
        title: "ATM Analyzer",
        type: "link",
        icontype: "education_atom"
    },
    {
        path: "/ghipss",
        title: "Cards",
        type: "sub",
        icontype: "shopping_credit-card",
        collapse: "pages",
        isCollapsed: true,
        children: [
            { path: "gip", title: "GHLINK", ab: "GHL" },
            { path: "atm", title: "ATM", ab: "ATM" },
            { path: "push", title: "MTN-PUSH", ab: "PSH" },
            { path: "pull", title: "MTN-PULL", ab: "PUL" },
            { path: "momo", title: "MTN-MOMO", ab: "MOM" },
            { path: "etm", title: "ETRANZACT MOMO", ab: "ETM" },
            { path: "ets", title: "ETRANZACT SETTLEMENT", ab: "ETS" }
        ]
    },
    {
        path: "/nostro",
        title: "Nostro",
        type: "sub",
        icontype: "business_money-coins",
        collapse: "pages",
        isCollapsed: true,
        children: []
    },
    {
        path: "/gls",
        title: "Other Streams",
        type: "sub",
        icontype: "business_bank",
        collapse: "pages",
        isCollapsed: true,
        children: []
    },
];
var ReconROUTES = [
    {
        path: "/dashboard",
        title: "Dashboard",
        type: "link",
        icontype: "design_app"
    },
    {
        path: "/ghipss/gip/history/pending",
        title: "Reconciliations",
        type: "link",
        icontype: "design_bullet-list-67"
    },
    {
        path: "/ghipss/atm/analyze",
        title: "ATM Analyzer",
        type: "link",
        icontype: "education_atom"
    }
];
var ROUTES = [];
//   {
//     path: "/dashboard",
//     title: "Dashboard",
//     type: "link",
//     icontype: "design_app"
//   },
//   {
//     path: "/users",
//     title: "Users",
//     type: "link",
//     icontype: "users_single-02"
//   },
//   {
//     path: "/ghipss",
//     title: "Cards",
//     type: "sub",
//     icontype: "shopping_credit-card",
//     collapse: "pages",
//     isCollapsed: true,
//     children: [
//       { path: "gip", title: "GHLINK", ab: "GHL"},
//       { path: "atm", title: "ATM", ab: "ATM" },
//     ]
//   },
//    {
//      path: "/pages",
//      title: "Pages",
//      type: "sub",
//      icontype: "design_image",
//      collapse: "pages",
//      isCollapsed: true,
//      children: [
//        { path: "pricing", title: "Pricing Page", ab: "PP" },
//        { path: "timeline", title: "Timeline Page", ab: "TP" },
//        { path: "login", title: "Login Page", ab: "LP" },
//        { path: "register", title: "Register Page", ab: "RP" },
//        { path: "lock", title: "Lock Screen Page", ab: "LSP" },
//        { path: "user", title: "User Page", ab: "UP" }
//      ]
//    },
//    {
//      path: "/components",
//      title: "Components",
//      type: "sub",
//      icontype: "education_atom",
//      collapse: "components",
//      isCollapsed: true,
//      children: [
//        { path: "buttons", title: "Buttons", ab: "B" },
//        { path: "grid", title: "Grid System", ab: "GS" },
//        { path: "panels", title: "Panels", ab: "P" },
//        { path: "sweet-alert", title: "Sweet Alert", ab: "SA" },
//        { path: "notifications", title: "Notifications", ab: "N" },
//        { path: "icons", title: "Icons", ab: "I" },
//        { path: "typography", title: "Typography", ab: "T" }
//      ]
//    },
//    {
//      path: "/forms",
//      title: "Forms",
//      type: "sub",
//      icontype: "files_single-copy-04",
//      collapse: "forms",
//      isCollapsed: true,
//      children: [
//        { path: "regular", title: "Regular Forms", ab: "RF" },
//        { path: "extended", title: "Extended Forms", ab: "EF" },
//        { path: "validation", title: "Validation Forms", ab: "VF" },
//        { path: "wizard", title: "Wizard", ab: "W" }
//      ]
//    },
//    {
//      path: "/tables",
//      title: "Tables",
//      type: "sub",
//      icontype: "design_bullet-list-67",
//      collapse: "tables",
//      isCollapsed: true,
//      children: [
//        { path: "regular", title: "Regular Tables", ab: "RT" },
//        { path: "extended", title: "Extended Tables", ab: "ET" },
//        { path: "ngx-datatable", title: "Ngx Datatable", ab: "ND" }
//      ]
//    },
//    {
//      path: "/maps",
//      title: "Maps",
//      type: "sub",
//      icontype: "location_pin",
//      collapse: "maps",
//      isCollapsed: true,
//      children: [
//        { path: "google", title: "Google Maps", ab: "GM" },
//        { path: "fullscreen", title: "Full Screen Map", ab: "FSM" },
//        { path: "vector", title: "Vector Map", ab: "VM" }
//      ]
//    },
//    {
//      path: "/widgets",
//      title: "Widgets",
//      type: "link",
//      icontype: "objects_diamond"
//    },
//    {
//      path: "/charts",
//      title: "Charts",
//      type: "link",
//      icontype: "business_chart-pie-36"
//    },
//    {
//      path: "/calendar",
//      title: "Calendar",
//      type: "link",
//      icontype: "media-1_album",
//    }
// ];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(toastr, router) {
        this.toastr = toastr;
        this.router = router;
        this.menuItems = [];
        this.isCollapsed = true;
        this.main_products = [
            {
                path: "/ghipss",
                title: "Cards & Online",
                type: "sub",
                icontype: "shopping_credit-card",
                collapse: "pages",
                isCollapsed: true,
                children: []
            },
            {
                path: "/nostro",
                title: "Nostro",
                type: "sub",
                icontype: "business_money-coins",
                collapse: "pages",
                isCollapsed: true,
                children: []
            },
            {
                path: "/vostro",
                title: "Vostro",
                type: "sub",
                icontype: "business_money-coins",
                collapse: "pages",
                isCollapsed: true,
                children: []
            },
            {
                path: "/gls",
                title: "Other Streams",
                type: "sub",
                icontype: "business_bank",
                collapse: "pages",
                isCollapsed: true,
                children: []
            }
        ];
        this.children = [];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = [];
        this.menuItems = AdminROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        //this.reloadCurrentRoute()
    };
    SidebarComponent.prototype.reloadCurrentRoute = function () {
        var _this = this;
        var currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            _this.router.navigate([currentUrl]);
        });
    };
    SidebarComponent.prototype.sleep = function (milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if (new Date().getTime() - start > milliseconds) {
                break;
            }
        }
    };
    SidebarComponent.prototype.myFunc = function (event, menuitem) {
        event.preventDefault();
        event.stopPropagation();
        this.sleep(10);
        if (menuitem.isCollapsing === undefined) {
            menuitem.isCollapsing = true;
            // menuitem.isCollapsed = !menuitem.isCollapsed;
            var element = event.target;
            while (element.getAttribute("data-toggle") != "collapse" &&
                element != document.getElementsByTagName("html")[0]) {
                element = element.parentNode;
            }
            element = element.parentNode.children[1];
            if (element.classList.contains("collapse") &&
                !element.classList.contains("show")) {
                element.classList = "before-collapsing";
                var style = element.scrollHeight;
                element.classList = "collapsing";
                setTimeout(function () {
                    element.setAttribute("style", "height:" + style + "px");
                }, 1);
                setTimeout(function () {
                    element.classList = "collapse show";
                    element.removeAttribute("style");
                    menuitem.isCollapsing = undefined;
                }, 350);
            }
            else {
                var style = element.scrollHeight;
                setTimeout(function () {
                    element.setAttribute("style", "height:" + (style + 20) + "px");
                }, 3);
                setTimeout(function () {
                    element.classList = "collapsing";
                }, 3);
                setTimeout(function () {
                    element.removeAttribute("style");
                }, 20);
                setTimeout(function () {
                    element.classList = "collapse";
                    menuitem.isCollapsing = undefined;
                }, 400);
            }
        }
    };
    SidebarComponent.prototype.minimizeSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        else {
            misc.sidebar_mini_active = false;
        }
        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;
            this.showSidebarMessage('Sidebar mini deactivated...');
        }
        else {
            body.classList.add('sidebar-mini');
            this.showSidebarMessage('Sidebar mini activated...');
            misc.sidebar_mini_active = true;
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    SidebarComponent.prototype.showSidebarMessage = function (message) {
        // this.toastr.show(
        //   '<span class="now-ui-icons ui-1_bell-53"></span>', message,
        //   {
        //     timeOut: 4000,
        //     closeButton: true,
        //     enableHtml: true,
        //     toastClass: "alert alert-danger alert-with-icon",
        //     positionClass: "toast-top-right"
        //   }
        // );
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-sidebar",
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/vector-map/vector-map.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/vector-map/vector-map.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #vector-map {\r\n    height: 420px;\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZWN0b3ItbWFwL3ZlY3Rvci1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVjdG9yLW1hcC92ZWN0b3ItbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgI3ZlY3Rvci1tYXAge1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/vector-map/vector-map.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/vector-map/vector-map.component.ts ***!
  \***************************************************************/
/*! exports provided: VectorMapComponent1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorMapComponent1", function() { return VectorMapComponent1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/dist/js/vectormap-data/world.js */ "./node_modules/devextreme/dist/js/vectormap-data/world.js");
/* harmony import */ var devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vector_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector-map.service */ "./src/app/components/vector-map/vector-map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var VectorMapComponent1 = /** @class */ (function () {
    function VectorMapComponent1(service) {
        this.worldMap = devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_1__["world"];
        this.countries = service.getCountries();
        this.customizeTooltip = this.customizeTooltip.bind(this);
        this.customizeLayers = this.customizeLayers.bind(this);
        this.click = this.click.bind(this);
    }
    VectorMapComponent1.prototype.customizeTooltip = function (arg) {
        var name = arg.attribute("name");
        return {
            text: name,
            color: "#FFFFFF",
            fontColor: "#000"
        };
    };
    VectorMapComponent1.prototype.customizeLayers = function (elements) {
        var _this = this;
        elements.forEach(function (element) {
            var country = _this.countries[element.attribute("name")];
            if (country) {
                element.applySettings({
                    color: country.color,
                    hoveredColor: country.color,
                    selectedColor: country.color
                });
            }
            else {
                element.applySettings({
                    color: "#e4e4e4",
                    hoveredColor: "#e4e4e4",
                    selectedColor: "#e4e4e4"
                });
            }
        });
    };
    VectorMapComponent1.prototype.click = function (e) {
        var target = e.target;
        if (target && this.countries[target.attribute("name")]) {
            target.selected(!target.selected());
        }
    };
    VectorMapComponent1.ctorParameters = function () { return [
        { type: _vector_map_service__WEBPACK_IMPORTED_MODULE_2__["Service"] }
    ]; };
    VectorMapComponent1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-vector-map-component",
            template: __importDefault(__webpack_require__(/*! raw-loader!./vector-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vector-map/vector-map.component.html")).default,
            providers: [_vector_map_service__WEBPACK_IMPORTED_MODULE_2__["Service"]],
            styles: [__importDefault(__webpack_require__(/*! ./vector-map.component.css */ "./src/app/components/vector-map/vector-map.component.css")).default]
        }),
        __metadata("design:paramtypes", [_vector_map_service__WEBPACK_IMPORTED_MODULE_2__["Service"]])
    ], VectorMapComponent1);
    return VectorMapComponent1;
}());



/***/ }),

/***/ "./src/app/components/vector-map/vector-map.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/vector-map/vector-map.service.ts ***!
  \*************************************************************/
/*! exports provided: Country, Countries, Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countries", function() { return Countries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var popScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])()
    .domain([100, 3000])
    .range(["#AAAAAA", "#444444"]);
var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());

var Countries = /** @class */ (function () {
    function Countries() {
    }
    return Countries;
}());

var countries = {
    Russia: { color: popScale(300) },
    Canada: { color: popScale(120) },
    China: { color: popScale(1300) },
    "United States": { color: popScale(2920) },
    Brazil: { color: popScale(550) },
    Australia: { color: popScale(760) },
    India: { color: popScale(200) },
    Argentina: { color: popScale(240) },
    Romania: { color: popScale(600) },
    Algeria: { color: popScale(540) }
};
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.getCountries = function () {
        return countries;
    };
    Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/app/guards/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(_router) {
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (sessionStorage.getItem('currentUser') != '' && sessionStorage.getItem('currentUser') != null) {
            //alert(sessionStorage.getItem('currentUser'))
            return true;
        }
        // navigate to login page
        this._router.navigate(['/pages/login']);
        // you can save redirect url so after authing we can move them back to the page they requested
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('html')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('html')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemSidebar);
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-admin-layout",
            template: __importDefault(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./admin-layout.component.css */ "./src/app/layouts/admin-layout/admin-layout.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.css":
/*!***************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(location, router) {
        this.router = router;
        this.isCollapsed = false;
        this.location = location;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) { return listTitle; });
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = false;
            var navbar = document.getElementsByTagName('nav')[0];
            if (_this.isCollapsed) {
                navbar.classList.remove('navbar-transparent');
                navbar.classList.add('bg-white');
            }
            else {
                navbar.classList.add('navbar-transparent');
                navbar.classList.remove('bg-white');
            }
        });
    };
    AuthLayoutComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        for (var i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === "link" &&
                this.listTitles[i].path === titlee) {
                return this.listTitles[i].title;
            }
            else if (this.listTitles[i].type === "sub") {
                for (var j = 0; j < this.listTitles[i].children.length; j++) {
                    var subtitle = this.listTitles[i].path + "/" + this.listTitles[i].children[j].path;
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        return "Now UI Dashboard PRO Angular";
    };
    AuthLayoutComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName('nav')[0];
        if (this.isCollapsed) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('bg-white');
        }
        else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('bg-white');
        }
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-auth-layout",
            template: __importDefault(__webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./auth-layout.component.css */ "./src/app/layouts/auth-layout/auth-layout.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    baseUrl: 'http://localhost:',
    adminUrl: 'http://localhost:8111/admin/api/v1/',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

=========================================================
* Now UI Dashboard Pro Angular - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dOppong-Nkrumah\Documents\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map