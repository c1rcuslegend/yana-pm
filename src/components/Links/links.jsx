import React from "react";
import "./links.css";
import inst from "../../assets/instagram.svg";
import tiktok from "../../assets/tiktok.svg";
import viber from "../../assets/viber.svg";
import telegram from "../../assets/telegram.svg"

const Links = () =>{
    return(
        <div className="links">
            <span className="number">+420721485915</span>
            <a href="https://t.me/yakovenkoyana1" target="_blank" rel="noreferrer noopener"><img src={telegram} alt="Telegram" className="link" /></a>
            <a href="viber://chat?number=%2B380994108381" target="_blank" rel="noreferrer noopener"><img src={viber} alt="Viber" className="link" /></a>
            <a href="https://www.instagram.com/yana.pm_laser/?igshid=MzRlODBiNWFlZA%3D%3D&img_index=1" target="_blank" rel="noreferrer noopener"><img src={inst} alt="Instagram" className="link" /></a>
            <a href="https://www.tiktok.com/@yana.yakovenko1" target="_blank" rel="noreferrer noopener"><img src={tiktok} alt="TikTok" className="link" /></a>
        </div>
    )
}

export default Links