import { useEffect, useState } from "react";
import { BarChart } from "./components/Bar";
import { processChartData, firstLetterToUpperCase } from "./helpers";
import data from "../data/events-cds.json";
import "./App.css";

const VIEWS = ["platform", "version"];

const App = () => {
  const [filter, setFilter] = useState("platform");
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    setChartData(processChartData(data, filter));
  }, [filter]);

  return (
    <div className="wrapper">
      <div className="tabs">
        {VIEWS.map((el) => (
          <button
            key={el}
            className={`tab ${el === filter ? "active" : ""}`}
            onClick={() => setFilter(el)}
          >
            {firstLetterToUpperCase(el)}
          </button>
        ))}
      </div>
      <BarChart data={chartData} />
    </div>
  );
};

export default App;
