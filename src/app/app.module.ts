import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditsComponent } from './credits/credits.component';
import { OrdersComponent } from './orders/orders.component';
import { DetailComponent } from './detail/detail.component';
import { TransService } from './trans.service';

@NgModule({
  declarations: [
    AppComponent,
    CreditsComponent,
    OrdersComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TransService],
  bootstrap: [AppComponent]
})
export class AppModule { }
