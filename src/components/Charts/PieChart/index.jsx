import React from "react";

import Chart from "react-google-charts";

import { useTheme } from "../../../utils/hooks/useTheme";

const PieChart = () => {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "#292929" : "#F9F9F9";

  const textColor = theme === "dark" ? "#F9F9F9" : "#292929";

  const chartOptions = {
    title: "Lorem ipsum dolor sit amet",
    width: "auto",
    height: "auto",
    titleTextStyle: {
      color: textColor,
    },
    legend: {
      textStyle: {
        color: textColor,
      },
    },
    animation: {
      startup: true,
      easing: "linear",
      duration: 1500,
    },
    vAxis: {
      textStyle: {
        color: textColor,
      },
      titleTextStyle: {
        color: textColor,
      },
    },
    hAxis: {
      textStyle: {
        color: textColor,
      },
      titleTextStyle: {
        color: textColor,
      },
    },
    backgroundColor: bgColor,
  };

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  return <Chart chartType="PieChart" data={data} options={chartOptions} />;
};

export default PieChart;
