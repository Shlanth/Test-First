//foto profile
const fotoProfile = document.getElementById('foto');
const fotoOver = document.getElementById('foto-over')
const delay = 500;
let timeoutId;

fotoProfile.addEventListener('mouseover', () => {
  fotoOver.style.opacity = '1';
});
fotoProfile.addEventListener('mouseleave', () => {
  fotoOver.style.opacity = '0';
})