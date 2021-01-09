import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChangeComponentService } from 'src/app/services/changeComponent.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @Input() public btnCloseText: string = 'x';
  @Output() public pwsReset = new EventEmitter<boolean>();
  isReset:boolean = false;
  private signinMsg: string;  

  constructor(private activeModal: NgbActiveModal, private router: Router, private changeComp: ChangeComponentService) { }

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

  onPasswordReset() {
    this.closeModal();
    this.isReset = true;
    this.changeComp.moveToResetPassword(this.isReset);
  }

}
