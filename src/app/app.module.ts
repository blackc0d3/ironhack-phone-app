import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { PhoneService } from './services/phone.service';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './components/phone-list/phone-list.component';
import { PhoneDetailsComponent } from './components/phone-details/phone-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [
    PhoneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
