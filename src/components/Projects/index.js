import React from "react";

function Projects() {

    return (
        <div className="card">
             
            <article class="app">
                <a href="https://rharris529.github.io/Run-Buddy-Module-Training">Project 1</a>
                <h3> Run Buddy </h3>
                <p>My first mock-up in learning HTML/CSS.</p>
                <img src="./assets/images/pexels-abdullah-ghatasheh-1631677.jpg" alt="" />
            </article>

            
            <article class="app">
                <a href="https://github.com/rharris529/robot-gladiators">Project 2</a>
                <h3> Robot Gladiators </h3>
                <p>A simple RPG made in Javascript.</p>
                <img src="./assets/images/pexels-bruno-thethe-1910225.jpg" alt="" />
            </article>

            
            <article class="app">
                <a href="https://github.com/rharris529/E-commerce-Back-End">Project 3</a>
                <h3> E-commerce Backend</h3>
                <p>E-commerce data management app using mySQL.</p>
                <img src="./assets/images/pexels-cottonbro-7439134.jpg" alt="" />
            </article>

            
            <article class="app">
                <a href="https://github.com/rharris529/README-generator">Project 4</a>
                <h3> README Generator </h3>
                <p>A README generator utilizing the inquirer npm package.</p>
                <img src="./assets/images/pexels-matheus-natan-3394939.jpg" alt="" />
            </article>

        </div>
    )

}

export default Projects;