// Hero Stats
let xp = 0;
let level = 0;
let attack = 6;
let defence = 10;
let health = 10;
let maxHealth = 10;

// Weapon Stats
let weaponDamage = 2;

// Viper Stats
let viperAttack = 10;
let viperDefence = 20;
let viperHealth = 20;

//Inventory
let healPotions = 3;
let coin = 10;
let weapon = 'Dagger';

//Store
let epicSwordStockText = '1 in stock - Buy';
let swordStockText = '1 in stock - Buy'
let healPotionStockText = '5 in stock - Buy'

function heroHeal() {
    if ( healPotions > 0) {
        if (health === maxHealth){
            alert("You're at max health")
        } else {
            health += 2;
            document.getElementById("healthText").innerText = health;
            healPotions -= 1;
            document.getElementById("healPotionText").innerText = healPotions;
        }} else {
            alert("No health potions left")
        }
    }
    
function xpUp() {
    xp += 10;
    document.getElementById("xpText").innerText= xp;
    levelUp();
}

function levelUp() {
    switch (xp){
    case 10:
        level += 1;
        alert("Congrats! You're level 1.\n+2 Attack\n+2 Defence\n+10 Health");
        document.getElementById("levelText").innerText = level;
        attack += 2;
        document.getElementById("attackText").innerText = attack;
        defence += 2;
        document.getElementById("defenceText").innerText = defence;
        maxHealth += 10;
        break;
    case 30:
        level += 1;
        alert("Congrats! You're level 2.\n+2 Attack\n+2 Defence\n+10 Health");
        document.getElementById("levelText").innerText = level;
        attack += 2;
        document.getElementById("attackText").innerText = attack;
        defence += 2;
        document.getElementById("defenceText").innerText = defence;
        maxHealth += 10;
        break;
    case 60:
        level += 1;
        alert("Congrats! You're level 3.\n+2 Attack\n+2 Defence\n+10 Health");
        document.getElementById("levelText").innerText = level;
        attack += 2;
        document.getElementById("attackText").innerText = attack;
        defence += 2;
        document.getElementById("defenceText").innerText = defence;
        maxHealth += 10;
        break;
    }
}

function viperDeath() {
    if (viperHealth <=0){
        alert("Viper Defeated! - 10XP gained\nYou looted 10 coins and 3 Heal Potions!");
        viperHealth = 30;
        document.getElementById("viperHealthText").innerText = viperHealth;
        healPotions += Math.floor(Math.random()*3);
        document.getElementById("healPotionText").innerText = healPotions;
        coin += Math.floor(Math.random()*10);
        document.getElementById("coinText").innerText = coin;
        xpUp();
    }
}
function dead() {
if (health < 1){
    alert("Game Over\nYou're dead")
}
}
/*
- Hit: attack / weapon damage
- Percentage to hit: (hit * attack)/100
*/
function viperDamage() {
    var hit = Math.floor(attack / weaponDamage);
    var percHit = Math.floor(hit * attack * weaponDamage);
    var per = Math.floor(Math.random() * 101);
    //console.log(hit);
    //console.log(percHit);
    //console.log(per);

    if (per <= percHit) {
    viperHealth -= hit;
    //console.log(viperHealth);
    document.getElementById("viperHealthText").innerText = viperHealth;
    viperDeath();
} else {
    viperHealth += 0;
}
}

function heroDamage() {
    var viperHit = Math.floor(viperAttack / 6);
    var viperPercHit = Math.floor(viperHit * viperAttack * 6);
    var viperPer = Math.floor(Math.random() * 101);
    //  console.log(viperHit);
    //  console.log(viperPercHit);
    //  console.log(viperPer);

    if (viperPer <= viperPercHit) {
    health -= viperHit;
    console.log(health);
    document.getElementById("healthText").innerText = health;
    dead();
} else {
    health += 0;
}
}

function buySword() {
    if (coin >= 10){
        weapon = 'Sword';
        document.getElementById("weaponText").innerText = weapon;
        weaponDamage = 10;
        document.getElementById("weaponDamageText").innerText = weaponDamage;
        coin -= 10;
    } else {
        alert('You do not have enough money!\nGet out of the store!')
    }
}

function buyEpicSword() {
    if (coin >= 100){
        weapon = 'Epic Sword';
        document.getElementById("weaponText").innerText = weapon;
        weaponDamage = 25;
        document.getElementById("weaponDamageText").innerText = weaponDamage;
        coin -= 100;
    } else {
        alert('You do not have enough money!\nGet out of the store!')
    }
}

function buyPotion() {
    if (coin >= 2){
        healPotions += 1;
        document.getElementById("healPotionText").innerText = healPotions;
        coin -= 2;
    } else {
        alert('You do not have enough money!\nGet out of the store!')
    }
}

