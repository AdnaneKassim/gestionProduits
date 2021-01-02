import {Subject} from 'rxjs/Subject';
export class AppareilService{
  appreilSubject= new Subject<any[]>();
  private appareils=[
    {
      id: 1,
      name:'Machine à laver',
      status: 'eteint'
 },
 { id: 2,
   name:'Television',
      status: 'alumer'
 },
 { id:3,
   name:'Ordinateur',
      status: 'eteint'
 }
];
// cette methode va emite des appareil vers l'ext car il y a private
emiteAppareilSubject(){
  this.appreilSubject.next(this.appareils.slice())
}
getAppareilById(id: number){
const appareil = this.appareils.find(
  (appareilObject) => {
     return appareilObject.id===id
  }
);
return appareil;
}
switchOnAll(){
  for(let appareil of this.appareils){
    appareil.status='alumer';
  }
  this.emiteAppareilSubject();
}
switchOffAll(){
 for(let appareil of this.appareils){
   appareil.status='eteint';
 }
 this.emiteAppareilSubject();
}
switchOnOne(index : number){
this.appareils[index].status='alumer';
this.emiteAppareilSubject();
}
switchOffOne(index:number){
  this.appareils[index].status='eteint';
  this.emiteAppareilSubject();
}
//cette methode permet d'ajouter des appreil en liste
addAppareil(name: string, status: string){
  const appareilObject={
    id: 0,
    name: '',
    status: ''
  };
  appareilObject.name=name;
  appareilObject.status=status;
  appareilObject.id=this.appareils[(this.appareils.length-1)].id+1;
  this.appareils.push(appareilObject);
  this.emiteAppareilSubject();
}

}
