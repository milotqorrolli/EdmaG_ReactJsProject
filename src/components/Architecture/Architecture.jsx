import React from "react";
import "./style.scss";
import { data } from "../../assets/data/dummyData";
import { NavLink } from "react-router-dom";

const Architecture = () => {
  return (
    <div className="arch-container">
      <div className="arch-wrapper">
        {data.architecture.map((el) => (
          <div key={el.id} className="arch">
            <h1>{el.title}</h1>
            <p>{el.desc}</p>
            <NavLink to="/projects">
              <button>{el.btn}</button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Architecture;
