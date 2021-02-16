import React from 'react'
import { media } from "../../styles/theme"
import styled from "styled-components"
import { Page } from "../common/Page"
import InfoBox from "../common/InfoBox";
import TeamMembers from '../common/TeamMembers';
import TeamBox from "../common/TeamBox";
import EventBox from "../common/EventBox";
import SprintGoalCard from "../common/cards/sprintGoalCard";
import RetroActionsCard from '../common/cards/retroActionsCard';
import DodCard from '../common/cards/dodCard';
import DorCard from '../common/cards/dorCard';
import information from '../../resources/data/information.json'




const Home = () => {

    //Create contents for the sprint goal info box
    const info = information
    

    return <Page>
    
      <RetroActionsCard info={info}/>

      
    </Page>
}

export default Home