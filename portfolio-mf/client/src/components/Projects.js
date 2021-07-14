import React from 'react';

function Projects(){
    return(
        <section>
            <h2>Holiday Search</h2>
                <a href="https://github.com/gannacon/Project_1" class='projectImage' target="_blank" rel="noopener noreferrer">
                <img src="/images/holidaysearchss.png" alt='Holiday search.' />
                </a>
            <p>Holiday search is a web application that enables users to search for holidays on a specific day.</p>
            <h2>The Event Planning Site</h2>
                <a href="https://github.com/brownnicholasj/the-event-planning" class='projectImage' target="_blank"
                rel="noopener noreferrer">
                <img src="/images/eventplanning.PNG" alt="Event planning." />
            </a>
            <p>The event planning site enables users to create and manage several aspects of hosting an event.</p>
            <h2>Day Scheduler</h2>
            <a href="https://github.com/campe0n/dplanner_mf" class='projectImage' target="_blank" rel="noopener noreferrer">
            <img src="/images/scheduler.PNG" alt="Work day scheduler." />
            </a>
            <p>Day scheduler enables users to create and manage tasks throughout the day.</p>
        </section>
    )
}

export default Projects;