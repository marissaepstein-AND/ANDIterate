import React from 'react';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';
import theme from '../../styles/theme';


const Wrapper = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  justify-content:center;
  align-items:center;
  z-index:20;
  display:flex;
`

const ModalBackground = styled.div`

  width:60%;
  @media screen and (max-width: 768px){
    width:85%;
    
  }
  font-weight: ${p => p.theme.h1.fontWeight}
  height:600px;
  box-shadow: 0 5px 16px #000000;
  
  border-radius:16px;
  background-color: #FFFFFF;
  display:flex;
  flex-direction:column;
  position:relative;
  padding: 1%;
  color: #FF323C;

`
const CloseModalButton = styled(MdClose)`
  cursor:pointer;
  position: absolute;
  float:right;
  color:#000000;
  top:20px;
  right:20px;
  width:32px;
  height:32px;
  padding:0;

`
const Header = styled.h1 `
  font-family: Poppins;
  padding: '0.75rem';
  
`

const Body = styled.div`
  font-family: Poppins;
  padding: '0.75rem';

`

const generateBody = (content) => {
  var final = []
  content.map(function(each){
    final.push(<h2>{each.header}</h2>)
      each.items.map(function(item){
        final.push(<li>{item}</li>)
      })
    
  })
  return final
}

const Modal = ({showModal, setShowModal,info}) => {
  

  var body = ""
  // if(info != null){
    
  //   info.content.forEach(function (x,index){
  //     body.concat(x.header + "<ul>")
  //     console.log(body)
  //     x.items.forEach(function (y,index){
  //       body.concat("<li>" + x.items[y] + "</li>")
  //     })
  //     body.concat("</ul>")
  //   })
  //   console.log(body)
  // }
  
  return(
    <div>
      {showModal ? (
        <Wrapper>
          <ModalBackground showModal={showModal}>
            <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
            <Header>{info.info.title}</Header>
            <Body>{generateBody(info.info.content)}</Body>
          </ModalBackground>
        </Wrapper>
      ) : null} 
    </div>
  )
};

export default Modal