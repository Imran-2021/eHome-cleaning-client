import React from 'react';
import "./About.css"
const About = () => {
    return (
        <div className="about">
            <div className="about-in">
                <div className="about-div">
                    <h1>Wekcome to about page !</h1>
                    <h3>eHomeCleaning services</h3>
                    <p>the world class company !!!</p>
                    <p className="aboutp">We are here to help you make an We provide best solutions for a Clean Environment. If you need any help in cleaning or maintenance.</p>
                    <div class="mtt-3"><a class="btn-get-started" href="/contact">Contact Now</a></div>
                </div>
                <div className="about-div">
                    <img  width="100%" src="Images/houseCleaning.svg" alt="" />
                </div>

            </div>

        </div>
    );
};

export default About;