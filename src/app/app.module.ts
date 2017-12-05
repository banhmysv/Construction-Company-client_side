import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { Ng2PaginationModule } from "ng2-pagination";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Router } from '@angular/router/src/router';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { APP_BASE_HREF } from '@angular/common';

import { ContactService } from "./Service-Api/contact.service";
import { AccountService } from "./Service-Api/account.service";

import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { SingleServiceComponent } from "./Modules/Services/single-service/single-service.component";
import { AboutsComponent } from "./Modules/About_us/abouts/abouts.component";
import { TeamMemberComponent } from "./Modules/About_us/team-member/team-member.component";
import { HeaderComponent } from "./header/header.component";
import { WhyUsComponent } from './Modules/Why-Us/why-us/why-us.component';
import { ContactUsComponent } from './Modules/contact-us/contact-us.component';
import { FormsComponent } from "./Modules/Login/forms/forms.component";
import { SubscriberService } from "./Service-Api/subscriber.service";


const appRoutes: Routes = [

  { path: "home", component: HomeComponent },
  { path: "why-us", component: WhyUsComponent },
  { path: "service", component: SingleServiceComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "login", component: FormsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SingleServiceComponent,
    AboutsComponent,
    TeamMemberComponent,
    HeaderComponent,
    WhyUsComponent,
    FormsComponent,
    ContactUsComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    Ng2PaginationModule

  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },
    ContactService, AccountService,
    SubscriberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
