import React from 'react'
import {Avatar} from "@material-ui/core"
import "./Header.css"
import LocationIcon from "@material-ui/icons/LocationCity"
import CheckMarkIcon from "@material-ui/icons/CheckBoxOutlined"
function Header() {
    return (
        <div className="header">
           <Avatar className="header__avatar" alt="christian" fontSize="large" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/32760939_10155490568442393_4979765686357196800_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_ohc=Z6ubzEUy85gAX_Tilqn&_nc_ht=scontent-lax3-1.xx&oh=3598d200fac3d620a7e851d32aec641a&oe=5FB7A593"/>
        <div className="header__name">
            <h2>Christian Lewis </h2>
            <h5><LocationIcon/>Orange County, California</h5>
            <h3><CheckMarkIcon/>Open to work</h3>
            <h3><CheckMarkIcon/>Willing to relocate</h3>
        </div>
        <div className="header__intro">
            <h4>I am a Full Stack Web Developer with strong experience in React and Firebase </h4>
        </div>
        </div>
    )
}

export default Header
