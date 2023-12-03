import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='w-100 d-flex justify-content-evenly bg-dark text-light py-3' style={{borderBottom: "1px solid white"}} data-aos="fade-down">
        <div className='portfolio'>
            <h3 className=''>Portfolio</h3>
        </div>
        <div className='home d-flex justify-content-evenly  '>
            <Link style={{textDecoration: "none"}} to="/"><h3>Home</h3></Link>
            <Link style={{textDecoration: "none"}} to="/"><h3>About</h3></Link>
            <Link style={{textDecoration: "none"}} to="/"><h3>Skills</h3></Link>
            <Link style={{textDecoration: "none"}} to="/"><h3>Contact</h3></Link>
        </div>
    </div>
  )
}

export default Nav