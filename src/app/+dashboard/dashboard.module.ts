import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router,Route } from '@angular/router';
import { AuthenticationService } from './../+shared/authentication.service';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [AuthenticationService]
})
export class DashboardModule {
  
 }