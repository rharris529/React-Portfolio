import React from 'react';

function Nav(props) {
    
    const {
        categories = [],
        currentCategory,
        setCurrentCategory,
        contactSelected,
        setContactSelected
    } = props;

    return (
        <nav>
            <ul>
            {categories.map((category) => (
                    <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                    <span onClick={() => {
                        setCurrentCategory(category);
                        setContactSelected(false);
                    }}>
                    </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;