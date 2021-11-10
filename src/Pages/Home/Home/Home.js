import React from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import BikeShowcase from '../BikeShowcase/BikeShowcase';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h2>home</h2>
            <BikeShowcase></BikeShowcase>
        </div>
    );
};

export default Home;