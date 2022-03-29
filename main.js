const $arenas = document.querySelector('.arenas');
// const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');
const $chat = document.querySelector('.chat');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
};

const ATTACK = ['head', 'body', 'foot'];
const LOGS = { 
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.', 
    end: [ 
        'Результат удара [playerWins]: [playerLose] - труп', 
        '[playerLose] погиб от удара бойца [playerWins]', 
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца', 
    ], 
    hit: [ 
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.', 
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.', 
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.', 
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.', 
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.', 
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.', 
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.', 
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.', 
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.', 
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.', 
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.', 
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.', 
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.', 
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.', 
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.', 
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.', 
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.', 
    ], 
    defence: [ 
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.', 
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.', 
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.', 
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.', 
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.', 
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.', 
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.', 
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.' 
    ], 
    draw: 'Ничья - это тоже победа!' 
};

const NAME_MAP = {
    SCORPION: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    KITANA: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    LIUKANG: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    SONYA: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    SUBZERO: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif'
}

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
    this.elHP().style.width = this.hp + '%'; 
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

const getRandomNumber = (min = 1, max = 20) => {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    );
};

const createHTMLElement = (tag = 'div', className, content) => {
    const el = document.createElement(tag);

    if (className) {
        el.classList.add(className);
    }

    if (typeof content === 'string') {
        el.innerHTML = content;
    }

    if (Array.isArray(content)) {
        content.forEach((item) => el.appendChild(item));
    }

    return el;
}

const createPlayerMarkup = (playerName, name, hp, pathToImg) => {
    const lifeEl = createHTMLElement('div', 'life');
    const nameEl = createHTMLElement('div', 'name', name);
    const imgEl = createHTMLElement('img');

    lifeEl.style.width = `${hp}%`;
    imgEl.src = pathToImg;

    const progressBarEl = createHTMLElement('div', 'progressbar', [lifeEl, nameEl]);
    const characterEl = createHTMLElement('div', 'character', [imgEl]);

    return createHTMLElement('div', playerName, [progressBarEl, characterEl]);
};

const createPlayer = (playerID, {name, hp, img}) => {
    const player = createPlayerMarkup(playerID, name, hp, img);

    $arenas.appendChild(player);
};

const renderPlayerWin = (name) => {
    const winnerName = name ? `${name} wins` : 'draw';

    const winTitle = createHTMLElement('div', 'loseTitle', winnerName);

    $arenas.appendChild(winTitle);
};

const createReloadButton = () => {
    const reloadButton = createHTMLElement('button', 'button', 'Reload');
    const reloadButtonWrap = createHTMLElement('div', 'reloadWrap', [reloadButton]);

    $arenas.appendChild(reloadButtonWrap);

    return reloadButton;
};

/* $randomButton.addEventListener('click', function() {
    console.log('####: Click Random Button');
    player1.changeHP(getRandomNumber(20));
    player1.renderHP;

    player2.changeHP(getRandomNumber(20));
    player2.renderHP;
}) */ 

const enemyAttack = () => {
    const length = ATTACK.length - 1;

    const hit = ATTACK[getRandomNumber(0, length)];
    const defence = ATTACK[getRandomNumber(0, length)];
    
    return {
        value: getRandomNumber(HIT[hit]),
        hit,
        defence 
    }
}
  
const playerAttack = () => {
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

const checkResult = () => {
    const reloadButton = createReloadButton();

    reloadButton.addEventListener('click', () => {
        window.location.reload();
    });

    if (player1.hp === 0 || player2.hp === 0) {
        reloadButton.style.display = 'block';

        for (let item of $formFight) {
            item.disabled = true;
        }
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        renderPlayerWin(player2.name);
        generateLogs('end', player1, player2);
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        renderPlayerWin(player1.name);
        generateLogs('end', player1, player2);
    } else if (player1.hp === 0 && player2.hp === 0) {
        renderPlayerWin();
        generateLogs('draw');
    }
}

const generateTimeString = (time) => time < 10 ? `0${time}` : time;

const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedDate = `${generateTimeString(hours)}:${generateTimeString(minutes)}:${generateTimeString(seconds)}`;

    return formattedDate;
};

const generateLogs = (type, player1, player2, damage = 0) => {

    const text = type.includes('start', 'draw')
    ? LOGS[type]
    : LOGS[type][getRandomNumber(0, LOGS[type].length - 1)];

    const formattedDate = getTime();

    let logMessage = '';

    switch (type) {
        case 'start':
            logMessage = text
                .replace('[time]', formattedDate)
                .replace('[player1]', player1.name)
                .replace('[player2]', player2.name);
            break;
        case 'end':
            logMessage = `${formattedDate} - ${text}`
                .replace('[playerWins]', player1.name)
                .replace('[playerLose]', player2.name);
            break;
        case 'hit':
            logMessage = `${formattedDate} - ${text} - ${damage} [${player2.hp}/100]`
                .replace('[playerKick]', player1.name)
                .replace('[playerDefence]', player2.name);
            break;
        case 'defence':
            logMessage = `${formattedDate} - ${text}`
                .replace('[playerDefence]', player1.name)
                .replace('[playerKick]', player2.name);
            break;
        default:
            logMessage = text;
    }

    $chat.insertAdjacentHTML('afterbegin', `<p>${logMessage}</p>`);
}

$formFight.addEventListener('submit', function(e) {
    e.preventDefault();

    const enemy = enemyAttack();
    const attack = playerAttack();

    let damagePlayer1 = 0;
    let damagePlayer2 = 0;

        if (enemy.hit === attack.defence) {
            generateLogs('defence', player2, player1, damagePlayer1);
        } else {
            damagePlayer1 = enemy.value;

            player1.changeHP(damagePlayer1);
            player1.renderHP();

            generateLogs('hit', player2, player1, damagePlayer1);
        }
  
        if (attack.hit !== enemy.defence) {
            generateLogs('defence', player1, player2, damagePlayer1);
        } else {
            damagePlayer2 = attack.value;

            player2.changeHP(damagePlayer2);
            player2.renderHP();  

            generateLogs('hit', player1, player2, damagePlayer2);
        }

    checkResult();
})

createPlayer('player1', player1);
createPlayer('player2', player2);
generateLogs('start', player1, player2);