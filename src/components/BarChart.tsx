import ReactECharts from "echarts-for-react";
import { minMagnesiumArray } from "../utils/preparingDataForChart";
import { useState, useEffect } from "react";

const option = {
  xAxis: {
    type: "category",
    data: minMagnesiumArray.map((d) => d.Alcohol),
    name: "Alcohol",
    nameLocation: "center",
    nameGap: 30,
  },
  yAxis: {
    type: "value",
    name: "Minimum Magnesium",
    nameLocation: "center",
    nameGap: 23,
  },
  series: [
    {
      type: "bar",
      data: minMagnesiumArray.map((d) => d.Magnesium),
      barWidth: "20%",
    },
  ],
  tooltip: {
    trigger: "axis",
  },
};

const BarChart = () => {
  const [chartWidth, setChartWidth] = useState<number>(0);

  useEffect(() => {
    resizeChart();
    window.addEventListener("resize", resizeChart);

    return () => {
      window.removeEventListener("resize", resizeChart);
    };
  }, []);
  const resizeChart = () => {
    setChartWidth(window.innerWidth * 0.9); // Set the chart width to 90% of the window width
  };

  return (
    <>
      <h3 style={{ textAlign: "center" }}>
        Data Plotted Between Magnesium and Alcohol Category
      </h3>
      <div
        style={{
          height: "400px",
          width: "100%",
          paddingLeft: "20px",
          margin: "10px",
        }}
      >
        {chartWidth > 0 && (
          <ReactECharts
            option={option}
            style={{ height: "100%", width: `${chartWidth}px` }}
            notMerge={true}
            lazyUpdate={true}
          />
        )}
      </div>
    </>
  );
};

export default BarChart;
