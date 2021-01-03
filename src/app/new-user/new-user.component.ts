import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
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
   hobbiesForm: FormGroup;
   //FormBuilder nous permet de creer des formulaire avec des
   //maniere trés simple
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.hobbiesForm = this.formBuilder.group({
      hobbies: this.formBuilder.array([this.createHobbiesFormGroup()])
    });
  }
  initForm(){
    this.userForm= this.formBuilder.group( {
      //aprés l'import de validator on va rendre ce champs required
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      drinkPreference: ['',Validators.required],
    });
  }
  private createHobbiesFormGroup(): FormGroup {
    return new FormGroup({
      'hobbiesName': new FormControl('', Validators.required),
    })
  }
  public addHobbiesFormGroup() {
    const hobbies = this.hobbiesForm.get('hobbies') as FormArray
    hobbies.push(this.createHobbiesFormGroup())
    console.log("ouuups", this.hobbiesForm.get('hobbies'));
  }
onSubmitForm(){
   const formValue1= this.userForm.value;
   const formValue2= this.hobbiesForm.value;
   const newUser= new User(
     formValue1['firstName'],
     formValue1['lastName'],
     formValue1['email'],
     formValue1['drinkPreference'],
     // cette une condition s'il existe vvous mettez sa valeur sinon vide
     formValue2['hobbies'] ? formValue2['hobbies'] : []
   );
   this.userService.addUser(newUser);
   this.router.navigate(['/users']);
}

/*getHobbies() {
  //on va récupérer forme array sous format de forme array de hobbies
  //à raison de typage
  return this.userForm.get['hobbies'] as FormArray;
}
//pour ajouter un hobby
onAddHobby(){
  const newHobbyControl= this.formBuilder.control(null, Validators.required);
  this.getHobbies().push(newHobbyControl);
}*/
}
