import React, { useState } from "react";
import "./styles/styles.scss";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme, partyTheme } from "./styles/theme";
import StyledApp from "./styles/components/app";

import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import IntroCard from "./pages/IntroCard";
import ResumeCard from "./pages/ResumeCard";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
    const [userTheme, setUserTheme] = useState(darkTheme);

    const toggleTheme = (e) => {
        switch (e.target.id) {
            case "light":
                setUserTheme(theme);
                break;
            case "dark":
                setUserTheme(darkTheme);
                break;
            case "party":
                setUserTheme(partyTheme);
                break;
            default:
                setUserTheme(darkTheme);
                break;
        }
    };

    return (
        <Router>
            <ThemeProvider theme={userTheme}>
                <StyledApp>
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/about" />
                        </Route>
                        <Route path="/about">
                            <IntroCard />
                        </Route>
                        <Route path="/resume">
                            <ResumeCard />
                        </Route>
                    </Switch>
                </StyledApp>

                <ThemeSwitcher toggleTheme={toggleTheme} />
            </ThemeProvider>
        </Router>
    );
}

export default App;
