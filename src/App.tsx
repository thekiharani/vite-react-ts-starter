import React, { useState } from 'react'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="h-screen w-full">
        <div className="flex h-full justify-center items-center">
          <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default App
