const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Gun', 'Shotgun', 'Submachine gun'],
    attack: function fight1() {
        console.log(this.name + 'fight...');
    }
};

const player2 = {
    player: 2,
    name:'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Assault rifle', 'Sniper rifle', 'Machine gun'],
    attack: function fight2() {
        console.log(this.name + 'fight...');
    }
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

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= getRandomNumber(20);

    if (player.hp <= 0) {
        player.hp = 0;
        $randomButton.disabled = true;

        if (player1.hp === 0 && player2.hp > 0) {
            $arenas.appendChild(playerWins(player2.name));
        } else {
            $arenas.appendChild(playerWins(player1.name));
        }
    }

    $playerLife.style.width = player.hp + '%';
}

function playerWins(name) {
    const $winsTitle = createElement('div', 'loseTitle');
    $winsTitle.innerText = name + ' wins';

    return $winsTitle;
}

function getRandomNumber(number) {
    return Math.ceil(Math.random() * number);
}

$randomButton.addEventListener('click', function() {
    console.log('####: Click Random Button');
    changeHP(player1);
    changeHP(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
