import React, { useState } from "react";
import "./style.scss";
import { data } from "../../assets/data/dummyData";

const Modal = (props) => {
    const { title, image, closeModal, companyInfo } = props;
  
    return (
      <div className="modal" onClick={() => closeModal()}>
        <div className="content-modal">
          <div className="modal-wrapper">
            <button className="close" onClick={() => closeModal()}>
              X
            </button>
            <img src={image} alt="image" />
            {companyInfo && (
              <div className="company-info">
                <h3>Company Information</h3>
                <p>Name: {companyInfo.name}</p>
                <p>Location: {companyInfo.location}</p>
                <p>Description: {companyInfo.description}</p>
                <h3>Services</h3>
                <ul>
                  {companyInfo.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  

export default Modal;
