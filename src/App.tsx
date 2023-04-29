import React from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

const App: React.FC = () => {
  return (
    <div>
      <LineChart />
      <BarChart />
    </div>
  );
};

export default App;
