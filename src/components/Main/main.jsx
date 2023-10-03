import React from "react";
import "./main.css";
import back from "../../assets/main.jpg"
import {Link} from "react-scroll";

const Main = () => {
    return(
        <section id="main">
            <div className="mainContent" id="intro">
                <span className="name">Яковенко Яна</span>
                <h1><span className="mainText">Перманентний макіяж<br/>та лазерне видалення волосся</span></h1>
                <h2 className="mainPara">Кваліфікована майстриня з Праги</h2>
                <Link activeClass="active" to="place" spy={true} smooth={true} offset={-200} duration={700} >
                    <button className="mainBtn">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="const">
                            <path id="clock" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
                            <path id="stroke" fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z" />
                        </svg>
                        Записатися
                    </button>
                </Link>
            </div>
            <img src={back} alt="Фото роботи" className="back" />
        </section>
    )
}

export default Main;