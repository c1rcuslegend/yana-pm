import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/nav.svg";
import {Link} from "react-scroll";

const Navbar = () =>{
    const [showMenu, setShowMenu] = useState(false);
    let off1=0
    let off2=-12*window.innerHeight/100
    
    if (window.innerHeight>1350) {
        off1=-26*window.innerHeight/100
    } else if (window.innerHeight>1300) {
        off1=-25*window.innerHeight/100
    } else if (window.innerHeight>1200) {
        off1=-20*window.innerHeight/100
    } else if (window.innerHeight>1000) {
        off1=-20*window.innerHeight/100
    } else if (window.innerHeight>840) {
        off1=-15*window.innerHeight/100
    } else if (window.innerHeight>780) {
        off1=-18*window.innerHeight/100
    }  else if (window.innerHeight>730) {
        off1=-18*window.innerHeight/100
    }else if (window.innerHeight>720) {
        off1=-18*window.innerHeight/100
        off2=-15*window.innerHeight/100
    } else {
        off1=-15*window.innerHeight/100
    }
    
    if ((window.innerWidth>1350) && (window.innerHeight>1000)){
        off1=-18*window.innerHeight/100
    }
    if ((window.innerHeight===720) && (window.innerWidth===540)) {
        off2=-8*window.innerHeight/100
    }

    if ((window.innerHeight===820) && (window.innerWidth===1180)) {
        off1=-22*window.innerHeight/100
    }
    if ((1200>window.innerHeight>760) && (1179>window.innerWidth>1023)) {
        off1=-23*window.innerHeight/100
    }
    if (window.innerWidth<400) {
        off1=-15*window.innerHeight/100
    }
    if ((window.innerHeight>900) && (window.innerWidth<450)) {
        off2=-17*window.innerHeight/100
    }
    return(
        <nav className="navbar">
            <img src={logo} alt="Логотип" className="navLogo" />
            <div className="navMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-500} duration={700} className="navIcon">Головна</Link>
                <Link activeClass="active" to="mySkills" spy={true} smooth={true} offset={off1} duration={700} className="navIcon">Про мене</Link>
                <Link activeClass="active" to="myWorks" spy={true} smooth={true} offset={off2} duration={700} className="navIcon">Мої роботи</Link>
                <Link activeClass="active" to="place" spy={true} smooth={true} duration={700} className="navIcon">Розташування</Link>
            </div>
            <Link activeClass="active" to="place" spy={true} smooth={true} offset={-200} duration={700} ><button className="navContact">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="phone">
                    <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"/>
                </svg>
                Зв'язатися
            </button></Link>

            <img src={menu} alt="Меню" className="mobIcon" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="mobMenu" style={{display: showMenu? "flex":"none"}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-200} duration={700} className="menuIcon" onClick={()=>setShowMenu(false)}>Головна</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={off1} duration={700} className="menuIcon" onClick={()=>setShowMenu(false)}>Про мене</Link>
                <Link activeClass="active" to="myWorks" spy={true} smooth={true} offset={off2} duration={700} className="menuIcon" onClick={()=>setShowMenu(false)}>Мої роботи</Link>
                <Link activeClass="active" to="place" spy={true} smooth={true} duration={700} className="menuIcon" onClick={()=>setShowMenu(false)}>Розташування</Link>
                <Link activeClass="active" to="place" spy={true} smooth={true} duration={700}  className="menuIcon" onClick={()=>setShowMenu(false)}>Зв'язатися</Link>
            </div>

        </nav>
    )
}

export default Navbar