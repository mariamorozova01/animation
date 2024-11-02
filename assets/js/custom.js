anime({
  targets: '.list-unstyled',
  translateX: 250,
  direction: 'normal',
  loop: true,
  easing: 'linear'
});

const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Сделайте анимацию быстрее и уберите смещение
  anime({
    targets: cursor,
    translateX: mouseX - 25, // Центрируем по X
    translateY: mouseY - 25, // Центрируем по Y
    duration: 100, // Уменьшите время анимации для большей скорости
    easing: 'easeOutExpo',
  });
});
