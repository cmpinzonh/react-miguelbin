export class PlayerProvider {
     
    constructor(){
    this.playerList = require('./players.json');
    }
  
    getAllPlayers() {
      return this.playerList.players;
    }
  
    getPlayerById(id) {
      console.log(this.playerList)
      return this.playerList.players.find(player => player.id === id);
    }
}
