// Hero Stats
let xp = 0;
let level = 0;
let attack = 6;
let defence = 10;
let health = 10;
let maxHealth = 10;

// Weapon Stats
let weaponDamage = 25;

// Viper Stats
let viperAttack = 10;
let viperDefence = 20;
let viperHealth = 20;

//Inventory
let healPotions = 3;
let coin = 2;
let weapon = 'Dagger';

//Store
let healPotionStockNum = 5;
let epicSwordStockNum = 1;
let swordStockNum = 1;



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
    maxHealth += 10;
    health = maxHealth;
    document.getElementById("healthText").innerText = health;
    levelUp();
}

function levelUp() {
    switch (xp){
    case 10:
        level += 1;
        alert("Congrats! You're level 1.\n+2 Attack\n+2 Defence\n+10 Health\n\n30 coin bonus!");
        document.getElementById("levelText").innerText = level;
        attack += 2;
        document.getElementById("attackText").innerText = attack;
        defence += 2;
        document.getElementById("defenceText").innerText = defence;
        coin += 30;
        document.getElementById("coinText").innerText = coin;
        break;
    case 50:
        level += 1;
        alert("Congrats! You're level 2.\n+2 Attack\n+2 Defence\n+10 Health\n\n30 coin bonus!");
        document.getElementById("levelText").innerText = level;
        attack += 2;
        document.getElementById("attackText").innerText = attack;
        defence += 2;
        document.getElementById("defenceText").innerText = defence;
        coin += 30;
        document.getElementById("coinText").innerText = coin;
        break;
    case 100:
        level += 1;
        alert("Congrats! You're level 3.\n+2 Attack\n+2 Defence\n+10 Health\n\n30 coin bonus!");
        document.getElementById("levelText").innerText = level;
        attack += 2;
        document.getElementById("attackText").innerText = attack;
        defence += 2;
        document.getElementById("defenceText").innerText = defence;
        coin += 30;
        document.getElementById("coinText").innerText = coin;
        break;
    }
}

function viperDeath() {
    if (viperHealth <=0){
        alert("Viper Defeated! - 10XP gained\nYou looted coins and Heal Potions!");
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
    alert("Game Over\nYou're dead\nRefresh the page to replay.");
}
}
/*
- Hit: attack / weapon damage
- Percentage to hit: (hit * attack)/100
*/
function viperDamage() {
    var hit = Math.floor(attack * weaponDamage);
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
    if (coin >= 100 && swordStockNum > 0){
        weapon = 'Sword';
        document.getElementById("weaponText").innerText = weapon;
        weaponDamage += 5;
        document.getElementById("weaponDamageText").innerText = weaponDamage;
        coin -= 100;
        document.getElementById("coinText").innerText = coin;
        swordStockNum -= 1;
        document.getElementById("swordStockText").innerText = swordStockNum;
        alert('You bought a Sword!')
    } else if (coin >= 100 && swordStockNum == 0  ){
        alert('The store is out of Swords')
    } else {
        alert('You do not have enough money!\nGet out of the store!')
    }
}

function buyEpicSword() {
    if (coin >= 250 && epicSwordStockNum > 0){
        weapon = 'Epic Sword';
        document.getElementById("weaponText").innerText = weapon;
        weaponDamage += 15;
        document.getElementById("weaponDamageText").innerText = weaponDamage;
        coin -= 250;
        document.getElementById("coinText").innerText = coin;
        epicSwordStockNum -= 1;
        document.getElementById("epicSwordStockText").innerText = epicSwordStockNum;
        alert('You bought an Epic Sword!')
    } else if (coin >= 250 && epicSwordStockNum == 0  ){
        alert('The store is out of Epic Swords')
    } else {
        alert('You do not have enough money!\nGet out of the store!')
    }
}

function buyPotion() {
    if (coin >= 2 && healPotionStockNum > 0){
        healPotions += 1;
        document.getElementById("healPotionText").innerText = healPotions;
        coin -= 2;
        document.getElementById("coinText").innerText = coin;
        healPotionStockNum -= 1;
        document.getElementById("healPotionStockText").innerText = healPotionStockNum;
    } else if (coin >= 2 && healPotionStockNum === 0  ){
        alert('The store is out of Heal Potions')
    } else {
        alert('You do not have enough money!\nGet out of the store!')
    }
}

