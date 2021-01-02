import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
   userForm: FormGroup;
   // FormBuilder nous permet de creer des formulaire avec des
   //maniere trés simple
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }
initForm(){
  this.userForm= this.formBuilder.group( {
    firstName: '',
    lastName: '',
    email: '',
    drinkPreference: ''
  });
}
}
