import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BidService} from "../services/bid.service";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  form: FormGroup;

  constructor(private bidservice: BidService) { }

  ngOnInit() {
    this.form = new FormGroup({
      auto: new FormControl('', [<any>Validators.required, <any>Validators.minLength(1)]),
      model: new FormControl('', [<any>Validators.required, <any>Validators.minLength(1)]),
      years: new FormControl('', [<any>Validators.required, <any>Validators.minLength(1)]),
      whatBroke: new FormControl('', [<any>Validators.required, <any>Validators.minLength(1)]),
      phone: new FormControl('', ),
      email: new FormControl('', ),
    });
  }

  submitNewForm() {
    let data = {
      auto: this.form.get('auto').value,
      model: this.form.get('model').value,
      years: this.form.get('years').value,
      whatBroke: this.form.get('whatBroke').value,
      phone: this.form.get('phone').value,
      email: this.form.get('email').value
    };

    this.bidservice.postBid()
      .subscribe(data=> {
        console.log(data);
      })
  }


}
