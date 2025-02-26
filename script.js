const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (bar){
  bar.addEventListener('click', () => {
    navbar.classList.add('active');
  })
}
if (close){
  close.addEventListener('click', () => {
    navbar.classList.remove('active');
  })
}

document.getElementById('search').addEventListener('click', function (e) {
  e.preventDefault();
  const input = document.getElementById('searchInput');
  input.style.display = input.style.display === 'none' ? 'inline-block' : 'none';
  if (input.style.display === 'inline-block') {
    input.focus();
  }
});
