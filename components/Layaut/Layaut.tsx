import React from 'react'
// import Navbar from '../Navbar/Navbar'
import Navbar from '@components/Navbar/Navbar'
// import style from './layout.module.css'

const Layaut: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer className="container">This is the footer</footer>
      <style jsx>{`
        .container {
          color: red;
          font-size: 4rem;
        }

        div {
          background-color: salmon;
        }
      `}</style>
    </div>
  )
}

export default Layaut
