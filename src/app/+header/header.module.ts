import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { MiniProfileComponent } from './header.miniprofile.component';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './../+shared/authentication.service';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent,MiniProfileComponent],
  exports: [HeaderComponent, MiniProfileComponent],
  providers: [AuthenticationService]
})
export class HeaderModule { }
