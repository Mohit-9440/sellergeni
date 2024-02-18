import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart() {
  const yAxisValues = Array.from({ length: 7 }, (_, i) => 4000 + i * 1000);
  const xAxisDates = ["10 Feb", "11 Feb", "12 Feb", "13 Feb", "14 Feb", "15 Feb", "16 Feb"];

  const data = {
    labels: xAxisDates,
    datasets: [
      {
        label: "Sales",
        data: [8000, 8500, 9200, 9400, 9000, 9600, 9800], // Replace with your actual data
        fill: false,
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category", // Use "category" for non-numeric data on X-axis
        position: "bottom",
      },
      y: {
        position: "left",
        beginAtZero: false,
        ticks: {
          stepSize: 1000,
          suggestedMin: 4000,
          suggestedMax: 10000,
        },
      },
    },
  };

  return (
    <div>
      <h2>Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
}
