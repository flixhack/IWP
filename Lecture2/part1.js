const findDieValue = 6

let diceRoll=[1,6,6,2,3,4,6];


findDice(diceRoll, compareNum);



function compareNum(num, v) {
    if (num === v){
        return 1;
    }
    else {
        return 0;
    }
}



function findDice(roll, compareNum) {
    for (var i = 0; i < roll.length; i++) {
        if (compareNum(roll[i], findDieValue)=== 1) {
            console.log(i + ": " + roll[i]);
        }
    }
}

// function get6s(roll) {
//   for (var i = 0; i < diceRoll.length; i++) {
//     if (diceRoll[i] === 6) {
    // console.log("[",i, ":", diceRoll[i],"]");
//     }
//   }
// }
