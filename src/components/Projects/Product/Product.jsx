import React from "react";
import { useParams } from "react-router-dom";
import "./singleProject.scss";
import { data } from "../../../assets/data/dummyData";
import { Link } from "react-router-dom";

const Product = () => {
  const { title } = useParams(); // Retrieve the `id` parameter from the URL

  // Find the corresponding project in your data
  const selectedProject = data.projects.find(
    (project) => project.title === title
  );

  if (!selectedProject) {
    return (
      <div className="error">
        <h1>Project Not Found</h1>
        <p>The requested project does not exist.</p>
      </div>
    );
  }

  return (
    <div className="product-container">
      <div className="wrapper">
        <div className="image">
        <img src={selectedProject.imgUrl} alt={selectedProject.title} />
        </div>
        <div className="text">
          <h1>{selectedProject.title}</h1>
          <p>{selectedProject.desc}</p>
          <p><b>Investment value:</b> {selectedProject.investmentValue}</p>
          <p><b>Year of Completion:</b> {selectedProject.yearOfCompletion}</p>
          <Link to='/projects'><button>Back to projects</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
