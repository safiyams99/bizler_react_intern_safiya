import React from 'react'

const PostItem = ({src,PostItemContent}) =>{
    return(
    <>
        <div className="post-item">
            <div className="post-img"><img src={src} alt="post"/></div>
            <div className="post-content">
                <a href="blog-detail.html">{PostItemContent}</a>
                <div className="post-status"><i className="flat flaticon-calendar"></i>
                    <span>05/10/2018</span></div>
            </div>
        </div>
    </>
    );
}

export default PostItem;