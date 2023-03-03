import React, { useEffect, useState } from "react";

import ReactApexChart from "react-apexcharts";

const ApexPieChart = () => {
  const [state, updateState] = useState({
    series: [44, 55, 13, 33],
    options: {
      chart: {
        width: "auto",
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "auto",
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "right",
        offsetY: 0,
        height: 230,
      },
    },
  });

  useEffect(() => {
    var arr = state.series.slice();

    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

    updateState({
      series: arr,
      options: {
        chart: {
          width: "auto",
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "auto",
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        legend: {
          enabled: false,
          position: "right",
          offsetY: 0,
        },
      },
    });
  }, [state.series]);

  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="donut"
    />
  );
};

export default ApexPieChart;
