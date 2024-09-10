"use client";

import dynamic from "next/dynamic";
import "chart.js/auto";
import ExcelJS from "exceljs"; // Đảm bảo đã cài đặt exceljs
import { saveAs } from "file-saver"; // Đảm bảo đã cài đặt file-saver

// Dynamic import để không SSR với react-chartjs-2
const Radar = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Radar),
  {
    ssr: false,
  }
);

// Dữ liệu cho biểu đồ radar
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

// Hàm export dữ liệu ra file Excel
const exportToExcel = async () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Radar Data");

  // Add Header Row: tạo header cho bảng dữ liệu
  worksheet.columns = [
    { header: "Category", key: "category", width: 15 },
    { header: "First Dataset", key: "firstDataset", width: 15 },
    { header: "Second Dataset", key: "secondDataset", width: 15 },
  ];

  // Thêm các dòng dữ liệu
  data.labels.forEach((label, index) => {
    worksheet.addRow({
      category: label,
      firstDataset: data.datasets[0].data[index],
      secondDataset: data.datasets[1].data[index],
    });
  });

  // Tạo file Excel từ buffer
  const buffer = await workbook.xlsx.writeBuffer();

  // Tạo và lưu file Excel
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, "radar_chart_data.xlsx");
};

// Trang hiển thị biểu đồ và nút xuất Excel
const RadarDemoPage = () => {
  return (
    <div className="w-[30vw]">
      <Radar data={data} />
      <button
        onClick={exportToExcel}
        className="mt-4 p-2 bg-blue-500 text-white"
      >
        Export to Excel
      </button>
    </div>
  );
};

export default RadarDemoPage;
