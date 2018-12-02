import React from 'react';
import styled from "styled-components";

const BadgeWrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin-right: 0.2rem;
  padding: 0.1rem 0.5rem;
  border-radius: 6px;
  background-color: ${props => props.color};

  min-width: 2rem;
  font-size: .8rem;
  font-family: sans-serif;
  color: white;
`;

const Badge = ({color, children}) => {
  return (
    <BadgeWrapper color={color}>
      {children}
    </BadgeWrapper>
  );
};

export default Badge;