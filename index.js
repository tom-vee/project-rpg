let health = 10;
let maxHealth = 10;
let viperDeathCount = 0

function heroHeal() {
    if (health === maxHealth){
    alert("You're at max health")
    } else {
    health += 1;
    document.getElementById("healthText").innerText = health;
    document.getElementById("healthBar").value = maxHealth;
    }
}

function fight() {
    if (health < 1){
    alert("You're dead")
    } else {
    health -= 1;
    document.getElementById("healthText").innerText = health;
    }
}
