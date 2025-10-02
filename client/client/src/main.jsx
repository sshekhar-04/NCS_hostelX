import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import 'react-toastify/dist/ReactToastify.css'; 
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
   <AuthProvider>
    <App />
  </AuthProvider>
  </BrowserRouter>
)