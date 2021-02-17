import React from 'react'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'



const ModalWrapper = styled.div`
  width:600px;
  height:500px;
  box-shadow: 0 5px 16px #000000;
  position:relative;
  z-index:10;
  border-radius:20px;
  background-color: #FFFFFF;
  display:flex;
  flex-direction:column;
  
  position:absolute;
  padding: 1%;
`
const CloseModalButton = styled(MdClose)`
  cursor:pointer;
  position:absolute;
  top:20px;
  right:20px;
  width:32px;
  height:32px;
  padding:0;

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
        
          <ModalWrapper showModal={showModal}>
              <h1>{info.title}</h1>
              {generateBody(info.content)}
            <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
          </ModalWrapper>
        
      ) : null} 
    </div>
  )
};

export default Modal