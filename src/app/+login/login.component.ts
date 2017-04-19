import { AuthenticationService } from '../+shared/authentication.service';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.html',
  styleUrls: ['login.css']
})
export class LoginComponent implements OnInit {
 constructor(private authService: AuthenticationService) {

 }
  ngOnInit(): void {}

  public loginGoogle() {
    this.authService.authGoogle();
  };
}
