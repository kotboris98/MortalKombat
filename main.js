const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 10,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Gun', 'Shotgun', 'Submachine gun'],
    attack: function fight1() {
        console.log(this.name + 'fight...');
    }
};

const player2 = {
    player: 2,
    name:'Sonya',
    hp: 20,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Assault rifle', 'Sniper rifle', 'Machine gun'],
    attack: function fight2() {
        console.log(this.name + 'fight...');
    }
};

function createPlayer(player, play) { 

    const $player1 = document.createElement('div');
    $player1.classList.add(player)

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player1);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.style.width = '100%';
    $life.classList.add('life');

    const $name = document.createElement('div');
    $name.innerText = play.name;
    $name.classList.add('name');

    const $character = document.createElement('div'); 
    $character.classList.add('character');

    const $img = document.createElement('img');
    $img.src = play.img;

    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);     
    
} 

createPlayer('player1', player1);
createPlayer('player2', player2);