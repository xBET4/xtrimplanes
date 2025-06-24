function spawnX() {
  const container = document.getElementById("floating-xs-container");
  const x = document.createElement("span");
  x.textContent = "X";

  const left = Math.random() * 100;
  const delay = Math.random() * 2;
  const duration = 10 + Math.random() * 10;
  const size = 3 + Math.random() * 4; // ahora entre 3 y 7 rem
  const blur = Math.random() < 0.3 ? 'blur(1px)' : 'blur(0px)';
  const opacity = 0.005 + Math.random() * 0.02;

  x.style.left = `${left}%`;
  x.style.fontSize = `${size}rem`;
  x.style.animationDelay = `${delay}s`;
  x.style.animationDuration = `${duration}s`;
  x.style.opacity = opacity;
  x.style.filter = blur;
  x.style.transform = `rotate(${Math.random() * 360}deg)`;

  container.appendChild(x);

  setTimeout(() => {
    container.removeChild(x);
  }, (delay + duration) * 1000);
}

setInterval(spawnX, 600);
