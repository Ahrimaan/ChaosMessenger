import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './../+shared/authentication.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthenticationService]
})
export class LoginModule { }
