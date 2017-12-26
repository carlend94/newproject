import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-sto',
  templateUrl: './sto.component.html',
  styleUrls: ['./sto.component.scss']
})
export class StoComponent implements OnInit {
  isClassVisible: boolean = true;
  isClassVisible2: boolean = false;
  isClassVisible3: boolean = false;
  isClassVisible4: boolean = false;
  yourData: string = "Ваши данные";
  isHover: boolean = false;
  constructor( private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  makeActive() {
    this.isClassVisible = true;
    this.isClassVisible2 = false;
    this.isClassVisible3 = false;
    this.isClassVisible4 = false;
    this.yourData = "Ваши данные";
  }
  makeActive2() {
    this.isClassVisible = false;
    this.isClassVisible2 = true;
    this.isClassVisible3 = false;
    this.isClassVisible4 = false;
    this.yourData = "Главная страница";
  }
  makeActive3() {
    this.isClassVisible = false;
    this.isClassVisible2 = false;
    this.isClassVisible3 = true;
    this.isClassVisible4 = false;
    this.yourData = "Заявки на ремонт";

  }

  makeActive4() {
    this.isClassVisible = false;
    this.isClassVisible2 = false;
    this.isClassVisible3 = false;
    this.isClassVisible4 = true;
    this.yourData = "Карта всех СТО";
  }

  onHovering() {
    this.isHover = true;
  }

  logout() {
    this.authenticationService.logout();
  }
  onUnovering() {
    this.isHover = false;
  }
}
