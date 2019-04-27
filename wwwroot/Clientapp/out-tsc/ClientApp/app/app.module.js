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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                productListComponent,
                cartComponent
            ],
            imports: [
                BrowserModule,
                //AppRoutingModule
                HttpClientModule
            ],
            providers: [DataService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map