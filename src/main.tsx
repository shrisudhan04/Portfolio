import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Suppress implicit any error for importing a .jsx module without declaration
// @ts-ignore
import App from './App.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)