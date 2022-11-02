/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let jonSnowAttack = 25;
let jamieLanAttack = 35;

if(jonSnowAttack > jamieLanAttack){
    console.log("Jon is better than jon");
}else if(jamieLanAttack > jonSnowAttack){
console.log("Jamie has better attack")
}else{
    console.log("its a tie");
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

// jon gets attacked by Jamie
if(jonSnowHealth < jamieLanAttack){
console.log("Jon Snow is dead");
}else{
    jonSnowHealth = jonSnowHealth - jamieLanAttack;
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

let helathKit = 50;

if((jonSnowHealth + helathKit) > 100){
    jonSnowHealth = 100;
}else{
    jonSnowHealth += helathKit;
}

if(jonSnowHealth >= 50){
    jonSnowHealth = 100;
}else{ 
    jonSnowHealth += 50;
}

let coinLandsHead = false;
//let coinLandsTails = true;

if(coinLandsHead === true){
    console.log("They can keep fighting jon looses head")
}else{
    console.log("Jon runs away");
}
//else if(coinsLandsTails === true){
  //  console.log("jon is allows to run away");
//}

for(let i = 1; i < 5; i++){
    jonSnowHealth -= jamieLanAttack;
console.log(`Jon Snows health is ${jonSnowHealth}`);

    if(jonSnowHealth <= 0){
        console.log("Jon snow has been Slain");
   // }else{
       // jonSnowHealth -= jamieLanAttack;
    //    console.log(`jon Snows health is ${jonSnowsHealth}`)
    }
}

