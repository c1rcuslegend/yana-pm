import React from "react";
import "./skills.css";
import eyebrow from "../../assets/eyebrow.svg"
import lips from "../../assets/lips.svg"
import hair from "../../assets/hair.svg"

const Skills = () => {
    return(
        <section id="skills">
            <h2 className="skillTitle" id="mySkills">Про мене</h2>
            <span className="skillDesk">Кваліфікований майстер з дипломами різних країн і великим досвідом роботи.<br/>Я знаю все про те, як зробити вас ще кращими.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={eyebrow} alt="Татуаж брів" className="skillImg" />
                    <div className="skillBarText">
                        <h2>Татуаж брів</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={lips} alt="Перманентний макіяж губ" className="skillImg" />
                    <div className="skillBarText">
                        <h2>Перманентний макіяж губ</h2>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={hair} alt="Лазерне видалення волосся" className="skillImg" />
                    <div className="skillBarText">
                        <h2>Лазерне видалення волосся</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills