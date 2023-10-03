import React from "react";
import "./works.css";
import port1 from "../../assets/portfolio-1.png";
import port2 from "../../assets/portfolio-2.png";
import port3 from "../../assets/portfolio-3.png";
import port4 from "../../assets/portfolio-4.png";

const Works = () => {
    return(
        <section id="works">
            <h2 className="worksTitle" id="myWorks">Мої роботи</h2>
            <div className="worksImgs">
                <img src={port1} alt="Моя робота 1" className="worksImg" />
                <img src={port2} alt="Моя робота 2" className="worksImg" />
                <img src={port3} alt="Моя робота 3" className="worksImg" />
                <img src={port4} alt="Моя робота 4" className="worksImg" />
            </div>
            <a href="https://www.instagram.com/yana.pm_laser/?igshid=MzRlODBiNWFlZA%3D%3D&img_index=1" target="_blank" rel="noreferrer noopener">
                <button className="viewMore">
                    <span>Більше</span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </button>
            </a>
        </section>
    )
}

export default Works