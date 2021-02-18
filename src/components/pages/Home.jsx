import React, {useState} from 'react'
import { media } from "../../styles/theme"
import styled from "styled-components"
import TeamMembersInfoBox from "../common/TeamMembersInfoBox"
import { Page } from "../common/Page"
import SprintGoalCard from "../common/cards/sprintGoalCard";
import RetroActionsCard from '../common/cards/retroActionsCard';
import DodCard from '../common/cards/dodCard';
import DorCard from '../common/cards/dorCard';
import information from '../../resources/data/information.json';
import Modal from "../common/modal";
import EventCard from "../common/cards/SprintEvent"

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

const HeaderWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    margin: 0 auto;
    padding: 1rem;
    min-height: -webkit-fill-available;
`;

const Title = styled.div`
    font-size: 4rem;
    color: ${p => p.theme.colors.primaryDarkGrey}; 
    font-family: Poppins;
    font-weight: bold;
`;

const SprintNo = styled.h2`
    font-family: Poppins, sans-serif;
    color: ${p => p.theme.colors.primaryDarkGrey};
    font-size: 2em;
`;

const Home = () => {



    const [showModal, setShowModal] = useState(false)
        const [info,setInfo] = useState(null)
        const openModal = (details) => {
          let filteredInfo = information.find(x => {
            return x.id == details.id
          })
          setInfo({"color":details.color,"info":filteredInfo})
          setShowModal(prev => !prev)
        } 

    return <Page>
      <Modal showModal={showModal} setShowModal={setShowModal} info={info} />
      <LeftContainer>
        <HeaderWrapper>
            <Title>Agile ANDi's</Title>
            <SprintNo>Sprint 1 (15/02/21 - 19/02/21)</SprintNo>
        </HeaderWrapper>
            <EventCard openModal={(details) => openModal(details)}/>
            <SprintGoalCard openModal={(details) => openModal(details)}/>
            <TeamMembersInfoBox />
        </LeftContainer>
        <RightContainer>
            <Top>
                <DorCard openModal={(details) => openModal(details)}/>
                <DodCard openModal={(details) => openModal(details)}/>
            </Top>
            <RetroActionsCard openModal={(details) => openModal(details)}/>
      </RightContainer>
    </Page>
}

export default Home;
