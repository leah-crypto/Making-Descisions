let backPack = [];

backPack.puch("sword", "sheild", "food");
console.log(backPack);

backPack.shift("sword"); // to remove from beginning
console.log(backPack);

let sword = backPack.splice(); 
console.log(backPack);

