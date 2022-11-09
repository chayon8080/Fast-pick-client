import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About'
import CustomerReview from '../CustomerReview/CustomerReview';
import Services from '../../Services/Services';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;