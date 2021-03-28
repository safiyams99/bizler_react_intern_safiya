import React from 'react'
import PostItem from "../components/Postitem";
import {PostItemData, BlogTagsData, BlogQuickConnectData} from "../Data/BlogDetail_Data";
import BlogTags from "../components/BlogTags";
import BlogQuickConnect from "../components/BlogQuickConnect";

const WidgetBlog = () => {
    return (
        <>
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
                                <BlogTags TagTitle={BlogTagsData[0].TagTitle}/>
                                <BlogTags TagTitle={BlogTagsData[1].TagTitle}/>
                                <BlogTags TagTitle={BlogTagsData[2].TagTitle}/>
                                <BlogTags TagTitle={BlogTagsData[3].TagTitle}/>
                                <BlogTags TagTitle={BlogTagsData[4].TagTitle}/>
                                <BlogTags TagTitle={BlogTagsData[5].TagTitle}/>
                                <BlogTags TagTitle={BlogTagsData[6].TagTitle}/>
                                <BlogTags TagTitle={BlogTagsData[7].TagTitle}/>
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
                                <BlogQuickConnect FormPlaceholder={BlogQuickConnectData[0].FormPlaceholder}/>
                                <BlogQuickConnect FormPlaceholder={BlogQuickConnectData[1].FormPlaceholder}/>
                                <BlogQuickConnect FormPlaceholder={BlogQuickConnectData[2].FormPlaceholder}/>
                                <BlogQuickConnect FormPlaceholder={BlogQuickConnectData[3].FormPlaceholder}/>
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
        </>
    );
}
export default WidgetBlog;