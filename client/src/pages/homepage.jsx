
import React from "react";
import Header from "../components/header";
  import { useAppContext } from '../context/appContext.js'  
  import { useState, useEffect } from 'react';
import Blogs from "../components/blogs";
import Banner from "../components/banner";



const Homepage = () => {
 



    return (
        <>
      
            <Banner />
            <Blogs  />

        </>

    );
}

export default Homepage;