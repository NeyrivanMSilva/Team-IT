import { render, screen, cleanup } from "@testing-library/react"
 
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../../context/appContext';
 
import Homepage from '../homepage';
test("should render the Homepage component and all the child componens, such as the the banner and the blogs list", () => {
    render(
        <AppProvider>
            <Router>
                <Homepage />
            </Router>
        </AppProvider>);
    
    
    const Banner = screen.getByTestId("banner-1");
    const Blogs = screen.getByTestId("blogs");
    expect(Banner).toBeInTheDocument();
    expect(Blogs).toBeInTheDocument();
})