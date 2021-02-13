import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';

export default () => {
    return (
        <div>
            <div>
                <h1>Sharing a Little About me</h1>
                <h2>Personal life </h2>
                <p>Born to an immigrant family in Detroit, Michigan I lived most of my youth (ages one to eight) in the outskirts of Tepatitlan, Jalisco, Mexico. I came to a small mill town in South Carolina named Georgetown at the age of 8 with no knowledge of the english language. Throughout my adolecsence I made Georgetown my home </p>
                <p>Some of the activities that I dabble aside from programming</p>
                <ul>
                    <li>I play video games and live stream</li>
                    <li>Geocaching: the largest scavenger hunt in the world!</li>
                    <li>Teach my younger brothers coding fundamentals</li>
                </ul>
                <h2>My Military career</h2>
                <p>Most of my professional career has been military, to be specific the United States Marine Corps</p>
                <p>my Marine Corps career began in paris island where i earned the title of marine, MCT in Camp Lejuene and my MOS training in Twentynine palms</p>
                <p>I was stationed in Camp Pendleton with an artillery unit, during my service I deployed to Japan and Australia. I separated Honorably from the Marine Corps in june 2020</p>
                <p>Uponmy separtaion I became a Charter Communications Salesperson, I enjoyed talking to custumers and the team. While at Charter I found that while i did enjoy my job i had a higher calling and passion.</p>
                <p>with the encouragement og family, friends and mentors, I choose to start my Software Development career with Coding Dojo.</p>
                <p>At coding dojo I became proficienyt in the fundamentals(HTML, Javascript and CSS), Python through Django, MERN(MongoDB, ExpresJS, ReactJS and NodeJS) and Java through Spring</p>
                <p>With this gained knowledge i plan to persue programming to the best of my abilities and everyday i plan to learn even more</p>
                <p>im an avid runner </p>
                <Link to = "/portfolio">Home Page</Link>
            </div>
        </div>
    )
}