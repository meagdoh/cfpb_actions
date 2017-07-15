
$(document).ready(function(){


$(function () {
  count = 0;
  wordsArray = ["jawdropping", "illegal", "bad"];
  setInterval(function () {
    count++;
    $("#word").fadeOut(300, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(300);
    });
  }, 2000);
});

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});

});


// // Variables
