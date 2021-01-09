import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Input() public btnCloseText: string = 'x';
  private signupMsg: string;

  constructor(private activeModal: NgbActiveModal, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  SignUp() {
    this.signupMsg = 'Welcome to Registration App!';
    console.log(this.signupMsg);
  }

  closeModal() : void {
    this.activeModal.close();
  }

  cancelSignUp() {
    this.closeModal();
    this.router.navigate(['/']);
  }

  onSignIn() {
    this.closeModal();
    this.modalService.open(SignInComponent);
  }

}
