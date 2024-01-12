import React from "react";
import logo from "../../assets/logo/logo-navbar.png";
import "./about.scss";
import { data } from "../../assets/data/dummyData";

const AboutUs = () => {
  const data1 = [
    {
      id: 1,
      desc: "LANGJÄHRIGE ERFAHRUNG",
    },
    {
      id: 2,
      desc: "LANGJÄHRIGE ERFAHRUNG",
    },
    {
      id: 3,
      desc: "LANGJÄHRIGE ERFAHRUNG",
    },
    {
      id: 4,
      desc: "LANGJÄHRIGE ERFAHRUNG",
    },
  ];
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <h1>- About us -</h1>
        <p className="parahero">
          Wir entwickeln Projekte von der Konzeption bis zu den letzten Details
        </p>
        <img src={logo} alt="logo" />
        <div className="number-container">
          <div className="number-wrapper">
            {data1.map((el) => (
              <div className="number">
                  <h3>{el.id}</h3>
                  <p>{el.desc}</p>
              </div>
            ))}
          </div>
          <div className="second-wrapper">
            <h4>EDMA Gmbh</h4>
            <p>
              wurde im Jahr 2010 von einem Expertenteam des Maschinenbaus
              gegründet und hat über einen Zeitraum von mehr als einem Jahrzehnt
              mehr als 400 Projekte mit unterschiedlichem Fachwissen im Bereich
              Bauingenieurwesen und Beratung abgeschlossen. Im Laufe der
              Entwicklung zahlreicher Bauprojekte sowie der Planung und
              Umsetzung schlüsselfertiger Projekte haben wir ein tiefes
              Verständnis dafür gewonnen, wie wir die Effizienz optimieren und
              maximieren und gleichzeitig die Auswirkungen auf die Umwelt
              minimieren können.
            </p>
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
      </div>
    </div>
  );
};

export default AboutUs;
