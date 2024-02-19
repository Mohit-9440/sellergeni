import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
export default function LineChart() {
  const xAxisDates = ["10 Feb", "11 Feb", "12 Feb", "13 Feb", "14 Feb", "15 Feb", "16 Feb"];

  const data = {
    labels: xAxisDates,
    datasets: [
      {
        data: [5200, 6000, 4200, 9100, 6000, 8200, 4200],
        backgroundColor: 'transparent',
        borderColor: "#199418",
        pointBorderColor: 'transparent',
        pointBorderWidth: 2,
        tension: 0.5
      }
    ],
  };

  const options = {
    plugins: {
        legend: false
    },
    scales: {
      x: {
        grid: {
            display: false
        },
      },
      y: {
        min: 4000,
        max: 10000,
        ticks: {
          stepSize: 1000,
        },
        grid: {
            borderDash: [10]
        },
      },
    },
  };

  return (
    <div style={{marginTop: '10px'}}>
      <Line data={data} options={options} />
    </div>
  );
}
