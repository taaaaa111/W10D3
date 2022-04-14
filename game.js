// import des elements specifiques à chaque personnage
import Fighter from "./fighter.js";
import Paladin from "./paladin.js";
import Monk from "./monk.js";
import Berzerker from "./berzerker.js";
import Assassin from "./assassin.js";

// il y a 10 tours par défaut, on initialise les personnages et on les nommes
export default class Game {

    constructor(){
        this.turnLeft=10;
        this.fighter=new Fighter("grace");
        this.paladin=new Paladin("ulder");
        this.monk=new Monk("moana");
        this.berzerker= new Berzerker("draven");
        this.assassin=new Assassin("carl");
        this.players=[this.fighter,this.paladin,this.monk,this.berzerker,this.assassin]
      } 
    //   à  chaque New turn on retire un tour
  newturn() {
      this.turnLeft-=1;
    
      let win = function()
        for (var i=0; i<this.players.length; i++){    
        
      }
  }
 
}
    