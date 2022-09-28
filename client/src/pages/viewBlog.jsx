
import React from "react";
import Header from "../components/header";
  import { useAppContext } from '../context/appContext.js'  
  import { useState, useEffect } from 'react';
import BlogView from "../components/blogView.jsx";



const ViewBlog = () => {
 
 



    return (
        <>
            <Header />
            <BlogView  />

        </>

    );
}

export default ViewBlog;