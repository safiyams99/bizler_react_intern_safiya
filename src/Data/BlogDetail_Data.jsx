import React from 'react'
import img1 from '../img/recent-post-thumb-1.jpg'
import img2 from '../img/recent-post-thumb-2.jpg'
import img3 from '../img/recent-post-thumb-3.jpg'
import CommentImg1 from "../img/visitor_pic.jpg"
import CommentImg2 from '../img/visitor_pic_2.jpg'

const PostItemData = [
    {
        src:img1,
        PostItemContent: "Lorem Ipsum is simply dummy text of the printing "
    },
    {
        src:img2,
        PostItemContent: "Standard dummy text ever since the 1500s"
    },
    {
        src:img3,
        PostItemContent: "The leap into electronic typesetting"
    }
]

const CommentPostData = [
    {
        src: CommentImg1,
        name: "Jonathon Joe",
        date: "3 days ago"
    },
    {
        src: CommentImg2,
        name: "Alec Thompson",
        date: "3 days ago"
    },
    {
        src: CommentImg1,
        name: "Jonathon Joe",
        date: "3 days ago"
    },
    {
        src: CommentImg2,
        name: "Alec Thompson",
        date: "3 days ago"
    }
]

export {PostItemData, CommentPostData};