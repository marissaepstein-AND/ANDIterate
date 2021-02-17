import React from 'react'
import styled from "styled-components"
import InfoBox from "../InfoBox";

const Title = styled.div`
    font-size: 4rem; 
    color: ${p => p.theme.colors.primaryRed};
    font-weight: ${p => p.theme.h1.fontWeight};
    margin-bottom: 1rem;
`


const cardProps ={
  title: "Next Sprint Event:",
  body: 
     <Title>Daily Scrum</Title>,
  style:{
      titleStyle:{
          border: 'none',
          color: '#FF323C',
      },
      bodyStyle: {
        padding: '0.75rem',
      },
      linkStyle: {
        backgroundColor: 'grey'
      }
    }
  
//   linkName:"Definition of Ready",
//   link:"www.google.com"
}

const EventCard = (props) => {

  return(
    <InfoBox {...cardProps}/>
  );

}
export default EventCard