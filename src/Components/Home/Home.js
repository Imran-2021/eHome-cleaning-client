import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import "./Home.css"
import ExtraFeture from './HomeComponent/ExtraFeture';
import FeactureProducts from './HomeComponent/FeaturedProducts';
import Reviews from './HomeComponent/Reviews';
import ServicesType from './HomeComponent/ServicesType';
import Support from "./HomeComponent/Support"
const Home = () => {
    return (
        <>
        <div className="home" style={{backgroundImage: 'linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(Images/House-Cleaning-service.jpg)'}}>
            <div className="container">
                <h2>WelCome to <span className="text-warning">eHome-Clean Service</span> </h2>
                <p>we are here to help you , to make your home area clean and healthy.</p>
                <button className="btn btn-outline-primary"><Link class="muted" to="/services">Chose your fabourite Services</Link></button>

            </div>
        </div>

        <Support />
        
        <hr style={{backgroud:"red",margin:"20px"}} />
        <ServicesType/>
        <hr style={{backgroud:"red",margin:"20px"}} />
        <Services/>
        <FeactureProducts/>
        <ExtraFeture/>
        <Reviews/>
        <Footer/>
        </>
    );
};

export default Home;