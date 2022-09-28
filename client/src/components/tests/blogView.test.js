import { render, screen, cleanup } from "@testing-library/react"
import BlogView from "../blogView";
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../../context/appContext';


test("should render the blogView component and all the child componens, such as the box with the article info, the article comments and the boxw  to add a new comment", () => {
    render(
        <AppProvider>
            <Router>
                <BlogView />
            </Router>
        </AppProvider>);
    
    
    const blogView = screen.getByTestId("blogView");
    const blogViewInfo = screen.getByTestId("blogViewInfo");
 
    const blogViewNewComment = screen.getByTestId("blogViewNewComment");
   
   
    expect(blogView).toBeInTheDocument();
    expect(blogViewInfo).toBeInTheDocument();
 
    expect(blogViewNewComment).toBeInTheDocument();
})