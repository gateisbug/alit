import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/index.scss';
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
      <HashRouter basename={'/'}>
          <RecoilRoot>
              <App />
          </RecoilRoot>
      </HashRouter>
  // </React.StrictMode>,
)
