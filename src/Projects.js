import React, {useState} from 'react'
import "./Projects.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';


function Projects() {
    const [bigProjects, setBigProjects] = useState([
        {
            name: "Human Rights First",
            description: "Group project for mapping police brutality across the US. Worked on by 8 developers from front end, backend, and data science. ",
            date: "Oct 1st 2020 - Sept 29th 2020",
            tech: "React, Css, Google Maps, AWS",
            deployed: "https://main.d2njpi9j1s76mb.amplifyapp.com/",
            github: "https://github.com/Lambda-School-Labs/Labs25-Human_Rights_First-TeamB-FE",
            image: "https://i.ibb.co/sQsDTVg/siteSS.png"
        },
        {
            name: "API Mountain",
            description: "A group project that would allow us group project that would allow us group project that would allow us group project that would allow us group project that would allow us group project that would allow us group project that would allow us group project that would allow us group project that would allow us group project that would allow us to track our favorite public APIs for small projects. Has an upvote and downvote, search, and authentication to create posts.",
            date: "Mar 2020",
            tech: "HTML, CSS, Javascript, Firebase, and Vue. ",
            deployed: "apimountain.netlify.app",
            github: "github.com/christianlewis024/apimountain",
            image: "https://i.ibb.co/sqnXk7Y/Screenshot-13.png"
        },
        {
            name: "API Mountain",
            description: "A group project that would allow us to track our favorite public APIs for small projects. Has an upvote and downvote, search, and authentication to create posts.",
            date: "Mar 2020",
            tech: "HTML, CSS, Javascript, Firebase, and Vue. ",
            deployed: "apimountain.netlify.app",
            github: "github.com/christianlewis024/apimountain",
            image: "https://i.ibb.co/sqnXk7Y/Screenshot-13.png"
        },
        {
            name: "API Mountain",
            description: "A group project that would allow us to track our favorite public APIs for small projects. Has an upvote and downvote, search, and authentication to create posts.",
            date: "Mar 2020",
            tech: "HTML, CSS, Javascript, Firebase, and Vue. ",
            deployed: "apimountain.netlify.app",
            github: "github.com/christianlewis024/apimountain",
            image: "https://i.ibb.co/sqnXk7Y/Screenshot-13.png"
        },
    ])
    const [smallProjects, setSmallProjects] = useState([
        {
            name: "Human Rights First",
            description: "Group project for mapping police brutality across the US. Worked on by 8 developers from front end, backend, and data science. ",
            date: "Oct 1st 2020 - Sept 29th 2020",
            tech: "React, Css, Google Maps, AWS",
            deployed: "https://main.d2njpi9j1s76mb.amplifyapp.com/",
            github: "https://github.com/Lambda-School-Labs/Labs25-Human_Rights_First-TeamB-FE",
            image: "https://i.ibb.co/sQsDTVg/siteSS.png"
        },
        {
            name: "API Mountain",
            description: "A group project that would allow us to track our favorite public APIs for small projects. Has an upvote and downvote, search, and authentication to create posts.",
            date: "Mar 2020",
            tech: "HTML, CSS, Javascript, Firebase, and Vue. ",
            deployed: "apimountain.netlify.app",
            github: "github.com/christianlewis024/apimountain",
            image: "https://i.ibb.co/sqnXk7Y/Screenshot-13.png"
        },
        {
            name: "API Mountain",
            description: "A group project that would allow us to track our favorite public APIs for small projects. Has an upvote and downvote, search, and authentication to create posts.",
            date: "Mar 2020",
            tech: "HTML, CSS, Javascript, Firebase, and Vue. ",
            deployed: "apimountain.netlify.app",
            github: "github.com/christianlewis024/apimountain",
            image: "https://i.ibb.co/sqnXk7Y/Screenshot-13.png"
        },
        {
            name: "API Mountain",
            description: "A group project that would allow us to track our favorite public APIs for small projects. Has an upvote and downvote, search, and authentication to create posts.",
            date: "Mar 2020",
            tech: "HTML, CSS, Javascript, Firebase, and Vue. ",
            deployed: "apimountain.netlify.app",
            github: "github.com/christianlewis024/apimountain",
            image: "https://i.ibb.co/sqnXk7Y/Screenshot-13.png"
        },
        {
            name: "API Mountain",
            description: "A group project that would allow us to track our favorite public APIs for small projects. Has an upvote and downvote, search, and authentication to create posts.",
            date: "Mar 2020",
            tech: "HTML, CSS, Javascript, Firebase, and Vue. ",
            deployed: "apimountain.netlify.app",
            github: "github.com/christianlewis024/apimountain",
            image: "https://i.ibb.co/sqnXk7Y/Screenshot-13.png"
        },
        {
            name: "API Mountain",
            description: "A group project that would allow us to track our favorite public APIs for small projects. Has an upvote and downvote, search, and authentication to create posts.",
            date: "Mar 2020",
            tech: "HTML, CSS, Javascript, Firebase, and Vue. ",
            deployed: "apimountain.netlify.app",
            github: "github.com/christianlewis024/apimountain",
            image: "https://i.ibb.co/sqnXk7Y/Screenshot-13.png"
        },
        {
            name: "API Mountain",
            description: "A group project that would allow us to track our favorite public APIs for small projects. Has an upvote and downvote, search, and authentication to create posts.",
            date: "Mar 2020",
            tech: "HTML, CSS, Javascript, Firebase, and Vue. ",
            deployed: "apimountain.netlify.app",
            github: "github.com/christianlewis024/apimountain",
            image: "https://i.ibb.co/sqnXk7Y/Screenshot-13.png"
        },
        {
            name: "API Mountain",
            description: "A group project that would allow us to track our favorite public APIs for small projects. Has an upvote and downvote, search, and authentication to create posts.",
            date: "Mar 2020",
            tech: "HTML, CSS, Javascript, Firebase, and Vue. ",
            deployed: "apimountain.netlify.app",
            github: "github.com/christianlewis024/apimountain",
            image: "https://i.ibb.co/sqnXk7Y/Screenshot-13.png"
        },
        {
            name: "API Mountain",
            description: "A group project that would allow us to track our favorite public APIs for small projects. Has an upvote and downvote, search, and authentication to create posts.",
            date: "Mar 2020",
            tech: "HTML, CSS, Javascript, Firebase, and Vue. ",
            deployed: "apimountain.netlify.app",
            github: "github.com/christianlewis024/apimountain",
            image: "https://i.ibb.co/sqnXk7Y/Screenshot-13.png"
        },
    ])
    return (
        <div className="projects">
            <div className="projects__bigProjects">
           {bigProjects.map(bigProject => (
              
               <div className="projects__project">
                <img  className="projects__image" src={bigProject.image}/>
                  
                   
               <h2>{bigProject.name}</h2>
               <h5>{bigProject.date}</h5>
               <div className="projects__description">
               <p className="projects__descriptionP">{bigProject.description}</p>
               </div>
               <p className="projects__tech">Implemented with: {bigProject.tech}</p>
             
               <a href={bigProject.github} target="_blank">
               <GitHubIcon/>Repo
              </a>
              <a href={bigProject.deployed} target="_blank">
              <LanguageIcon/>Hosted
              </a>

              </div>

           )) }
           </div>
            <div className="projects__smallProjects">
           {smallProjects.map(smallProject => (
              
               <div className="projects__project">
                   <img  className="projects__image" src={smallProject.image}/>
               <h2>{smallProject.name}</h2>
               <h5>{smallProject.date}</h5>
               <p>{smallProject.description}</p>
               <p>Implemented with: {smallProject.tech}</p>
               <div className="projects__links">
               <a href={smallProject.github} target="_blank">
               <GitHubIcon/>Repo
              </a>
              <a href={smallProject.deployed} target="_blank">
              <LanguageIcon/>Hosted
              </a>
              </div>
                  


               </div>

           )) }
           </div>
        </div>
    )
}

export default Projects 