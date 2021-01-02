import { promise } from 'protractor';

export class AuthService {
isAuth=false;
signIn(){
  return new Promise(
    (resolve,reject)=> {
      setTimeout(
          ()=>{
            this.isAuth = true;
            resolve(resolve);
          }, 2000
      );
    }
  );
}
signOut(){
  this.isAuth=false;
}
}
