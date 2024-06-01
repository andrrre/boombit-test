import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const scales = {
  x: {
    ticks: {
      color: "#FFF",
    },
    grid: {
      color: "rgba(255, 255, 255, 0.2)",
    },
  },
  y: {
    ticks: {
      color: "#FFF",
    },
    grid: {
      color: "rgba(255, 255, 255, 0.2)",
    },
  },
};

const plugins = {
  legend: {
    labels: {
      color: "#FFF",
    },
  },
  title: {
    display: true,
    text: "Event Statistics",
    color: "#FFF",
  },
};

export const BarChart = ({ data }) => (
  <Bar
    data={data}
    options={{
      scales,
      plugins,
    }}
  />
);
