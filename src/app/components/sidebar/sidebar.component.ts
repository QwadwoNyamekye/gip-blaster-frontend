import { Component, OnInit,AfterViewInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from '@angular/router';
var misc:any ={
    sidebar_mini_active: true
}

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
  product?:string
}



//Menu Items

export const AdminROUTES:RouteInfo[]=[
   {
    path: "/dashboard",
    title: "Receiving Dashboard",
    type: "link",
    icontype: "design_app"
  },
  {
   path: "/receiving_dashboard",
   title: "Sending Dashboard",
   type: "link",
   icontype: "design_app"
 },
  {
    path: "/nec",
    title: "NEC",
    type: "link",
    icontype: "users_single-02"
  },
  //  {
  //   path: "/branches",
  //   title: "Branches",
  //   type: "link",
  //   icontype: "business_bank"
  // },
  //  {
  //   path: "/products",
  //   title: "Products",
  //   type: "link",
  //   icontype: "business_briefcase-24"
  // },
  // {
  //   path: "/audit",
  //   title: "Audit Logs",
  //   type: "link",
  //   icontype: "business_briefcase-24"
  // },
  // {
  //   path: "/gl",
  //   title: "General Ledgers",
  //   type: "link",
  //   icontype: "files_box"
  // },
  //  {
  //   path: "/branchlink",
  //   title: "Branch Link",
  //   type: "sub",
  //   icontype: "design_vector",
  //   collapse: "pages",
  //   isCollapsed: true,
  //   children: [
  //          { path: "products", title: "Products", ab: "PRD" },
  //     { path: "gls", title: "General Ledgers", ab: "GLS" }

  //   ]
  // },
]

export const AuthRoutes:RouteInfo[]=[
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
  ]
export const AllRoutes:RouteInfo[]=[
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
      { path: "gip", title: "GHLINK", ab: "GHL"},
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
    children: [
     
    ]
  },
   {
    path: "/gls",
    title: "Other Streams",
    type: "sub",
    icontype: "business_bank",
    collapse: "pages",
    isCollapsed: true,
    children: [
        
    ]
  },
  
]

export const ReconROUTES:RouteInfo[]=[
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
 
]



 export const ROUTES: RouteInfo[] = []

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



@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit ,AfterViewInit{
  public menuItems: any[]=[];
  public isCollapsed = true;
   public main_products:any=[
      {
    path: "/ghipss",
    title: "Cards & Online",
    type: "sub",
    icontype: "shopping_credit-card",
    collapse: "pages",
    isCollapsed: true,
    children: [
      ]
  },
   {
    path: "/nostro",
    title: "Nostro",
    type: "sub",
    icontype: "business_money-coins",
    collapse: "pages",
    isCollapsed: true,
    children: [
      
    ]
  },
  {
    path: "/vostro",
    title: "Vostro",
    type: "sub",
    icontype: "business_money-coins",
    collapse: "pages",
    isCollapsed: true,
    children: [
      
    ]
  },
   {
    path: "/gls",
    title: "Other Streams",
    type: "sub",
    icontype: "business_bank",
    collapse: "pages",
    isCollapsed: true,
    children: [
      
    ]
  }
  ]
  public children:any[]=[]

  user:any
  products
  constructor(private toastr: ToastrService,private router:Router) {
     
  }

  ngOnInit() {
     this.menuItems=[]
 
    this.menuItems = AdminROUTES.filter(menuItem => menuItem);
    
   }

   ngAfterViewInit() {

   
     //this.reloadCurrentRoute()

   }

  reloadCurrentRoute() {
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });
  }
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
  }
  myFunc(event, menuitem) {
    event.preventDefault();
    event.stopPropagation();
    this.sleep(10);
    if (menuitem.isCollapsing === undefined) {
      menuitem.isCollapsing = true;

      // menuitem.isCollapsed = !menuitem.isCollapsed;

      var element = event.target;
      while (
        element.getAttribute("data-toggle") != "collapse" &&
        element != document.getElementsByTagName("html")[0]
      ) {
        element = element.parentNode;
      }
      element = element.parentNode.children[1];

      if (
        element.classList.contains("collapse") &&
        !element.classList.contains("show")
      ) {
        element.classList = "before-collapsing";
        var style = element.scrollHeight;

        element.classList = "collapsing";
        setTimeout(function() {
          element.setAttribute("style", "height:" + style + "px");
        }, 1);
        setTimeout(function() {
          element.classList = "collapse show";
          element.removeAttribute("style");
          menuitem.isCollapsing = undefined;
        }, 350);
      } else {
        var style = element.scrollHeight;
        setTimeout(function() {
          element.setAttribute("style", "height:" + (style + 20) + "px");
        }, 3);
        setTimeout(function() {
          element.classList = "collapsing";
        }, 3);
        setTimeout(function() {
          element.removeAttribute("style");
        }, 20);
        setTimeout(function() {
          element.classList = "collapse";
          menuitem.isCollapsing = undefined;
        }, 400);
      }
    }
  }
  minimizeSidebar(){
    const body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('sidebar-mini')) {
        misc.sidebar_mini_active = true
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
        body.classList.remove('sidebar-mini');
        misc.sidebar_mini_active = false;
        this.showSidebarMessage('Sidebar mini deactivated...');
    } else {
            body.classList.add('sidebar-mini');
            this.showSidebarMessage('Sidebar mini activated...');
            misc.sidebar_mini_active = true;
    }

    // we simulate the window Resize so the charts will get updated in realtime.
    const simulateWindowResize = setInterval(function() {
        window.dispatchEvent(new Event('resize'));
    }, 180);

    // we stop the simulation of Window Resize after the animations are completed
    setTimeout(function() {
        clearInterval(simulateWindowResize);
    }, 1000);
  }

  showSidebarMessage(message){
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
  }
}
