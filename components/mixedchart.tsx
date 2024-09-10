//
"use client";

import dynamic from "next/dynamic";
import "chart.js/auto";

const Scatter = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Scatter),
  {
    ssr: false,
  }
);

const data = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      type: "bar",
      label: "Bar Dataset",
      data: [10, 20, 30, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      type: "line",
      label: "Line Dataset",
      data: [50, 50, 50, 50],
      fill: false,
      borderColor: "rgb(54, 162, 235)",
    },
  ],
};

const MixedDemoPage = () => {
  return (
    <div className="w-[30vw]">
      {/* <h1>Example 2: Bar Chart</h1> */}
      {/* <Scatter data={data} /> */}
    </div>
  );
};

export default MixedDemoPage;
