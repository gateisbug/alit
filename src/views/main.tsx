import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import '@assets/styles/global.css'
import '@assets/styles/common-layout.css'
import '@assets/styles/common-typo.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
