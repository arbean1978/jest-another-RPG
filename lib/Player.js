const Potion = require('../lib/Potion');

Player.prototype.getStats = function() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  };
Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
};
Player.prototype.isAlive = function() {
    if (this.health === 0) {
      return false;
    }
    return true;
  };

Player.prototype.reduceHealth = function(health) {
    this.health -= health;
  
    if (this.health < 0) {
      this.health = 0;
    }
  };

module.exports = Player;
