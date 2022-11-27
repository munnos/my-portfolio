import React from "react";
import "./portfolio.css";

import ProjectImage1 from "../../assets/projectImage1.PNG";
import ProjectImage2 from "../../assets/projectImage2.PNG";
import ProjectImage3 from "../../assets/projectImage3.PNG";
import ProjectImage4 from "../../assets/projectImage4.PNG";
import ProjectImage5 from "../../assets/projectImage5.PNG";
import ProjectImage6 from "../../assets/projectImage6.PNG";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="containerportfolioContainer">
      <article className="portfolioItem">
        <div className="portfolioitemImage">
          <img src={ProjectImage1} alt="Movietails project" />
        </div>

        <h3>Movietails</h3>
        <div className="portfolioitemCTA">
        <a href="https://github.com" className="btn" target="_blank">
          {" "}
          Github
        </a>
        <a
          href="https://github.com"
          className="btn btn-primary"
          target="_blank"
        >
          {" "}
          Live project{" "}
        </a>
        </div>
      </article>

      <article className="portfolioItem">
        <div className="portfolioitemImage">
          <img src={ProjectImage2} alt="Movietails project" />
        </div>
        <h3>Readme generator</h3>
        <div className="portfolioitemCTA">
        <a href="https://github.com" className="btn" target="_blank">
          Github
        </a>
        <a
          href="https://github.com"
          className="btn btn-primary"
          target="_blank"
        >
          {" "}
          Live project{" "}
        </a>
        </div>
      </article>

      <article className="portfolioItem">
        <div className="portfolioitemImage">
          <img src={ProjectImage3} alt="Movietails project" />
        </div>
        <h3>Text editor progressive web application</h3>
        <div className="portfolioitemCTA">
        <a href="https://github.com" className="btn" target="_blank">
          {" "}
          Github
        </a>
        <a
          href="https://github.com"
          className="btn btn-primary"
          target="_blank"
        >
          {" "}
          Live project{" "}
        </a>
        </div>
      </article>

      <article className="portfolioItem">
        <div className="portfolioitemImage">
          <img src={ProjectImage4} alt="Movietails project" />
        </div>
        <h3>E-commerce back end</h3>
        <div className="portfolioitemCTA">
        <a href="https://github.com" className="btn" target="_blank">
          {" "}
          Github
        </a>
        <a
          href="https://github.com"
          className="btn btn-primary"
          target="_blank"
        >
          {" "}
          Live project{" "}
        </a>
        </div>
      </article>

      <article className="portfolioItem">
        <div className="portfolioitemImage">
          <img src={ProjectImage5} alt="Movietails project" />
        </div>
        <h3>Blood bank application</h3>
        <div className="portfolioitemCTA">
        <a href="https://github.com" className="btn" target="_blank">
          {" "}
          Github
        </a>
        <a
          href="https://github.com"
          className="btn btn-primary"
          target="_blank"
        >
          {" "}
          Live project{" "}
        </a>
        </div>
      </article>

      <article className="portfolioItem">
        <div className="portfolioitemImage">
          <img src={ProjectImage6} alt="Movietails project" />
        </div>
        <h3>Password generator</h3>
        <div className="portfolioitemCTA">
        <a href="https://github.com" className="btn" target="_blank">
          {" "}
          Github
        </a>
        <a
          href="https://github.com"
          className="btn btn-primary"
          target="_blank"
        >
          {" "}
          Live project{" "}
        </a>
        </div>
      </article>
      </div>
    </section>
  );
};

export default Portfolio;
