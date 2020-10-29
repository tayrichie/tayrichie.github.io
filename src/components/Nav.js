import React, { Component } from "react";
import { StyledRouterLink } from "../styles/components/link";

export default class Nav extends Component {
    render() {
        return (
            <>
                <nav>
                    <StyledRouterLink to="/about">
                        ← Learn About Me
                    </StyledRouterLink>
                </nav>
            </>
        );
    }
}
