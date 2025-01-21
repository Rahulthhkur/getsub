import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'

const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <>
        <Navbar />
        <hr />
        <div className='flex w-full'>
          <Sidebar />
        </div>
      </>
    </div>
  )
}

export default App