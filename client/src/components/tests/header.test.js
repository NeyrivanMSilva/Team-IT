import { render, screen, cleanup } from "@testing-library/react"
import Header from "../header";
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../../context/appContext';


test("should render the blogView component and all the child componens, such as the box with the article info, the article comments and the boxw  to add a new comment", () => {
    render(
        <AppProvider>
            <Router>
                <Header />
            </Router>
        </AppProvider>);
    
    
    const Nav = screen.getByTestId("Header");
    
    expect(Nav).toBeInTheDocument();
})