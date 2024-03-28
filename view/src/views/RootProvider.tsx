import React from 'react';
import { HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

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
