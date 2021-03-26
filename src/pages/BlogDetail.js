import React from 'react'
import SinglePostDetail from "../sections/SinglePostDetail";
import Counter from "../sections/Counter";
import Headerdetail from "../components/Headers/Headerdetail";
import {Headerdata_detail} from "../Data/Home_Data";
import Servfooter from "../components/Servfooter";

const BlogDetail = () =>{
    return (
        <>
            <div className="wraper">
                <Headerdetail heading={Headerdata_detail[0].heading} l1={Headerdata_detail[0].l1} />
                <SinglePostDetail/>
                <section id="counter">
                    <Counter/>
                    <div className="overlay"></div>
                </section>
            </div>
            <Servfooter/>
        </>
    );
}

export default BlogDetail;