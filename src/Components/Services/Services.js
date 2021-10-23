import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FakeServices from '../Home/HomeComponent/FakeService';
import FeactureProducts from '../Home/HomeComponent/FeaturedProducts';
import "./Services.css"
const Services = () => {
    const [service, steService] = useState(FakeServices)
    return (
        <>
            <div className="service-se">
                <div className="services">
                    <h2 className=" pt-5">Our Services</h2>
                    <div className="services-in">
                        {
                            service.map(x => {
                                const {name,cost,type,note}=x
                                return (
                                    <div className="servicess-inn">
                                        <h3 className="py-4">{name}</h3>
                                        <h5 className="py-2">${cost}</h5>
                                        <p className="py-2">{type}</p>
                                        <h5 className="py-4">{note}</h5>
                                      <Link to="/user">  <button className="btn btn-primary w-50 m-auto"> Buy Service </button></Link>
                                    </div>
                                )
                            })
                        }

                        {/* <div className="servicess-inn">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim pariatur commodi omnis impedit soluta fugit quam corporis, quaerat nemo rem accusamus voluptates voluptatem laboriosam et. Fuga totam quidem rem.</p>
                </div>
                <div className="servicess-inn">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim pariatur commodi omnis impedit soluta fugit quam corporis, quaerat nemo rem accusamus voluptates voluptatem laboriosam et. Fuga totam quidem rem.</p>
                </div>
                <div className="servicess-inn">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim pariatur commodi omnis impedit soluta fugit quam corporis, quaerat nemo rem accusamus voluptates voluptatem laboriosam et. Fuga totam quidem rem.</p>
                </div>
                <div className="servicess-inn">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim pariatur commodi omnis impedit soluta fugit quam corporis, quaerat nemo rem accusamus voluptates voluptatem laboriosam et. Fuga totam quidem rem.</p>
                </div> */}

                    </div>
                </div>
            </div>
            <FeactureProducts />
        </>
    );
};

export default Services;