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
            deployed: "https://apimountain.netlify.app/",
            github: "https://github.com/christianlewis024/apimountain",
            image: "apimountain.png"
        },
        {
            name: "The Sphere",
            description: "A functional social media app with text posts or photo upload, user authentication, likes, chatrooms, and direct messaging",
            date: "Oct 2020",
            tech: "React, Firebase CSS, Material-UI",
            deployed: "https://thesphere.netlify.app/",
            github: "https://github.com/christianlewis024/sphere",
            image: "sphere.png" 
        },
        {
            name: "Teacher's Website",
            description: "A website for a teacher who needed more online presence during the COVID 19 pandemic. Has a blog that only logged in admins can post in. Any visitor can see posts. Implemented with HTML, CSS, JS, Materialize and Firebase for the backend and auth.",
            date: "Mar 2020",
            tech: "HTML, CSS, Javascript, Firebase",
            deployed: "https://www.sciencewithmrslewis.com/",
            github: "https://github.com/christianlewis024/chanelv2",
            image: "https://i.ibb.co/nsGhJ5v/Screenshot-15.png"
        },
    ])
    const [smallProjects, setSmallProjects] = useState([
        {
            name: "Working Amazon Clone",
            tech: "React, Firebase and Stripe",
            deployed: "https://darnazon.netlify.app/",
            github: "https://github.com/christianlewis024/darnazon",
            image: "darnazon.png"
        },
       {
           name: "Slack Clone",
           tech: "React & Firebase",
           deployed: "https://darnslack.netlify.app/",
           github: "https://github.com/christianlewis024/slack-clone",
           image: "darnslack.png",
        },
       {
           name: "Ark Tracker",
           tech: "React, Node, Heroku",
           deployed: "https://arktracker.vercel.app/",
           github: "https://github.com/christianlewis024/arktracker",
           image: "arktracker.png",
        },
       {
           name: "",
           tech: "",
           deployed: "",
           github: "",
           image: "",
        },
       {
           name: "",
           tech: "",
           deployed: "",
           github: "",
           image: "",
        },
       {
           name: "",
           tech: "",
           deployed: "",
           github: "",
           image: "",
        },
       {
           name: "",
           tech: "",
           deployed: "",
           github: "",
           image: "",
        },
       {
           name: "",
           tech: "",
           deployed: "",
           github: "",
           image: "",
        },
    ])
    return (
        <div className="projects">
            <div className="projects__bigProjects">
           {bigProjects.map(bigProject => (
              
            <div className="projects__project">
                <div className="projects__imageContainer">

                    <a href={bigProject.deployed} target="_blank">
                    <img  className="projects__image" src={bigProject.image}/>
                    </a>
                
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
                <div className="projects__imageContainer">

                    <a href={smallProject.deployed} target="_blank">
                    <img  className="projects__image" src={smallProject.image}/>
                    </a>
                
                </div>
                  
            <div className="projects__container">
                <br></br>    
               <h2>{smallProject.name}</h2>
               

              
               <p className="projects__tech"><strong>Implemented with: {smallProject.tech}</strong></p>

             <div className="projects__links">
                <div className="projects__github">
               <a href={smallProject.github} target="_blank">
               <GitHubIcon/>Repo
              </a>
              </div>
              

              <div className="projects__hosted">
              <a href={smallProject.deployed} target="_blank">
              <LanguageIcon/>Hosted
              </a>
              
              </div>
              
              
            </div>
              </div>

              </div>

           )) }
           </div>
        </div>
    )
}

export default Projects 