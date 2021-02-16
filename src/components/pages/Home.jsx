import React from 'react'
import { media } from "../../styles/theme"
import styled from "styled-components"
import { Page } from "../common/Page"
import InfoBox from "../common/InfoBox";
import TeamMembers from '../common/TeamMembers';
import TeamBox from "../common/TeamBox";


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

const Home = () => {

    //Create contents for the sprint goal info box
    const sprintGoalProps ={
        title: "Sprint goals",
        body: 
            <List>
                <ListItem>Deliver MVP</ListItem>
                <ListItem>Set up database</ListItem>
            </List>,
        style:{
            titleStyle:{
                backgroundColor:'#FF323C',
            }
        }
    }

    return <Page>
      <InfoBox {...sprintGoalProps} />
      <TeamBox />
    </Page>
}

export default Home