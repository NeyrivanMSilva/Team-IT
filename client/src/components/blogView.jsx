
import React from "react";
import { useState, useEffect } from 'react';

import { useAppContext } from '../context/appContext.js'
import Comment from "./comment.jsx";
import "./buttons.css"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Alert from "./Alert.jsx"
import { Link } from 'react-router-dom'

const BlogView = ({ }) => {

    let {
        alertText,
        alertType,
        displayAlert,
        getBlog,
        comments,
        getComments,
        CreateComment,
        blogTitle,
        blogDate,
        blogAuthor,
        blogDescription,
        handleChange,
        displayAlertBlank,
        Author,
        Text,
        postId
    } = useAppContext()

    useEffect(() => {


        topFunction()

        GetPostId()
        setTimeout(() => {
            getBlog();
            getComments();
            setLoadingIsActive(true)
        }, "2000")

    }, {})

    useEffect(() => {
        Checker()

    })


    const [LoadingIsActive, setLoadingIsActive] = useState(false);

    const GetPostId = async () => {
        const name = "postId"
        const value = localStorage.getItem("postId");
        console.log(localStorage.getItem("postId"));
        await handleChange({ name, value })

    }


    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    const Change = (e) => {
        const name = e.target.name
        const value = e.target.value
        handleChange({ name, value })
    }


    const Submit = async () => {

        CreateComment()
        let name = "Author"
        let value = ""
        handleChange({ name, value })
        name = "Text"
        value = ""
        handleChange({ name, value })
        setTimeout(() => {
            getBlog();
            getComments();
            setLoadingIsActive(true)
        }, "2000")
    }

    const Checker = () => {
        if (Author != "" && Text != "") {
            if (Author.trim().length != 0 && Text.trim().length != 0) {
                setButtonIsActive(true)
            }

        }

        if (Author === "" || Text === "") {
            if (Author.trim().length === 0 || Text.trim().length === 0) {
                setButtonIsActive(false)
            }

        }
    }

    const [ButtonIsActive, setButtonIsActive] = useState(false);


    return (
        <>
            <div data-testid="blogView" class="container-fluid blogView">
                <div class="row blogs_container ">
                    <div className="row row_blogbox p-0" data-testid="blogViewInfo" >
                        {LoadingIsActive ? <> <div className="col-md-12 col12_blogbox mt-5">
                            <div className="blog_box">

                                <div data-testid="blogViewInfo" class="row">
                                    <div class="col-md-12  ">
                                        <Link to='/'>
                                            <h1 className="text-left article-GoBack">
                                                <BsFillArrowLeftCircleFill size={15} />   Go back to the Articles list
                                            </h1>
                                        </Link>

                                        <h3 className="blog_title">
                                            {blogTitle}
                                        </h3>
                                    </div>
                                </div>
                                <div className="commentMobile">
                                    <div class="row row_blogsInfo">
                                        <div class="col-md-2 col-sm-4 col-md-2_blogsInfo">
                                            <h3 className="blogs_date">
                                                {blogDate}
                                            </h3>
                                        </div>
                                        <div class="col-md-7 col-sm-4 p-0">
                                            <h3 className="blogs_author">
                                                {blogAuthor}
                                            </h3>
                                        </div>
                                        <div class="col-md-3 col-sm-4">
                                            <h3 className="blogs_comments">
                                                {comments.length} Comments
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="commentWeb">
                                    <div class="row row_blogsInfo">
                                        <div class="col-md-2 col-md-2_blogsInfo">
                                            <h3 className="blogs_date">
                                                {blogDate}
                                            </h3>
                                        </div>
                                        <div class="col-md-7 p-0">
                                            <h3 className="blogs_author">
                                                {blogAuthor}
                                            </h3>
                                        </div>
                                        <div class="col-md-3">
                                            <h3 className="blogs_comments">
                                                {comments.length} Comments
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div className="col-md-12">
                                        <p className="blogs_comments">
                                            {blogDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                            <div data-testid="blogViewComments" className="col-md-12 mt-5">
                                <div className="row m-0">
                                    <div className="row m-0 comment_title_row">
                                        <p className="comment_title">Comments </p>
                                    </div>
                                </div>
                                <div className="row">
                                    {comments.map((comment) => {

                                        return <Comment key={comment._id} {...comment} />
                                    })}
                                </div>


                            </div>
                        </> : <><div className="row">
                            <p> Loading...</p>
                        </div> </>}



                        <div data-testid="blogViewNewComment" className="col-md-12 mt-5">
                            <div className="row">
                                <p className=" commentAddLabel">Leave a comment</p>
                            </div>
                            <div className="row">
                                <div className="addComment_box mb-4">
                                    <div className="row m-4">
                                        <label className='form-label commentAddLabelInfo' >
                                            Nome
                                        </label>
                                        <input class="form-control commentAddLabelInfo" type="text" name="Author" value={String(Author)} id="SearchInput" onChange={Change} />

                                    </div>
                                    <div className="row m-4">
                                        <label className='form-label commentAddLabelInfo'>
                                            Comentário
                                        </label>
                                        <input class="form-control" type="text" name="Text" value={String(Text)} id="SearchInput" onChange={Change} />
                                    </div>
                                    <div className="row m-4 p-0">

                                        <div className="col-md-3 p-0">
                                            {ButtonIsActive ? <button className="button_publishcomment" onClick={() => { Submit() }}> Adicionar comentário </button> : <button className="button_publishcommentDeActivated" disabled onClick={() => { Submit() }}> Adicionar comentário </button>}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>

    );
}

export default BlogView;