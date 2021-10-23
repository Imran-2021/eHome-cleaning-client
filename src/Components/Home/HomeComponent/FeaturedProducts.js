import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FakeFeatureProduct from './FakeFeatureProduct';

const FeactureProducts = () => {
    const [feactureProduct, setFeactureProduct] = useState(FakeFeatureProduct)

    return (
        <div  className="feacture-products">
        <div className="feature">
            <h2 className="pt-5">Our FeatureProducts - </h2>
            <div className="feature-in">

                  {
                      feactureProduct.map(x => {
                        const {img,name,price,details,Categories}=x
                        return (
                            <div className="servicess-inn">
                                <img width="100%" src={img} alt="" />
                                <h3 className="py-2">{name}</h3>
                                <h5 className="py-1">${price}</h5>
                                <p className="py-1">{details}</p>
                                <h5 className="py-1">{Categories}</h5>
                              <Link to="/user">  <button className="btn btn-primary w-50 m-auto"> Buy Product </button></Link>
                            </div>
                        )
                    })
                  }
                
               </div>
        </div>
        </div>
    );
};

export default FeactureProducts;