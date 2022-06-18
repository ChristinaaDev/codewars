class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      if (this.lives < 1) throw 'already dead';
      return (this.number === n || !(this.lives--));
    }
  }