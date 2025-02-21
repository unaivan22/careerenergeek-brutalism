import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@/components/theme-provider"
import RouterPage from './pages/RouterPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      
    </ThemeProvider> */}
    <RouterPage />
  </React.StrictMode>,
)
