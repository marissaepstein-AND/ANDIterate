import React from 'react';
import styled from "styled-components";
import InfoBox from "../InfoBox";

const Title = styled.div`
    font-size: 2rem; 
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 1rem;
`;

const ListItem = styled.li`
    background-color: #A050FF;
    margin: 1rem 0;
    padding: 0.5rem;
    color: white;       
    font-weight: ${p => p.theme.h1.fontWeight};
`;

const cardProps ={
  title: "Definition of Done",
  body: 
      <List>
          <ListItem>Code is peer reviewed</ListItem>
          <ListItem>Code has been tested</ListItem>
          <ListItem>End user documentation is ready</ListItem>
      </List>,
  style:{
    // wrapperStyle: {
    //   height: '90%'
    // },
      titleStyle:{
        height: '100%',
        border: "solid 3px #A050FF",
        borderBottom: 'none',
        color: "#A050FF",
      },
      bodyStyle: {
        border: "solid 3px #A050FF",
      }
  },
  linkName:"Definition of Done",
  link:"www.google.com"
};

const DodCard = (props) => {

  return(
    <InfoBox {...cardProps}/>
  );

}

export default DodCard;