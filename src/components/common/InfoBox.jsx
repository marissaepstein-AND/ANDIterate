import React, {useState} from 'react'
import styled, { css } from "styled-components";
import { Link, withRouter } from 'react-router-dom'
import { Modal } from './modal';

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
  padding: 1rem 1.5rem;
  text-decoration: none;
`

const InfoBox = ({card,info}) => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }


  return (
    <Wrapper {...card.style.wrapperStyle}>
      <TitleBox {...card.style.titleStyle}> <h1>{card.title}</h1> </TitleBox>
      <BodyBox {...card.style.bodyStyle}> {card.body} </BodyBox>
      <Linker onClick={openModal} >
        What is a {card.linkName}?
      </Linker>
      <Modal showModal={showModal} setShowModal={setShowModal} info={info} />
    </Wrapper>
    
  );
}
export default InfoBox