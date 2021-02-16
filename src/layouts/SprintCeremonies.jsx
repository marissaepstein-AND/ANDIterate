import React from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import styled from "styled-components"
import InfoBoxWithoutLink from "../components/common/InfoBoxWithoutLink";
import theme from '../styles/theme';

const Wrapper = styled.div`
`

const Heading = styled.h2`
    font-family: Poppins, sans-serif;
    color: ${p => p.theme.colors.primaryRed};
`;

const BoxContentWrapper = styled.div`
    padding: 15px;
`

const BoxSubtitle = styled.p`
    color: ${p => p.theme.colors.primaryDarkGrey}; 
    font-weight: ${p => p.theme.h1.fontWeight};
    font-family: Roboto, sans-serif;
    font-style: italic;
    padding: 0;
    margin: 0;
` 

const List = styled.ul`
    list-style: dash;
    padding: 0.25rem;
    margin: 0 1rem;
`
const ListItem = styled.li`
    margin: 1rem 0;
    padding: 0;
    color: ${p => p.theme.colors.primaryDarkGrey};       
    font-family: Roboto, sans-serif;
`

const planningProps ={
    title: "Sprint Planning",
    body: <BoxContentWrapper>     
        <BoxSubtitle>Timebox:</BoxSubtitle>
        <List>
            <ListItem>8 hours max (for shorter Sprints the full 8 hours may not be necessary)</ListItem>
        </List>
        <br></br>
        <BoxSubtitle> Who’s involved?</BoxSubtitle>
        <List>
            <ListItem>Product Owner</ListItem>
            <ListItem>Scrum Master</ListItem>
            <ListItem>Developers</ListItem>
        </List>
        <br></br>
        <BoxSubtitle>When?</BoxSubtitle>
        <List>
            <ListItem>At the start of the Sprint</ListItem>
        </List>
        <br></br>
        <BoxSubtitle>What is it?</BoxSubtitle>
        <List>
            <ListItem>Asks why the Sprint is valuable and defines a Sprint Goal</ListItem>
            <ListItem>The Definition of Done, projected team capacity and past team performance are all considered for what can be done in the Sprint</ListItem>
            <ListItem>Developers break down the Product Backlog and figure out how to deliver them</ListItem>
            <ListItem>Product Owner clarifies the scope, requirements, and makes trade-offs</ListItem>
            <ListItem>Scrum Master ensures it takes place and takes the correct time</ListItem>
        </List>
    </BoxContentWrapper>
    
,
    style:{
        wrapperStyle:{
            borderStyle: 'solid',
            borderWidth: '5px',
            borderColor: theme.colors.secondaryPink,
        },
        titleStyle:{
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.secondaryPink
        }
    },
}

const dailyProps ={
    title: "Daily Scrum",
    body: 
        <List>
            <ListItem>Code is peer reviewed</ListItem>
            <ListItem>Code has been tested</ListItem>
            <ListItem>End user documentation is ready</ListItem>
        </List>,
    style:{
        wrapperStyle:{
            borderStyle: 'solid',
            borderWidth: '5px',
            borderColor: theme.colors.secondaryGreen,
        },
        titleStyle:{
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.secondaryGreen
        }
    },
} 

const reviewProps ={
    title: "Sprint Review",
    body: 

        <List>
            <ListItem>Code is peer reviewed</ListItem>
            <ListItem>Code has been tested</ListItem>
            <ListItem>End user documentation is ready</ListItem>
        </List>,
    style:{
        wrapperStyle:{
            borderStyle: 'solid',
            borderWidth: '5px',
            borderColor: theme.colors.secondaryOrange,
        },
        titleStyle:{
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.secondaryOrange
        }
    },
}

const retroProps ={
    title: "Sprint Retro",
    body: 
        <List>
            <ListItem>Code is peer reviewed</ListItem>
            <ListItem>Code has been tested</ListItem>
            <ListItem>End user documentation is ready</ListItem>
        </List>,
    style:{
        wrapperStyle:{
            borderStyle: 'solid',
            borderWidth: '5px',
            borderColor: theme.colors.secondaryPurple,
        },
        titleStyle:{
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.secondaryPurple
        }
    },
}

const SprintCeremonies = (props) => {

    return <Wrapper>
        <Heading>Sprint Ceremonies</Heading>
        <InfoBoxWithoutLink {...planningProps}/>
        <InfoBoxWithoutLink {...dailyProps}/>
        <InfoBoxWithoutLink {...reviewProps}/>
        <InfoBoxWithoutLink {...retroProps}/>
    </Wrapper>
}

export default SprintCeremonies
