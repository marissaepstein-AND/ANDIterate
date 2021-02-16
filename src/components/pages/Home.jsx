import React from 'react'
import { media } from "../../styles/theme"
import styled from "styled-components"
import TeamMembersInfoBox from "../common/TeamMembersInfoBox"
import { Page } from "../common/Page"
import InfoBox from "../common/InfoBox";
import TeamMembers from '../common/TeamMembers';
import TeamBox from "../common/TeamBox";


const Title = styled.div`
    font-size: 2rem; 
`


const Home = () => {

    //Create contents for the sprint goal info box
    const sprintGoalProps ={
        title: "Sprint goals",
        body: 
            <ul>
                <li>Deliver MVP</li>
                <li>Set up database</li>
            </ul>,
        style:{
            wrapperStyle:{

            },
            titleStyle:{
                backgroundColor:'#FF323C',
            },
            bodyStyle:{

            }
        }
        
    }

    return <Page>
      <Title>Hello</Title>
      <InfoBox {...sprintGoalProps} />
      <TeamMembersInfoBox/>
    </Page>
}

export default Home