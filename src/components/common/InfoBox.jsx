import React, {useState} from 'react'
import styled, { css } from "styled-components";
import { Link, withRouter } from 'react-router-dom'
//import { Modal } from './modal';

const Wrapper = styled.div`
  box-shadow: 0 4px 2px -1px #c1c1c1;
  border-radius: 20px;
  margin: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  height: fit-content;
  ${props => props};
  
`;

const TitleBox = styled.div`
  border-radius: 16px 16px 0 0;
  padding: 0 1rem;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  ${props => props};
`;

const BodyBox = styled.div`
  ${props => props};
  padding-bottom: 2rem;
  border-radius: 0 0 1rem 1rem;
`;

const Linker = styled(Link)`
  padding: 0.25rem 0.75rem;
  text-decoration: none;
  background-color: #f1f1f1;
  border-radius: 100%;
  margin: 1rem 1rem 0;
  color: black;
  height: fit-content;
`

const BottomContainer = styled.div`
  width: 100%; 
  margin-top: 2rem; 
  text-align: right;
`

const InfoBox = ({card,action}) => {
  //const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    //setShowModal(prev => !prev)
    
  }


  return (

    <Wrapper {...card.style.wrapperStyle}>
      <TitleBox {...card.style.titleStyle}> 
      <h1>{card.title}</h1> 
      {/* <Linker to={props.link} {...props.style.linkStyle}>
        ?
      </Linker> */}
      </TitleBox>
      <BodyBox {...card.style.bodyStyle}> {card.body}   
      <BottomContainer>
      <Linker onClick={action} {...card.style.linkStyle}>
        ?
      </Linker>
      </BottomContainer>
      </BodyBox>
    
    </Wrapper>
    
  );
}
export default InfoBox