import '../App.css';

import React from 'react';

import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className = 'landingpagecontainer'>
        
        <nav>
            <div className='navheader'><h2>VIDFREE</h2></div>
            <div className='navlist'>
                <p>join as guest</p>
                <p>regester</p>
                <div role='button'><p>login</p></div>
            </div>
        </nav>
        
        <div className="landingmaincontainer">
            <div>
                <h1><span style={{color:"#FF9579"}}>connect</span> with your lover ones</h1>
                <p>cover a distance by VIDFREE Vider calling application</p>
                <br></br>
                <div role='button'>
                    <Link to={"/home"}>Get Started</Link>
                    
                </div>
            </div>
            <div>
                <img src="/mobile.png" alt="" />
            </div>
        </div>
    </div>
  )
}
