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
    background-color: #A050FF;
    margin: 1rem 0;
    padding: 0.5rem;
    color: white;       
    font-weight: ${p => p.theme.h1.fontWeight};
`

const cardProps ={
  title: "Definition of Ready",
  body: 
      <List>
          <ListItem>The story should be written exactly in the ‘user story’ format</ListItem>
          <ListItem>Acceptance criteria must be understood by the team</ListItem>
          <ListItem>A Team needs to estimate the story</ListItem>
          <ListItem>The team should understand how to provide a demo of the features</ListItem>
          <ListItem>Performance criteria should be understood by the team</ListItem>
      </List>,
  style:{
    // wrapperStyle: {
    //     height: '90%'
    //   },
      titleStyle:{
        border: "solid 3px #A050FF",
        borderBottom: 'none',
        color: "#A050FF",
      },
      bodyStyle: {
        border: "solid 3px #A050FF",
      }
  },
  linkName:"Definition of Ready",
  link:"www.google.com"
}

const DorCard = (props) => {

  return(
    <InfoBox {...cardProps}/>
  );

}
export default DorCard