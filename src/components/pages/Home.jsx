import React from 'react'
import { media } from "../../styles/theme"
import styled from "styled-components"
import TeamMembersInfoBox from "../common/TeamMembersInfoBox"
import { Page } from "../common/Page"
// import InfoBox from "../common/InfoBox";
import SprintGoalCard from "../common/cards/sprintGoalCard";
import RetroActionsCard from '../common/cards/retroActionsCard';
import DodCard from '../common/cards/dodCard';
import DorCard from '../common/cards/dorCard';
import EventCard from "../common/cards/SprintEvent"
import EventBox from "../common/EventBox"
import EventCarousel from "../common/EventCarousel"

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

const BottomContainer = styled.div`
    width: 100%;
    flex-direction: column; 

    ${media.tablet`
    flex-direction: row;
`}
`

const TopSection = styled.div`
    display: flex; 
    flex-direction: column;

    ${media.tablet`
        flex-direction: row;
    `}
`

const Container = styled.div`
    display: flex;
    flex-direction: column;

    ${media.mobileLarge`
        flex-direction: row;
    `}
`;



const Home = () => {

    //Create contents for the sprint goal info box

    return <Page>
        {/* <TopSection> */}
        <LeftContainer>
            <div>
            <EventCarousel />
            </div>
            <EventCard />
            <SprintGoalCard />
            <TeamMembersInfoBox />
        </LeftContainer>
        <RightContainer>
            {/* <Top> */}
                <DodCard />
                <DorCard />
            {/* </Top> */}
            <RetroActionsCard />
      </RightContainer>
    </Page>
}

export default Home;
