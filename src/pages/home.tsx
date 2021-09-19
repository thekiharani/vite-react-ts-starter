import React, { useEffect } from 'react'
import IPage from '../interfaces/page'
import logging from '../config/logging'
import { Link } from "react-router-dom";

const HomePage: React.FC<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col h-full justify-center items-center">
        <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg">
          Home Page
        </button>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}

export default HomePage
