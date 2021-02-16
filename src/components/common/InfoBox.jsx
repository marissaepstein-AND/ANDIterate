import React from 'react'
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  #background-color: #FF323C;
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


const InfoBox = (props) => {

  return (
    <Wrapper {...props.style.wrapperStyle}>
      <TitleBox {...props.style.titleStyle}> <h1>{props.title}</h1> </TitleBox>
      <BodyBox {...props.style.bodyStyle}> {props.body} </BodyBox>
    </Wrapper>
  );
}
export default InfoBox