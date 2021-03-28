import React from 'react'

const BlogTags = ({TagTitle}) => {
    return(
        <>
            <li>
                <a href="#" title={TagTitle}>{TagTitle}</a>
            </li>
        </>
    );
}
export default BlogTags;