import React from 'react'
import styled from "styled-components";

import Header from "./Header";

const ContentWrapper = styled.div`
  margin: 0 8rem;
`;

const HeaderWrapper = styled.div`
  margin: 0 0 2rem 0;
`;

const Wrapper = styled.div`
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 6rem;
  font-family: sans-serif;
`;

const RedText = styled.span`
  color: red;
`;

const FooterLink = styled.a`
  text-decoration: none;
`;

class Layout extends React.Component {
  render() {
    const { children, location } = this.props

    return (
      <Wrapper>
        <HeaderWrapper>
          <Header location={location} />
        </HeaderWrapper>

        <ContentWrapper>
          {children}
        </ContentWrapper>

        <Footer>
          <p>Made by <FooterLink href="https://www.twitter.com/edmilson_rocha_" target="_blank">Ed</FooterLink> with <FooterLink href="https://www.gatsbyjs.org/" target="_blank">Gatsby</FooterLink> and <RedText>♥</RedText></p>
        </Footer>
      </Wrapper>
    )
  }
}

export default Layout
