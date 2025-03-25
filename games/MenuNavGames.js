document.addEventListener('DOMContentLoaded', () => {
    // Définissez ici le tableau de vos liens.
    // Vous pouvez modifier ce tableau dans ce fichier sans avoir à changer le HTML sur chaque page.
    const gamesLinks = [
      { name: "Mini-Jeux", url: "/games/mini-jeux.html" },
      { name: "- Tetris", url: "/games/tetris.html" },
      { name: "- Snake", url: "/games/snake.html" },
      { name: "- Pac-Man", url: "/games/pacman.html" },
      { name: "Retour au site", url: "https://www.guillaumebullet.fr" }
    ];
  
    // Sélectionnez le conteneur du menu burger
    const nav = document.getElementById('games-burger-menu');
    if (!nav) return;
  
    // Créez l'icône burger
    const burgerIcon = document.createElement('div');
    burgerIcon.classList.add('burger-icon');
    burgerIcon.id = 'games-burger-icon';
    for (let i = 0; i < 3; i++) {
      const span = document.createElement('span');
      burgerIcon.appendChild(span);
    }
    nav.appendChild(burgerIcon);
  
    // Créez la liste des liens
    const ul = document.createElement('ul');
    ul.classList.add('menu-links');
    ul.id = 'games-menu-links';
    gamesLinks.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.url;
      a.textContent = link.name;
      li.appendChild(a);
      ul.appendChild(li);
    });
    nav.appendChild(ul);
  
    // Ajoutez l'effet toggle sur l'icône burger
    burgerIcon.addEventListener('click', () => {
      if (ul.style.display === 'block') {
        ul.style.display = 'none';
      } else {
        ul.style.display = 'block';
      }
    });
  
    // Optionnel : Fermer le menu lorsqu'un lien est cliqué
    const links = ul.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        ul.style.display = 'none';
      });
    });
  });
  