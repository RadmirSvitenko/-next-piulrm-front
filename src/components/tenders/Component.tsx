'use client';

import { Close, Search } from '@mui/icons-material';
import {
  CircularProgress,
  IconButton,
  Pagination,
  TextField,
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams, useRouter } from 'next/navigation';
import { API } from '../../requester';

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

const Tenders: React.FC = ({ dict }: any) => {
  const router = useRouter();
  const { lang } = useParams();
  const [tenders, setTenders]: any = useState([]);
  const [tendersProps, setTendersProps] = useState<TendersState>({
    search: '',
    page: 1,
    pageSize: 10,
    order: 1,
    count: 0,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await API.get(`/tenders?search=${tendersProps.search}`);
    const data = await response.data.results;
    setTenders(data);
  };

  const handleClearField = async () => {
    setTendersProps((prevValue) => ({
      ...prevValue,
      search: '',
    }));
    handleGetTenders();
  };

  const handleGetTenders = useCallback(async () => {
    const response = await API.get(
      `/tenders?page=${tendersProps.page}&page_size=${tendersProps.pageSize}&ordering=${tendersProps.order}`
    );
    const data = response.data.results;
    const countPage = response.data.count;
    setTenders(data);
    setTendersProps((prevValue) => ({ ...prevValue, count: countPage }));
  }, [tendersProps.page]);

  const handleChangePage = (e: any, page: number) => {
    setTendersProps((prevValue) => ({
      ...prevValue,
      page: page,
    }));
  };

  const toDetails = (id: number) => {
    router.push(`/${lang}/tenders/${id}`);
  };

  const toResults = (id: number) => {
    router.push(`/${lang}/tenders/${id}/results`);
  };

  useEffect(() => {
    handleGetTenders();
  }, [handleGetTenders]);

  if (!tenders || tenders == undefined) {
    return (
      <div className={'w-full h-full flex justify-center items-center'}>
        <CircularProgress size={50} sx={{ color: 'red' }} />
      </div>
    );
  }

  return (
    <div
      className={
        'flex flex-col w-full min-h-screen border-[1px] border-[#F4F5F6]'
      }
    >
      <div className={'w-full px-4 py-6 gap-2 flex justify-start'}>
        <form
          onSubmit={handleSubmit}
          onChange={(e: any) =>
            setTendersProps((prevValue) => ({
              ...prevValue,
              search: e.target.value,
            }))
          }
          className={'flex flex-wrap gap-4 sm:py-[24] px-[16px]'}
        >
          <TextField
            value={tendersProps.search}
            className={'lg:w-[276px] w-full rounded-[3px] bg-[#F4F5F6]'}
            inputProps={{
              style: { padding: '13px' },
            }}
            InputProps={{
              startAdornment: (
                <IconButton type="submit">
                  {tendersProps.search.length > 0 ? (
                    <Close onClick={handleClearField} />
                  ) : (
                    <Search />
                  )}
                </IconButton>
              ),
            }}
            placeholder={String(dict?.tenders?.search)}
          />

          <button
            className="bg-[#4383FF] py-[13px] px-[33px] sm:w-full md:w-full  font-[700] text-[#FFF] text-[14px] rounded-[3px]"
            type="submit"
          >
            {dict?.tenders?.searchButton}
          </button>
        </form>
      </div>

      <div>
        <TableContainer component={Paper} className={'w-full px-1'}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>{dict?.tenders?.table?.title}</StyledTableCell>
                <StyledTableCell align="right">
                  {dict?.tenders?.table?.createdAt}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {dict?.tenders?.table?.finally}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {dict?.tenders?.table?.actions}
                </StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {tenders?.map((tender: any, index: number) => (
                <StyledTableRow key={index}>
                  <StyledTableCell
                    sx={{
                      backgroundColor:
                        tender.id % 2 === 0 ? '#E9EAEB' : '#FFFFFF',
                      textTransform: 'uppercase',
                      color: '#111827',
                      letterSpacing: '1px',
                    }}
                    component="th"
                    scope="row"
                  >
                    {tender?.name}
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    sx={{
                      backgroundColor:
                        tender.id % 2 === 0 ? '#E9EAEB' : '#FFFFFF',
                      textTransform: 'uppercase',
                      color: '#111827',
                      letterSpacing: '1px',
                    }}
                  >
                    {tender?.created_at}
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    sx={{
                      backgroundColor:
                        tender.id % 2 === 0 ? '#E9EAEB' : '#FFFFFF',
                      textTransform: 'uppercase',
                      color: '#111827',
                      letterSpacing: '1px',
                    }}
                  >
                    {tender?.deadline}
                  </StyledTableCell>

                  <StyledTableCell
                    align="right"
                    sx={{
                      backgroundColor:
                        tender.id % 2 === 0 ? '#E9EAEB' : '#FFFFFF',
                      textTransform: 'uppercase',
                      color: '#111827',
                      letterSpacing: '1px',
                    }}
                  >
                    <div className={'flex gap-2 justify-end'}>
                      {tender && tender?.status === 'finished' && (
                        <button
                          className={
                            'py-[6px] px-[18px] bg-[#0DB091] font-[500] text-[14px] text-[#FFFFFF] rounded'
                          }
                          onClick={() => toResults(tender.id)}
                        >
                          {dict?.tenders?.resultsButton}
                        </button>
                      )}

                      <button
                        className={
                          'py-[6px] px-[18px] bg-[#0162D3] font-[500] text-[14px] text-[#FFFFFF] rounded'
                        }
                        onClick={() => toDetails(tender.id)}
                      >
                        {dict?.tenders?.detailsButton}
                      </button>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div
          className={'w-full flex justify-center items-center px-[80px] py-6'}
        >
          <Pagination
            onChange={handleChangePage}
            page={tendersProps.page}
            count={Math.ceil(tendersProps.count / tendersProps.pageSize) || 1}
            showFirstButton
            showLastButton
            siblingCount={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Tenders;
