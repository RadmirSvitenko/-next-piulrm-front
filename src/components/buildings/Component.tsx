'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from '@mui/material';
import { API } from '../../requester';

ChartJS.register(ArcElement, Tooltip, Legend);

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F4F5F6',
    color: '#8E8E8E',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWight: '500',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Buildings = ({ dict }: any) => {
  const [graphData, setGraphData]: any = useState([]);

  const handleGetGraphData = useCallback(async () => {
    const response = await API.get('graph4/');
    const data = await response.data;
    setGraphData(data);
  }, []);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    handleGetGraphData();
  }, [handleGetGraphData]);

  const data = {
    datasets: [
      {
        label: dict?.graphs?.four?.price,
        data: graphData?.map((data: any) => data.costs),
        backgroundColor: graphData?.map((_: any) => getRandomColor()),
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: dict?.graphs?.four?.title,
        font: {
          size: 36,
          family: 'Montserrat, sans-serif',
          weight: '500',
        },
        color: '#232323',
      },
    },
  };

  return (
    <div
      style={{
        zIndex: '100',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        boxShadow: '0px 4px 20px 0px #292E3414',
      }}
    >
      <div
        className={
          'w-[406px] h-[406px] md:w-[300px] md:h-[300px] sm:w-[300px] sm:h-[300px] flex justify-center'
        }
      >
        <Doughnut
          data={data}
          options={options}
          className={'md:h-[700px] sm:h-auto'}
        />
      </div>

      <div className={'py-[24px] flex w-full justify-center gap-5'}>
        <TableContainer component={Paper} className={'w-full px-1'}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  {dict?.graphs?.four?.tableTitle}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {dict?.graphs?.four?.tableCreated}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {dict?.graphs?.four?.tableFinally}
                </StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {graphData?.map((data: any, index: number) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {data?.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {data?.created_at}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    ${data?.costs}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Buildings;
