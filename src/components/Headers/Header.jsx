import React from 'react';

function Header(props){
    return(
        <>
            <section id="inner-banner">
            <div className="container">
                <div className="row">
                <div className="inner-heading">
                    <h2>{props.heading}</h2>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item "><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item" aria-current="page">{props.l1}</li>
                    </ol>
                    </nav>
                </div>
                </div>
            </div>
            </section>

        </>
    )
}

export default Header;