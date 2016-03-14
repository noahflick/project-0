

var squareA1 = document.getElementById("A1");
var squareA2 = document.getElementById("A2");
var squareA3 = document.getElementById("A3");
var squareB1 = document.getElementById("B1");
var squareB2 = document.getElementById("B2");
var squareB3 = document.getElementById("B3");
var squareC1 = document.getElementById("C1");
var squareC2 = document.getElementById("C2");
var squareC3 = document.getElementById("C3");

var msg = document.getElementById("msg")

var turn = 0
var won = false
var tie
var board = {
  A1: " ", A2: " ", A3: " ",
  B1: " ", B2: " ", B3: " ",
  C1: " ", C2: " ", C3: " "
}

function winCheck(x){
  won =
    ((board.A1 == x && board.A2 == x) && board.A3 == x) ||
    ((board.B1 == x && board.B2 == x) && board.B3 == x) ||
    ((board.C1 == x && board.C2 == x) && board.C3 == x) ||
    ((board.A1 == x && board.B1 == x) && board.C1 == x) ||
    ((board.A2 == x && board.B2 == x) && board.C2 == x) ||
    ((board.A3 == x && board.B3 == x) && board.C3 == x) ||
    ((board.A1 == x && board.B2 == x) && board.C3 == x) ||
    ((board.A3 == x && board.B2 == x) && board.C1 == x)

}

function reset(){
  turn = 0
  won = false
  tie = false
  board = {
  A1: " ", A2: " ", A3: " ",
  B1: " ", B2: " ", B3: " ",
  C1: " ", C2: " ", C3: " "
  }
}

function resetMsg(){
  squareA1.innerHTML = " "
  squareA2.innerHTML = " "
  squareA3.innerHTML = " "
  squareB1.innerHTML = " "
  squareB2.innerHTML = " "
  squareB3.innerHTML = " "
  squareC1.innerHTML = " "
  squareC2.innerHTML = " "
  squareC3.innerHTML = " "
  msg.innerHTML = "New Game- X Player Move!"
}

function button(str){

  var mark = "X"
  var x = document.getElementById(str)
  if(turn % 2 !== 0){
    mark = "O"
  }
  if(won || tie){
    if(msg.innerHTML.indexOf(" Press") == -1){
      msg.innerHTML += " Press 'New Game.'"
      }
      return
  } else if(x.innerHTML == " "){
    x.innerHTML = mark
  } else {
    msg.innerHTML = "Choose another square"; return
  }
  board[str] = mark
  turn ++
  winCheck(mark)
  console.log("won = ", won)
  if(won == true) {
    msg.innerHTML = "Player " + mark + " is the winner!"
  } else if (turn == 9) {
      tie = true
      msg.innerHTML = "Game is a tie."
    } else {
      msg.innerHTML = mark == "O" ? "X player's turn" : "O Player's Turn"
    }
console.log(turn)

}


