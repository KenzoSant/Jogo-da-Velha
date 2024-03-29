/*const selectBox = document.querySelector(".select-box");
const selectMenu = document.querySelector(".menu");
const selectModo = document.querySelector(".modo");
const selectOpS = selectMenu.querySelector(".option .opS");
const selectOpN = selectMenu.querySelector(".option .opN");
const selectPVP = selectModo.querySelector(".option .pvp");
const selectPVE = selectModo.querySelector(".option .pve");
const selectXBtn = selectBox.querySelector(".option .playerX");
const selectOBtn = selectBox.querySelector(".option .playerO");
const playBoard = document.querySelector(".play-board");
const allBox = document.querySelectorAll("section span");
const players = document.querySelector(".players");
const resultBox = document.querySelector(".result-box");
const wonText = resultBox.querySelector(".won-text");
const replayBtn = resultBox.querySelector("button");
const body = document.querySelector("body");

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";
let playerSign = "X";
let currentPlayer = "player1";
let runBot = true;

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
  };

  selectOBtn.onclick = () => {
    selectBox.style.display = "none";
    playBoard.classList.add("show");
    players.setAttribute("class", "players active player");
    currentPlayer = "player2";
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
    } else if (currentPlayer === "player2" && !runBot) {
      playerSign = "O";
      element.innerHTML = `<i class="${playerOIcon}"></i>`;
      players.classList.add("active");
      element.setAttribute("id", playerSign);
      currentPlayer = "player1";
    }

    selectWinner();
    element.style.pointerEvents = "none";

    if (currentPlayer === "player2" && runBot) {
      setTimeout(() => {
        botMove();
      }, 700);
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

function botMove() {
    let array = [];
    let availableBoxes = [];
  
    for (let i = 0; i < allBox.length; i++) {
      if (allBox[i].childElementCount === 0) {
        availableBoxes.push(i);
      }
      array.push(i);
    }
  
    if (availableBoxes.length > 0) {
      let randomBox;
  
      if (availableBoxes.includes(4)) {
        randomBox = 4;
      } else {
        randomBox = availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
      }
  
      playerSign = "O";
      allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
      allBox[randomBox].setAttribute("id", playerSign);
      selectWinner();
      allBox[randomBox].style.pointerEvents = "none";
      currentPlayer = "player1";
      players.classList.remove("active");
    }
  }

replayBtn.onclick = () => {
  window.location.reload();
};*/

/*const selectBox = document.querySelector(".select-box");
const selectMenu = document.querySelector(".menu");
const selectModo = document.querySelector(".modo");
const selectOpS = selectMenu.querySelector(".option .opS");
const selectOpN = selectMenu.querySelector(".option .opN");
const selectPVP = selectModo.querySelector(".option .pvp");
const selectPVE = selectModo.querySelector(".option .pve");
const selectXBtn = selectBox.querySelector(".option .playerX");
const selectOBtn = selectBox.querySelector(".option .playerO");
const playBoard = document.querySelector(".play-board");
const allBox = document.querySelectorAll("section span");
const players = document.querySelector(".players");
const resultBox = document.querySelector(".result-box");
const wonText = resultBox.querySelector(".won-text");
const replayBtn = resultBox.querySelector("button");
const body = document.querySelector("body");

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";
let playerSign = "X";
let currentPlayer = "player1";
let runBot = true;

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
  };

  selectOBtn.onclick = () => {
    selectBox.style.display = "none";
    playBoard.classList.add("show");
    currentPlayer = "player1";
  }
};

function clickedBox(element) {
    if (element.childElementCount === 0 && currentPlayer === "player1") {
      playerSign = "X";
      element.innerHTML = `<i class="${playerXIcon}"></i>`;
      players.classList.remove("active");
      element.setAttribute("id", playerSign);
      currentPlayer = "player2";
      selectWinner();
      element.style.pointerEvents = "none";
      if (currentPlayer === "player2" && runBot) {
        setTimeout(() => {
          botMove();
        }, 700);
      }
    } else if (element.childElementCount === 0 && currentPlayer === "player2" && !runBot) {
      playerSign = "O";
      element.innerHTML = `<i class="${playerOIcon}"></i>`;
      players.classList.add("active");
      element.setAttribute("id", playerSign);
      currentPlayer = "player1";
      selectWinner();
      element.style.pointerEvents = "none";
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

function botMove() {
    let availableBoxes = [];
    for (let i = 0; i < allBox.length; i++) {
      if (allBox[i].childElementCount === 0) {
        availableBoxes.push(i);
      }
    }
    if (availableBoxes.length > 0) {
      let randomBox = availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
      let selectedBox = allBox[randomBox];
      if (playerSign === "X") {
        playerSign = "O";
        selectedBox.innerHTML = `<i class="${playerOIcon}"></i>`;
      } else {
        playerSign = "X";
        selectedBox.innerHTML = `<i class="${playerXIcon}"></i>`;
      }
      selectedBox.setAttribute("id", playerSign);
      selectWinner();
      selectedBox.style.pointerEvents = "none";
      currentPlayer = "player1";
      players.classList.remove("active");
    }
  }
  

replayBtn.onclick = () => {
  window.location.reload();
};
 */

