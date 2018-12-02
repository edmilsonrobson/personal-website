import React from 'react'
import styled from "styled-components";
import layout from "./layout.css";
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
  flex-direction: column;
  align-items: center;

  margin-top: 6rem;
  font-family: sans-serif;
  text-align: center;
`;

const RedText = styled.span`
  color: red;
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
          <p>
            Made by <a href="https://www.twitter.com/edmilson_rocha_" target="_blank">Ed</a> with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> and <RedText>♥</RedText>  <br/>
            This page is also avaible on <a href="">Github!</a>
          </p>
        </Footer>
      </Wrapper>
    )
  }
}

export default Layout
