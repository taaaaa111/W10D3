// combattant équilibré sous tous les bords
import  Character  from "./character.js";
export default class Fighter extends Character {
constructor (hp=12,mana=40,dmg=4, state ="player") {

}

DarkVision(){
    if(this.mana >19){
        this.mana-=20;
        alert(this.mana+ "mana left");
        
        return 5
      }
}
TakeDamage(){

}
dealDamage(){
    return this.dmg
}

}
