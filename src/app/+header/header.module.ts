import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './../+shared/authentication.service';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [AuthenticationService]
})
export class HeaderModule { }
