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
      email: this.form.get('email').value,
      password: this.form.get('password').value,
      password2: this.form.get('password2').value,
    };

    console.log(data);
    // this.bidservice.postBid()
    //   .subscribe(data=> {
    //     if(data.message == 200) {
    //       this.isSend = true;
    //     }
    //   })
    this.registerService.registerUser(data)
      .subscribe(data => {
        console.log(data);
      })
  }

}
