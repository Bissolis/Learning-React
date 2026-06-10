import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './page'
import Header from './Header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <HomePage />
  </StrictMode>,
)
