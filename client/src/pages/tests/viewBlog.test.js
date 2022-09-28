import { render, screen, cleanup } from "@testing-library/react"
 
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../../context/appContext';
 
import ViewBlog from '../ViewBlog';
test("should render the ViewBlog component and all the child componens, such as the the banner and the blogs list", () => {
    render(
        <AppProvider>
            <Router>
                <ViewBlog />
            </Router>
        </AppProvider>);
    
    
    const Header = screen.getByTestId("Header");
    const BlogView = screen.getByTestId("blogView");
    expect(Header).toBeInTheDocument();
    expect(BlogView).toBeInTheDocument();
})