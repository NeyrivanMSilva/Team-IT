import { render, screen, cleanup } from "@testing-library/react"
import Blogs from "../blogs.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../../context/appContext';


test("should render the blogs component and all the child componens, such as the search container and the list of articles", () => {
    render(
        <AppProvider>
            <Router>
                <Blogs />
            </Router>
        </AppProvider>);
    
    
    const blogs = screen.getByTestId("blogs");
    const blogsSearchElement = screen.getByTestId("blogsSearch-Container");
    const articlesList = screen.getByTestId("articlesList");
    
    expect(blogs).toBeInTheDocument();
    expect(blogsSearchElement).toBeInTheDocument();
    expect(articlesList).toBeInTheDocument();
})