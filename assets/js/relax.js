window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const background = document.querySelector('.desktop__background');
  const scrollOffset = - scrolled * 0.2;
  background.style.transform = `translate3d(0px, ${scrollOffset}px, 0px)`;
});