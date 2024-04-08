'use client';

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
import { useCallback, useEffect, useState } from 'react';

const ConstructionSchedule = ({ dict }: any) => {
  const [graphData, setGraphData]: any = useState({
    plan: [],
    actual: [],
  });
  const [labels, setLabels]: any = useState([]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options: any = {
    indexAxis: 'y' as const,
    maintainAspectRatio: false,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: dict?.graphs?.one?.title,
        font: {
          size: 36,
          family: 'Montserrat, sans-serif',
          weight: '500',
        },
        color: '#1A1A1A',
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
        label: dict?.graphs?.one?.plan,
        data: graphData.plan?.map((grap: any) => grap.value),
        borderColor: '#38AC2E',
        backgroundColor: '#81D67A',
      },
      {
        label: dict?.graphs?.one?.fact,
        data: graphData.actual?.map((grap: any) => grap.value),
        borderColor: '#3367B6',
        backgroundColor: '#81AAE7',
      },
    ],
  };

  const handleGetGraphData = useCallback(async () => {
    const response = await API.get('graph1/');
    const data = await response.data;
    let filterPlan: any = data?.filter(
      (graph: any) => graph.type.toLowerCase() === 'Plan'.toLowerCase()
    );

    let filterActual: any = data?.filter(
      (graph: any) => graph.type.toLowerCase() === 'Actual'.toLowerCase()
    );
    const uniqueMonths: any = new Set(data.map((graph: any) => graph.name));

    const filterLabels = [...uniqueMonths];
    setLabels(filterLabels);
    setGraphData({ plan: filterPlan, actual: filterActual });
  }, []);

  useEffect(() => {
    handleGetGraphData();
  }, [handleGetGraphData]);

  return (
    <Bar
      options={options}
      data={data}
      style={{
        backgroundColor: '#FFF',
        zIndex: '100',
        boxShadow: '0px 4px 20px 0px #292E3414',
        borderRadius: '12px',
      }}
      className={'md:h-[700px] sm:h-screen'}
    />
  );
};

export default ConstructionSchedule;
