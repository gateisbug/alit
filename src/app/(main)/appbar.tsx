"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { AppBar, ArcaLiveLink, GithubLink, SearchButton, Logo } from '@/components/(main)';

import SearchModal from './search';


export default function AppBarComponent() {
  const params = useParams();
  const [open, setOpen] = useState(false);

  const searchButtonClickHandler = () => {
    setOpen(true);
  }

  const closeModalHandler = () => {
    setOpen(false);
  }

  useEffect(() => {
    setOpen(false);
  }, [params])

  return (
    <AppBar>
      <Logo />

      <div className='contents-box'>
        <SearchButton onClick={searchButtonClickHandler} />
        <ArcaLiveLink />
        <GithubLink />
      </div>

      <SearchModal open={open} closeHandler={closeModalHandler} />
    </AppBar>
  )
}