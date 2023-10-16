import { useState } from 'react'
import './App.css'
import CalendarTable from './components/CalendarTable'


function App({initialData}) {
  return(
    <>
    <CalendarTable initialEventData={initialData}/>
    </>
  )
}

export default App
