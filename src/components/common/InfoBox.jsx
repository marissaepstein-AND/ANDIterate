import React from 'react'
import styled, { css } from "styled-components";
import { Link, withRouter } from 'react-router-dom'

const Wrapper = styled.div`
  box-shadow: 0 4px 2px -1px #c1c1c1;
  border-radius: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  ${props => props};
  
`;

const TitleBox = styled.div`
  border-radius: 16px 16px 0 0;
  padding: 0 1rem;
  color: white;
  ${props => props};
`;

const BodyBox = styled.div`
  ${props => props};

  
`;

const Linker = styled(Link)`
  color: ${p => p.theme.colors.primaryWhite};
  padding: 1rem 1.5rem;
  font-weight: ${p => p.theme.h1.fontWeight};
  font-size: ${p => p.theme.h2.size};
  text-decoration: none;
`

const InfoBox = (props) => {

  return (
    <Wrapper {...props.style.wrapperStyle}>
      <TitleBox {...props.style.titleStyle}> <h1>{props.title}</h1> </TitleBox>
      <BodyBox {...props.style.bodyStyle}> {props.body} </BodyBox>
    </Wrapper>
  );
}
export default InfoBox