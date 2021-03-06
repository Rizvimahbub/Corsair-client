import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Ique from '../Ique/Ique';
import Reviews from '../Reviews/Reviews';
import Tools from '../Tools/Tools';
import VideoSection from '../VideoSection/VideoSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Ique/>
            <VideoSection></VideoSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;