import React, {useState} from 'react'
import "./Projects.css"
function Projects() {
    const [bigProjects, setBigProjects] = useState([
        {
            name: "Human Rights First",
            description: "Group project for mapping police brutality across the US. Worked on by 8 developers from front end, backend, and data science. ",
            date: "Oct 1st 2020 - Sept 29th 2020",
            tech: "React, Css, Google Maps, AWS",
            deployed: "https://main.d2njpi9j1s76mb.amplifyapp.com/",
            github: "https://github.com/Lambda-School-Labs/Labs25-Human_Rights_First-TeamB-FE",
            image: "https://imgur.com/9cHYsmv"
        },
        {
            name: "API Mountain",
            description: "A group project by students during our 'spring break'. We wanted to make an app that would allow us to track our favorite public APIs for small projects. Has an upvote and downvote, search, and authentication to create posts.",
            date: "Mar 2020",
            tech: "HTML, CSS, Javascript, Firebase, and Vue. ",
            deployed: "apimountain.netlify.app",
            github: "github.com/christianlewis024/apimountain",
            image: "https://imgur.com/Vt4twEA"
        },
    ])
    return (
        <div className="projects">
           {bigProjects.map(bigProject => (
               <div className="projects__info">
               <h4>{bigProject.name}</h4>
               <h5>{bigProject.date}</h5>

               </div>

           )) }
        </div>
    )
}

export default Projects 