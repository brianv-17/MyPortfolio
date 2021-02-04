import React, { useState } from 'react'
export default () => {
    return (
        <div>
            <p>This website is a place to show some of my projects and to expand my career as a Software Developer.</p>
            <div class="proj">
                <h2>Featured Projects</h2>
                <div id="pro1">
                    <div>
                    <h3>Andy's Bodybuilding Challenge</h3>
                    <p>A web-base platform for users interested in bodybuilding and fitness to connect and share resources</p>
                    <p>Django | SQLite </p>
                    <ul>
                        <li>Built from scratch including the planning, development with Python and a Django frameworks, SQLight for a fast database, and deployed application on AWS EC2 to manage storage</li>
                        <li>Implemented BCrypt hashing for increased user security and a simple admin interface that allows the owner to view and moderate registered users.</li>
                    </ul>
                    </div>
                    <div id="d1">
                        <h4>fun fact!</h4>
                        <p>I used a mail gun to send inquirees to the fitness intructor for fast connection!</p>
                    </div>
                </div>
                <div id="pro2">
                    <h3>Gifts For Kids</h3>
                    <p>A full stack web application inspired by “The Giving Tree” - crowd source donation platform that enables users to support (children in needy) homes during the pandemic.</p>
                    <p>MongoDB | EpressJS | ReactJS | NodeJS </p>
                    <ul>
                        <li>Collaborated with a team of 5, owned the development of​ ​the backend development to build a robust, flexible, and scalable database with MongoDb and NodeJS to enable the site to quickly store user information and inputs (such as “monetary donation”).</li>
                        <li>Implemented OAuth with integration of Facebook to streamline registration, including leveraging dynamic live features of ReactJs to improve user experience</li>
                        <li>Planned and wireframed user journey and designed a responsive frontend using CSS3 and HTML5.</li>
                    </ul>
                    <div id="d2">
                        <h4>fun fact!</h4>
                        <p>I used a mail gun to send inquirees to the fitness intructor for fast connection!</p>
                    </div>
                </div>
                <div class="pro3">
                    <h3>Creative Creator Website</h3>
                    <p>A website that enables the “digital creator market” (i.e. gamers, YouTubers, social influencers) greater privacy and a personalized platform for their followers</p>
                    <p> Django | SQLite</p>
                    <ul>
                        <li>Designed a flexible Django framework to meet the needs of the user, built the in-session CRUD functionality for site security and created a modern user interface with MVC to encourage greater user interaction.</li>
                    </ul>
                    <div id="d3">
                        <h4>fun fact!</h4>
                        <p>I used a mail gun to send inquirees to the fitness intructor for fast connection!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}