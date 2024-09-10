// "use client";
// import React, { useEffect, useRef } from "react";
// import { Chart } from "chart.js/auto";

// const LineChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (chartRef.current) {
//       // Nếu biểu đồ đã tồn tại, hủy trước khi tạo biểu đồ mới
//       if (chartRef.current.chart) {
//         chartRef.current.chart.destroy();
//       }

//       const context = chartRef.current.getContext("2d");

//       // Tạo biểu đồ mới
//       const newChart = new Chart(context, {
//         type: "line",
//         data: {
//           labels: [
//             "January",
//             "February",
//             "March",
//             "April",
//             "May",
//             "June",
//             "July",
//           ], // Nhãn của trục X
//           datasets: [
//             {
//               label: "My First Dataset",
//               data: [65, 59, 80, 81, 56, 55, 40], // Dữ liệu cho biểu đồ
//               fill: false, // Không tô màu phía dưới đường
//               borderColor: "rgb(75, 192, 192)", // Màu đường biểu đồ
//               tension: 0.1, // Độ uốn của đường (0 là đường thẳng)
//             },
//           ],
//         },
//         options: {
//           responsive: true, // Biểu đồ sẽ thay đổi kích thước theo kích thước của container
//         },
//       });

//       // Lưu biểu đồ vào ref để có thể hủy khi cần
//       chartRef.current.chart = newChart;
//     }

//     // Cleanup function: Hủy biểu đồ khi component bị unmount
//     // return () => {
//     //   if (chartRef.current && chartRef.current.chart) {
//     //     chartRef.current.chart.destroy();
//     //   }
//     // };
//   }, []);

//   return (
//     <div style={{ position: "relative", width: "25vw", height: "80vh" }}>
//       <canvas id="myChart" ref={chartRef}></canvas>
//     </div>
//   );
// };

// export default LineChart;

"use client";

import dynamic from "next/dynamic";
import "chart.js/auto";

const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Bar Chart An Bình Demo",
      data: [12, 19, 50, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const ChartDemoPage = () => {
  return (
    <div>
      <h1>Example 2: Bar Chart</h1>
      <Bar data={data} />
    </div>
  );
};

export default ChartDemoPage;
