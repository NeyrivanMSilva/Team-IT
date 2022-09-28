
import React from "react";
import { Link } from 'react-router-dom'

import { useAppContext } from '../context/appContext.js'
import { useState, useEffect } from 'react';
import { BsClockFill } from "react-icons/bs";


const Comment = ({ id, user, date, content, parent_id }) => {
    let {
        blogId,
        blogTitle,
        blogAuthor,
        blogPublish_date,
        blogDescription,
        handleChange,
        editedContent, editComment, commentCount, getComments, getBlog

    } = useAppContext()


    const handleSubmit = () => {
        handleChange("blogId", id)
    }



    useEffect(() => {
        Checker()


    }, {})

    useEffect(() => {
        EditChecker()
    })



    const [editIsChosen, setEditIsChosen] = useState(false);
    const [ButtonIsActive, setButtonIsActive] = useState(false);
    const [edit2IsChosen, setEdit2IsChosen] = useState(true);

    const Edit = () => {
        let name = "commentCount"
        let value = commentCount + 1

        handleChange({ name, value })
        setButtonIsActive(true)
        setTimeout(() => {
            setEditIsChosen(true)
        }, 1000)



        name = "editedContent"
        value = content
        handleChange({ name, value })
        name = "id"
        value = id
        handleChange({ name, value })
        name = "parent_id"
        value = parent_id
        handleChange({ name, value })
        name = "user"
        value = user
        handleChange({ name, value })








    }


    const Change = (e) => {

        let name = "editedContent"
        let value = e.target.value

        handleChange({ name, value })


    }

    const Submit = () => {


        editComment()
        setTimeout(() => {
            getBlog();
            getComments();
            let name = "commentCount"
            let value = 0

            handleChange({ name, value })
            setEditIsChosen(false)
            setButtonIsActive(false)
            setEdit2IsChosen(true)

        }, "2000")
    }

    const Cancel = () => {
        console.log("barca");
        let name = "editedContent"
        let value = ""

        handleChange({ name, value })
        name = "commentCount"
        value = 0

        handleChange({ name, value })
        setEditIsChosen(false)
        setButtonIsActive(false)
        setEdit2IsChosen(true)

    }





    const EditChecker = () => {
        if (commentCount < 1) {
            setEdit2IsChosen(true)
        }
        if (commentCount >= 1) {
            setEdit2IsChosen(false)
            console.log("2rata2");
        }

    }


    const Checker = () => {
        if (editedContent != "") {
            if (editedContent.trim().length != 0) {
                setButtonIsActive(true)
            }

        }

        if (editedContent === "") {
            if (editedContent.trim().length === 0) {
                setButtonIsActive(false)
            }

        }
    }


    return (
        <>

            <div data-testid="comment" className="col-md-12 col12_blogbox mt-5">
                <div className="comment_box">

                    <div className="commentWeb">
                        <div className="row mb-4 w-100 p-0 m-0">
                            <div className="col-md-1 col-sm-12 p-0 text-left">
                                <img src="./avatar.png" alt="" />
                            </div>
                            <div className="col-md-11 text-left">
                                <div className="row m-0">
                                    <p className="comment_user">{user}</p>
                                    <BsClockFill size={10} className="commentICon" />
                                    <p className="comment_date">{date}</p>

                                </div>
                                <div className="row m-0">

                                    {edit2IsChosen ? <a href="#" onClick={() => { Edit() }} > <p className="comment_Edit">Edit</p></a> : <p className="comment_Edit">You can only edit one comment at a time</p>}
                                </div>
                                <div className="row m-0 p-0 w-100">
                                    <p className="comment_content">{content}</p>
                                    <div className="col-md-12 p-0 " id="commentEdit">
                                        {editIsChosen ? ButtonIsActive ? <div><input class="form-control " type="text" placeholder="Content" name="editedContent" value={editedContent} id="SearchInput " onChange={Change} /><div  ><button className="button_Update" onClick={() => { Submit() }}>Update</button><button className="button_publishcommentDeActivated2" onClick={() => { Cancel() }}>Cancel</button></div></div> : <div><input class="form-control " type="text" placeholder="Content" name="editedContent" value={editedContent} id="SearchInput " onChange={Change} /><div className="row m-0"><button className="button_Update2" disabled >Update</button></div></div> : ""}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="commentMobile">
                        <div className="row mb-4 w-100 p-0 m-0">
                            <div className="col-md-1 col-sm-3   text-left">
                                <img src="./avatar.png" alt="" />
                            </div>
                            <div className="col-md-11 col-sm-9 text-left  ">
                                <div className="row m-0">
                                    <p className="comment_user">{user}</p>
                                    <BsClockFill size={10} className="commentICon" />
                                    <p className="comment_date">{date}</p>

                                </div>
                                <div className="row m-0">

                                    {edit2IsChosen ? <a href="#" onClick={() => { Edit() }} > <p className="comment_Edit">Edit</p></a> : <p className="comment_Edit">You can only edit one comment at a time</p>}
                                </div>
                                <div className="row m-0 p-0 w-100">
                                    <p className="comment_content">{content}</p>
                                    <div className="col-md-12 p-0 " id="commentEdit">
                                        {editIsChosen ? ButtonIsActive ? <div><input class="form-control " type="text" placeholder="Content" name="editedContent" value={editedContent} id="SearchInput " onChange={Change} /><div  ><button className="button_Update" onClick={() => { Submit() }}>Update</button><button className="button_publishcommentDeActivated2" onClick={() => { Cancel() }}>Cancel</button></div></div> : <div><input class="form-control " type="text" placeholder="Content" name="editedContent" value={editedContent} id="SearchInput " onChange={Change} /><div className="row m-0"><button className="button_Update2" disabled >Update</button></div></div> : ""}

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

export default Comment;