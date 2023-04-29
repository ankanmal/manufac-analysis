import { useState, useEffect } from "react";
import WineData from "../constant/WineData.json";
import ReactECharts from "echarts-for-react";

const flavanoids = WineData.map((item) => item.Flavanoids);
const ash = WineData.map((item) => item.Ash);
const option = {
  xAxis: {
    type: "category",
    data: flavanoids,
    name: "Flavanoids",
    nameLocation: "center",
    nameGap: 30,
  },
  yAxis: {
    type: "value",
    name: "Ash",
    nameLocation: "center",
    nameGap: 23,
  },

  dataZoom: [
    {
      type: "inside",
      xAxisIndex: 0,
      filterMode: "empty",
    },
  ],
  tooltip: {
    trigger: "axis",
  },
  series: [
    {
      data: ash,
      type: "line",
    },
  ],
};

const LineChart = () => {
  const [chartWidth, setChartWidth] = useState<number>(0);

  useEffect(() => {
    const resizeChart = () => {
      setChartWidth(window.innerWidth * 0.9);
    };

    resizeChart();
    window.addEventListener("resize", resizeChart);

    return () => {
      window.removeEventListener("resize", resizeChart);
    };
  }, []);
  return (
    <>
      <h3 style={{ textAlign: "center" }}>
        Data Plotted Between Flavanoids and Ash
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

export default LineChart;
