
import React from "react";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useAppContext } from '../context/appContext.js'
 



const Article = ({ id, title, author, publish_date, description }) => {
    let {
        handleChange,
        postId,
        blogTitle,
        blogDate,
        blogAuthor,
        blogDescription,
        getBlog,
        fetching
    } = useAppContext()


    const StorePostId = async() =>{
          localStorage.setItem("postId", id);
     } 
    const handleSubmit = async () => {
        const name = "postId"
        const value = id
        
      await  handleChange({ name, value })
      StorePostId()
      console.log(localStorage.getItem("postId" ));
     
}

    return (
        <>
            <div data-testid="article-1" className="row row_blogbox p-0" >
                <div className="col-md-12 col12_blogbox mt-5">
                    <div className="blog_box">
                        <div class="row">
                            <div class="col-md-12">
                                <Link to='/blog'   onClick={() => { handleSubmit() }}  >
                                    <h3 className="blogs_title" data-testid="article-1-title">
                                        {title}  
                                    </h3>
                                </Link>

                            </div>
                        </div>
                        <div class="row row_blogsInfo">
                            <div class="col-md-2 col-sm-12 ">
                                <h3 className="blogs_date" data-testid="article-1-date">
                                    {publish_date}
                                </h3>
                            </div>
                            <div class="col-md-7 col-sm-12">
                                <h3 className="blogs_author" data-testid="article-1-author">
                                    {author}
                                </h3>
                            </div>

                        </div>
                        <div class="row">
                            <div className="col-md-12">
                                <p className="blogs_comments" data-testid="article-1-description">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </>

    );
}

export default Article;
