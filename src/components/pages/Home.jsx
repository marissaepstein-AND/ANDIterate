import React from 'react'
import { media } from "../../styles/theme"
import styled from "styled-components"
import TeamMembersInfoBox from "../common/TeamMembersInfoBox"
import { Page } from "../common/Page"
import InfoBox from "../common/InfoBox";
import SprintGoalCard from "../common/cards/sprintGoalCard";
import RetroActionsCard from '../common/cards/retroActionsCard';
import DodCard from '../common/cards/dodCard';
import DorCard from '../common/cards/dorCard';





const Home = () => {

    //Create contents for the sprint goal info box
    

    return <Page>
    
      <SprintGoalCard/>
      <RetroActionsCard />
      <DodCard />
      <DorCard />
      <TeamMembersInfoBox/>
      
    </Page>
}

export default Home