import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import '@assets/styles/reset.css'
import '@assets/styles/fonts.css'
import '@assets/styles/theme.css'
import '@assets/styles/global.css'
import '@assets/styles/typography.css'
import '@assets/styles/layout.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
