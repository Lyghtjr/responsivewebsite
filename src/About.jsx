import React from 'react';
import Common from './Common';
import web from '../src/images/img2.jpg';
const About=()=>{
 return(
    <Common 
        name='Welcome To About Page'
        imgsrc={web}
        visit='/contact'
        btnname='Contact Now'
    />
 )
}
export default About;