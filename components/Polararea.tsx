//
"use client";

import dynamic from "next/dynamic";
import "chart.js/auto";

const Polar = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.PolarArea),
  {
    ssr: false,
  }
);

const data = {
  labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
  datasets: [
    {
      label: "My First Dataset",
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(75, 192, 192)",
        "rgb(255, 205, 86)",
        "rgb(201, 203, 207)",
        "rgb(54, 162, 235)",
      ],
    },
  ],
  hoverOffset:10 
};

const PolarDemoPage = () => {
  return (
    <div className="w-[30vw]">
      {/* <h1>Example 2: Bar Chart</h1> */}
      <Polar data={data} />
    </div>
  );
};

export default PolarDemoPage;
