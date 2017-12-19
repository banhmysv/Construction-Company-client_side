
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { Ng2PaginationModule } from "ng2-pagination";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Router } from '@angular/router/src/router';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { APP_BASE_HREF } from '@angular/common';

import { ManagerAdminComponent } from "./manager-admin.component";
import { ProjectManagementComponent } from "./project-management/project-management.component";
import { ContactManagementComponent } from "./contact-management/contact-management.component";
import { DepartmentManagementComponent } from "./department-management/department-management.component";
import { ProjectService } from '../Service-Api/project.service';

const appRoutes2: Routes = [

  {
    path: 'admin', component: ManagerAdminComponent,
    children: [
        { path: 'contact', component: ContactManagementComponent },
        { path: 'project', component: ProjectManagementComponent },
        { path: 'department', component: DepartmentManagementComponent }
    ]
}

]
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes2),
    Ng2PaginationModule
  ],
  declarations: [
    ProjectManagementComponent,
    ContactManagementComponent,
    DepartmentManagementComponent,
    ManagerAdminComponent
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },
  ProjectService
],
  exports:[ManagerAdminComponent]
})
export class ManagerAdminModule { }
