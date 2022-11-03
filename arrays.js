let backPack = [];

backPack.push("sword", "sheild", "food");
console.log(backPack);

backPack.shift("sword"); // to remove from beginning
console.log(backPack);

let sword = backPack.splice(0, 1); //splice for editing, slice for copying

//sword.push(backpack.shift());
//console.log(sword);

let furCoat = "Fur coat";

backPack.push(furCoat);
console.log(backPack);

backPack.pop();
console.log(backPack);

backPack.push("flint", "knife", "blanket");

let backPack2 = backPack.splice(2, 4);

let itemCount = backPack.length();

for (i = 0; i < backPack.length; i++) {
  console.log(backPack[i]);
}

for (i = 0; i < backPack2.length; i++) {
  console.log(backPack[i]);
}

console.log(`Backpack Count: ${itemCount}`);
console.log(`BackPack2: ${backPack2}`);
console.log(`Backpack: ${backPack}`);

//console.log(backPack2[0]);

let guessMe = 54;

while (guessMe < 100) {
  // console.log('----------');
  if (guessMe % 4 == 0 || guessMe % 5 == 0) {
    // console.log('guessMe is divisible by 4 or 5.  Added 25.');
    guessMe += 25;
  } else if (guessMe % 3 == 0) {
    // console.log('guessMe is divisible by 3.  Subtracted 27.');
    guessMe -= 27;
  } else {
    // console.log('Added 3.');
    guessMe += 3;
  }
  guessMe += 22;
  // console.log(`guessMe is now ${guessMe}.`);
}
console.log(guessMe);
