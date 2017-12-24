import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "../services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  emailControl: FormControl;
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: this.emailControl = new FormControl('', [<any>Validators.required, <any>Validators.minLength(1)]),
      password: new FormControl('', [<any>Validators.required, <any>Validators.minLength(1)]),
      password2: new FormControl('', [<any>Validators.required, <any>Validators.minLength(1)])
    });

  }


  registerUser() {
    let data = {
      username: this.form.get('email').value,
      password: this.form.get('password').value,
      password2: this.form.get('password2').value,
    };

    if(this.form.get('password').value == this.form.get('password2').value) {
      this.registerService.registerUser(data)
        .subscribe(data => {
          console.log(data);
        })
    } else {
    alert('Ваши пароли не совпадают')
    }
  }



}
