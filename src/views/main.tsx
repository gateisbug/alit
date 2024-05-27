import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

// import '@styles/fonts.css'
import '@styles/reset.css'
import '@styles/theme.css'
import '@styles/index.css'
import '@styles/typography.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
