import React, { useEffect } from "react";
import {
  StyledAbout,
  StyledCard,
  StyledFaces,
} from "../styledComponents/StyledAboutUs";

import Alice from "../assets/Alice.jpg";
import Willy from "../assets/Willy.jpeg";
import Ola from "../assets/ola.png";

import Logo from "../components/Logo";

export default function AboutUs() {
  useEffect(() => {
    sessionStorage.removeItem("location");
  }, []);

  return (
    <StyledAbout>
      <StyledCard>
        <h2>Hi, thanks for visiting our project! </h2>
        <StyledFaces>
          <div>
            <figure>
              <a
                href="https://github.com/Alice-Rez"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={Alice} alt="Alice" title="github.com/alice-rez" />
              </a>
            </figure>

            <h3>
              Alice<br></br> Reznickova
            </h3>

            <p>tech-lead</p>
            <p> back-end lead</p>
          </div>
          <div>
            <figure>
              <a
                href="https://github.com/OlaFro"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={Ola} alt="Ola" title="github.com/olafro" />
              </a>
            </figure>
            <h3>
              Ola<br></br> Frost
            </h3>
            <p>product owner</p>
            <p>front-end lead</p>
          </div>
          <div>
            <figure>
              <a
                href="https://github.com/willoid"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={Willy} alt="Willy" title="github.com/willoid" />
              </a>
            </figure>
            <h3>
              Willy<br></br> Calvo
            </h3>
            <p>full-stack</p>
            <p> developer</p>
          </div>
        </StyledFaces>
        <h3>About us</h3>
        <p>
          We are Alice, Ola, and Willy - three friends that studied together Web
          Development at{" "}
          <a
            href="https://digitalcareerinstitute.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Digital Career Institute
          </a>{" "}
          in Leipzig in 2020. We've started as absolute beginners having no clue
          about HTML or CSS and now, a year later, we proudly present you Bakey
          - our final project, a full-stack Single Page Application created with
          MERN-stack.🥳.
        </p>

        <h3>Motivation</h3>
        <p>
          For our final project we decided to create a tool that would support
          local cafés during the Covid19 lockdowns. Although they were allowed
          to offer products to-go, many of them won‘t even take the risk of
          producing food that might not find a buyer. With Bakey they would be
          able to offer their products in short crowdfunding-like campaigns and
          prepare the food with guaranteed payment and pick up.
        </p>
        <h3>Project</h3>
        <p>
          We created our project from scratch in seven weeks between February
          and March 2021. Before we started to code, we discussed the
          functionalities, planned the order of execution of the tasks and set
          the goals for the upcoming sprints. At the end of February we deployed
          our alpha version with simple but working functionalities and we sent
          it to our friends for testing. Two weeks later we were ready to deploy
          the Beta version and prepared the final presentation where Bakey would
          be introduced.
        </p>
        <h3>Technologies</h3>
        <p>
          Bakey has been developed with React and Styled-Components in the
          front-end and Node.js and Express.js in the back-end. For the database
          we‘ve used MongoDB with Mongoose and Mongo Atlas. The passwords are
          encrypted through hashing, we implemented JWT and the data is stored
          in the browser‘s session storage. The workflow was designed according
          to Agile Project Management.
        </p>
        <h3>Remote</h3>
        <p>
          Although we live in the same city, we haven‘t meet even once during
          the whole project. We communicated daily via Zoom and Slack, we
          organized the tasks with Trello and conceptualized our functionalities
          with Miro and Figma. Our tool to merge the code could obviously not be
          other than Github.
        </p>
        <h3>Feedback</h3>
        <p>
          You will find the Bakey repository{" "}
          <a
            href="https://github.com/OlaFro/Bakey"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            here
          </a>
          . We would love to hear your feedback about Bakey! If you have any
          suggestions, please share them with us via{" "}
          <a href="mailto:bakey-app@gmail.com">bakey-app@gmail.com</a>.
        </p>
        <Logo />
      </StyledCard>
    </StyledAbout>
  );
}
