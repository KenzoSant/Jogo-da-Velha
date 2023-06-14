const selectBox = document.querySelector(".select-box");
const selectMenu = document.querySelector(".menu");
const selectModo = document.querySelector(".modo");
const selectOpS = selectMenu.querySelector(".option .opS");
const selectOpN = selectMenu.querySelector(".option .opN");
const selectPVP = selectModo.querySelector(".option .pvp");
const selectPVE = selectModo.querySelector(".option .pve");
const selectXBtn = selectBox.querySelector(".option .playerX");
const selectOBtn = selectBox.querySelector(".option .playerO");
const XpointElement = document.querySelector(".Xpoint");
const OpointElement = document.querySelector(".Opoint");
const playBoard = document.querySelector(".play-board");
const allBox = document.querySelectorAll("section span");
const players = document.querySelector(".players");
const resultBox = document.querySelector(".result-box");
const wonText = resultBox.querySelector(".won-text");
const replayBtn = resultBox.querySelector(".replay");
const sairBtn = resultBox.querySelector(".sair");
const body = document.querySelector("body");

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";
let playerSign = "X";
let currentPlayer = "player1";
let startingPlayer = "player1"; 
let runBot = true;
let Xpoints = 0;
let Opoints = 0;

window.onload = () => {
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute("onclick", "clickedBox(this)");
  }

  selectOpS.onclick = () => {
    selectMenu.classList.add("hide");
    selectModo.classList.remove("hide");
  };

  selectOpN.onclick = () => {
    window.close();
  };

  selectPVP.onclick = () => {
    selectModo.classList.add("hide");
    selectBox.style.display = "block";
    currentPlayer = "player1";
    runBot = false;
  };

  selectPVE.onclick = () => {
    selectModo.classList.add("hide");
    selectBox.style.display = "block";
    currentPlayer = "player1";
    runBot = true;
  };

  selectXBtn.onclick = () => {
    selectBox.style.display = "none";
    playBoard.classList.add("show");
    currentPlayer = "player1";
    startingPlayer = "player1"; 
  };

  selectOBtn.onclick = () => {
    selectBox.style.display = "none";
    playBoard.classList.add("show");
    players.setAttribute("class", "players active player");
    currentPlayer = "player2";
    startingPlayer = "player2"; 
    setTimeout(() => {
      bot(runBot); 
    }, 300);
  };
};

function clickedBox(element) {
  if (element.childElementCount === 0) {
    if (currentPlayer === "player1") {
      playerSign = "X";
      element.innerHTML = `<i class="${playerXIcon}"></i>`;
      players.classList.remove("active");
      element.setAttribute("id", playerSign);
      currentPlayer = "player2";
      players.classList.add("active");
    } else if (currentPlayer === "player2" && !runBot) {
      playerSign = "O";
      element.innerHTML = `<i class="${playerOIcon}"></i>`;
      players.classList.add("active");
      element.setAttribute("id", playerSign);
      players.classList.remove("active");
      currentPlayer = "player1";
    }

    selectWinner();
    element.style.pointerEvents = "none";

    if (currentPlayer === "player2" && runBot) {
      if (players.classList.contains("player")) {
        playerSign = "O";
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.remove("active");
        element.setAttribute("id", playerSign);
      } else {
        playerSign = "X";
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        players.classList.add("active");
        element.setAttribute("id", playerSign);
      }
      selectWinner();
      element.style.pointerEvents = "none";
    }

    if (currentPlayer !== "") {
      let randomDelayTime = ((Math.random() * 1000) + 210).toFixed();
      setTimeout(() => {
        bot(runBot);
      }, randomDelayTime);
    }
  }
}

function getClass(idname) {
  return document.querySelector(".box" + idname).id;
}

function checkClass(val1, val2, val3, sign) {
  if (
    getClass(val1) === sign &&
    getClass(val2) === sign &&
    getClass(val3) === sign
  ) {
    return true;
  }
}

function selectWinner() {
  if (
    checkClass(1, 2, 3, playerSign) ||
    checkClass(4, 5, 6, playerSign) ||
    checkClass(7, 8, 9, playerSign) ||
    checkClass(1, 4, 7, playerSign) ||
    checkClass(2, 5, 8, playerSign) ||
    checkClass(3, 6, 9, playerSign) ||
    checkClass(1, 5, 9, playerSign) ||
    checkClass(3, 5, 7, playerSign)
  ) {
    setTimeout(() => {
      playBoard.classList.remove("show");
      resultBox.classList.add("show");
    }, 700);
    wonText.innerHTML = `Jogador <p>${playerSign}</p> Ganhou!`;
    currentPlayer = "";

    if (playerSign === "X") {
      Xpoints++;
      XpointElement.textContent = Xpoints;
    } else {
      Opoints++;
      OpointElement.textContent = Opoints;
    }
  } else {
    const allBoxesFilled = Array.from(allBox).every((box) => {
      return box.getAttribute("id") === "X" || box.getAttribute("id") === "O";
    });

    if (allBoxesFilled) {
      setTimeout(() => {
        playBoard.classList.remove("show");
        resultBox.classList.add("show");
      }, 700);
      wonText.textContent = `Jogo Empatou!`;
      currentPlayer = "";
    }
  }
}

function bot(runBot, element) {
  if (runBot) {
    let array = [];
    playerSign = "O";

    for (let i = 0; i < allBox.length; i++) {
      if (allBox[i].childElementCount == 0) {
        array.push(i);
      }
    }

    // Posicao Rand do Bot
    let randomBox = array[Math.floor(Math.random() * array.length)];
    if (array.length > 0) {
      if (players.classList.contains("player")) {
        playerSign = "X";
        allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
        players.classList.add("active");
        allBox[randomBox].setAttribute("id", playerSign);
      } else {
        allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.remove("active");
        allBox[randomBox].setAttribute("id", playerSign);
      }
      selectWinner();
    }
    allBox[randomBox].style.pointerEvents = "none";
  }
}


replayBtn.onclick = () => {
  // Limpar o tabuleiro
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].innerHTML = "";
    allBox[i].removeAttribute("id");
    allBox[i].style.pointerEvents = "auto";
  }

  // Limpar o resultado
  resultBox.classList.remove("show");

  // Voltar a exibir o tabuleiro
  playBoard.classList.add("show");

  // Alternar jogadores
  if (startingPlayer === "player1") {
    currentPlayer = "player2";
    players.classList.add("active");
    startingPlayer = "player2";
    setTimeout(() => {
      bot(runBot); // Iniciar jogada da IA após um pequeno atraso
    }, 300);
  } else {
    currentPlayer = "player1";
    players.classList.remove("active");
    startingPlayer = "player1";
  }

  // Reativar o botão de seleção de jogador
  selectXBtn.disabled = false;
  selectOBtn.disabled = false;
};

sairBtn.onclick = () => {
  window.location.reload();
};
