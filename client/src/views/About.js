import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';

export default () => {
    return (
        <div>
            <div>
                <h2>Sharing a Little About me</h2>
                <p>Born in Detroit, Michigan I lived most of my youth (ages one to eight) in the outskirts of Tepatitlan, Jalisco, Mexico. I came to a small mill town in South Carolina named Georgetown at the age of 8 with no knowledge of the english language. Throughout my adolecsence I made Georgetown my home </p>
                <p>this is a test</p>
                <p>Some of the activities that I dabble aside from programming</p>
                <ul>
                    <li>I play video games and live stream</li>
                    <li>Geocaching: the largest scavenger hunt in the world!</li>
                    <li>Teach my younger brothers coding fundamentals</li>
                </ul>
                <Link to = "/portfolio">Home Page</Link>
            </div>
        </div>
    )
}