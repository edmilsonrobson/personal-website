import React from 'react';
import styled from "styled-components";

import Layout from "../components/Layout";
import Project from "../components/Project";

import turnoverbnbLogo from "../assets/turnoverbnb-logo.png";
import saycasterLogo from "../assets/saycaster-logo.png";

const ProjectsWrapper = styled.div`
  display: flex;

  >* {
    margin: 1rem;
  }
`;

const Sandbox = (props) => {
  return (
    <Layout location={props.location}>
      <h1>Sandbox</h1>
      <p>Hey, you shouldn't be here! 😅 This is my sandbox page. Beware, random and unfinished stuff reside in here.</p>

      <ProjectsWrapper>
        <Project imageSrc={turnoverbnbLogo} title="TurnoverBnB" externalLink="http://turnoverbnb.com" frontEnd backEnd mobile>
          <p>SASS app that helps short-term rental hosts (e.g Airbnb) manage cleaners and connect with more through a marketplace.</p>
        </Project>

        <Project imageSrc={saycasterLogo} title="Saycaster" externalLink="https://www.saycaster.com/" frontEnd backEnd>
          <p>A web-based podcatcher and podcast player with focus on community engagement through shareable, user-created spots and commentaries during episodes.</p>
        </Project>
      </ProjectsWrapper>

    </Layout>
  );
};

export default Sandbox;