import React from 'react'
import styled from "styled-components"
import InfoBox from "../InfoBox";

const Title = styled.div`
    font-size: 2rem; 
`
const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 1rem;
`
const ListItem = styled.li`
    background-color: #FFB2B3;
    margin: 1rem 0;
    padding: 0.5rem;
    color: white;       
    font-weight: ${p => p.theme.h1.fontWeight};
`

const cardProps ={
  title: "Definition of Done",
  body: 
      <List>
          <ListItem>Code is peer reviewed</ListItem>
          <ListItem>Code has been tested</ListItem>
          <ListItem>End user documentation is ready</ListItem>
      </List>,
  style:{
      titleStyle:{
          backgroundColor:'#FF323C',
      }
  },
  linkName:"Definition of Done",
  link:"www.google.com"
}

const DodCard = ({openModal}) => {
  const id=2
  return(
    <InfoBox card={cardProps} action={() => openModal(id)}/>
  );

}
export default DodCard