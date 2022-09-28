
import React from "react";

import { useAppContext } from '../context/appContext.js'
import { useState, useEffect } from 'react';
import Article from "./article.jsx";
import "./components.css"


const Blogs = () => {
    let {
        blogs,
        blogs2,
        getBlogs,
        handleChange,
        authorSearch,
        titleSearch

    } = useAppContext()



    useEffect(() => {
        getBlogs()

    }, {})

    useEffect(() => {

        /*        Search() */
    })
    const Search = () => {
        if (authorSearch != "" && titleSearch === "") {
            var blogs3 = blogs2.filter(function (input) {
                return input.author === authorSearch
            })

            const name = "blogs"
            const value = blogs3
            
            handleChange({ name, value })
        }
               if(titleSearch!="" && authorSearch ===""){
                    var blogs3=  blogs2.filter(function (input) {
                     return input.title === titleSearch
                 })
                  
            
                 const name = "blogs"
                 const value = blogs3
                 
                 handleChange({ name, value })
                 }
        
                 if(titleSearch!="" && authorSearch !=""){
                    var blogs3=  blogs2.filter(function (input) {
                     return input.title === titleSearch && input.author === authorSearch
                 } 
                 )
                  
                
            const name = "blogs"
            const value = blogs3
            
            handleChange({ name, value })
                 } 


    }
    const HandleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        handleChange({ name, value })

    }

    const ClearFilters = () => {
        let name = "authorSearch"
        let value = ""
        handleChange({ name, value })
        name = "titleSearch"
        value = ""
        handleChange({ name, value })
        name = "blogs"
        value = blogs2
        handleChange({ name, value })
    }


    return (
        <>

            <div data-testid="blogs"  class="container-fluid " id="blogs">
                <div class="row">
                    <div class="col-md-12 ">
                        <div className="blogsContainer">

                            <div data-testid="blogsSearch-Container" className="row blogsSearchContainer m-0 w-100" >
                                <div class="row blogsSearch">
                                    <div class="col-md-4">
                                        <input class="form-control blogsSearchInput mt-1 mb-3" placeholder="Author" type="text" name="authorSearch" value={authorSearch} id="SearchInput" onChange={HandleChange} />

                                    </div>
                                   
                                    <div class="col-md-4 mb-3">
                                        <button className="button_Submit" onClick={() => { Search() }}>Search</button>
                                    </div>
                                    <div class="col-md-4">
                                        <button className="button_Clear" onClick={() => { ClearFilters() }}>Clear Filters</button>
                                    </div>
                                </div>
                            </div>

                            <div class="row" data-testid="articlesList">
                                <div class="col-md-12">
                                    <div class="row blogs_container ">
                                        {blogs.map((blog) => {

                                            return <Article key={blog._id} {...blog} />
                                        })}

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

export default Blogs;