import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { provideRoutes } from '@angular/router';
//import { APP_BASE_HREF } from '@angular/common';
import { productListComponent } from './shop/productList.component';
import { DataService } from './shared/dataService';

@NgModule({
  declarations: [
      AppComponent,
      productListComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
      HttpClientModule
  ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
