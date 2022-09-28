
import React from "react";
import { Link } from 'react-router-dom'


import "./components.css"
import Typewriter from "typewriter-effect";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { BsFillArrowDownCircleFill } from "react-icons/bs";


const Banner = () => {


    return (
        <>
            <div data-testid="banner-1" class="container-fluid banner" >

                <nav class="navbar navbar-expand-lg navbar-light">

                    <ul class="navbar-nav mr-auto">
                        <Link to='/blog'  >
                            <li class="nav-item active">
                                <h1 class="nav-link logo"  >team.it  </h1>
                            </li>
                        </Link>


                    </ul>


                </nav>

                <div className="row banner_row">
                    <div className="col-md-12">
                        <p className='banner_title1'>Welcome to</p><p className="banner_title2"><Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("Our IDEAS")
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString("Our CONVERSATIONS")
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString("Our BLOG")
                                    .pauseFor(1500)



                                    .start();

                            }}

                        /></p>
                    </div>
                    <div className="col-md-12 rowIcon">
                        <p className="banner_FollowUs">follow us</p>
                        <div className="row rowIcon2">
                            <div className="col-md-3 col-sm-3">
                            <a href="https://www.facebook.com/team.it.moongy" target="_blank">
                                 <SiFacebook size={35} className="icon"     />
                            </a>
                               
                            </div>
                         
                            <div className="col-md-3 col-sm-3">
                                 <a href="https://www.instagram.com/team.it.moongy/"  target="_blank" >
                                <SiInstagram size={35} className="icon" />
                            </a> 
                             
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <a href="https://www.linkedin.com/company/team-it-moongy/"  target="_blank">
                                    <SiLinkedin size={35} className="icon"  />
                                </a>
                                
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <a href="https://twitter.com/team_it_moongy"  target="_blank" >
                                      <SiTwitter size={35} className="icon" />
                                </a>
                              
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 rowIcon3">
                        <a href="#blogs">
                            <BsFillArrowDownCircleFill size={35} className="icon" />
                        </a>

                    </div>
                </div>

            </div>
        </>

    );
}

export default Banner;