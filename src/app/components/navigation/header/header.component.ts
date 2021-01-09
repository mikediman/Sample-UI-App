import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToService } from 'ng2-scroll-to-el';
import { SignInComponent } from '../../login/sign-in/sign-in.component';
import { SignUpComponent } from '../../login/sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  onClickHome(element: HTMLElement) {
    element.scrollIntoView({behavior: "smooth"});
  }

  onClickAbout(element: HTMLElement) {
    element.scrollIntoView({behavior: "smooth"});
  }

  onClickContact(element: HTMLElement) {
    element.scrollIntoView({behavior: "smooth"});
  }

  onClickSignIn() {
    this.modalService.open(SignInComponent);
  }

  onClickSignUp() {
    this.modalService.open(SignUpComponent);
  }

}
