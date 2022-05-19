import React from 'react';
import About from "../About"
import Contact from "../Contact"
import Projects from '../Projects';
import Page from '../Page';

function Section({ currentCategory }) {
    function renderSection() {
        switch (currentCategory.name) {
            case "About Me":
                return <About />
            case "Projects":
                return <Projects />
            case "Contact":
                return <Contact />
            default:
                return <About />
        }
    }

    return (
        <div>
            <h3>{currentCategory.name}</h3>
            <Page>{renderSection()}</Page>
        </div>
    )
}

export default Section;