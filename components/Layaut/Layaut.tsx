import React from 'react'
import Navbar from '../Navbar/Navbar'

const Layaut: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </div>
  )
}

export default Layaut