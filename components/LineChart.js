"use client";
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Nếu biểu đồ đã tồn tại, hủy trước khi tạo biểu đồ mới
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      // Tạo biểu đồ mới
      const newChart = new Chart(context, {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ], // Nhãn của trục X
          datasets: [
            {
              label: "My First Dataset",
              data: [65, 59, 80, 81, 56, 55, 40], // Dữ liệu cho biểu đồ
              fill: false, // Không tô màu phía dưới đường
              borderColor: "rgb(75, 192, 192)", // Màu đường biểu đồ
              tension: 0.1, // Độ uốn của đường (0 là đường thẳng)
            },
          ],
        },
        options: {
          responsive: true, // Biểu đồ sẽ thay đổi kích thước theo kích thước của container
        },
      });

      // Lưu biểu đồ vào ref để có thể hủy khi cần
      chartRef.current.chart = newChart;
    }

    // Cleanup function: Hủy biểu đồ khi component bị unmount
    // return () => {
    //   if (chartRef.current && chartRef.current.chart) {
    //     chartRef.current.chart.destroy();
    //   }
    // };
  }, []);

  return (
    <div style={{ position: "relative", width: "30vw", height: "80vh" }}>
      <canvas id="myChart" ref={chartRef}></canvas>
    </div>
  );
};

export default LineChart;
