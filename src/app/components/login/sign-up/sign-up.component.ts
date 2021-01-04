import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Input() public btnCloseText: string = 'x';
  private signupMsg: string;

  constructor(private activeModal: NgbActiveModal, private router: Router) { }

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

}
