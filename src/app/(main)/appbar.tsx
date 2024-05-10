"use client";

import dynamic from 'next/dynamic';
import { useState } from 'react';

import AppBar from '@/app/(main)/appbar-sc';
import { ArcaLiveLink, GithubLink, SearchButton } from '@app/(main)/links';

const Image = dynamic(() => import('next/image'));
const Logo = dynamic(() => import('@/app/(main)/logo-sc'));
const SearchModal = dynamic(() => import('@app/(main)/search'));


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
      <Logo>
         <Image src='/assets/logo-m.png' alt="logo" width='32' height='32' priority />
      </Logo>

      <div className='contents-box'>
        <SearchButton onClick={searchButtonClickHandler} />
        <ArcaLiveLink />
        <GithubLink />
      </div>

      <SearchModal open={open} closeHandler={closeModalHandler} />
    </AppBar>
  )
}