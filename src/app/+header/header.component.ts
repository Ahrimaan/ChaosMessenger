import { AuthenticationService } from '../+shared/authentication.service';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.html'
})
export class HeaderComponent implements OnInit {

  public Username: string = undefined;
  public Avatar: string = undefined;

  constructor(private authService: AuthenticationService) {
    authService.IsAuthenticated.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.Username = this.authService.UserName;
        this.Avatar = this.authService.Avatar;
      } else {
        this.Username = undefined;
        this.Avatar = undefined;
      }
    });
  }

 public signOut(){
   this.Username = undefined;
   this.Avatar = undefined;
   this.authService.signOut();
 }

  ngOnInit(): void { }
}
