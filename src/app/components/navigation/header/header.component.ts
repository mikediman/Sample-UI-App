import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from '../../login/sign-in/sign-in.component';
import { SignUpComponent } from '../../login/sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private modalService: NgbModal, private router: Router) {}

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  onClickSignIn() {
    this.modalService.open(SignInComponent);
  }

  onClickSignUp() {
    this.modalService.open(SignUpComponent);
  }

}
