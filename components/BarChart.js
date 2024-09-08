"use client";
import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";
const BarChart = () => {
  const chartRef = useRef(null);
  const [chartData, setCharData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("http://dummyjson.com/users");
      if (response.status != 200) {
        console.error("Bad response");
      }
      const data = await response.data;
      // console.log(data);
      const firstSix = data.users.splice(0, 6);
      setCharData(firstSix);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const label = chartData.map((items) => items.firstName);
      const data = chartData.map((items) => items.weight);

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: label,
          datasets: [
            {
              barThickness: 50,
              label: "# of Votes",
              data: data,
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
              ],
              borderWidth: 1,
              borderRadius: 10,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "User Weight Distribution",
              fontSize: 20,
              padding: 20,
            },
          },
          responsive: true,
          scales: {
            x: {
              type: "category",
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [chartData]);
  return (
    <div style={{ position: "relative", width: "50vw", height: "80vh" }}>
      <canvas id="myChart" ref={chartRef}></canvas>
    </div>
  );
};

export default BarChart;
