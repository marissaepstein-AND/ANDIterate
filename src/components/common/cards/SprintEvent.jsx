import React from 'react';
import styled from "styled-components";
import theme from '../../../styles/theme';
import InfoBox from "../InfoBox";

const Title = styled.div`
    font-size: 4rem; 
    color: ${p => p.theme.colors.primaryRed};
    font-weight: ${p => p.theme.h1.fontWeight};
    margin-bottom: 1rem;
    font-family: Poppins;
`;

const cardProps ={
  title: "Next Sprint Event:",
  body: 
     <Title>Daily Scrum</Title>,
  style:{
      wrapperStyle:{
        border: 'solid 3px',
        borderColor: theme.colors.primaryRed,
      },
      titleStyle:{
        border: 'none',
        color: theme.colors.primaryRed,
      },
      bodyStyle: {
        padding: '0.75rem',
      },
      linkStyle: {
        backgroundcolor: theme.colors.primaryDarkGrey,
      }
    }
};

const EventCard = ({openModal}) => {

  const details = {"id":5,"color":theme.colors.primaryRed}
  return(
    <InfoBox card={cardProps} action={() => openModal(details)}/>
  );

}

export default EventCard;
