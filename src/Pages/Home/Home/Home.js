import React from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import AllReviews from '../AllReviews/AllReviews';
import Banner from '../Banner/Banner';
import BikeShowcase from '../BikeShowcase/BikeShowcase';
import SocialPanel from '../SocialPanel/SocialPanel';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <BikeShowcase></BikeShowcase>
            <AllReviews></AllReviews>
            <SocialPanel></SocialPanel>
        </div>
    );
};

export default Home;