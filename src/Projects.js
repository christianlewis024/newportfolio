import React, {useState} from 'react'
import "./Projects.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';


function Projects() {
    const [bigProjects, setBigProjects] = useState([
        {
            name: "Human Rights First",
            description: "Group project for mapping police brutality across the US. Worked on by 8 developers from front end, backend, and data science. ",
            date: "Aug 1st 2020 - Sept 29th 2020",
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
            name: "The Sphere",
            description: "A functional social media app with text posts or photo upload, user authentication, likes, chatrooms, and direct messaging",
            date: "Oct 2020",
            tech: "React, Firebase CSS, Javascript",
            deployed: "apimountain.netlify.app",
            github: "github.com/christianlewis024/apimountain",
            image: "https://i.ibb.co/cvqd0ff/Screenshot-14.png" 
        },
        {
            name: "Teacher's Website",
            description: "A group project that would allow us to track our favorite public APIs for small projects. Has an upvote and downvote, search, and authentication to create posts.",
            date: "Mar 2020",
            tech: "HTML, CSS, Javascript, Firebase, and Vue. ",
            deployed: "apimountain.netlify.app",
            github: "github.com/christianlewis024/apimountain",
            image: "https://i.ibb.co/8PjqmNf/Screenshot-15.png" 
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
            image: "https://i.ibb.co/CJMWV6k/Screenshot-15.png" 
        },
    ])
    return (
        <div className="projects">
            <div className="projects__bigProjects">
           {bigProjects.map(bigProject => (
              
            <div className="projects__project">
                <div className="projects__imageContainer">
                <img  className="projects__image" src={bigProject.image}/>
                </div>
                  
            <div className="projects__container">
                <br></br>    
               <h2>{bigProject.name}</h2>
               <br></br>
               <h5>{bigProject.date}</h5>
               <br></br>

                <div className="projects__description">
                <br></br>
               <p className="projects__descriptionP">{bigProject.description}</p>
               </div>
               <br></br> 
               <p className="projects__tech"><strong>Implemented with: {bigProject.tech}</strong></p>

             <div className="projects__links">
                <div className="projects__github">
               <a href={bigProject.github} target="_blank">
               <GitHubIcon/>Repo
              </a>
              </div>
              

              <div className="projects__hosted">
              <a href={bigProject.deployed} target="_blank">
              <LanguageIcon/>Hosted
              </a>
              
              </div>
              
              
            </div>
              </div>

              </div>

           )) }
           </div>
            <div className="projects__smallProjects">
           {smallProjects.map(smallProject => (
              
               <div className="projects__project">
                   <img  className="projects__image" src={smallProject.image}/>
               <h2>{smallProject.name}</h2>
              
               
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