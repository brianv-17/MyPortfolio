import React, { useState } from 'react'

export default () => {
    let ufo = document.querySelector('.ufo');

    ufo.addEventListener('mousemove', (e) => {
    let eyes = document.querySelector('.eyes');
    let mouseX = (eyes.getBoundingClientRect().left); 
    let mouseY = (eyes.getBoundingClientRect().top);
    let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
    let rotationDegrees = (radianDegrees * (180/ Math.PI) * -1) + 180;
    eyes.style.transform = `rotate(${rotationDegrees}deg)`
    });
    return (
        <div>
            <div class="ufo">
                <div class="monster" style="color: #7cb342">
                    <div class="body">
                        <div class="ear"></div>
                        <div class="ear"></div>
                        <div class="vampi-mouth">
                            <div class="vampi-tooth"></div>
                        </div>
                    </div>
                        <div class="eye-lid">
                            <div class="eyes">
                                <div class="eye"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}