import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {UserModel} from "../models/user.model";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  error = '';
  form: FormGroup;
  public submitted: boolean;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    fb: FormBuilder) {

  }

  ngOnInit() {

    this.authenticationService.logout();

    this.form = new FormGroup({
      email: new FormControl('', [<any>Validators.required, <any>Validators.minLength(1)]),
      password: new FormControl('', [<any>Validators.required, <any>Validators.minLength(1)])
    });

  }


  submitForm() {
    let data = {
      username: this.form.get('email').value,
      password: this.form.get('password').value,
    };


    this.submitted = true; // set form submit to true

    this.authenticationService.login(data)
      .subscribe(
        data => {
                if (data) {
                  this.router.navigate(['/sto']);
                } else {
                  this.error = 'Username or password is incorrect';
                  this.loading = false;
                }
          // this.router.navigate(['/']);
        },
        error => {
      console.log(error);
        });


  }

}
