let board = "";
const boardSize = 12;
for (var d = 0; d < boardSize/2; d++) {
    board = board + " #";
}
for (var i = 0; i < boardSize ; i++) {
  if (i % 2 === 0) {
    console.log(" " + board);
  }
  else {
    console.log(board + " ");
  }
}
