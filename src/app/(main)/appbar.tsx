"use client";

import dynamic from 'next/dynamic';

import { ArcaLiveLink, GithubLink, SearchButton } from '@app/(main)/links';

const Image = dynamic(() => import('next/image'));
const Logo = dynamic(() => import('@/app/(main)/logo-sc'));
const AppBar = dynamic(() => import('@/app/(main)/appbar-sc'));

export default function AppBarComponent() {
  const searchButtonClickHandler = () => {
    console.log('open modal');
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
    </AppBar>
  )
}