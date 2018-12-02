import React from 'react';
import Link from "gatsby-link";
import styled from "styled-components";
import * as faBrands from 'styled-icons/fa-brands'

import ed from '../../assets/ed.jpg'

const Name = styled.h1`
  display: inline;
  margin: 0 0 0.3rem 0;
`;

const Title = styled.h2`
  font-size: 16px;
  display: inline;
  text-align: center;
  margin: 0;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1.25rem 1.5rem 0.5rem 1.5rem;
  background-color: rebeccapurple;
  color: white;
`;

const DevInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfilePicture = styled.img`
  display: inline-block;
  border-radius: 50%;
  width: 92px;
  height: 92px;
  border: 2px solid white;

  margin: 0 1rem 0 0;
`;

const NavbarLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 0 0 0;

  list-style-type: none;
`;

const BrandWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LinkItem = styled(Link)`
  box-sizing: border-box;
  font-size: 18px;
  font-family: sans-serif;
  font-weight: 600;
  text-decoration: none;
  color: white;
  margin: 0 1rem;

  ${props => props.selected && `border-bottom: 2px solid white;`}
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1.25rem 0 1.25rem 0;

  >* {
    margin: 0 0.5rem;
    color: white;
  }
`;

const Header = (props) => {
  return (
    <HeaderWrapper>

      <BrandWrapper>
        <ProfilePicture src={ed} />

        <DevInfoWrapper>
          <Name>Edmilson Rocha</Name>
          <Title>Fullstack Web Developer</Title>
        </DevInfoWrapper>
      </BrandWrapper>

      <SocialMediaWrapper>
        <a href="https://www.twitter.com/edmilson_rocha_" target="_blank"><faBrands.Twitter size={30}/></a>
        <a href="https://github.com/edmilsonrobson" target="_blank"><faBrands.Github size={30}/></a>
        <a href="https://www.linkedin.com/in/edmilson-robson-rocha-lima-9072a06a/" target="_blank"><faBrands.Linkedin size={30}/></a>
      </SocialMediaWrapper>

      <NavbarLinks>
        <LinkItem to="/" selected={props.location.pathname === '/'}>Blog</LinkItem>
        <LinkItem to="/contact" selected={props.location.pathname === '/contact'}>Contact</LinkItem>
        {/* <LinkItem to="/blog">Blog</LinkItem> */}
        {/* <LinkItem to="/portfolio">Portfolio</LinkItem> */}
      </NavbarLinks>


    </HeaderWrapper>
  );
};

export default Header;