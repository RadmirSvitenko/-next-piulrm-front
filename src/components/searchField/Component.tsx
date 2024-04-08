'use client';

import { Search } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SearchField: React.FC = ({ dict }: any) => {
  const [searchValue, setSearchValue]: any = useState('');

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    router.push(`/search/${searchValue}`);
  };

  const handleChangeValue = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleChangeValue}
      className={
        'flex items-center justify-center gap-[89px] sm:py-5 mx-5 sm:m-0'
      }
    >
      <TextField
        value={searchValue}
        className={' midmd:w-auto w-full'}
        inputProps={{
          style: { padding: 0, margin: 0 },
        }}
        InputProps={{
          startAdornment: (
            <IconButton type="submit">
              <Search />
            </IconButton>
          ),
        }}
        placeholder={String(dict?.search)}
      />
    </form>
  );
};

export default SearchField;
