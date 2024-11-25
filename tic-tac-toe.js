function setup() {
  createCanvas(300, 300);
}
//  8 squares.  0.  1.	2.	3.  4.  5.	6.   7	8.
let squares = ["u", "u", "u", "u", "u", "u", "u", "u", "u"];
let players = ["x", "o"];
let player = 0;
let hovered = -1;

function draw() {
  background(220);

  hovered = -1;

  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) hovered = 0;

  if (mouseX > 100 && mouseX < 200 && mouseY > 0 && mouseY < 100) hovered = 1;

  if (mouseX > 200 && mouseX < 300 && mouseY > 0 && mouseY < 100) hovered = 2;

  if (mouseX > 0 && mouseX < 100 && mouseY > 100 && mouseY < 200) hovered = 3;

  if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) hovered = 4;

  if (mouseX > 200 && mouseX < 300 && mouseY > 100 && mouseY < 200) hovered = 5;

  if (mouseX > 0 && mouseX < 100 && mouseY > 200 && mouseY < 300) hovered = 6;

  if (mouseX > 100 && mouseX < 200 && mouseY > 200 && mouseY < 300) hovered = 7;

  if (mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300) hovered = 8;

  textAlign(CENTER, CENTER);

  //rectangle 0
  fill("white");
  if (hovered == 0 && squares[0] == "u") fill("grey");
  rect(0, 0, 100, 100);

  if (squares[0] == "x") {
	fill("black");
	textSize(40);
	text("X", 50, 50);
  }
  if (squares[0] == "o") {
	fill("black");
	textSize(40);
	text("O", 50, 50);
  }

  //rectangle 1
  fill("white");
  if (hovered == 1 && squares[1] == "u") fill("grey");
  rect(100, 0, 100, 100);

  if (squares[1] == "x") {
	fill("black");
	textSize(40);
	text("X", 150, 50);
  }
  if (squares[1] == "o") {
	fill("black");
	textSize(40);
	text("O", 150, 50);
  }

  //rectangle 2
  fill("white");
  if (hovered == 2 && squares[2] == "u") fill("grey");
  rect(200, 0, 100, 100);

  if (squares[2] == "x") {
	fill("black");
	textSize(40);
	text("X", 250, 50);
  }
  if (squares[2] == "o") {
	fill("black");
	textSize(40);
	text("O", 250, 50);
  }

  //rectangle 3
  fill("white");
  if (hovered == 3 && squares[3] == "u") fill("grey");
  rect(0, 100, 100, 100);
  if (squares[3] == "x") {
	fill("black");
	textSize(40);
	text("X", 50, 150);
  }

  if (squares[3] == "o") {
	fill("black");
	textSize(40);
	text("O", 50, 150);
  }

  //rectangle 4
  fill("white");
  if (hovered == 4 && squares[4] == "u") fill("grey");
  rect(100, 100, 100, 100);

  if (squares[4] == "x") {
	fill("black");
	textSize(40);
	text("X", 150, 150);
  }

  if (squares[4] == "o") {
	fill("black");
	textSize(40);
	text("O", 150, 150);
  }

  //rectangle 5
  fill("white");
  if (hovered == 5 && squares[5] == "u") fill("grey");
  rect(200, 100, 100, 100);

  if (squares[5] == "x") {
	fill("black");
	textSize(40);
	text("X", 250, 150);
  }

  if (squares[5] == "o") {
	fill("black");
	textSize(40);
	text("O", 250, 150);
  }

  //rectangle 6
  fill("white");
  if (hovered == 6 && squares[6] == "u") fill("grey");
  rect(0, 200, 100, 100);

  if (squares[6] == "x") {
	fill("black");
	textSize(40);
	text("X", 50, 250);
  }

  if (squares[6] == "o") {
	fill("black");
	textSize(40);
	text("O", 50, 250);
  }
  //rectangle 7
  fill("white");
  if (hovered == 7 && squares[7] == "u") fill("grey");
  rect(100, 200, 100, 100);
  if (squares[7] == "x") {
	fill("black");
	textSize(40);
	text("X", 150, 250);
  }

  if (squares[7] == "o") {
	fill("black");
	textSize(40);
	text("O", 150, 250);
  }
  //rectangle 8
  fill("white");
  if (hovered == 8 && squares[8] == "u") fill("grey");
  rect(200, 200, 100, 100);

  if (squares[8] == "x") {
	fill("black");
	textSize(40);
	text("X", 250, 250);
  }

  if (squares[8] == "o") {
	fill("black");
	textSize(40);
	text("O", 250, 250);
  }

  checkWinner();
}

function mousePressed() {
  if (squares[hovered] == "u") {
	squares[hovered] = players[player];

	if (player == 0) player = 1;
	else if (player == 1) player = 0;
  }
}

function checkWinner() {
  //horizontal wins
  if (
	squares[0] == squares[1] &&
	squares[1] == squares[2] &&
	squares[0] != "u"
  ) {
	print("Game Over 0");
	print(squares[0] + " wins!");
	noLoop();
  }

  if (
	squares[3] == squares[4] &&
	squares[4] == squares[5] &&
	squares[3] != "u"
  ) {
	print("Game Over 1");
	print(squares[3] + " wins!");
	noLoop();
  }

  if (
	squares[6] == squares[7] &&
	squares[7] == squares[8] &&
	squares[6] != "u"
  ) {
	print("Game Over 2");
	print(squares[6] + " wins!");
	noLoop();
  }

  //Vertical Wins
  if (
	squares[0] == squares[3] &&
	squares[3] == squares[6] &&
	squares[0] != "u"
  ) {
	print("Game Over 3");
	print(squares[0] + " wins!");
	noLoop();
  }

  if (
	squares[1] == squares[4] &&
	squares[4] == squares[7] &&
	squares[1] != "u"
  ) {
	print("Game Over 4");
	print(squares[1] + " wins!");
	noLoop();
  }

  if (
	squares[2] == squares[5] &&
	squares[5] == squares[8] &&
	squares[2] != "u"
  ) {
	print("Game Over 5");
	print(squares[2] + " wins!");
	noLoop();
  }

  //diagonal wins

  if (
	squares[0] == squares[4] &&
	squares[4] == squares[8] &&
	squares[0] != "u"
  ) {
	print("Game Over 6");
	print(squares[0] + " wins!");
	noLoop();
  }

  if (
	squares[2] == squares[4] &&
	squares[4] == squares[6] &&
	squares[6] != "u"
  ) {
	print("Game Over 7");
	print(squares[2] + " wins!");
	noLoop();
  }
}





