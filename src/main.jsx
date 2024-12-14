import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import i18n from './utils/i18n/i18n'; // Import the i18n configuration
import { I18nextProvider } from "react-i18next";
// import ThemeToggle from '../utils/ThemeToggle'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Layout>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
    </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)
