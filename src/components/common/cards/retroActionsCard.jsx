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
  title: "Retro Actions",
  body: 
      <List>
          <ListItem>Improve communications between team members</ListItem>
          <ListItem>Follow meeting timeboxes strictly</ListItem>
          <ListItem>Refactor database system</ListItem>
      </List>,
  style:{
      titleStyle:{
          backgroundColor:'#FF323C',
      }
  },
  linkName:"Sprint retrospective",
  link:"www.google.com"
}

const RetroActionsCard = (props) => {

  return(
    <InfoBox {...cardProps}/>
  );

}
export default RetroActionsCard