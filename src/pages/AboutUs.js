import React from 'react'
import Headerleft from '../components/Headers/Headerleft'
import About_content from '../components/About_content'
import Aboutqualities from '../sections/Aboutqualities'
import Aboutdetail from '../sections/Aboutdetail'
import Counter from '../sections/Counter'
import {Ourteam} from '../sections/Ourteam'
import { Headerdata_left } from '../Data/Home_Data'

const AboutUs = () =>{
    return(
        <>
        <div className="wraper-v2-inner">
        <Headerleft
            heading = {Headerdata_left[0].heading}
            l1 = {Headerdata_left[0].l1}
        />
        <About_content />
        <Aboutqualities />
        <Aboutdetail />
        <section id="counter" className="counter-inner">
        <Counter/>
        <div className="overlay"></div>
        </section>
        <Ourteam/>
        </div>
        </>
    )
}

export default AboutUs;