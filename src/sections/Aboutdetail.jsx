import React from 'react';
import Aboutdetail_card from '../components/Aboutdetail_card'
import { Aboutdetail_data } from '../Data/Home_Data';

const Aboutdetail = () => {
    const description = "Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    return (
        <>
        <section id="about-detail" className="index-3">
          <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mid-content">
              <div className="row">
              <Aboutdetail_card
              src = {Aboutdetail_data[0].src} 
              alt = {Aboutdetail_data[0].alt}
              title1 = {Aboutdetail_data[0].title1}
              title2 = {Aboutdetail_data[0].title2}
              description = {description}
              />

            <Aboutdetail_card
              src = {Aboutdetail_data[1].src} 
              alt = {Aboutdetail_data[1].alt}
              title1 = {Aboutdetail_data[1].title1}
              title2 = {Aboutdetail_data[1].title2}
              description = {description}
              />

            <Aboutdetail_card
              src = {Aboutdetail_data[2].src} 
              alt = {Aboutdetail_data[2].alt}
              title1 = {Aboutdetail_data[2].title1}
              title2 = {Aboutdetail_data[2].title2}
              description = {description}
              />

              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Aboutdetail;