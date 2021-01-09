import { Component, OnInit } from '@angular/core';
import { ChangeComponentService } from './services/changeComponent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Eco';
  isPswReset: boolean = false;

  constructor(public changeComp: ChangeComponentService) {}

  ngOnInit() {}  
}
