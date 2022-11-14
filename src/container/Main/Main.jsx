import React, { useEffect } from 'react';

import Slider from '../../components/Main/Slider/Slider';
import SwiperProductType from '../../components/Main/Swiper/SwiperProductType';
import NewProducts from '../../components/Main/NewProducts/NewProducts';
import WinterCollection from '../../components/Main/WinterCollection/WinterCollection';
import SpecialProducts from '../../components/Main/Special-Products/SpecialProducts';
import Collection from '../../components/Main/Collection/Collection';
import PopularProducts from '../../components/Main/PopularProduct/PopularProducts';
import BrandLogo from '../../components/Main/BrandLogo/BrandLogo';
import BlogsList from '../../components/Main/BlogsList/BlogsList';
import Support from '../../components/Main/Support/Support';

import './Main.css';

const Main = () => {

    useEffect(() => {
        document.title = 'FcMarket - فروشگاه اینترنتی';
    }, []);

    return (
        <>
            <Slider />
            <SwiperProductType />
            <NewProducts />
            <WinterCollection />
            <SpecialProducts />
            <Collection />
            <PopularProducts />
            <BrandLogo />
            <BlogsList />
            <Support />
        </>
    )
}

export default Main