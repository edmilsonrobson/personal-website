import React from 'react';
import styled from "styled-components";

import Layout from '../components/Layout'
import ed from "../assets/ed.jpg"

const AboutMeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfilePicture = styled.img`
  height: 320px;
  margin-right: 3rem;
  border-radius: 50%;
`;

const AboutMeText = styled.p`
  font-size: 18px;
`;

const AboutMeLink = styled.a`
  text-decoration: none;
`;

const contact = (props) => {
  return (
    <Layout location={props.location}>
      <AboutMeWrapper>
        <ProfilePicture src={ed} alt="Ed's profile picture" />
        <div>
          <h1>About Me</h1>
          <AboutMeText>
            Hey there! <br/><br/>
            My name is Edmilson (or simply Ed) and I'm a fullstack web developer at <AboutMeLink href="https://www.x-team.com/" target="_blank">X-Team</AboutMeLink>. <br/>
            I enjoy reading and writing about programming (Javascript, React ♥), games, personal development and random stuff. And memes. <br/><br/>

            You can contact me on <AboutMeLink href="https://www.twitter.com/edmilson_rocha_" target="_blank">Twitter</AboutMeLink> :)
          </AboutMeText>
        </div>
      </AboutMeWrapper>

    </Layout>
  );
};

export default contact;