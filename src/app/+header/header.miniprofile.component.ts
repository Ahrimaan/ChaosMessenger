import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-miniprofile',
  templateUrl: 'header.miniprofile.html',
  styleUrls: ['header.miniprofile.css']
})
export class MiniProfileComponent implements OnInit {

 @Input() public Username: string;
 @Input() public Avatar: string;
 @Output() public SignOut = new EventEmitter();

 constructor() {
 }
  ngOnInit(): void { }

  public signOut(){
    this.Username = undefined;
    this.Avatar = undefined;
    this.SignOut.emit();
  }
}