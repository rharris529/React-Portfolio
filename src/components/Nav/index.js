import React from 'react';

function Nav(props) {
    
    const {
        categories = [],
        currentCategory,
        setCurrentCategory,

    } = props;

    return (
        <nav>
            <ul className='flex-row'>
            {categories.map((category) => (
                    <li key={category.name}>
                    <a href={`${category.name}`} onClick={() => {
                        currentCategory(category);
                        setCurrentCategory(false);
                    }}>
                    {category.name}
                    </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;