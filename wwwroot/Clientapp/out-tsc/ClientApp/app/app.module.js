import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { provideRoutes } from '@angular/router';
//import { APP_BASE_HREF } from '@angular/common';
import { productListComponent } from './shop/productList.component';
import { DataService } from './shared/dataService';
import { cartComponent } from './shop/cart.component';
import { RouterModule } from '@angular/router';
import { shopComponent } from './shop/shop.component';
import { Checkout } from './checkout/checkout.component';
import { loginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
var routes = [
    { path: "", component: shopComponent },
    { path: "checkout", component: Checkout },
    { path: "login", component: loginComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                productListComponent,
                cartComponent,
                shopComponent,
                Checkout,
                loginComponent
            ],
            imports: [
                BrowserModule,
                //AppRoutingModule
                HttpClientModule,
                FormsModule,
                RouterModule.forRoot(routes, {
                    useHash: true,
                    enableTracing: false
                })
            ],
            providers: [DataService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map