let currPlayer = 0;
let currScore = 0;
const totalScore = [0,0];

const changeTurn = function(player) {
    currPlayer === 0 ? currPlayer = 1 : currPlayer = 0;
    document.getElementById(player).innerHTML = currScore;
    document.getElementById('player1').classList.toggle('player-active');
    document.getElementById('player2').classList.toggle('player-active');
    document.getElementById('roll').disabled = true;
    setTimeout(() => {document.getElementById('roll').disabled = false}, 1000)

}

const checkWin = function(player) {
    if (totalScore[player] >= 100) {
        // document.querySelectorAll('.player').classList.remove('player-active');
        // console.log(document.getElementsByClassName('winner')[0]);
        document.getElementsByClassName('player-active')[0].classList.remove('player-active');
        console.log(player)
        document.getElementById('roll').onclick = restart;
        document.getElementById('roll').textContent = 'Play Again?'
        document.getElementById('hold').classList.add('invisible');
        document.getElementById(`player${player + 1}`).classList.add('winner')
        // should disable the ability to roll
        // untoggle the active player
        // give a special 'winning' class to the winner
        // change the text 'player x' to 'Winner!!!'
        // change the roll button to a 'play again button'
        // hide the hold button and disable it
        return true;

    }
}

const roll = function() {
    //
    const luck = Math.floor(Math.random() * 6) + 1;
    const player = `currScore${currPlayer + 1}`;
    console.log(luck);
    if (luck === 1) {
        currScore = 0;
        // document.getElementById(player).innerHTML = currScore;
        // currPlayer === 0 ? currPlayer = 1 : currPlayer = 0;
        changeTurn(player);

    }
    else {
        currScore += luck;
        document.getElementById(player).innerHTML = currScore;
    }

}
/* you're a butt for snoopin lol jk */

const restart = function() {
    // should reset the game to original conditions
    currPlayer = 0;
    currScore = 0;
    totalScore.forEach((el, i) => totalScore[i] = 0);
    document.querySelector('.winner').classList.remove('winner')
    console.log('game reset');
    document.getElementById('player1').classList.add('player-active');
    document.getElementById('score1').textContent = 0;
    document.getElementById('score2').textContent = 0;
    document.getElementById('roll').onclick = roll;
    document.getElementById('roll').textContent = 'roll'
    document.getElementById('hold').classList.remove('invisible');
}
const hold = function() {
    if (currScore === 0) {
        return true;
    }
    const player = currPlayer + 1;
    totalScore[currPlayer] += currScore;
    currScore = 0;
    
    document.getElementById(`score${player}`).innerHTML = totalScore[currPlayer];
    document.getElementById(`currScore${player}`).innerHTML = 0;
    
    checkWin(currPlayer) === true ? console.log('lol') : changeTurn(`currScore${player}`);

}

document.getElementById('player1').classList.toggle('player-active');
