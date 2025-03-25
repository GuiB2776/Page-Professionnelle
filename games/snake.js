document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('snake-canvas');
    const ctx = canvas.getContext('2d');
    const box = 20;
    const rows = canvas.height / box;
    const cols = canvas.width / box;
  
    let snake = [{ x: 9, y: 9 }];
    let direction = 'RIGHT';
    let food = randomFood();
    let score = 0;
    let timer;
    let startTime;
    let gameInterval;
    let pseudo = '';
  
    function randomFood() {
      return {
        x: Math.floor(Math.random() * cols),
        y: Math.floor(Math.random() * rows)
      };
    }
  
    function draw() {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      // Snake
      ctx.fillStyle = '#0f0';
      for (let segment of snake) {
        ctx.fillRect(segment.x * box, segment.y * box, box, box);
      }
  
      // Food
      ctx.fillStyle = '#f00';
      ctx.fillRect(food.x * box, food.y * box, box, box);
  
      // Move Snake
      const head = { ...snake[0] };
      if (direction === 'LEFT') head.x--;
      if (direction === 'RIGHT') head.x++;
      if (direction === 'UP') head.y--;
      if (direction === 'DOWN') head.y++;
  
      // Game over conditions
      if (
        head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows ||
        snake.some(s => s.x === head.x && s.y === head.y)
      ) {
        clearInterval(gameInterval);
        clearInterval(timer);
        document.getElementById('gameOverMessage').textContent = `Game Over ! Votre score : ${score}`;
        document.getElementById('gameOverModal').style.display = 'flex';
        saveScore(pseudo, score);
        return;
      }
  
      snake.unshift(head);
  
      if (head.x === food.x && head.y === food.y) {
        score++;
        updateScore();
        food = randomFood();
      } else {
        snake.pop();
      }
    }
  
    function updateScore() {
      document.getElementById('score').textContent = `Score : ${score}`;
    }
  
    function updateTimer() {
      const elapsed = Date.now() - startTime;
      const min = Math.floor(elapsed / 60000);
      const sec = Math.floor((elapsed % 60000) / 1000);
      document.getElementById('timer').textContent = `Temps : ${min}:${sec < 10 ? '0' : ''}${sec}`;
    }
  
    function startGame() {
      const input = document.getElementById('pseudo');
      pseudo = input.value.trim();
      if (!pseudo) return alert('Veuillez entrer un pseudo');
      snake = [{ x: 9, y: 9 }];
      direction = 'RIGHT';
      food = randomFood();
      score = 0;
      updateScore();
      startTime = Date.now();
      timer = setInterval(updateTimer, 1000);
  
      document.getElementById('menu-snake').style.display = 'none';
      document.getElementById('game').style.display = 'flex';
      gameInterval = setInterval(draw, 150);
    }
  
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
      else if (e.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
      else if (e.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
      else if (e.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
    });
  
    document.getElementById('startBtn').addEventListener('click', startGame);
    document.getElementById('closeModal').addEventListener('click', () => {
      document.getElementById('gameOverModal').style.display = 'none';
      document.getElementById('menu-snake').style.display = 'flex';
      document.getElementById('game').style.display = 'none';
      updateLeaderboard();
    });
  
    function saveScore(name, score) {
      let scores = JSON.parse(localStorage.getItem('snakeScores')) || [];
      scores.push({ name, score, date: new Date().toLocaleDateString() });
      localStorage.setItem('snakeScores', JSON.stringify(scores));
    }
  
    function updateLeaderboard() {
      const tbody = document.getElementById('scoresTable');
      tbody.innerHTML = '';
      let scores = JSON.parse(localStorage.getItem('snakeScores')) || [];
      scores.sort((a, b) => b.score - a.score);
      scores.forEach(s => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${s.name}</td><td>${s.score}</td><td>${s.date}</td>`;
        tbody.appendChild(tr);
      });
    }
  
    updateLeaderboard();
  });
  