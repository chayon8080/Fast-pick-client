import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About'
import CustomerReview from '../CustomerReview/CustomerReview';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;