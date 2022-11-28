import React from "react";
import "./about.css";
import Me from './../../assets/Me.jpg';

const About = () => {
  return (
    <section class="about">
      <h1 id="aboutmeHeader">About Me</h1>
      <div>
      <img id="picofMe" src={Me} alt="me" />
      </div>
      <div className="containeraboutContainer">
        <div className="aboutContent">
          <article className="aboutCards">
            <h5>
              {" "}
              I am an experienced legal professional seeking a first role in
              legal operations or legal engineering. I have extensive experience
              as a paralegal across a variety of areas such as ISDA
              negotiations, financial litigation, general corporate work,
              mergers and acquisitions and tax litigation.
            </h5>
          </article>
        </div>

        <div className="aboutContent">
          <article className="aboutCards">
            <h5>
              {" "}
              In the past, I have made extensive use of legal technology tools
              such as High Q, Relativity and LexisDraft. These certainly
              aleviate pain points for legal professionals and as a professional
              who is all too familiar the inefficiencies of legal practice - I
              want to be involved in tools which can transform the industry.
            </h5>
          </article>
        </div>

        <div className="aboutContent">
          <article className="aboutCards">
            <h5>
              {" "}
              Away from work, I enjoy indie rock music. Which leads to me going
              to a lot of gigs, as well as walking and reading (usually about
              the latest corporate crimes to hit the headlines). Oh and of
              course enjoying learning how to code!
            </h5>
          </article>
        </div>

        <div className="aboutContent">
          <article className="aboutCards">
            <a href="/contact" className="btnPrimary">
              {" "}
              Contact Me!{" "}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
