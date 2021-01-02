import { Component,Input, OnInit } from '@angular/core';
import {AppareilService} from "../services/appareil.service";
@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
@Input() appareilName: string;
@Input() appareilStatus: string;
@Input() indexOfAppareil: number;
@Input() id: number;
//il faut injecter le service
  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {

  }
  getStatus(){
    return this.appareilStatus;
  }
  getColor(){
    if(this.appareilStatus=='alumer')
    return 'green';
    if(this.appareilStatus=='eteint')
    return 'red';
  }
  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
  
}