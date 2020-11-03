import React, { useState, useEffect } from "react";
import "./styles/styles.scss";
import { StyledApp } from "./styles/components/app";
import GlobalStyles from "./styles/styles";

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
    const [userTheme, setUserTheme] = useState(getCookieValue());
    const nextTheme = userTheme === "light" ? "dark" : "light";

    useEffect(() => {
        document.body.dataset.theme = userTheme;
    }, [userTheme]);

    function getCookieValue() {
        const nameString = "theme=";

        const value = document.cookie.split("; ").filter((item) => {
            return item.includes(nameString);
        });

        if (value.length) {
            return value[0].substring(nameString.length, value[0].length);
        } else {
            return "light";
        }
    }

    function updateCookieValue(theme) {
        document.cookie = `theme=${theme}`;
    }

    const toggleTheme = () => {
        setUserTheme(nextTheme);
        updateCookieValue(nextTheme);
        // setTimeout(() => {
        //     // document.querySelector("h1").focus();
        // }, 200);
    };

    return (
        <Router>
            <GlobalStyles />
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
        </Router>
    );
}

export default App;
