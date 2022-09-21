const circle = document.getElementById("circle");
const btn = document.getElementById("btn");
const data = [16, 16, 16, 16, 16, 16];
let arr = [67, 234, 181, 118, 59, 126];
var pieColors = [
  "#EC6B56",
  "#FFC154",
  "#47B39C",
  "#EC6B56",
  "#FFC154",
  "#47B39C",
];

let myChart = new Chart(circle, {
  plugins: [ChartDataLabels],
  type: "pie",
  data: {
    labels: ["Rs 100", "Rs 200", "Rs 300", "Rs 400", "Rs 500", "Rs 600"],
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      tooltip: false,
      legend: {
        display: false,
      },
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 18 },
      },
    },
  },
});

let count = 0;
let resultValue = 101;
btn.addEventListener("click", () => {
  let randomDegree = arr[Math.floor(Math.random() * arr.length)];
  console.log(randomDegree)
  let rotationInterval = window.setInterval(() => {
    myChart.options.rotation = myChart.options.rotation + resultValue;
    myChart.update();
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});