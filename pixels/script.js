function createPixelBoard(linhas, colunas) { // cria linhas e colunas 
  var pixelBoard = document.getElementById('pixel-board'); // adiciona ul dentro da section pixel-board
  var idNumber = 1;
  for (let i = 0; i < linhas; i += 1) {
    var ulline = document.createElement('ul');
    ulline.innerHTML = "";
    pixelBoard.appendChild(ulline);

    for (let i = 0; i < colunas; i += 1) { // adiciona li dentro de ul e li recebe classe pixel 
      var illine = document.createElement('li');
      illine.className = "pixel";
      illine.id = "id" + idNumber;
      ulline.appendChild(illine);
      idNumber += 1;
    }
  }
}

var botA = document.getElementById("quad1");
var botB = document.getElementById("quad2");
var botC = document.getElementById("quad3");
var botD = document.getElementById("quad4");

botA.addEventListener("click", botaoA);
botB.addEventListener("click", botaoB);
botC.addEventListener("click", botaoC);
botD.addEventListener("click", botaoD);


function botaoA() {
  console.log("botaoA");
  corAtual = botA;
  botB.className = "color"
  botC.className = "color"
  botD.className = "color"
  corAtual.className = "color selected"

}

function botaoB() {
  console.log("botaoB");
  corAtual = botB;
  botA.className = "color"
  botC.className = "color"
  botD.className = "color"
  corAtual.className = "color selected"
}

function botaoC() {
  console.log("botaoC");
  corAtual = botC;
  botA.className = "color"
  botB.className = "color"
  botD.className = "color"
  corAtual.className = "color selected"
}

function botaoD() {
  console.log("botaoD");
  corAtual = botD;
  botA.className = "color"
  botB.className = "color"
  botC.className = "color"
  corAtual.className = "color selected"
}

var id = document.getElementsByClassName("pixel");


function pintarPixel() {
  for (let i = 0; i < id.length; i += 1) {
    id[i].addEventListener('click', function () {
      apertou(id[i])
    });

  }
}

function apertou(num) {
  console.log("apertou pixel: " + num.id);
  if (botA.className == "color selected") {
    if (num.style.background == "black") {
      console.log("pinta de branco");
      num.style.background = "white"
    } else {
      console.log("pinta de preto");
      num.style.background = "black"
    }
  }
  if (botB.className == "color selected") {
    if (num.style.background == "red") {
      console.log("pinta de branco");
      num.style.background = "white"
    } else {
      console.log("pinta de vermelho");
      num.style.background = "red"
    }
  }
  if (botC.className == "color selected") {
    if (num.style.background == "blue") {
      console.log("pinta de branco");
      num.style.background = "white"
    } else {
      console.log("pinta de azul");
      num.style.background = "blue"
    }
  }
  if (botD.className == "color selected") {
    if (num.style.background == "green") {
      console.log("pinta de branco");
      num.style.background = "white"
    } else {
      console.log("pinta de verde");
      num.style.background = "green"
    }
  }

}

var clearButton = document.getElementById("clear-board")
clearButton.addEventListener('click', function () {
  for (let i = 0; i < id.length; i += 1) {
    id[i].style.background = "white"
  }
})

window.onload = function () {
  createPixelBoard(8,8);
  botA.className = "color selected"
  var corAtual = botA;
  var pixel = document.getElementsByClassName("pixel");
  pintarPixel();
}
