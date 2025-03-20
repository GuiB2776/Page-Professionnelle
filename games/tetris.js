    /*****************************
    * VARIABLES GLOBALES & CONFIG *
    *****************************/
    const COLS = 10;
    const ROWS = 20;
    const BLOCK_SIZE = 40; // Chaque bloc fait 40px pour des pièces plus grandes

    // Charte graphique : fond noir, blocs en jaune doré avec contour blanc.
    const BLOCK_COLOR = '#FFD700';
    const STROKE_COLOR = '#fff';

    // La grille de jeu (board)
    let board = createMatrix(COLS, ROWS);

    // Définition des formes de Tetrominos (les valeurs non nulles indiquent la présence d'un bloc)
    const tetrominos = {
      'T': [
        [0, 1, 0],
        [1, 1, 1]
      ],
      'O': [
        [1, 1],
        [1, 1]
      ],
      'L': [
        [0, 0, 1],
        [1, 1, 1]
      ],
      'J': [
        [1, 0, 0],
        [1, 1, 1]
      ],
      'I': [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
      ],
      'S': [
        [0, 1, 1],
        [1, 1, 0]
      ],
      'Z': [
        [1, 1, 0],
        [0, 1, 1]
      ]
    };

    let dropCounter = 0;
    let dropInterval = 1000; // Intervalle de chute initial en ms
    let lastTime = 0;
    let requestId;

    // Variables pour le joueur
    let player = {
      pos: {x: 0, y: 0},
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
          if (value !== 0) {
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

    // Gestion de la rotation du joueur : la pièce est remplacée par sa version pivotée
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
          player.matrix = oldMatrix; // Annuler la rotation si aucun ajustement n'est possible
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
          if (m[y][x] !== 0 &&
              (board[y + o.y] &&
               board[y + o.y][x + o.x]) !== 0) {
            return true;
          }
        }
      }
      return false;
    }

    function sweep() {
      let rowCount = 1;
      outer: for (let y = board.length - 1; y >= 0; y--) {
        for (let x = 0; x < board[y].length; x++) {
          if (board[y][x] === 0) {
            continue outer;
          }
        }
        const row = board.splice(y, 1)[0].fill(0);
        board.unshift(row);
        y++;
        player.score += rowCount * 10;
        rowCount *= 2;
      }
    }

    function randomTetromino() {
      const tetrominoKeys = Object.keys(tetrominos);
      const randKey = tetrominoKeys[Math.floor(Math.random() * tetrominoKeys.length)];
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
    const canvas = document.getElementById('tetris');
    const context = canvas.getContext('2d');
    // On définit l'échelle pour que chaque unité corresponde à un bloc de 40px
    context.scale(BLOCK_SIZE, BLOCK_SIZE);

    // Configuration du canvas pour la prochaine pièce
    const canvasNext = document.getElementById('next');
    const contextNext = canvasNext.getContext('2d');
    contextNext.scale(BLOCK_SIZE, BLOCK_SIZE);

    function drawMatrix(matrix, offset, ctx) {
      matrix.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            ctx.fillStyle = BLOCK_COLOR;
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
      drawMatrix(board, {x: 0, y: 0}, context);
      drawMatrix(player.matrix, player.pos, context);
    }

    function drawNext() {
      contextNext.fillStyle = '#000';
      contextNext.fillRect(0, 0, canvasNext.width / BLOCK_SIZE, canvasNext.height / BLOCK_SIZE);
      drawMatrix(nextPiece, {x: 1, y: 1}, contextNext);
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
      switch(event.keyCode) {
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
    });

    /**********************
    * GESTION DU SCORE & LOCALSTORAGE *
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
        tr.innerHTML = `<td>${entry.name}</td><td>${entry.score}</td>`;
        scoresTable.appendChild(tr);
      });
    }

    function saveScore(name, score) {
      let scores = JSON.parse(localStorage.getItem('tetrisScores')) || [];
      scores.push({name, score});
      localStorage.setItem('tetrisScores', JSON.stringify(scores));
      updateLeaderboard();
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
      document.getElementById('menu').style.display = 'none';
      document.getElementById('game').style.display = 'block';
      lastTime = 0;
      dropCounter = 0;
      update();
    }

    function gameOver() {
      cancelAnimationFrame(requestId);
      alert('Game Over ! Votre score : ' + player.score);
      saveScore(player.pseudo, player.score);
      gameStarted = false;
      document.getElementById('menu').style.display = 'flex';
      document.getElementById('game').style.display = 'none';
      updateLeaderboard();
    }

    /**********************
    * INITIALISATION *
    **********************/
    document.getElementById('startBtn').addEventListener('click', startGame);
    updateLeaderboard();