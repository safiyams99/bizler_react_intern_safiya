import React from 'react';


const CommentPost = ({src, name, date}) => {
    return(
        <>
            <div className="comment">
                <div className="visitor_pic"><img src={src} alt="Visitor"/>
                </div>
                <div className="visitor_description">
                    <div className="name_date">
                        <h6>{name}</h6>
                        <div className="date">{date}</div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. </p>
                    <a href="javascript:void(0)" title="Reply">Reply</a></div>
            </div>
        </>
    );
}
export default CommentPost;