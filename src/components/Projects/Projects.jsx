import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./projects.scss";
import { data } from "../../assets/data/dummyData";

const Projects = () => {
  const initialVisibleProjects = 3;
  const [visibleProjects, setVisibleProjects] = useState(initialVisibleProjects);
  const [showBtn, setShowBtn] = useState(false);
  const loadMoreProjects = () => {
    setVisibleProjects(data.projects.length);
    setShowBtn(true);
  };

  const hideProjects = () => {
    setVisibleProjects(3);
    setShowBtn(false);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1>- Projects -</h1>
        <div className="services">
          {data.projects.slice(0, visibleProjects).map((el) => (
            <div className="service" key={el.id}>
              <p>{el.title}</p>
              <Link to={`/product/${el.title}`}>{/* Pass project ID as a parameter */}
                <img src={el.imgUrl} alt={el.title} />
              </Link>
            </div>
          ))}
        </div>
        <div className="btn">
          {visibleProjects < data.projects.length && (
            <button onClick={loadMoreProjects}>Load more</button>
          )}
          {visibleProjects && showBtn && <button onClick={hideProjects}>Hide</button>}
        </div>
      </div>
    </div>
  );
};

export default Projects;
