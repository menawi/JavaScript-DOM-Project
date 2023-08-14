// Objective : create a caterpillar game using method chaining
// Status :
// Action : See if correct

// Caterpillar class
function Caterpillar() {
  this.caterpillarComponents = function () {
    const leafComponents = this.leafComponents();
    return {
      caterpillar: document.createElement("div"),
      caterpillarClass: "caterpillar",
      caterpillarParent: leafComponents.leafElement,
      caterpillarColor: "yellowgreen",
      caterpillarSize: { width: "100px", height: "100px" },
    };
  };

  this.leafComponents = function () {
    const leaf = document.createElement("div");
    leaf.classList.add("leaf");
    document.body.appendChild(leaf);
    leaf.style.width = "500px";
    leaf.style.height = "700px";
    leaf.style.position = "absolute";
    leaf.style.left = "0px";
    leaf.style.top = "0px";
    leaf.style.backgroundColor = "darkgreen";
    return {
      leafElement: leaf,
      leafParent: document.body,
    };
  };

  this.appendCaterpillarToLeaf = function () {
    const caterpillar = this.caterpillarComponents().caterpillar;
    const leaf = this.leafComponents().leafElement;
    leaf.appendChild(caterpillar);
    return {
      caterpillarOnLeaf: caterpillar,
    };
  };
}
// ---

// Usage
const CATERPILLAR_INSTANCE = new Caterpillar();
const caterpillar_X =
  CATERPILLAR_INSTANCE.appendCaterpillarToLeaf().caterpillarOnLeaf;
console.log(caterpillar_X);
// ---

// Game Class
function GAME() {
  this.gameState = {
    gameStart: false,
    gameEnd: false,
    gamePaused: false,
  };

  this.Caterpillar = new Caterpillar();

  this.startGame = function () {
    const activeGameState = !this.gameState.gameStart;
    const caterpillar =
      this.Caterpillar.appendCaterpillarToLeaf().caterpillarOnLeaf;
    return {
      gameState: activeGameState,
      startGameAppendedCaterpillar: caterpillar,
    };
  };

  this.endGame = function () {
    const activeGameState = !this.gameState.gameEnd;
    const caterpillar =
      this.Caterpillar.appendCaterpillarToLeaf().caterpillarOnLeaf;
    return {
      gameState: activeGameState,
      startGameAppendedCaterpillar: caterpillar,
    };
  };
}
// ---
