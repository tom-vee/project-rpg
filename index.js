// Hero Stats
let xp = 0;
let level = 0;
let attack = 6;
let defence = 10;
let health = 10;
let maxHealth = 10;

// Viper Stats
let viperAttack = 10;
let viperDefence = 20;
let viperHealth = 20;

//Inventory
let healPotions = 3;
let weaponDamage = 2;
let coin = 0;

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
    case 20:
        level += 1;
        alert("Congrats! You're level 2.\n+2 Attack\n+2 Defence\n+10 Health");
        document.getElementById("levelText").innerText = level;
        attack += 2;
        document.getElementById("attackText").innerText = attack;
        defence += 2;
        document.getElementById("defenceText").innerText = defence;
        maxHealth += 10;
        break;
    case 30:
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
        viperHealth += 30;
        document.getElementById("viperHealthText").innerText = viperHealth;
        healPotions += 3;
        document.getElementById("healPotionText").innerText = healPotions;
        coin += 10;
        document.getElementById("coinText").innerText = coin;
        xpUp();
    }
}
function dead() {
if (health < 1){
    alert("You're dead")
}
}
/*
- Hit: attack / weapon damage
- Percentage to hit: (hit * attack)/100
*/
function viperDamage() {
    var hit = attack / weaponDamage;
    var percHit = (hit * attack * weaponDamage);
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