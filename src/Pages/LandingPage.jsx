import React from 'react';
import './LandingPage.css';
// import image from '../Assets/portrait.jpg';

const LandingPage = () => {
  return (

    <>
    <div className='main_landing'>
        <div className='araha_logo'>
            <h1>Araha</h1>
        </div>
        <div className='list-menu'>
        <ul>
            <li>
                <a href="platform">PlatForm</a>
                <a href="solutions">Solutions</a>
                <a href="customer-stories">Customer Stories</a>
                <a href="pricing">Pricing</a>
            </li>
        </ul>
        </div>

        <div className='login'>
            <button>LOGIN</button>
            <button>GET STARTED</button>
        </div>
    </div>
    <div className='transform'>
    <h1>
       Subscribe with ease <br /> using ARAHA<br />
    </h1>
    <p className='paragraph'>
        Unlock the potential of your advertising<br /> efforts and connect with your audience like never before.
    </p>
    <div className='getstarted'>
    <button>
        GET STARTED
    </button>
    </div>
    
    </div>
    </>
  );
};

export default LandingPage;
