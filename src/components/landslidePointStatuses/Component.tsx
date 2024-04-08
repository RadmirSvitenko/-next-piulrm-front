'use client';

import React, { useCallback, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { API } from '../../requester';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const LandslidePointStatuses: React.FC<LandslidePointStatusesProps> = ({
  page,
  dict,
}) => {
  const [graphData, setGraphData]: any = useState({
    acceptable: [],
    distu: [],
    critical: [],
  });
  const customYLabels = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600];

  const labels = [
    dict?.graphs?.two?.month?.January,
    dict?.graphs?.two?.month?.February,
    dict?.graphs?.two?.month?.March,
    dict?.graphs?.two?.month?.April,
    dict?.graphs?.two?.month?.May,
    dict?.graphs?.two?.month?.June,
    dict?.graphs?.two?.month?.July,
    dict?.graphs?.two?.month?.August,
    dict?.graphs?.two?.month?.September,
    dict?.graphs?.two?.month?.October,
    dict?.graphs?.two?.month?.November,
    dict?.graphs?.two?.month?.December,
  ];

  const options: any = {
    scales: {
      y: {
        ticks: {
          callback: function (value: any, index: any) {
            return customYLabels[index];
          },
        },
      },

      x: {
        ticks: {
          callback: function (value: any, index: any) {
            return labels[index];
          },
        },
      },
    },

    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          labels: {
            font: {
              family: 'Montserrat, sans-serif',
              weight: '500',
            },
          },
        },
        position: 'top' as const,
      },
      title: {
        display: true,
        text: dict?.graphs?.two?.title,
        font: {
          size: 36,
          family: 'Montserrat, sans-serif',
          weight: '500',
        },
        color: '#1A1A1A',
      },
    },
  };

  const data = {
    datasets: [
      {
        label: dict?.graphs?.two?.statusOne,
        data: graphData.acceptable.map((graph: any) => ({
          x: graph?.x,
          y: graph?.y,
        })),
        backgroundColor: '#A155B9',
      },
      {
        label: dict?.graphs?.two?.statusTwo,
        data: graphData.distu.map((graph: any) => ({
          x: graph?.x,
          y: graph?.y,
        })),
        backgroundColor: '#165BAA',
      },
      {
        label: dict?.graphs?.two?.statusThree,
        data: graphData.critical.map((graph: any) => ({
          x: graph?.x,
          y: graph?.y,
        })),
        backgroundColor: '#F765A3',
      },
    ],
  };

  const handleGetGraphData = useCallback(async () => {
    const response = await API.get(`graph2?page=${page}`);
    const data = await response.data.results;
    console.log('data: ', data);

    let filterAcceptable: any = data?.filter(
      (graph: any) => graph.type.toLowerCase() === 'Acceptable'.toLowerCase()
    );
    console.log('filterAcceptable: ', filterAcceptable);
    let filterDistu: any = data?.filter(
      (graph: any) => graph.type.toLowerCase() === 'Concerning'.toLowerCase()
    );
    console.log('filterDistu: ', filterDistu);
    let filterCritical: any = data?.filter(
      (graph: any) => graph.type.toLowerCase() === 'Critical'.toLowerCase()
    );
    console.log('filterCritical: ', filterCritical);
    setGraphData({
      acceptable: filterAcceptable,
      distu: filterDistu,
      critical: filterCritical,
    });
  }, [page]);

  useEffect(() => {
    handleGetGraphData();
  }, [handleGetGraphData]);

  return (
    <Scatter
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

export default LandslidePointStatuses;
