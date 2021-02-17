import React from 'react';
import { media } from "../../styles/theme";
import styled from "styled-components";
import { Page } from "../common/Page";
import InfoBox from "../common/InfoBox";
import TeamMembers from '../common/TeamMembers';
import TeamBox from "../common/TeamBox";
import EventBox from "../common/EventBox";
import SprintGoalCard from "../common/cards/sprintGoalCard";
import RetroActionsCard from '../common/cards/retroActionsCard';
import DodCard from '../common/cards/dodCard';
import DorCard from '../common/cards/dorCard';
import EventCard from "../common/cards/SprintEvent";

const LeftContainer = styled.div`
    width: 100%;

    ${media.tablet`
        width: 50%;
    `}

`;

const RightContainer = styled.div`
    width: 100%; 

    ${media.tablet`
        width: 50%;
        display: flex; 
        flex-direction: column;
    `}
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;

    ${media.mobileLarge`
        flex-direction: row;
    `}
`;

const Home = () => {

    //Create contents for the sprint goal info box

    return <Page>
        <LeftContainer>
            <EventCard />
            <SprintGoalCard/>
        </LeftContainer>
        <RightContainer>
            <Top>
            <DodCard />
            <DorCard />
            </Top>

            <RetroActionsCard />

      </RightContainer>
      
    </Page>
}

export default Home;
