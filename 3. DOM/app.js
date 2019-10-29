var scores, roundScore, activePlayer, playerOneName, rollDice, holdBtn, playerTwoName, newGame, diceImg, scoreOneDom, scoreTwoDom, roundOneDom, roundTwoDom, helpPanel, settingPanel, helpBtn, settingBtn,playerOnePanel, palyerTwoPanel, backBtn, helpHomeBtn, scoreWaker, customScore, customScoreDom,diceOneContainer,diceTwoContainer,isTwoDice,diceImgTwo,isDoublePenalty,mycheck;

initDoms();
init();
initEvents();
customScore = 100;
diceImg.style.left = '50%';
diceOneContainer.style.backgroundColor = "#EB4D4D";
diceTwoContainer.style.backgroundColor ="#fff";
myCheck.style.display = 'none';
isTwoDice = false;
function init() {
    var checked = document.querySelectorAll('input:checked');
    if (checked.length === 0) {
        isDoublePenalty = false;
        console.log('not checked');
        console.log('no double penalty');
    } else{
        console.log('checked');
        console.log('double penalty');
        isDoublePenalty = true;
    }
   
    
    newGame.style.display='block';
    helpPanel.style.display='none';
    settingPanel.style.display = 'none';
    palyerTwoPanel.style.display = 'block';
    playerOnePanel.style.display = 'block';
    diceImg.style.display = 'none';
    diceImgTwo.style.display = 'none';
    scoreOneDom.textContent = 0;
    scoreTwoDom.textContent = 0;
    roundOneDom.textContent = 0;
    roundTwoDom.textContent = 0;
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    holdBtn.style.display = 'initial';
    rollDice.style.display = 'initial';
    playerOnePanel.classList.remove('winner');
    palyerTwoPanel.classList.remove('winner');
    playerOnePanel.classList.add('active');
    palyerTwoPanel.classList.remove('active');
    playerOneName.innerHTML = 'Player 1';
    playerTwoName.innerHTML = 'Player 2';
}

function initDoms() {
    helpPanel = document.querySelector('.player-help-panel');
    settingPanel = document.querySelector('.player-setting-panel');
    playerOneName = document.querySelector('#name-0');
    rollDice = document.querySelector('.btn-roll');
    holdBtn = document.querySelector('.btn-hold');
    playerTwoName = document.querySelector('#name-1');
    newGame = document.querySelector('.btn-new');
    diceImg = document.querySelector('.dice-one');
    diceImgTwo = document.querySelector('.dice-two');
    scoreOneDom = document.querySelector('#score-0');
    scoreTwoDom = document.querySelector('#score-1');
    roundOneDom = document.querySelector('#current-0');
    roundTwoDom = document.querySelector('#current-1');
    helpBtn = document.querySelector('.game-help');
    settingBtn = document.querySelector('.game-setting');
    playerOnePanel = document.querySelector('.player-0-panel');
    palyerTwoPanel = document.querySelector('.player-1-panel');
    backBtn = document.querySelector('.back-btn');
    helpHomeBtn = document.querySelector('.help-home');
    scoreWaker = document.querySelector('.score-waker');
    customScoreDom = document.querySelector('#custom-score');
    diceOneContainer = document.querySelector('.custom-icon-one');
    diceTwoContainer = document.querySelector('.custom-icon-two');
    myCheck = document.querySelector('.my-check');
    console.log('doms init');
}


function initEvents() {
    rollDice.addEventListener('click', rollingDice);
    holdBtn.addEventListener('click', holdingBtn);
    newGame.addEventListener('click', init);
    playerOneName.addEventListener('click', function () {
        playerOneName.innerHTML = nameChanger();
    });
    playerTwoName.addEventListener('click', function () {
        playerTwoName.innerHTML = nameChanger();
    });
    helpBtn.addEventListener('click',function(){
        
        helpPanel.style.display='block';
        settingPanel.style.display='none';
        playerOnePanel.style.display='none';
        palyerTwoPanel.style.display='none';
        rollDice.style.display = 'none';
        holdBtn.style.display = 'none';
        diceImg.style.display = 'none';
        diceImgTwo.style.display = 'none';
        newGame.style.display = 'none';
        console.log('hey');
    });
    settingBtn.addEventListener('click', function(){
        settingPanel.style.display='block';
        helpPanel.style.display='none';
        playerOnePanel.style.display='none';
        palyerTwoPanel.style.display='none';
        rollDice.style.display = 'none';
        holdBtn.style.display = 'none';
        diceImg.style.display = 'none';
        diceImgTwo.style.display = 'none';
        newGame.style.display = 'none';
        console.log('hey');
    });
    scoreWaker.addEventListener('click', function(){
        customScore = prompt('Enter winning score');
        customScoreDom.innerHTML = customScore;
        console.log('winning score changed to' + customScore);
    });
    backBtn.addEventListener('click', init);
    helpHomeBtn.addEventListener('click', init);
    diceOneContainer.addEventListener('click',function(){
        diceOneContainer.style.backgroundColor = "#EB4D4D";
        diceTwoContainer.style.backgroundColor ="#fff";
        isTwoDice = false;
        myCheck.style.display = 'none';
        diceImg.style.left = '50%';
    });
    diceTwoContainer.addEventListener('click',function(){
        diceTwoContainer.style.backgroundColor = "#EB4D4D";
        diceOneContainer.style.backgroundColor ="#fff";
        myCheck.style.display = 'block';
        isTwoDice = true;
        diceImg.style.left = '58%';
    });
}



function nameChanger() {
    let name = prompt('Enter Player name');
    console.log(name);
    return name;
}


function holdingBtn() {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    if (scores[activePlayer] >= customScore) {
        document.querySelector('#name-' + activePlayer).innerHTML = "WINNER!"
        holdBtn.style.display = 'none';
        rollDice.style.display = 'none';
        diceImg.style.display = 'none';
        diceImgTwo.style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
}else{
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    }
}

function rollingDice() {
    var dice = Math.floor(Math.random() * 6) + 1;
    diceImg.style.display = 'block';
   diceImg.src = 'dice-' + dice + '.png';
   if(isTwoDice){
    var diceTwo = Math.floor(Math.random() * 6) + 1;
      
        diceImgTwo.src = 'dice-' + diceTwo + '.png';
        diceImgTwo.style.display = 'block';
        
    }
    //update the round score and change acrtive player to current player if random number is not 1 else set round score to zero and give turn to other player
    if (dice === 1 || diceTwo === 1) {
       
        roundScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    } else {
        roundScore += dice;
        if(isTwoDice){
            if(isDoublePenalty && (dice === 6 && diceTwo === 6)){
            console.log('double penalty');
            roundScore = 0;
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            }else{
            roundScore += diceTwo;
            }
        }
        
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
}

/*
    TODO
            two 6 in a round loses entire score
            add two dices
            custom score
*/


