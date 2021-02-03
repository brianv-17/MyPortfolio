import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';

export default () => {
    return (
        <div>
            <div>
                <h2>Sharing a Little About me</h2>
                <p>Born in Detroit, Michigan I lived most of my youth (ages one to eight) in the outskirts of Tepatitlan, Jalisco, Mexico. I came to a small mill town in South Carolina named Georgetown at the age of 8 with no knowledge of the english language. Through out my adolecsence i made Georgetown my home </p>
                <p>this is a test</p>
                <Link to = "/portfolio">Home Page</Link>
            </div>
        </div>
    )
}