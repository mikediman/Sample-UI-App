import { Component, ElementRef, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from '../../about/about.component';
import { SignInComponent } from '../../login/sign-in/sign-in.component';
import { SignUpComponent } from '../../login/sign-up/sign-up.component';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  @ViewChild (AboutComponent, { static: true }) getRefFromHeader : AboutComponent;
  constructor(private modalService: NgbModal, private router: Router) {}

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  // onClickHome(element: HTMLElement) {
  //   this.sidenavClose.emit();
  //   element.scrollIntoView({behavior: "smooth"});
  // }

  onClickAbout() {
    this.sidenavClose.emit();
    //this.getRefFromHeader.scrollIntoView({behavior: "smooth"});
    //console.log(this.getRefFromHeader);    
  }

  // onClickContact(element: HTMLElement) {
  //   element.scrollIntoView({behavior: "smooth"});
  // }

  onClickSignIn() {
    this.sidenavClose.emit();
    this.modalService.open(SignInComponent);
  }

  onClickSignUp() {
    this.sidenavClose.emit();
    this.modalService.open(SignUpComponent);
  }

}
