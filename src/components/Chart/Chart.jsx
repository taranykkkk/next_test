import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Test Next and Chart.JS',
      color: 'black',
      font: {
        size: 40,
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: generateValue(7, 12, 200),
      backgroundColor: 'rgba(80, 78, 79, 0.76)',
    },
    {
      label: 'Dataset 2',
      data: generateValue(7, 62, 200),
      backgroundColor: 'rgba(0, 0, 0, 1)',
    },
    {
      label: 'Dataset 3',
      data: generateValue(7, 22, 140),
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderWidth: '1',
      borderColor: 'rgba(7, 7, 7, 1)',
    },
  ],
};

function generateValue(count, min, max) {
  let resultData = [];
  for (let i = 0; i < count; i++) {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    resultData.push(rand);
  }
  return resultData;
}

function Chart() {
  return <Bar options={options} data={data} />;
}

export default Chart;
