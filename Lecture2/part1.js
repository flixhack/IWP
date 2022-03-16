let diceRoll=[1,6,6,2,3,4,6];



get6s(diceRoll);

function is6(v) {
    if (v === 6){
        return 1;
    }
    else {
        return 0;
    }
}



function get6s(roll) {
    for (var i = 0; i < roll.length; i++) {
        if (is6(roll[i] === 1)) {
            console.log(i, ":", roll[i]);
        }
    }
}

// function get6s(roll) {
//   for (var i = 0; i < diceRoll.length; i++) {
//     if (diceRoll[i] === 6) {
      console.log("[",i, ":", diceRoll[i],"]");
//     }
//   }
// }
