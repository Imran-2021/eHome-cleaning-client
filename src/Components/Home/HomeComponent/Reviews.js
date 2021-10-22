import React, { useEffect, useState } from 'react';
import FakeReview from './FakeReview';
import Review from './Review';

import "./Reviews.css"


const Reviews = () => {
    
    const [review,setReview]=useState(FakeReview);

    return (
        <div className="styleofbodyf" >
        <section className=" styleofbody mt-5 pb-5 container reviews"  style={{height:"100%", backgroundColor:"#ddd"}} >
            <h2 className="text-center pt-5 text-danger">-Testimonial-</h2>
            <div className="d-flex justify-content-center  flex-wrap">

                <div className="stylereview">
                    {
                        review.map(info => <Review info={info}/>)
                    }
                </div> 
            </div>
        </section>
        </div>
    );
};

export default Reviews;