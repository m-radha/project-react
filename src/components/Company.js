import React from 'react';
import '../components/Company.css';
import logo from '../Images/logo.png';
import AboutUs1 from '../Images/AboutUs1.png';
import AboutUs2 from '../Images/AboutUs2.png';
import pic13 from '../Images/pic13.png';

const Company = () => {
    return (
        <div>
            <div className='nav'>
                <img src={logo} alt="logo" className='logo'></img>
                <a href="#">Home</a>
                <a href="#">Company</a>
                <a href="#">Product</a>
                <a href="#">Technology</a>
                <a href="#">Contact</a>
            </div>
            <div className='AboutUs'>
                {/* <img src={AboutUs1} alt='aboutUs1' className='aboutUs1-img'></img> */}
                <img src={AboutUs2} alt='aboutUs2' className='aboutUs2-img'></img>
            </div>
            <div className='content'>
                <p className='title-text'>Impilosensys</p>
                <p className='content-text'>The company behind impilo vista was provided by</p>
            </div>
            <div className='grid-container'>
                <div className="card">
                    <img src={pic13} alt="Avatar"></img>
                    <div className="container">
                        <h4><b>Dr.Ravindra shetty</b></h4>
                        <p className='blue-color'>CEO</p>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt="Avatar"></img>
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p className='blue-color'>COO</p>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt="Avatar"></img>
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p className='blue-color'>CFO</p>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt="Avatar"></img>
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p className='blue-color'>CMO</p>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt="Avatar"></img>
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p className='blue-color'>Advisor</p>
                    </div>
                </div>
            </div>
        </div>     
)};

export default Company;
