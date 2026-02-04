const hero = document.querySelector(".hero");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const frontLabel = document.querySelector('.hero-label.left');
const backLabel = document.querySelector('.hero-label.right');

// Função centralizada para alternar os estados visuais
function toggleHeroState(clientX) {
  const midpoint = window.innerWidth / 2;

  if (clientX < midpoint) {
    // Lado esquerdo: vídeo1 e <Front>
    video1.classList.add("active");
    video1.play();
    video2.pause();
    video2.classList.remove("active");

    frontLabel.classList.add("visible");
    backLabel.classList.remove("visible");
  } else {
    // Lado direito: vídeo2 e <Back>
    video2.classList.add("active");
    video2.play();
    video1.pause();
    video1.classList.remove("active");

    backLabel.classList.add("visible");
    frontLabel.classList.remove("visible");
  }
}

// Evento para Desktop (Mouse)
hero.addEventListener("mousemove", (e) => {
  toggleHeroState(e.clientX);
});

// Evento para Mobile (Touch)
hero.addEventListener("touchstart", (e) => {
  // Pega a posição do primeiro toque na tela
  toggleHeroState(e.touches[0].clientX);
});

// Ao sair da área do hero (Desktop)
hero.addEventListener("mouseleave", () => {
  video1.pause();
  video2.pause();
  video1.classList.remove("active");
  video2.classList.remove("active");

  frontLabel.classList.remove("visible");
  backLabel.classList.remove("visible");
});

// Autoplay preventivo ao carregar a página
window.addEventListener("load", () => {
  video1.play().catch(() => {
    console.warn("Autoplay bloqueado pelo navegador. Interação do usuário necessária.");
  });
});