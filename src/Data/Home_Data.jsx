import React from 'react'
import img1 from '../img/team-member-pic.jpg'
import img2 from '../img/team-member-pic2.jpg'
import img3 from '../img/team-member-pic4.jpg'
import img4 from '../img/team-member-pic3.jpg'
import qimg1 from '../img/why-choose-us.jpg'
import qimg2 from '../img/our-mission.jpg'
import qimg3 from '../img/our-vision.jpg'

const Sdata = [  
    {
        pic: img1,
        name: "Alec Thompson" ,
        position:"Developer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        pic: img4,
        name: "Tania Andrew" ,
        position:"Designer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        pic:img3,
        name: "Christian Mike" ,
        position:"Developer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        pic:img2,
        name: "Rebecca Stormville" ,
        position:"Designer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
]

const Heading_data = [
    {
        title1:"Our ",
        title2:"Team",
        headingcontent:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
]

const C_data = [
    { 
        c_icon:"flat flaticon-happiness",
        count:"200",
        c_title:"Happy Client",
    },
    { 
        c_icon:"flat flaticon-coffee-cup",
        count:"750",
        c_title:"Cups of Coffee",
    },
    { 
        c_icon:"flat flaticon-like",
        count:"1800",
        c_title:"Projects Done",
    },
    { 
        c_icon:"flat flaticon-building",
        count:"15",
        c_title:"Office Locations",
    },
]

const Aboutqualities_data = [
    {
        iconname: "flat flaticon-reward",
        heading: "We are Professional",
    },
    {
        iconname: "flat flaticon-certificate",
        heading: "Licensed and Certified",
    },
    {
        iconname: "flat flaticon-enterprise",
        heading: "Number 1 Company",
    },
    {
        iconname: "flat flaticon-working-team",
        heading: "Leading Provider",
    }
]

const Aboutdetail_data = [
    {
       src: qimg1,
       alt: "Why Choose Us",
       title1: "Why ",
       title2: "Choose Us?" 
    },
    {
       src: qimg2,
       alt: "Our Mission",
       title1: "Our ",
       title2: "Mission" 
    },

    {
        src: qimg3,
        alt: "Our Vision",
        title1: "Our ",
        title2: "Vision" 
     },
]

const Headerdata =[
    {heading:"Services",l1:"Services" },
    // {heading:"Services Detail",l1:"Services", l2:"Service Details"},
    {heading: "About Us",l1: "About Us" },
    {heading: "Contact Us", l1: "Contact Us" },
    {heading: "Portfolio 2 Column", l1: "Portfolio 2 Column"},
    {heading: "Portfolio 3 Column", l1: "Portfolio 3 Column"},
    {heading: "Blog 2 Columns", l1:"Blog 2 Columns"},
    {heading: "Blog 3 Columns", l1:"Blog 3 Columns"},
    {heading:"Blog Right Sidebar", l1:"Blog 3 Columns"},
    {heading:"Blog Left Sidebar", l1:"Blog 3 Columns"}
    // {heading: "Portfolio Details",liClass:"breadcrumb-item active"}
]

const Headerdata_left=[
    {heading: "About Us", l1:"About Us"},
    {heading: "Services", l1:"Services"},
    {heading: "Blog 3 Column", l1:"Blog 3 Column"}
]

const Headerdata_detail=[
    {heading:"Blog Detail", l1:"Blog"},
    {heading:"Service Detail", l1:"Services"},
    {heading:"Portfolio Detail", l1:"Portfolio"}
]

export {Sdata, Heading_data, C_data, Aboutqualities_data, Aboutdetail_data, Headerdata, Headerdata_left, Headerdata_detail}
