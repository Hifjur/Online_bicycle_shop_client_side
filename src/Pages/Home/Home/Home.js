import React from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Banner from '../Banner/Banner';
import BikeShowcase from '../BikeShowcase/BikeShowcase';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <BikeShowcase></BikeShowcase>
        </div>
    );
};

export default Home;