const Potion = require('../lib/Potion');

Player.prototype.getStats = function() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  };

module.exports = Player;
