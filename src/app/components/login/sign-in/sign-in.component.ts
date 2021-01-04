import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @Input() public btnCloseText: string = 'x';
  private signinMsg: string;

  constructor(private activeModal: NgbActiveModal, private router: Router) { }

  ngOnInit(): void {
  }

  closeModal() : void {
    this.activeModal.close();
  }

  cancelSignIn() {
    this.closeModal();
    this.router.navigate(['/']);
  }

  SignIn() {
    this.signinMsg = 'Welcome to Registration App!';
    console.log(this.signinMsg);
  }

}
