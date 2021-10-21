import React, { useEffect, useState } from 'react';
import FakeReview from './FakeReview';
import Review from './Review';

import "./Reviews.css"


const Reviews = () => {
    
    const [review,setReview]=useState(FakeReview);

    return (
        <section className=" container styleofbody"  style={{height:"100%", backgroundColor:"#ddd"}} >
            <h2 className="text-center pt-3">-Testimonial-</h2>
            <div className="d-flex justify-content-center  flex-wrap">

                <div className="roww  flex-wrap">
                    {
                        review.map(info => <Review info={info}/>)
                    }
                </div> 
            </div>
        </section>
    );
};

export default Reviews;