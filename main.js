const $arenas = document.querySelector('.arenas');
// const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
};

const ATTACK = ['head', 'body', 'foot'];

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Gun', 'Shotgun', 'Submachine gun'],
    attack: function fight1() {
        console.log(this.name + 'fight...');
    },
    changeHP,
    elHP,
    renderHP
};

const player2 = {
    player: 2,
    name:'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Assault rifle', 'Sniper rifle', 'Machine gun'],
    attack: function fight2() {
        console.log(this.name + 'fight...');
    },
    changeHP,
    elHP,
    renderHP
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);

    $tag.classList.add(className);

    return $tag;
}

function createPlayer(playerObj) { 

    const $player1 = createElement('div', 'player'+playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character'); 
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);  
    
    return $player1;
} 

function changeHP(randomNumber) {
    this.hp -= randomNumber;

    if (this.hp <= 0) {
        this.hp = 0;
    }
}

function elHP() {
    return document.querySelector('.player' + this.player + ' .life');
}

function renderHP() {
    this.elHP.style.width = this.hp + '%'; 
}

function playerWins(name) {
    const $winsTitle = createElement('div', 'loseTitle');
    if (name) {
        $winsTitle.innerText = name + ' wins';
    } else {
        $winsTitle.innerText = 'draw';
    }

    return $winsTitle;
}

function getRandomNumber(number) {
    return Math.ceil(Math.random() * number);
}

function createReloadButton() {
    const $divReloadButton = createElement('div', 'reloadWrap');
    const $reloadButton = createElement('button', 'button');

    $reloadButton.innerText = 'Restart';

    $divReloadButton.appendChild($reloadButton);

    $reloadButton.addEventListener('click', function() {
        window.location.reload();
    })

    $arenas.appendChild($divReloadButton);
}

/* $randomButton.addEventListener('click', function() {
    console.log('####: Click Random Button');
    player1.changeHP(getRandomNumber(20));
    player1.renderHP;

    player2.changeHP(getRandomNumber(20));
    player2.renderHP;
}) */ 

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function enemyAttack() {
    const hit = ATTACK[getRandomNumber(3) - 1];
    const defence = ATTACK[getRandomNumber(3) - 1];
    
    return {
        value: getRandomNumber(HIT[hit]),
        hit,
        defence 
    }
}
  
function playerAttack() {
    const attack = {};

    for (let item of $formFight) {
        if (item.checked && item.name === 'hit') {
            attack.value = getRandomNumber(HIT[item.value]);
            attack.hit = item.value;
    }

        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }

        item.checked = false;
    }

    return attack;
}

function checkResult() {
    if (player1.hp === 0 || player2.hp === 0) {
        createReloadButton();
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWins(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWins(player1.name));
    } else if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWins());
    }
}

$formFight.addEventListener('submit', function(e) {
    e.preventDefault();
    const enemy = enemyAttack();
    const player = playerAttack();
        if (enemy.hit !== player.defence) {
            player1.changeHP(enemy.value);
            player1.renderHP();
        }   

        if (player.hit !== enemy.defence) {
            player2.changeHP(player.value);
            player2.renderHP();    
        }

    checkResult();
})