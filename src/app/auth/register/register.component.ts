import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/types/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  register:Register={
    email: "",
    password: "",
    confirmPassword: ""
  }
  ngOnInit(): void {
  }
  submit(){
    console.log(this.register);
  }
}
