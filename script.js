// Menu mobile
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle?.addEventListener('click', () => {
  const isOpen = nav.style.display === 'flex';
  nav.style.display = isOpen ? 'none' : 'flex';
});

// Ano no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Formulário: abre o cliente de e-mail do usuário (mailto)
const form = document.getElementById('contatoForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const nome = encodeURIComponent(data.get('Julio Ramos'));
  const email = encodeURIComponent(data.get('email'));
  const msg = encodeURIComponent(data.get('mensagem'));
  const subject = `Contato do site - ${decodeURIComponent(nome)}`;
  const body = `Nome: ${decodeURIComponent(nome)};
  window.location.href = `mailto:seuemail@exemplo.com?subject=${subject}&body=${body}`;
});
