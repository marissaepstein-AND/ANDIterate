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
  title: "Sprint 1 goals",
  body: 
      <List>
          <ListItem>Deliver MVP</ListItem>
          <ListItem>Set up database</ListItem>
      </List>,
  style:{
      titleStyle:{
          backgroundColor:'#FF323C',
      }
  },
  linkName:"Sprint goal",
  link:"www.google.com"
}

const SprintGoalCard = ({openModal}) => {

  const id = 1
  return(
    <InfoBox card ={cardProps} action={() => openModal(id)}/>
  );

}
export default SprintGoalCard