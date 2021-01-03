import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
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
    this.initForm();
  }
  initForm(){
    this.userForm= this.formBuilder.group( {
      //aprés l'import de validator on va rendre ce champs required
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      drinkPreference: ['',Validators.required],
      hobbies: this.formBuilder.array([])
    });
  }
onSubmitForm(){
   const formValue= this.userForm.value;
   const newUser= new User(
     formValue['firstName'],
     formValue['lastName'],
     formValue['email'],
     formValue['drinkPreference'],
     // cette une condition s'il existe vvous mettez sa valeur sinon vide
     formValue['hobbies'] ? formValue['hobbies'] : []
   );
   this.userService.addUser(newUser);
   this.router.navigate(['/users']);
}

getHobbies() {
  //on va récupérer forme array sous format de forme array de hobbies
  //à raison de typage
  return this.userForm.get['hobbies'] as FormArray;
}
//pour ajouter un hobby
onAddHobby(){
  const newHobbyControl= this.formBuilder.control('', Validators.required);
  this.getHobbies().push(newHobbyControl);
}
}
