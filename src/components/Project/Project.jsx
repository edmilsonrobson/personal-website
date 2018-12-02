import * as React from 'react';
import styled from "styled-components";

import Badge from "../Badge";

const Box = styled.div`
  display: flex;
  width: 320px;
  margin: 2rem;
  min-height: 420px;
  border: 1px solid #F4F4F4;
  flex-direction: column;
  padding: 0;
  margin: 0;
  box-shadow: 0 12px 12px 0 #d3d3d3;
  font-family: sans-serif;

  cursor: pointer;

  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  object-fit: cover;
  min-width: 320px;
  max-width: 320px;
  min-height: 200px;
  max-height: 200px;
  margin-bottom: 0.5rem;
`;

const TextBox = styled.div`
  margin: 0 1rem;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
  margin: 0;
`;

const BadgesWrapper = styled.div`
  margin: 0.1rem 0 0.5rem 0;
`;

class Project extends React.PureComponent {
  renderBadges = () => {
    const { frontEnd, backEnd, mobile } = this.props;

    return <BadgesWrapper>
      {frontEnd && <Badge color="#FF2C70">Front-End</Badge>}
      {backEnd && <Badge color="#FFC600">Back-End</Badge>}
      {mobile && <Badge color="#00D1B2">Mobile</Badge>}
    </BadgesWrapper>
  }

  renderTitle = () => {
    const { externalLink, title } = this.props;

    return (
      <a href={externalLink} target="_blank">
        <Title>
          {title}
        </Title>
      </a>
    )
  }

  render() {
    const { imageSrc, children, title } = this.props;
    return (
      <Box>
        <ProjectImage src={imageSrc} />
        <TextBox>
          {title && this.renderTitle()}
          {this.renderBadges()}
          {children}
        </TextBox>
      </Box>
    );
  }
}

export default Project;