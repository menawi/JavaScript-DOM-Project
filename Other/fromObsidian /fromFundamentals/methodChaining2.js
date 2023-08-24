// Objective: create a caterpillar game using method chaining
// Status : Bugged
// Action : See corrected version in methodChaining3.js
function Caterpillar() {
  this.caterpillarComponents = function () {
    return {
      caterpillar: document.createElement("div"),
      caterpillarClass: "caterpillar",
      caterpillarParent: this.leafComponents().leaf,
      caterpillarColor: "yellowgreen",
      caterpillarSize: { width: "100px", height: "100px" },
    };
  };
  this.leafComponents = function () {
    return {
      leaf: document.createElement("div"),
      leafClass: "leaf",
      leafParent: document.body,
      leafSize: { width: "500px", height: "700px" },
      leafPosition: { x: "0px", y: "0px", position: "absolute" },
      leafColor: "darkgreen",
    };
  };

  this.appendLeafToDOM = function () {
    const leaf = this.leafComponents().leaf;
    const DOM = this.leafComponents().leafParent;
    const appendedLeaf = DOM.appendChild(leaf);
    return {
      leafOnDOM: appendedLeaf,
    };
  };

  this.appendCaterpillarToLeaf = function () {
    const caterpillar = this.caterpillarComponents().caterpillar;
    const leaf = this.leafComponents().leaf;
    const appendedCaterpillar = leaf.appendChild(caterpillar);
    return {
      caterpillarOnLeaf: appendedCaterpillar,
    };
  };
  //
  return {
    caterpillarComponents: this.caterpillarComponents,
    leafComponents: this.leafComponents,
    appendLeafToDOM: this.appendLeafToDOM,
    appendCaterpillarToLeaf: this.appendCaterpillarToLeaf,
  };
}

// // Single instance of Caterpillar class
// const CATERPILLAR_INSTANCE = new Caterpillar();
// // Leaf
// const leaf = CATERPILLAR_INSTANCE.leafComponents().leaf;
// const caterpillar = CATERPILLAR_INSTANCE.caterpillarComponents().caterpillar;

function GAME() {
    // 
    this.gameState = {
        gameStart = false,
        gameEnd = false,
        gamePaused = false,
    };
    // 
    this.Caterpillar = new Caterpillar();

    this.startGame = function () {
        const activeGameState = (!this.gameState.gameStart);
        const appendedLeaf = this.Caterpillar.appendLeafToDOM().leafOnDOM;
        const appendedCaterpillar = this.Caterpillar.appendCaterpillarToLeaf().caterpillarOnLeaf;
        const timerStart = this.Timer.startTimer();
        return {
            gameState : activeGameState,
            startGameAppendedLeaf: appendedLeaf,
            startGameAppendedCaterpillar: appendedCaterpillar,
        };
        }

        this.endGame = function () {
            const activeGameState = (!this.gameState.gameEnd);
            const appendedLeaf = this.Caterpillar.removeLeafFromDOM().leafOffDOM;
            const appendedCaterpillar = this.Caterpillar.removeCaterpillarFromLeaf().caterpillarOffLeaf;
            const timerStop = this.Timer.stopTimer();
            const scoreFinal = this.Score.finalScore();
            return {
                gameState : activeGameState,
                startGameAppendedLeaf: appendedLeaf,
                startGameAppendedCaterpillar: appendedCaterpillar,
                gameScore : scoreFinal,
            };
            }


    }
    


