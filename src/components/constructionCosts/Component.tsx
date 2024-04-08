'use client';

import React, { useCallback, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { API } from '../../requester';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const ConstructionCost = ({ dict }: any) => {
  const [graphData, setGraphData]: any = useState([]);
  const [labels, setLabels]: any = useState([]);

  const handleGetGraphData = useCallback(async () => {
    const response = await API.get('graph3/');
    const data = await response.data;
    const filterLabels: any = data?.map((graphData: any) => graphData.month);
    console.log('filterLabels: ', filterLabels);
    setLabels(filterLabels);
    setGraphData(data);
  }, []);

  useEffect(() => {
    handleGetGraphData();
  }, [handleGetGraphData]);

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: dict?.graphs?.three?.title,
        font: {
          size: 36,
          family: 'Montserrat, sans-serif',
          weight: '500',
        },
        color: '#232323',
      },
    },

    scales: {
      y: {
        ticks: {
          callback: function (value: any) {
            return (value = value * 1 + '$');
          },
        },
      },
    },
  };

  // const labels = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December',
  // ];

  const data = {
    labels,
    datasets: [
      {
        label: dict?.graphs?.three?.price,
        data: graphData?.map((graphData: any) => graphData.value),
        backgroundColor: '#4B68FF',
      },
    ],
  };

  return (
    <Bar
      options={options}
      data={data}
      style={{
        zIndex: '100',
        backgroundColor: '#FFF',
        boxShadow: '0px 4px 20px 0px #292E3414',
      }}
      className={'md:h-[700px] sm:h-screen'}
    />
  );
};

export default ConstructionCost;
