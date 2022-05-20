import React from 'react';
import About from "../About"
import Contact from "../Contact"
import Projects from '../Projects';
import Page from '../Page';

function Section({ currentCategory }) {
    function renderSection() {
        switch (currentCategory.name) {
            case "About Me":
                return <About />;
            case "Projects":
                return <Projects />
            case "Contact Me":
                return <Contact />
            default:
                return <About />
        }
    }

    return (
        <div className='d-flex flex-column align-items-center'>
            <h3 className='h3 m-4'>{currentCategory.name}</h3>
            <Page>{renderSection(currentCategory)}</Page>
        </div>
    )
}

export default Section;