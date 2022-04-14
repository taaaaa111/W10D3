// chevalier puissant et défensif
import  Character  from "./character.js";
export default class Paladin extends Character {
    constructor (hp=16,mana=160,dmg=3,state ="player") {

    }

    healingLighting(){
if(this.mana>39) {
    this.mana-=40
    window.alert(this.mana + "mana left");
if(this.hp> 11) {
    this.hp=16;
}
else {
    this.hp+=5;
}


else {
    window.alert("insufficient mana");
  }
}


    }
    TakeDamage(){

    }
    dealDamage(){

    }
}