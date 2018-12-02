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

const PortfolioWrapper = styled.div`
`;

const Portfolio = (props) => {
  return (
    <Layout location={props.location}>
      <PortfolioWrapper>
        <h1>Portfolio</h1>

        <ProjectsWrapper>
          <Project imageSrc={turnoverbnbLogo} title="TurnoverBnB" externalLink="http://turnoverbnb.com" frontEnd backEnd mobile>
            <p>SASS app that helps short-term rental hosts (e.g Airbnb) manage cleaners and connect with more through a marketplace.</p>
          </Project>

          <Project imageSrc={saycasterLogo} title="Saycaster" externalLink="https://www.saycaster.com/" frontEnd backEnd>
            <p>A web-based podcatcher and podcast player with focus on community engagement through shareable, user-created spots and commentaries during episodes.</p>
          </Project>
        </ProjectsWrapper>
      </PortfolioWrapper>
    </Layout>
  );
};

export default Portfolio;