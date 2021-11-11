import React from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import AllReviews from '../AllReviews/AllReviews';
import Banner from '../Banner/Banner';
import BikeShowcase from '../BikeShowcase/BikeShowcase';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <BikeShowcase></BikeShowcase>
            <AllReviews></AllReviews>
        </div>
    );
};

export default Home;