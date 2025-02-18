// import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (

    <>
       <div className="outer">
        <div className="logo">
            <span>MyApp</span>
        </div>
        <div className="list">
            <ul>
                <div className="one">
                <li><Link to="./Home.jsx">Home</Link></li>
                </div>
                <div className="one">
                <li><Link to="./About.jsx">About</Link></li>
                </div>
                <div className="one">
                <li><Link to="./Contat.jsx">Contact</Link></li>
                </div>
            </ul>
        </div>
       </div>
      
    </>
  )
}

export default Nav
