import React from 'react';
import Common from './Common';
import web from '../src/images/img1.jpg';
const Home=()=>{
 return(
    <Common 
        name='Grow your Business with '
        imgsrc={web}
        visit='/service'
        btnname='Get Started'
    />
 )
}
export default Home;