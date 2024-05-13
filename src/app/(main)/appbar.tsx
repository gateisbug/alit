"use client";

import { AppBar, ArcaLiveLink, GithubLink, SearchButton, Logo } from '@components/(main)';
import { useState } from 'react';

import SearchModal from '@app/(main)/search';


export default function AppBarComponent() {
  const [open, setOpen] = useState(false);

  const searchButtonClickHandler = () => {
    setOpen(true);
  }

  const closeModalHandler = () => {
    setOpen(false);
  }

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