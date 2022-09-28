import { render, screen, cleanup } from "@testing-library/react"
import Article from "../article";
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../../context/appContext';
 

test("should render the article component and all the information about an article", () => {
    render(
        <AppProvider>
            <Router>
                <Article />
            </Router>
        </AppProvider>);
    const articleElement = screen.getByTestId("article-1");
    const title = screen.getByTestId("article-1-title");
    const date = screen.getByTestId("article-1-date");
    const author = screen.getByTestId("article-1-author");
    expect(articleElement).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(author).toBeInTheDocument();

 


})