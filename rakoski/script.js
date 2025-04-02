document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('open-sidebar');
    const botaofechado = document.getElementById('close-sidebar');
    const barra = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const app = document.getElementById('app');

    botao.addEventListener('click', () => {
        barra.classList.add('open');
      app.classList.add('sidebar-open');
    });
    
    function closeSidebar() {
        barra.classList.remove('open');
      app.classList.remove('sidebar-open');
    }
    
    botaofechado.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
  });
  
  function toggleSubmenu(element) {
    const submenu = element.nextElementSibling;
    if (submenu.classList.contains('hidden')) {
      submenu.classList.remove('hidden');
    } else {
      submenu.classList.add('hidden');
    }
  }