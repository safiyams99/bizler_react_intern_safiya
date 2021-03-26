import React from 'react'


const Cdiv = ({c_icon,count,c_title,plus}) => {
    return(
      <div className="counter-column col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div className="count_icon"> <i className={c_icon}></i> </div>
        <div className="counter_content">
          <h2><span className="counter">{count}</span>{plus}</h2>
          <div className="title">{c_title}</div>
        </div>
      </div>
    )
}



export default Cdiv;