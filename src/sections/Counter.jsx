import React from 'react'
import Cdiv from '../components/Counter_div'
import { C_data} from '../Data/Home_Data'


export default function Counter (){
    return(
        <>
        
          <div className="container">
            <div className="col-lg-12">
              <div className="row row-safari">
                <Cdiv
                c_icon = {C_data[0].c_icon}
                count = {C_data[0].count}
                c_title = {C_data[0].c_title}
                plus ="+"
                />
                <Cdiv
                c_icon = {C_data[1].c_icon}
                count = {C_data[1].count}
                c_title = {C_data[1].c_title}
                plus ="+"
                />
                <Cdiv
                c_icon = {C_data[2].c_icon}
                count = {C_data[2].count}
                c_title = {C_data[2].c_title}
                plus ="+"
                />
                <Cdiv
                c_icon = {C_data[3].c_icon}
                count = {C_data[3].count}
                c_title = {C_data[3].c_title}
                />
              </div>
            </div>
          </div>
        
        </>
    )
}