import React, { useState } from "react";
import { data } from "../../assets/data/dummyData";
import { NavLink } from "react-router-dom";
import "./style.scss";
import Modal from "../Modal/Modal";

const Services = () => {
  const [single, setSingle] = useState(null);

  const getSingle = (el) => {
    setSingle(el);
  }

  return (
    <div className="services-container">
      <div className="services-wrapper">
        <h1>- SERVICES -</h1>
        <div className="services">
          {data.company.map((el) => (
            <div className="service">
              <p>{el.title}</p>
              <NavLink onClick={() => getSingle(el)}>
                <img src={el.imgUrl} alt={el.title} />
              </NavLink>
            </div>
          ))}
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

export default Services;
