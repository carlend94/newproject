import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sto',
  templateUrl: './sto.component.html',
  styleUrls: ['./sto.component.scss']
})
export class StoComponent implements OnInit {
  isClassVisible: boolean = false;
  isClassVisible2: boolean = false;
  isClassVisible3: boolean = false;
  isClassVisible4: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  makeActive() {
    this.isClassVisible = true;
    this.isClassVisible2 = false;
    this.isClassVisible3 = false;
    this.isClassVisible4 = false;
  }
  makeActive2() {
    this.isClassVisible = false;
    this.isClassVisible2 = true;
    this.isClassVisible3 = false;
    this.isClassVisible4 = false;
  }
  makeActive3() {
    this.isClassVisible = false;
    this.isClassVisible2 = false;
    this.isClassVisible3 = true;
    this.isClassVisible4 = false;

  }

  makeActive4() {
    this.isClassVisible = false;
    this.isClassVisible2 = false;
    this.isClassVisible3 = false;
    this.isClassVisible4 = true;
  }
}
