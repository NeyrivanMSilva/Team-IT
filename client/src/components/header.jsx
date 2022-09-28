import React from "react";
import { Link } from 'react-router-dom'
 

const Header = () => {
    
    return (
        <>
            <nav data-testid="Header" class="navbar2 navbar-expand-lg navbar-light">




                <ul class="navbar-nav mr-auto p-3">
                    <Link to='/blog'  >
                        <li class="nav-item active">
                            <h1 class="nav-link logo"  >team.it  </h1>
                        </li>
                    </Link>


                </ul>

            </nav>
        </>

    );
}

export default Header;