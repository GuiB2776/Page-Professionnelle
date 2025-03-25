/*****************************
 * ATTENTE DE CHARGEMENT DU DOM *
 *****************************/
document.addEventListener('DOMContentLoaded', () => {

  /*****************************
   * VARIABLES GLOBALES & CONFIG *
   *****************************/
  const COLS = 10;
  const ROWS = 20;
  const BLOCK_SIZE = 40; // Chaque bloc fait 40px
  
  // Définition des couleurs spécifiques pour chaque pièce
  const COLORS = {
    'T': '#FF0D72',
    'O': '#0DC2FF',
    'L': '#0DFF72',
    'J': '#F538FF',
    'I': '#FF8E0D',
    'S': '#FFE138',
    'Z': '#3877FF'
  };
  
  // Couleur de contour pour tous les blocs
  const STROKE_COLOR = '#fff';
  
  // La grille de jeu (board)
  let board = createMatrix(COLS, ROWS);
  
  // Définition des formes de Tetrominos (les valeurs non nulles indiquent la présence d'un bloc)
  // Utilisation d'une chaîne de caractères pour représenter le type
  const tetrominos = {
    'T': [
      [0, 'T', 0],
      ['T', 'T', 'T']
    ],
    'O': [
      ['O', 'O'],
      ['O', 'O']
    ],
    'L': [
      [0, 0, 'L'],
      ['L', 'L', 'L']
    ],
    'J': [
      ['J', 0, 0],
      ['J', 'J', 'J']
    ],
    'I': [
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0]
    ],
    'S': [
      [0, 'S', 'S'],
      ['S', 'S', 0]
    ],
    'Z': [
      ['Z', 'Z', 0],
      [0, 'Z', 'Z']
    ]
  };
  
  // Modification pour accélérer la chute et le déplacement des pièces
  let dropInterval = 800; // chute plus rapide
  let dropCounter = 0;
  let lastTime = 0;
  let requestId;
  
  // Chronomètre
  let startTime;
  let timerInterval;
  
  // Variables pour le joueur
  let player = {
    pos: { x: 0, y: 0 },
    matrix: null,
    score: 0,
    pseudo: ''
  };
  
  // La pièce suivante
  let nextPiece = randomTetromino();
  
  /**********************
   * FONCTIONS UTILES *
   **********************/
  function createMatrix(w, h) {
    const matrix = [];
    for (let i = 0; i < h; i++) {
      matrix.push(new Array(w).fill(0));
    }
    return matrix;
  }
  
  function merge(board, player) {
    player.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          board[y + player.pos.y][x + player.pos.x] = value;
        }
      });
    });
  }
  
  // Nouvelle fonction de rotation qui gère les matrices non carrées
  function rotateMatrix(matrix, dir) {
    const N = matrix.length;
    const M = matrix[0].length;
    let newMatrix = [];
    for (let x = 0; x < M; x++) {
      newMatrix[x] = [];
      for (let y = 0; y < N; y++) {
        if (dir > 0) { // Rotation horaire (90°)
          newMatrix[x][y] = matrix[N - y - 1][x];
        } else { // Rotation antihoraire (-90°)
          newMatrix[x][y] = matrix[y][M - x - 1];
        }
      }
    }
    return newMatrix;
  }
  
  // Gestion de la rotation du joueur
  function playerRotate(dir) {
    const oldMatrix = player.matrix;
    const rotated = rotateMatrix(oldMatrix, dir);
    const pos = player.pos.x;
    let offset = 1;
    player.matrix = rotated;
    while (collide(board, player)) {
      player.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > rotated[0].length) {
        player.matrix = oldMatrix;
        player.pos.x = pos;
        return;
      }
    }
  }
  
  function collide(board, player) {
      const m = player.matrix;
      const o = player.pos;
      for (let y = 0; y < m.length; y++) {
        for (let x = 0; x < m[y].length; x++) {
          if (m[y][x] !== 0) {
            // Vérifie les bords : bas, gauche, droite, ou si la case est déjà occupée
            if (y + o.y >= board.length || x + o.x < 0 || x + o.x >= board[0].length || board[y + o.y][x + o.x] !== 0) {
              return true;
            }
          }
        }
      }
      return false;
  }
  
  // Fonction sweep modifiée pour appliquer un bonus si plusieurs lignes sont effacées simultanément
  function sweep() {
    let linesCleared = 0;
    outer: for (let y = board.length - 1; y >= 0; y--) {
      for (let x = 0; x < board[y].length; x++) {
        if (board[y][x] === 0) {
          continue outer;
        }
      }
      board.splice(y, 1);
      board.unshift(new Array(COLS).fill(0));
      linesCleared++;
      y++;
    }
    if (linesCleared > 0) {
      // Bonus : multiplier les points par (nombre de lignes effacées)²
      player.score += 10 * (linesCleared * linesCleared);
    }
  }
  
  function randomTetromino() {
    const tetrominoKeys = Object.keys(tetrominos);
    const randKey = tetrominoKeys[Math.floor(Math.random() * tetrominoKeys.length)];
    // Crée une copie de la matrice et retourne le type de pièce dans chaque cellule
    const matrix = tetrominos[randKey].map(row => row.slice());
    return matrix;
  }
  
  function playerReset() {
    player.matrix = nextPiece;
    player.pos.y = 0;
    player.pos.x = Math.floor(COLS / 2) - Math.floor(player.matrix[0].length / 2);
    nextPiece = randomTetromino();
    if (collide(board, player)) {
      gameOver();
    }
  }
  
  function playerMove(dir) {
    player.pos.x += dir;
    if (collide(board, player)) {
      player.pos.x -= dir;
    }
  }
  
  function playerDrop() {
    player.pos.y++;
    if (collide(board, player)) {
      player.pos.y--;
      merge(board, player);
      sweep();
      updateScore();
      playerReset();
    }
    dropCounter = 0;
  }
  
  /**********************
   * FONCTIONS D'AFFICHAGE *
   **********************/
  // Configuration du canvas principal (jeu)
  const canvas = document.getElementById('canva-tetris');
  const context = canvas.getContext('2d');
  context.scale(BLOCK_SIZE, BLOCK_SIZE);
  
  // Configuration du canvas pour la prochaine pièce
  const canvasNext = document.getElementById('next');
  const contextNext = canvasNext.getContext('2d');
  contextNext.scale(BLOCK_SIZE, BLOCK_SIZE);
  
  function drawMatrix(matrix, offset, ctx) {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          ctx.fillStyle = COLORS[value];
          ctx.fillRect(x + offset.x, y + offset.y, 1, 1);
          ctx.strokeStyle = STROKE_COLOR;
          ctx.lineWidth = 0.05;
          ctx.strokeRect(x + offset.x, y + offset.y, 1, 1);
        }
      });
    });
  }
  
  function draw() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, COLS, ROWS);
    drawMatrix(board, { x: 0, y: 0 }, context);
    drawMatrix(player.matrix, player.pos, context);
  }
  
  function drawNext() {
    // Nombre d'unités du canvas de prévisualisation (ici 160/40 = 4)
    const previewUnits = canvasNext.width / BLOCK_SIZE;
    // Effacer l'arrière-plan
    contextNext.fillStyle = '#000';
    contextNext.fillRect(0, 0, previewUnits, previewUnits);
    // Calculez la largeur et la hauteur de la pièce (en nombre d'unités)
    const piece = nextPiece;
    const pieceWidth = piece[0].length;
    const pieceHeight = piece.length;
    // Calcul du décalage pour centrer la pièce dans un grid previewUnits x previewUnits
    const offsetX = (previewUnits - pieceWidth) / 2;
    const offsetY = (previewUnits - pieceHeight) / 2;
    // Dessinez la pièce avec le décalage calculé
    drawMatrix(piece, { x: offsetX, y: offsetY }, contextNext);
  }
  
  /**********************
   * BOUCLE DE JEU *
   **********************/
  function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
      playerDrop();
    }
    draw();
    drawNext();
    requestId = requestAnimationFrame(update);
  }
  
  /**********************
   * GESTION DU CLAVIER *
   **********************/
  document.addEventListener('keydown', event => {
    if (!gameStarted) return;
    switch (event.keyCode) {
      case 37: // Flèche gauche
        playerMove(-1);
        break;
      case 39: // Flèche droite
        playerMove(1);
        break;
      case 40: // Flèche bas
        playerDrop();
        break;
      case 38: // Flèche haut (rotation)
        playerRotate(1);
        break;
    }
    // Gestion des touches AZERTY (ZQSD)
    switch (event.code) {
      case 'KeyA': // Q pour gauche
        playerMove(-1);
        break;
      case 'KeyD': // D pour droite
        playerMove(1);
        break;
      case 'KeyS': // S pour descendre
        playerDrop();
        break;
      case 'KeyW': // Z pour tourner (rotation)
        playerRotate(1);
        break;
    }
  });
  
  /**********************
   * GESTION DU SCORE, DU CHRONO & LOCALSTORAGE *
   **********************/
  function updateScore() {
    document.getElementById('score').innerText = 'Score : ' + player.score;
  }
  
  function updateLeaderboard() {
    const scoresTable = document.getElementById('scoresTable');
    scoresTable.innerHTML = '';
    let scores = JSON.parse(localStorage.getItem('tetrisScores')) || [];
    scores.sort((a, b) => b.score - a.score);
    scores.forEach(entry => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${entry.name}</td><td>${entry.score}</td><td>${entry.date}</td>`;
      scoresTable.appendChild(tr);
    });
  }
  
  function saveScore(name, score) {
    let scores = JSON.parse(localStorage.getItem('tetrisScores')) || [];
    const date = new Date().toLocaleDateString();
    scores.push({ name, score, date });
    localStorage.setItem('tetrisScores', JSON.stringify(scores));
    updateLeaderboard();
  }
  
  // Chronomètre : met à jour le timer chaque seconde
  function updateTimer() {
    const elapsed = Date.now() - startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    document.getElementById('timer').innerText = 'Temps : ' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
  
  /**********************
   * GESTION DE LA PARTIE *
   **********************/
  let gameStarted = false;
  function startGame() {
    const pseudoInput = document.getElementById('pseudo').value.trim();
    if (!pseudoInput) {
      alert('Veuillez entrer un pseudo');
      return;
    }
    player.pseudo = pseudoInput;
    board = createMatrix(COLS, ROWS);
    player.score = 0;
    updateScore();
    playerReset();
    gameStarted = true;
    // Lancement du chronomètre
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
  
    document.getElementById('menu-tetris').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    lastTime = 0;
    dropCounter = 0;
    update();
  }
  
  function gameOver() {
    cancelAnimationFrame(requestId);
    clearInterval(timerInterval);
    
    // Afficher la popUp personnalisée
    const modal = document.getElementById('gameOverModal');
    const message = document.getElementById('gameOverMessage');
    message.innerText = 'Game Over ! Votre score : ' + player.score;
    modal.style.display = 'flex';
    
    // Attacher un écouteur pour le bouton de fermeture de la PopUp (une seule fois)
    const closeBtn = document.getElementById('closeModal');
    // Supprimez d'abord tout éventuel écouteur existant pour éviter les déclenchements multiples
    closeBtn.replaceWith(closeBtn.cloneNode(true));
    document.getElementById('closeModal').addEventListener('click', () => {
      modal.style.display = 'none';
      saveScore(player.pseudo, player.score);
      gameStarted = false;
      document.getElementById('menu-tetris').style.display = 'flex';
      document.getElementById('game').style.display = 'none';
      updateLeaderboard();
    });
  }

  /***************************************
   * ADAPTATION DYNAMIQUE DE L'AFFICHAGE *
   ***************************************/

  function adjustGameScale() {
    // Tableau de correspondance des hauteurs de viewport avec le scale à appliquer
    const scaleTable = [
      { min: 500,  max: 600,  scale: 0.6 },
      { min: 600,  max: 700,  scale: 0.7 },
      { min: 700,  max: 800,  scale: 0.8 },
      { min: 800,  max: 900,  scale: 0.9 },
      { min: 900,  max: 1000, scale: 1.0 },
      { min: 1000, max: Infinity, scale: 1.2 }
    ];
    
    const viewportHeight = window.innerHeight;
    let chosenScale = 1; // Scale par défaut
  
    // Parcours du tableau pour trouver la fourchette correspondant à la hauteur du viewport
    for (const entry of scaleTable) {
      if (viewportHeight >= entry.min && viewportHeight < entry.max) {
        chosenScale = entry.scale;
        break;
      }
    }
    
    // Applique le scale à la zone de jeu
    const gameDiv = document.getElementById('game');
    if (gameDiv) {
      // On fixe l'origine en haut au centre
      gameDiv.style.transformOrigin = "top center";
      gameDiv.style.transform = `scale(${chosenScale})`;
      // Pour que la marge visuelle reste de 50px en haut et en bas,
      // on ajuste la marge en "inverse" du scale
      gameDiv.style.marginTop = `${1 / chosenScale}px`;
      gameDiv.style.marginBottom = `${1 / chosenScale}px`;
    }
  }
  
  // Appeler la fonction au chargement et lors du redimensionnement
  window.addEventListener('resize', adjustGameScale);
  adjustGameScale();
  
  /**********************
   * INITIALISATION *
   **********************/
  document.getElementById('startBtn').addEventListener('click', startGame);
  updateLeaderboard();
});
