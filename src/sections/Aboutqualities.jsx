import React from 'react'
import Qualities_card from '../components/Aboutqualities_card'
import { Aboutqualities_data} from '../Data/Home_Data'

const Qualities = () => {
  const description = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    return (
        <>
        <section id="qualities" className="index-3">
          <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="content">
                <Qualities_card
                iconname = {Aboutqualities_data[0].iconname}
                heading = {Aboutqualities_data[0].heading}
                description = {description}
                />
                <Qualities_card
                iconname = {Aboutqualities_data[1].iconname}
                heading = {Aboutqualities_data[1].heading}
                description = {description}
                />
                <Qualities_card
                iconname = {Aboutqualities_data[2].iconname}
                heading = {Aboutqualities_data[2].heading}
                description = {description}
                />
                <Qualities_card
                iconname = {Aboutqualities_data[3].iconname}
                heading = {Aboutqualities_data[3].heading}
                description = {description}
                />
              </div>
            </div>
          </div>
        </section>
        </>

    )
}

export default Qualities;
