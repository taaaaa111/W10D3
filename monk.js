// prêtre qui peut se guérir
import  Character  from "./character.js";
export default class Monk extends Character {
    constructor (hp=8,mana=200,dmg=2,state ="player") {
        super(hp,mana,dmg,state);
        this.name = name; 
    }

    Heal(){
        if(this.mana >24){
            this.mana-=25
            console.log("il vous reste "+this.mana+"points de mana");
            this.hp=8;
    }
    TakeDamage(){

    }
    dealDamage(){
        return this.dmg
    }
}

