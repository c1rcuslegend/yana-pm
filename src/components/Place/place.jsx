import React from "react";
import "./place.css";

const Place = () => {

    return(
        <section className="place" id="place">
            <h2 className="placeTitle">Розташування</h2>
            <p className="placeDesk">Мене можна знайти за адресою:<br/><a href="https://maps.app.goo.gl/Pqb6vKwVzh4QD19y7" target="_blank" rel="noreferrer noopener" className="placeID">Vinohradská 1465/73, 120 00 Прага, Чехія</a></p>
        </section>
    )
}

export default Place