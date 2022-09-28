import {render, screen, cleanup} from "@testing-library/react"
import Banner from "../banner.jsx";
import {BrowserRouter as Router} from 'react-router-dom';
test ("should render the banner component", ()=>{
    render(
    <Router>
        <Banner/>
    </Router>
    );
    const bannerElement = screen.getByTestId("banner-1");
    expect(bannerElement).toBeInTheDocument();
    expect (bannerElement).toHaveTextContent("team.it")
    expect (bannerElement).toHaveTextContent("Welcome to")
 
    
})