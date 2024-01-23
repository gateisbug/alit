import React from 'react';
import { RecoilRoot } from 'recoil';
import { HashRouter } from 'react-router-dom';

const RootProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <HashRouter basename='/'>
      <RecoilRoot>{children}</RecoilRoot>
    </HashRouter>
  );
};

export default RootProvider;
