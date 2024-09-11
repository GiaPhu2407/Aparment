// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { Chart } from "chart.js/auto";
// import axios from "axios";
// const BarChart = () => {
//   const chartRef = useRef(null);
//   const [chartData, setCharData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios("http://dummyjson.com/users");
//       if (response.status != 200) {
//         console.error("Bad response");
//       }
//       const data = await response.data;
//       // console.log(data);
//       const firstSix = data.users.splice(0, 6);
//       setCharData(firstSix);
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (chartRef.current) {
//       if (chartRef.current.chart) {
//         chartRef.current.chart.destroy();
//       }

//       const context = chartRef.current.getContext("2d");

//       const label = chartData.map((items) => items.firstName);
//       const data = chartData.map((items) => items.weight);

//       const newChart = new Chart(context, {
//         type: "bar",
//         data: {
//           labels: label,
//           datasets: [
//             {
//               barThickness: 50,
//               label: "# of Votes",
//               data: data,
//               backgroundColor: [
//                 "rgba(255, 99, 132, 0.2)",
//                 "rgba(54, 162, 235, 0.2)",
//                 "rgba(255, 206, 86, 0.2)",
//                 "rgba(75, 192, 192, 0.2)",
//                 "rgba(153, 102, 255, 0.2)",
//                 "rgba(255, 159, 64, 0.2)",
//               ],
//               borderColor: [
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(54, 162, 235, 1)",
//                 "rgba(255, 206, 86, 1)",
//                 "rgba(75, 192, 192, 1)",
//               ],
//               borderWidth: 1,
//               borderRadius: 10,
//             },
//           ],
//         },
//         options: {
//           plugins: {
//             title: {
//               display: true,
//               text: "User Weight Distribution",
//               fontSize: 20,
//               padding: 20,
//             },
//           },
//           responsive: true,
//           scales: {
//             x: {
//               type: "category",
//             },
//             y: {
//               beginAtZero: true,
//             },
//           },
//         },
//       });

//       chartRef.current.chart = newChart;
//     }
//   }, [chartData]);
//   return (
//     <div style={{ position: "relative", width: "50vw", height: "80vh" }}>
//       <canvas id="myChart" ref={chartRef}></canvas>
//     </div>
//   );
// };

// export default BarChart;

"use client";

import dynamic from "next/dynamic";
import "chart.js/auto";
import ExcelJS from "exceljs"; // Đảm bảo đã cài đặt exceljs
import { saveAs } from "file-saver"; // Đảm bảo đã cài đặt file-saver

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

// Hàm export dữ liệu ra file Excel
const exportToExcel = async () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Radar Data");

  // Add Header Row: tạo header cho bảng dữ liệu
  worksheet.columns = [
    { header: "Label", key: "label", width: 15 },
    { header: "Data", key: "data", width: 15 },
  ];

  // Thêm các dòng dữ liệu
  data.labels.forEach((label, index) => {
    worksheet.addRow({
      label: label,
      data: data.datasets[0].data[index],
    });
  });

  // Tạo file Excel từ buffer
  const buffer = await workbook.xlsx.writeBuffer();

  // Tạo và lưu file Excel
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, "bar_chart_data.xlsx");
};

const ChartDemoPage = () => {
  return (
    <div className="w-[30vw]">
      <h1>Example 2: Bar Chart</h1>
      <Bar data={data} />
      <button
        onClick={exportToExcel}
        className="mt-4 p-2 bg-blue-500 text-white"
      >
        Export to Excel
      </button>
    </div>
  );
};

export default ChartDemoPage;
