
  // Função para rolar suavemente para o topo da página
  function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Mostrar o botão quando o usuário rolar a página para baixo
  window.onscroll = function() {
    mostrarBotaoTopo();
  };

  function mostrarBotaoTopo() {
    var btn = document.getElementById("btnTopo");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }