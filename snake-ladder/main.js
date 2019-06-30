class SnakeLadders {
  constructor() {
    this.Player1 = {
      name: 'Player 1',
      square: 0
    };
    this.Player2 = {
      name: 'Player 2',
      square: 0
    };
    this.turn = 'Player1';
    this.playing = true;
  }

  play(die1, die2) {
    if (!this.playing) {
      console.log('Game over!');
      return;
    }

    if (diceChk(die1, die2)) {
      alert('정육면체 주사위에요...');
      return;
    }

    const num = die1 + die2;
    const turn = this[this.turn];

    const diceResult =
      num + turn.square > 100 ? 100 - (turn.square + num - 100) : num + turn.square;

    if (diceResult === 100) {
      console.log(`${turn.name} Wins!`);
      this.playing = false;
      return;
    }

    const result = findRoot(diceResult);

    if (!result.length) {
      turn.square += num;
    } else {
      turn.square = result[0].end;
    }

    console.log(`${turn.name} is on square ${turn.square}`);
    if (die1 !== die2) {
      playerSwitch(turn.name);
    } else {
      console.log('One more chance!');
    }
  }
}

const s = new SnakeLadders();

const data = [
  {
    start: 2,
    end: 38
  },
  {
    start: 7,
    end: 14
  },
  {
    start: 7,
    end: 14
  },
  {
    start: 8,
    end: 31
  },
  {
    start: 15,
    end: 26
  },
  {
    start: 16,
    end: 6
  },
  {
    start: 21,
    end: 42
  },
  {
    start: 28,
    end: 84
  },
  {
    start: 36,
    end: 44
  },
  {
    start: 46,
    end: 25
  },
  {
    start: 49,
    end: 11
  },
  {
    start: 51,
    end: 67
  },
  {
    start: 62,
    end: 19
  },
  {
    start: 64,
    end: 60
  },
  {
    start: 71,
    end: 91
  },
  {
    start: 74,
    end: 54
  },
  {
    start: 78,
    end: 98
  },
  {
    start: 87,
    end: 94
  },
  {
    start: 92,
    end: 88
  },
  {
    start: 95,
    end: 75
  },
  {
    start: 99,
    end: 80
  }
];

findRoot = num => {
  const result = data.filter(data => data.start === num);
  return result;
};

playerSwitch = name => {
  if (name === 'Player 1') {
    s.turn = 'Player2';
  } else {
    s.turn = 'Player1';
  }
};

diceChk = (die1, die2) => {
  return !(die1 >= 1 && die1 <= 6 && die2 >= 1 && die2 <= 6);
};

submit = () => {
  const die1 = parseInt(document.getElementById('die1').value);
  const die2 = parseInt(document.getElementById('die2').value);
  console.log(`die1 : ${die1}`);
  console.log(`die2 : ${die2}`);
  s.play(die1, die2);
};

randomSubmit = () => {
  const die1 = Math.floor(Math.random() * 6) + 1;
  const die2 = Math.floor(Math.random() * 6) + 1;
  console.log(`Random die1 : ${die1}`);
  console.log(`Random die2 : ${die2}`);
  s.play(die1, die2);
};
