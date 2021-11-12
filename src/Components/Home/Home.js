import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Toys from '../Toys/Toys';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Toys></Toys>
            <Review></Review>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;