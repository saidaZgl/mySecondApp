import { Component, OnInit } from '@angular/core';
import { Email } from '../userEmail';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: Email = {
    mail: 'wild@gmail.com',
  };
  constructor() { }

  ngOnInit() {
  }

}
