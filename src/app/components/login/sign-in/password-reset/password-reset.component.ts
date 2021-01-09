import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeComponentService } from 'src/app/services/changeComponent.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  
  constructor(private router: Router, public changeComp: ChangeComponentService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.changeComp.moveToResetPassword(false);
    this.router.navigate(['/']);
  }

}
