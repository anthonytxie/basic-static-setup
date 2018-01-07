var ctx = document.getElementById("myChart").getContext("2d");
var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "#80b6f4");
gradientStroke.addColorStop(1, "#f49080");
var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEPT",
      "OCT",
      "NOV",
      "OCT",
      "NOV",
      "DEC"
    ],
    datasets: [
      {
        label: "Data",
        borderColor: gradientStroke,
        pointBorderColor: gradientStroke,
        pointBackgroundColor: gradientStroke,
        pointHoverBackgroundColor: gradientStroke,
        pointHoverBorderColor: gradientStroke,
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        fill: true, // If true, fill the area under the line
        backgroundColor: gradientFill, // Specify the background color to the chart area
        borderWidth: 4,
        data: [
          100,
          120,
          150,
          170,
          180,
          170,
          160,
          180,
          200,
          250,
          300,
          400,
          600,
          2000
        ]
      },
      {
        label: "Second Data",
        borderColor: gradientStroke,
        pointBorderColor: gradientStroke,
        pointBackgroundColor: gradientStroke,
        pointHoverBackgroundColor: gradientStroke,
        pointHoverBorderColor: gradientStroke,
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        fill: true, // If true, fill the area under the line
        backgroundColor: gradientFill, // Specify the background color to the chart area
        borderWidth: 4,
        data: [10, 12, 15, 17, 18, 17, 16, 100, 120, 150, 180, 230, 400, 550]
      }
    ]
  },
  options: {
    animation: {
      easing: "easeInOutBack"
    },
    legend: {
      position: "bottom"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold",
            beginAtZero: true, // If true, scale will include 0 if it is not already included.
            maxTicksLimit: 5, // Maximum number of ticks and gridlines to show.
            padding: 20 // Padding between the tick label and the axis.
          },
          gridLines: {
            drawTicks: false, // If true, draw lines beside the ticks in the axis area beside the chart.
            display: false
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent" // Stroke color of the grid line for the first index (index 0).
          },
          ticks: {
            padding: 20,
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold"
          }
        }
      ]
    }
  }
});
