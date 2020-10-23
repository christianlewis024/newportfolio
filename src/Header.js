import React from 'react'
import {Avatar} from "@material-ui/core"
import "./Header.css"
import LocationIcon from "@material-ui/icons/LocationCity"
import CheckMarkIcon from "@material-ui/icons/CheckBoxOutlined"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import MailIcon from '@material-ui/icons/Mail';
function Header() {
    return (
        <div className="header">
          
        <div className="header__left">
        <Avatar className="header__avatar" alt="christian" fontSize="large" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/32760939_10155490568442393_4979765686357196800_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_ohc=Z6ubzEUy85gAX_Tilqn&_nc_ht=scontent-lax3-1.xx&oh=3598d200fac3d620a7e851d32aec641a&oe=5FB7A593"/> 
            
            <div className="header__name">
            <h2>Christian Lewis </h2>
            <h5><LocationIcon/>Orange County, California</h5>
            <h3><CheckMarkIcon/>Open to work</h3>
            <h3><CheckMarkIcon/>Willing to relocate</h3>
            </div>

        </div>
        <div className="header__intro">
            <h2> Full Stack Web Developer with a passion for React and Firebase </h2>
        </div>
        <div className="header__contact">
            <div className="header__contactTop">
              <a
                href="https://www.linkedin.com/in/christianlewis92/"
                target="_blank"
              >
               <LinkedInIcon/>LinkedIn
              </a>
              <a href="https://docs.google.com/document/d/1jXyDu6_h0-v-LnQuj_WUyrBQ0rz8R5ahD5JsCPsDN6Q" target="_blank">
               <DescriptionIcon/>Resume
              </a>
              <a href="https://github.com/christianlewis024" target="_blank">
               <GitHubIcon/>Github
              </a>
              </div>
              <div className="header__contactBottom">
              <a href = "mailto: christianlewis024@gmail.com"><MailIcon/></a>
              <a href = "mailto: christianlewis024@gmail.com">ChristianLewis024@gmail.com</a>
              </div>
        </div>
        </div>
    )
}

export default Header
