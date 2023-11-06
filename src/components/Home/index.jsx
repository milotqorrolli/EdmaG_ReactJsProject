import React, { useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { data } from "../../assets/data/dummyData";
import Modal from "../Modal/Modal";

const Home = () => {
  const [single, setSingle] = useState(null);

  const getSingle = (el) => {
    setSingle(el);
  }
  return (
    <div className="home-container">
      <div className="hero-container"></div>
      <div className="aboutus-container">
        <div className="aboutus-wrapper">
          <div className="aboutus-text">
            <h1>- ÜBER UNS</h1>
            <h3>
              EDMA ist ein Beratungs- und Bauingenieurunternehmen, das auf die
              Planung, Überwachung und den Bau öffentlicher und privater
              Projekte spezialisiert ist.
            </h3>
            <p>
              Es wurde im Jahr 2010 von einem Team von Ingenieurexperten
              gegründet und hat über einen Zeitraum von mehr als einem Jahrzehnt
              mehr als 400 Projekte mit unterschiedlichem Fachwissen im Bereich
              Bauingenieurwesen und Beratung abgeschlossen. Wir sind bestrebt,
              unsere Projekte an die neuesten Entwicklungen anzupassen und die
              Spitzentechnologie zu nutzen, wobei wir uns stets auf die Wünsche
              des Kunden konzentrieren, die wir als Schlüssel zum Erfolg
              betrachten. Unser Ziel ist es, unsere Projekte mit hoher Qualität,
              Funktionalität, Ästhetik und Gebrauchstauglichkeit zu entwickeln,
              indem wir Ideen und Ratschläge dazu liefern, wie der Raum aussehen
              wird, in dem Sie leben, arbeiten oder entspannen
            </p>
            <NavLink>
              <button>MEHR ...</button>
            </NavLink>
          </div>
          <div className="aboutus-image">
            <div className="image-wrapper">
              <span class="line-top-left"></span>
              <b>15</b>
              <p>years of experience</p>
              <span class="line-bottom-right"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="specialization-container">
        <div className="specialization-wrapper">
          <div className="text-wrapper">
            <p>What we do</p>
            <h1>Our specialization</h1>
            <div className="wrappers">
              {data.specialization.map((el) => (
                <div className="first-wrapper">
                  <img src={el.imgUrl} alt={el.title} />
                  <h3>{el.title}</h3>
                  <p>{el.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="clients-container">
        <div className="clients-wrapper">
          <p>Awesome partners</p>
          <h1>Our Clients</h1>
          <div className="image-wrapper">
            {data.company.map((el) => (
              <div className="imag1">
                <p>{el.title}</p>
                <NavLink onClick={() => getSingle(el)}>
                  <img src={el.imgUrl} alt={el.title} />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
      {single && (
        <Modal 
        title={single.title}
        image = {single.imgUrl} 
        closeModal = {() => setSingle(null)}
        companyInfo = {data.company.find((company) => company.id === single.id) } />
      )}
    </div>
  );
};

export default Home;
