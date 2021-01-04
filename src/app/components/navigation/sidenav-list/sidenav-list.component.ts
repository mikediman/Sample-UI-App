import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from '../../login/sign-in/sign-in.component';
import { SignUpComponent } from '../../login/sign-up/sign-up.component';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor(private modalService: NgbModal, private router: Router) {}

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  onClickSignIn() {
    this.sidenavClose.emit();
    this.modalService.open(SignInComponent);
  }

  onClickSignUp() {
    this.sidenavClose.emit();
    this.modalService.open(SignUpComponent);
  }

}
