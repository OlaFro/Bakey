import React from "react";
import { StyledAbout } from "../styledComponents/StyledAboutUs";

export default function AboutUs() {
  return (
    <StyledAbout>
      <h1>About us</h1>
      <h2>Hi! Thanks for visiting our project. Get to know us better!</h2>
      <p>
        We are Alice, Ola, and Willy - three friends that studied together Web
        Development at Digital Career Institute in Leipzig in 2020. We've
        started as absolute beginners having no clue about HTML or CSS and now,
        a year later, we are proudly presenting You Bakey - our final project, a
        full-stack Single Page Application created with MERN-stack.🥳.
      </p>
      <h3>Motivation</h3>
      <p>
        Our motivation by choosing the topic of the final project was to create
        a tool that would support local cafés during the lockdown. Right now
        they only can offer their products to-go, but many of them are not even
        taking the risk of producing food, that might not find a client. With an
        application like Bakey, they would be able to offer their products in
        short crowdfunding-like campaigns and prepare the food with guaranteed
        payment and pick up.
      </p>
      <h3>Project</h3>
      <p>
        We have created our project from scratch in seven weeks between February
        and March 2021. Before we've started to code, we discussed the
        functionalities, planned the order of executing the tasks, and set the
        goals for the upcoming sprints. At the end of February, we've deployed
        our Alpha version, still very bare but functioning, that we've sent to
        our friends for testing. Two weeks later we were ready to deploy the
        Beta version and prepared for the Final Presentation where Bakey would
        be introduced.
      </p>
      <h3>Technologies</h3>
      <p>
        Bakey is done with React and Styled-Components in the front-end and
        node.js and Express.js in the back-end. For the database, we've used
        MongoDB with Mongoose and Mongo Atlas. We are using ecrypting (hashing)
        of the password, JWT and store the order data in the session storage.
        During the work on Bakey we've used Agile Project Management.
      </p>
      <h3>Remote</h3>
      <p>
        Although we live in the same city, during the whole project we haven't
        met even once. We communicated daily via Zoom and Slack, we've used
        Trello to organize the work, Miro and Figma for conceptual tasks, and of
        course Github to merge our code into the project.
      </p>
      <h3>Feedback</h3>
      <p>
        We would love to hear your feedback about Bakey! If you have any
        suggestions, please share them with us via bakey-app@gmail.com
      </p>
    </StyledAbout>
  );
}
