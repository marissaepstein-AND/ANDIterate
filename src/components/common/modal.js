import React from 'react'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'



const Background = styled.div`
  width: 100%;
  height: 100%;
  background: '#FF323C';
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalWrapper = styled.div`
  width:800px;
  height:500px;
  box-shadow: 0 5px 16px "#000000";
  background: "#f00fff";
  color: "#000000";
  display: grid;
  grid-template-columns: 1fr 1fr;
  position:relative;
  z-index:10;
  border-radius:10px;
`
const ModalContent = styled.div `
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  line-height: 1.8;
  color:"#FF00FF";
`
const CloseModalButton = styled(MdClose)`
  cursor:pointer;
  position:absolute;
  top:20px;
  right:20px;
  width:32px;
  height:32px;
  padding:0;
  z-index:10;

`

export const Modal = ({showModal, setShowModal,info}) => {

  return(
    <div>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <h1>{info.title}</h1>
              <p>{info.content}</p>
            </ModalContent>
            <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
          </ModalWrapper>
        </Background>
      ) : null} 
    </div>
  )
};