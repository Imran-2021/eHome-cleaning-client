import React, { useEffect, useState } from 'react';
import FakeReview from './FakeReview';
import Review from './Review';

import "./Reviews.css"


const Reviews = () => {
    
    const [review,setReview]=useState(FakeReview);

    return (
        <section className=" container styleofbody mt-5 pb-5"  style={{height:"100%", backgroundColor:"#ddd"}} >
            <h2 className="text-center pt-5">-Testimonial-</h2>
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