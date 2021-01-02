import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AppareilService } from '../services/appareil.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  appareils: any[];
  appareilSubscription: Subscription;
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  lastUpdate = new Promise(
    (resolve , reject) => {
      const date = new Date();
      setTimeout(
      () => {
          resolve(date);
      }, 2000
      );
    });

  ngOnInit(): void{
      this.appareilSubscription=this.appareilService.appreilSubject.subscribe(
        (appareils: any[]) => {
          this.appareils=appareils;
        }
      );
      this.appareilService.emiteAppareilSubject();
  }
  onAllumer(): void{
    this.appareilService.switchOnAll();
  }
  onEteindre(): void{
    this.appareilService.switchOffAll();
  }


}
