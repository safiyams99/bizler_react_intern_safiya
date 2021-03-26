import React from "react";
import PostItem from "../components/Postitem";
import {PostItemData, CommentPostData} from '../Data/BlogDetail_Data';
import BlogPostImg from '../img/blog-post-1.jpg';
import AuthorImg from '../img/author_dp.jpg';
import CommentPost from "../components/CommentPost";


const SinglePostDetail = () => {
    return (
        <>
            <section id="single-post-detail">
                <div className="container">
                    <div className="col-lg-12 col-md-12 col-xs-12">
                        <div className="row">
                            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 blog-detail">
                                <div className="post-img"><img src={BlogPostImg} alt="Post"/></div>
                                <div className="post-detail">
                                    <div className="about-post">
                                        <h4>The generated Lorem Ipsum is therefore always free</h4>
                                        <div className="post-status">
                                            <ul>
                                                <li><i className="flat flaticon-folder"></i> <span><a href="javascript:void(0)">UI Developer</a></span>
                                                </li>
                                                <li><i className="flat flaticon-chat"></i> <span>20</span></li>
                                                <li><i className="flat flaticon-calendar"></i> <span>05/10/2018</span></li>
                                            </ul>
                                        </div>
                                        <div className="description">
                                            <p>it is a long established fact that a reader will be distracted by the readable
                                                content of a page when looking at its layout. The point of using Lorem Ipsum is
                                                that
                                                it has a more-or-less normal distribution of letters, as opposed to using
                                                `Content
                                                here, content here`, making it look like readable English. Many desktop
                                                publishing
                                                packages and web page editors now use Lorem Ipsum as their default model text,
                                                and a
                                                search for `lorem ipsum` will uncover many web sites still in their infancy.</p>
                                            <div className="special-quote">
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                                in a
                                                piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                            </div>
                                            <p> It uses a dictionary of over 200 Latin words, combined with a handful of model
                                                sentence structures, to generate Lorem Ipsum which looks reasonable. The
                                                generated
                                                Lorem Ipsum is therefore always free from repetition, injected humour, or
                                                non-characteristic words etc.</p>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                                have
                                                suffered alteration in some form, by injected humour, or randomised words which
                                                don`t look even slightly believable. If you are going to use a passage of Lorem
                                                Ipsum, you need to be sure there isn`t anything embarrassing hidden in the
                                                middle of
                                                text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                                                chunks as necessary, making this the first true generator on the Internet.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="tags_share">
                                        <div className="tags">
                                            <div className="title">Tags</div>
                                            <ul>
                                                <li><a href="javascript:void(0)" title="Bootstrap">Bootstrap</a></li>
                                                <li><a href="javascript:void(0)" title="HTML">HTML</a></li>
                                                <li><a href="javascript:void(0)" title="CSS">CSS</a></li>
                                                <li><a href="javascript:void(0)" title="Jquery">Jquery</a></li>
                                                <li><a href="javascript:void(0)" title="CSS">CSS</a></li>
                                            </ul>
                                        </div>
                                        <div className="share_on">
                                            <div className="title">Share On :</div>
                                            <div className="icons"><a href="javascript:void(0)"><i
                                                className="flat flaticon-facebook-logo"></i></a> <a href="javascript:void(0)"><i
                                                className="flat flaticon-twitter"></i></a> <a href="javascript:void(0)"><i
                                                className="flat flaticon-google-plus-logo"></i></a> <a
                                                href="javascript:void(0)"><i
                                                className="flat flaticon-linkedin-logo"></i></a> <a href="javascript:void(0)"><i
                                                className="flat flaticon-instagram"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="author_sec">
                                    <div className="author-pic"><img src={AuthorImg} alt="Author"/></div>
                                    <div className="about-author">
                                        <div className="name_designation">
                                            <h6>Rebecca Stormville</h6>
                                        </div>
                                        <div className="social_media">
                                            <ul>
                                                <li><a href="javascript:void(0)" title="Facebook"><i className="flat flaticon-facebook-logo"></i></a></li>
                                                <li><a href="javascript:void(0)" title="Twitter"><i
                                                    className="flat flaticon-twitter"></i></a></li>
                                                <li><a href="javascript:void(0)" title="Google"><i
                                                    className="flat flaticon-google-plus-logo"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                nostrud
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                nulla
                                                pariatur.</p>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="comments">
                                    <h5>There are <span> 20 Comments </span> on this post</h5>
                                    <div className="separator left-align">
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <div className="clearfix"></div>
                                    <ol className="comments-list">
                                        <li className="comment-item">
                                            <CommentPost src={CommentPostData[0].src} name={CommentPostData[0].name}
                                            date={CommentPostData[0].date}/>
                                            <ol className="comments-list reply">
                                                <li className="comment-item">
                                                    <CommentPost src={CommentPostData[1].src} name={CommentPostData[1].name}
                                                                 date={CommentPostData[1].date}/>
                                                </li>
                                            </ol>
                                        </li>
                                        <li className="comment-item">
                                            <CommentPost src={CommentPostData[2].src} name={CommentPostData[2].name}
                                                         date={CommentPostData[2].date}/>
                                            <ol className="comments-list reply">
                                                <li className="comment-item">
                                                    <CommentPost src={CommentPostData[3].src} name={CommentPostData[3].name}
                                                                 date={CommentPostData[3].date}/>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </div>
                                <div className="reply_form">
                                    <h5>Leave a Reply</h5>
                                    <div className="separator left-align ">
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <form action="https://wpshopmart.com/index.html">
                                        <div className="row">
                                            <div className="col-md-4 col-sm-4 col-sm-4 col-xs-12 form-group">
                                                <input type="text" placeholder="Full Name"/>
                                            </div>
                                            <div className="col-md-4 col-sm-4 col-sm-4 col-xs-12 form-group">
                                                <input type="text" placeholder="Email"/>
                                            </div>
                                            <div className="col-md-4 col-sm-4 col-sm-4 col-xs-12 form-group">
                                                <input type="text" placeholder="Website URL"/>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-sm-12 col-xs-12 form-group">
                                                <textarea placeholder="Write Your review"></textarea>
                                            </div>
                                            <div className="col-md-3 col-sm-3 col-sm-5 col-xs-12 form-group mar-none">
                                                <button type="submit">Send Message <i className="flat flaticon-plane"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <aside className="col-lg-3 col-md-12 col-sm-12 col-xs-12 sidebar right">
                                <div className="widget">
                                    <div className="sidebar_heading">
                                        <h5>Search</h5>
                                        <div className="separator left-align ">
                                            <ul>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget-content">
                                        <div className="search">
                                            <form action="https://wpshopmart.com/index.html">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Search..."/>
                                                    <button type="submit"><i className="flat flaticon-search"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget">
                                    <div className="sidebar_heading">
                                        <h5>Recent Posts</h5>
                                        <div className="separator left-align ">
                                            <ul>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget-content">
                                        <PostItem
                                        src = {PostItemData[0].src}
                                        PostItemContent = {PostItemData[0].PostItemContent}
                                        />
                                        <PostItem
                                            src = {PostItemData[1].src}
                                            PostItemContent = {PostItemData[1].PostItemContent}
                                        />
                                        <PostItem
                                            src = {PostItemData[2].src}
                                            PostItemContent = {PostItemData[2].PostItemContent}
                                        />

                                    </div>
                                </div>
                                <div className="widget">
                                    <div className="sidebar_heading">
                                        <h5>Tags</h5>
                                        <div className="separator left-align ">
                                            <ul>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget-content">
                                        <div className="tags">
                                            <ul>
                                                <li><a href="javascript:void(0)" title="Bootstrap">Bootstrap</a></li>
                                                <li><a href="javascript:void(0)" title="HTML">HTML</a></li>
                                                <li><a href="javascript:void(0)" title="CSS">CSS</a></li>
                                                <li><a href="javascript:void(0)" title="Jquery">Jquery</a></li>
                                                <li><a href="javascript:void(0)" title="Web Development">Web Development</a>
                                                </li>
                                                <li><a href="javascript:void(0)" title="Creative">Creative</a></li>
                                                <li><a href="javascript:void(0)" title="HTML">HTML</a></li>
                                                <li><a href="javascript:void(0)" title="CSS">CSS</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="widget">
                                    <div className="sidebar_heading">
                                        <h5>Quick Connect</h5>
                                        <div className="separator left-align ">
                                            <ul>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget-content">
                                        <div className="quick-connect-form">
                                            <form action="https://wpshopmart.com/index.html">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Full Name"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" placeholder="Email"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" placeholder="Phone No."/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" placeholder="Subject"/>
                                                </div>
                                                <div className="form-group">
                                                    <textarea placeholder="Message"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit">Send Message <i className="flat flaticon-plane"></i>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SinglePostDetail;