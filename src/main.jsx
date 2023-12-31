import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios  from 'axios'

axios.get('/events').then((response)=>{
  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App initialData={response.data}/>
  </React.StrictMode>,)
})




