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
      "DEC"
    ],
    datasets: [
      {
        label: "Top 20 Market Cap",
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
          11180,
          12604,
          23098,
          58600,
          134669,
          128066,
          131627,
          190797,
          152618,
          134336,
          243841,
          648036
        ]
      }
      // {
      //   label: "Second Data",
      //   borderColor: gradientStroke,
      //   pointBorderColor: gradientStroke,
      //   pointBackgroundColor: gradientStroke,
      //   pointHoverBackgroundColor: gradientStroke,
      //   pointHoverBorderColor: gradientStroke,
      //   pointBorderWidth: 5,
      //   pointHoverRadius: 5,
      //   pointHoverBorderWidth: 1,
      //   pointRadius: 3,
      //   fill: true, // If true, fill the area under the line
      //   backgroundColor: gradientFill, // Specify the background color to the chart area
      //   borderWidth: 4,
      //   data: [10, 12, 15, 17, 18, 17, 16, 100, 120, 150, 180, 230, 400, 550]
      // }
    ]
  },
  options: {
    scaleLabel: function(label) {
      return "$" + label.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    title: {
      display: true,
      text: "Performance of Top 20 Market Cap Fund in 2017",
      fontStyle: "bold"
    },

    animation: {
      easing: "easeInOutBack"
    },
    legend: {
      position: "bottom",
      onClick: null
    },
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function(value, index, values) {
              // Convert the number to a string and splite the string every 3 charaters from the end
              value = value.toString();
              value = value.split(/(?=(?:...)*$)/);

              // Convert the array to a string and format the output
              value = value.join(",");
              return "$" + value;
            },
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
    },
    tooltips: {
      enabled: true,
      mode: "single",
      callbacks: {
        label: function(tooltipItems, data) {
          value = tooltipItems.yLabel.toString();
          value = value.split(/(?=(?:...)*$)/);
          // Convert the array to a string and format the output
          value = value.join(",");
          return "$" + value;
        },
        labelColor: function(tooltipItem, chart) {
          return {
            borderColor: "rgba(244, 144, 128, 0.6)",
            backgroundColor: "rgba(244, 144, 128, 0.9)"
          };
        },
        labelTextColor: function(tooltipItem, chart) {
          return "#543453";
        }
      }
    }
  }
});
