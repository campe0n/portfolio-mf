import React from 'react';

function Resume() {
    return(
        <section>
            <h1>Melvin Finn</h1>
<div class='handles'>
    <h2>Full Stack Developer</h2>
    <div class='contactinfo'>
        <div class='infoDiv'>
            <p class='bold'>Phone</p>
            <p>913-954-1199</p>
        </div>
        <div class='infoDiv'>
            <p class='bold'>Email</p>
            <p>melvinrf@Outlook.com</p>
        </div>
    </div>
</div>
<p>
    Full Stack developer with experience in Tailwind CSS. My greatest strengths
    are working alone and being resourceful. These strengths are helpful
    when it comes to writing and debugging code.
</p>
<h1>Experience</h1>
<div class='xpRow'>
    <div class='left'>
        <p>2020-11 to Present</p>
    </div>
    <div class='right'>
        <p class='bold'>Domino's</p>
        <p>Delivery Expert</p>
        <ul>
            <li class='xpItem'>Manage deliveries</li>
            <li class='xpItem'>Maintain a healthy and inviting store state</li>
            <li class='xpItem'>Help with other tasks such as cut line, boxes and stocking store items</li>
        </ul>
    </div>
</div>
<div class='xpRow'>
    <div class='left'>
        <p>2018-6 to 2020-6</p>
    </div>
    <div class='right'>
        <p class='bold'>You're The Boss</p>
        <p>Mover</p>
        <ul>
            <li class='xpItem'>Move furniture quickly and without damage</li>
            <li class='xpItem'>Drive moving vehicles from location to location</li>
            <li class='xpItem'>Help with other tasks such as cut line, folding and stocking boxes and stocking
                storeitems
            </li>
        </ul>
    </div>
</div>
<h1>Education</h1>
<div class='xpRow'>
    <div class='left'>
        <p>2018-2020</p>
    </div>
    <div class='right'>
        <p class='bold'>Kansas City Christian School</p>
        <ul>
            <li class='xpItem'>High School Diploma, Prairie Village, KS</li>
        </ul>
    </div>
</div>
        </section>
    )
}

export default Resume;