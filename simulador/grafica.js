function pintarPrueba(){
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
      ];
    
      const data = {
        labels: labels,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      };
    
      const config = {
        type: 'line',
        data: data,
        options: {
            animation: true
        }
      };
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );

}

function pintar(){

    var nombres = []

    for (var i = 0; i < lista.length; i++) {
            nombres.push('' + i)
            }

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart
    (ctx, 
        {
    type: 'line',
    data:{
    datasets: [{
        data: lista,

        backgroundColor: ['#111'],
        label: 'index del dato:'}],
        labels:nombres},
    options: {responsive: false}
    });
}


