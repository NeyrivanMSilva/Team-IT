import { render, screen, cleanup } from "@testing-library/react"

import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../../context/appContext';
import Comment from "../comment"

test("should render the blogView component and all the child componens, such as the box with the article info, the article comments and the boxw  to add a new comment", () => {
    render(
        <AppProvider>
            <Router>
                <Comment />
            </Router>
        </AppProvider>);


    const commentBox = screen.getByTestId("comment");

    expect(commentBox).toBeInTheDocument();
})