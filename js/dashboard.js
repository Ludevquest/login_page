document.addEventListener("DOMContentLoaded", function() {
  // Verificar se o usuário está autenticado
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (!loggedInUser) {
      alert("Você não está autenticado. Redirecionando para a página de login.");
      window.location.href = 'index.html';  // Redirecionar para a página de login
  }

  // Lógica de logout
  document.getElementById("logout").addEventListener("click", function() {
      alert("Você foi desconectado.");
      localStorage.removeItem('loggedInUser');  // Remove o estado de autenticação
      window.location.href = 'index.html';  // Redirecionar para a página de login
  });

  // Inicializar o gráfico usando Chart.js
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'bar', // Tipo de gráfico
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# de Votos',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  // Inicializar a tabela usando DataTables
  $('#myTable').DataTable({
      ajax: {
          url: 'http://localhost:4000/users', // Endpoint para buscar dados
          dataSrc: ''
      },
      columns: [
          { data: 'id' },
          { data: 'name' },
          { data: 'email' }
      ]
  });
});