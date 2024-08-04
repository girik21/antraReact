import React from 'react'
import './App.css'
import DataChart from './components/DataChart/DataChart'
import FilteredChart from './components/FilteredChart/FilteredChart'

export default function App() {
  return (
    <div className='mainContainer'>
      <DataChart />
      <FilteredChart />
    </div>
  )
}
