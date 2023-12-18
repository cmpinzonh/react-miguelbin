export class PlayerProvider {
     
    constructor(){
    this.playerList = require('./players.json');
    }
  
    getAllPlayers() {
      return this.playerList.players;
    }
  
    getPlayerById(id) {
      return this.playerList.find(player => player.id === id);
    }
}
