import { Component, OnDestroy, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { interval } from 'rxjs';
import {Subscription} from 'rxjs/Subscription'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// il falait implémenter l'interface Ondestroy pour detruire une component
export class AppComponent implements OnInit, OnDestroy{
  secondes: number;
  counterSubscription: Subscription;
constructor(){}
ngOnInit(){
  const counter =Observable.interval(1000);
  this.counterSubscription=counter.subscribe(
   (value: number) =>{
     this.secondes=value;
   }
   )
}
ngOnDestroy(){
  this.counterSubscription.unsubscribe();
}
}
