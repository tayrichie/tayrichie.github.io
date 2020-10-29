import React, { useState, useEffect } from "react";
import "./styles/styles.scss";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme, partyTheme } from "./styles/theme";
import { StyledApp } from "./styles/components/app";

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

    useEffect(() => {
        console.log(document.cookie);
        const cookies = document.cookie.split("; ");
        const userTheme = cookies
            .filter((cookie) => cookie.includes("theme"))[0]
            .replace("theme=", "");

        determineTheme(userTheme);
    });

    const setCookie = (theme) => {
        document.cookie = `theme=${theme}`;
        console.log(document.cookie);
    };

    const toggleTheme = (e) => {
        determineTheme(e.target.id);
    };

    const determineTheme = (themeName) => {
        switch (themeName) {
            case "light":
                setCookie("light");
                setUserTheme(theme);
                break;
            case "dark":
                setCookie("dark");
                setUserTheme(darkTheme);
                break;
            case "party":
                setCookie("party");
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
