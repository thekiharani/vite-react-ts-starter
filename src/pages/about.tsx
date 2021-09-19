import React, { useEffect, useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import IPage from '../interfaces/page'
import logging from '../config/logging'
import { Link } from "react-router-dom";

const AboutPage: React.FC<IPage & RouteComponentProps<any>> = (props) => {
  const [message, setMessage] = useState<string>('')
  useEffect(() => {
    logging.info(`Loading ${props.name}`)

    let number = props.match.params.number
    if (number) {
      setMessage(`The number is: ${number}`)
    } else {
      setMessage(`No number was provided`)
    }
  }, [props])
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col h-full justify-center items-center">
        <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg">
          About Page
        </button>
        <p>{message}</p>
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

export default withRouter(AboutPage)
