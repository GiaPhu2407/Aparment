"use client";

import dynamic from "next/dynamic";
import "chart.js/auto";
import ExcelJS from "exceljs"; // Đảm bảo bạn đã cài đặt exceljs
import { saveAs } from "file-saver"; // Đảm bảo bạn đã cài đặt file-saver

// Dynamic import để không SSR với react-chartjs-2
const Scatter = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Scatter),
  {
    ssr: false,
  }
);

// Dữ liệu cho biểu đồ scatter, cần có x và y
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

// Hàm export dữ liệu ra file Excel
const exportToExcel = async () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Chart Data");

  // Add Header Row
  worksheet.columns = [
    { header: "Label", key: "label", width: 10 },
    { header: "bar", key: "bar", width: 10 },
    { header: "line", key: "line", width: 10 },
  ];
  const labels = data.labels;
  // Add Data Rows từ datasets của biểu đồ
  data.labels.forEach((label, index) => {
    worksheet.addRow({
      label: label,
      bar: data.datasets[0].data[index],
      line: data.datasets[1].data[index],
    });
  });
  // Generate Excel file
  const buffer = await workbook.xlsx.writeBuffer();

  // Save the file
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, "chart_data.xlsx");
};

// Trang hiển thị biểu đồ và nút export Excel
const MixedDemoPage = () => {
  return (
    <div className="w-[30vw]">
      {/* <Scatter data={data} /> */}
      <button
        onClick={exportToExcel}
        className="mt-4 p-2 bg-blue-500 text-white"
      >
        Export to Excel
      </button>
    </div>
  );
};

export default MixedDemoPage;
