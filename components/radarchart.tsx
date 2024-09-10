//
"use client";

import dynamic from "next/dynamic";
import "chart.js/auto";

const Radar = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Radar),
  {
    ssr: false,
  }
);

const data = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "My Second Dataset",
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};

const RadarDemoPage = () => {
  return (
    <div className="w-[30vw]">
      {/* <h1>Example 2: Bar Chart</h1> */}
      <Radar data={data} />
    </div>
  );
};

export default RadarDemoPage;
