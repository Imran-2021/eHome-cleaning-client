import React from 'react';
import ExtraInfoCard from './ExtraInfoCard';

const extrainfo = [
    {
        title: 'Floor Cleaning',
        description: 'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        image: "https://dtweclean.wpengine.com/wp-content/uploads/2015/09/icon1.png",

    },
    {
        title: 'Window Cleaning',
        description: 'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        image: "https://dtweclean.wpengine.com/wp-content/uploads/2015/09/icon2.png",

    },
    {
        title: 'Laundry',
        description: 'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        image: "https://dtweclean.wpengine.com/wp-content/uploads/2015/09/icon3.png",

    },
    {
        title: 'Trash Treatment',
        description: 'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        image: "https://dtweclean.wpengine.com/wp-content/uploads/2015/09/icon4.png",

    },
    {
        title: 'Extra Shiny',
        description: 'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        image: "https://dtweclean.wpengine.com/wp-content/uploads/2015/11/icon5.png",
    },
    {
        title: 'Cloth Ironing',
        description: 'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
        image: "https://dtweclean.wpengine.com/wp-content/uploads/2015/11/icon6.png",

    }
]
const ExtraFeture = () => {
    return (
        <div className="extraE">
            <section className=" container extraF mb-5 pb-5" style={{ minHeight: "500px", backgroundColor: "#ddd",overflow: "hidden"}} >
                <h2 className="text-center pt-5 mt-5 ">We provide best solutions for a Clean Environment.</h2>
                <div className=" ">

                    <div className="Extra-d">
                        {
                            extrainfo.map(info => <ExtraInfoCard info={info} key={info.title} />)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExtraFeture;