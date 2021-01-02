import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/User.service';
import { User } from '../User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
   userForm: FormGroup;
   //FormBuilder nous permet de creer des formulaire avec des
   //maniere trés simple
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

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
onSubmitForm(){
   const formValue= this.userForm.value;
   const newUser= new User(
     formValue['firstName'],
     formValue['lastName'],
     formValue['email'],
     formValue['drinkPreference']
   );
   this.userService.addUser(newUser);
   this.router.navigate()

}
}