/*ORIGINAL
const selectBox = document.querySelector(".select-box"),
selectMenu = document.querySelector(".menu"),
selectModo = document.querySelector(".modo"),
selectOpS = selectMenu.querySelector(".option .opS"),
selectOpN = selectMenu.querySelector(".option .opN"),
selectPVP = selectModo.querySelector(".option .pvp"),
selectPVE = selectModo.querySelector(".option .pve"),
selectXBtn = selectBox.querySelector(".option .playerX"),
selectOBtn = selectBox.querySelector(".option .playerO"),
playBoard = document.querySelector(".play-board"), 
allBox = document.querySelectorAll("section span"),
players = document.querySelector(".players"),
resultBox = document.querySelector(".result-box"),
wonText = resultBox.querySelector(".won-text"),
replayBtn = resultBox.querySelector("button"),
body = document.querySelector("body");


window.onload = () => {
    for (let i = 0; i < allBox.length; i++) {
      allBox[i].setAttribute("onclick", "clickedBox(this)");
    }
  
    selectOpS.onclick = () => {
        selectMenu.classList.add("hide");
        selectModo.classList.remove("hide");
       //selectBox.style.display = "block";
    };

    selectOpN.onclick = () => {
        window.close();
    };

    selectPVP.onclick = () => {
        selectModo.classList.add("hide");
        selectBox.style.display = "block";
        runBot = false;

    };
    
    selectPVE.onclick = () => {
        selectModo.classList.add("hide");
        selectBox.style.display = "block"; 
    };

    selectXBtn.onclick = () => {
        selectBox.style.display = "none";
        playBoard.classList.add("show");
    };
  
    selectOBtn.onclick = () => {
        selectBox.style.display = "none";
        playBoard.classList.add("show");
        players.setAttribute("class", "players active player");
    };

};

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";
let playerSign = "X";
let runBot = true;

function clickedBox(element) {

    if(runBot == true){
        if (players.classList.contains("player")) {
            playerSign = "O";
            element.innerHTML = `<i class="${playerOIcon}"></i>`;
            players.classList.remove("active");
            element.setAttribute("id", playerSign);
            //body.style.background = "linear-gradient(to left, #43939E, #3C746B)";
    
        } else {
            playerSign = "X";
            element.innerHTML = `<i class="${playerXIcon}"></i>`;
            players.classList.add("active");
            element.setAttribute("id", playerSign);
            //body.style.background = "linear-gradient(to right, #3C746B, #43939E)";
        }
    }else{
        
        
    }


    selectWinner();
    element.style.pointerEvents = "none";
    let randomDelayTime = ((Math.random() * 1000) + 210).toFixed();
    setTimeout(() => {
      bot(runBot);
    }, randomDelayTime);
}


function bot(runBot){

    if(runBot){
        let array = [];
        playerSign = "O";
        for (let i = 0; i < allBox.length; i++) {
            if(allBox[i].childElementCount == 0){
                array.push(i);
            }
            
        }
        let randomBox = array[Math.floor(Math.random() * array.length)];
        if(array.length > 0){
            if(players.classList.contains("player")){
                playerSign = "X";
                allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
                players.classList.add("active");
                allBox[randomBox].setAttribute("id", playerSign);
                //body.style.background = "linear-gradient(to right, #43939E, #3C746B)";
                
            }else{
                allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
                players.classList.remove("active");
                allBox[randomBox].setAttribute("id", playerSign);
                //body.style.background = "linear-gradient(to left, #3C746B,#43939E)";
            } 
            
            
            selectWinner(); 
        }
        allBox[randomBox].style.pointerEvents = "none";
    }

}

function getClass(idname){
    return document.querySelector(".box"+ idname).id;
}

function checkClass(val1,val2,val3,sign){
    if(getClass(val1) == sign && getClass(val2) == sign && getClass(val3) == sign){
        return true;
    }
}

function selectWinner(){
    if(checkClass(1,2,3,playerSign) || checkClass(4,5,6,playerSign) || checkClass(7,8,9,playerSign) || checkClass(1,4,7,playerSign) || checkClass(2,5,8,playerSign) || checkClass(3,6,9,playerSign) || checkClass(1,5,9,playerSign) || checkClass(3,5,7,playerSign))
    {
        runBot = false;
        bot(runBot);
        setTimeout(()=>{
            playBoard.classList.remove("show");
            resultBox.classList.add("show");
        },700);
        wonText.innerHTML = `Jogador <p>${playerSign}</p> Ganhou!`;
    }else{

        if(getClass(1) != "" && getClass(2) != "" && getClass(3) != "" && getClass(4) != "" && getClass(5) != "" && getClass(6) != "" && getClass(7) != "" && getClass(8) != "" && getClass(9) != ""  ){
            runBot = false;
            bot(runBot);
            setTimeout(()=>{
                playBoard.classList.remove("show");
                resultBox.classList.add("show");
            },700);
            wonText.textContent = `Jogo Empatou!`;
        }

    }
}

replayBtn.onclick = ()=>{
    window.location.reload();
}
*/