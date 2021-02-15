import React from 'react';
import styled from 'styled-components';
import { media } from "../../styles/theme"


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  li {
    padding: 0 1.5rem;
    font-weight: ${p => p.theme.h1.fontWeight};
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${p => p.theme.colors.primaryRed};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    margin: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: ${p => p.theme.colors.primaryWhite}
      padding: 1rem 0;
      font-size: ${p => p.theme.h1.size};
      width: 90%;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Scrum Hints & Tips</li>
    </Ul>
  )
}

export default RightNav