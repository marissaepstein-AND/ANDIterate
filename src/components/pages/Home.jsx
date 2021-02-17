import React, {useState} from 'react'
import { media } from "../../styles/theme"
import styled from "styled-components"
import TeamMembersInfoBox from "../common/TeamMembersInfoBox"
import { Page } from "../common/Page"
import InfoBox from "../common/InfoBox";
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

`

const RightContainer = styled.div`
    width: 100%; 

    ${media.tablet`
     width: 50%;
     display: flex; 
     flex-direction: column;
`}
`

const Top = styled.div`
    display: flex;
    flex-direction: column;

    ${media.mobileLarge`
        flex-direction: row;
    `}
`



const Home = () => {



    const [showModal, setShowModal] = useState(false)
        const [info,setInfo] = useState(null)
        const openModal = (id) => {
          let filteredInfo = information.find(x => {
            return x.id == id
          })
          setInfo(filteredInfo)
          setShowModal(prev => !prev)
        } 

    return <Page>
        <Modal showModal={showModal} setShowModal={setShowModal} info={info} />
        <LeftContainer>
            <EventCard />
            <SprintGoalCard openModal={(id) => openModal(id)}/>
        </LeftContainer>
        <RightContainer>
            <Top>
            <DodCard openModal={(id) => openModal(id)}/>
            <DorCard openModal={(id) => openModal(id)}/>
            </Top>

            <RetroActionsCard openModal={(id) => openModal(id)}/>

      </RightContainer>
      <TeamMembersInfoBox/>
    </Page>
}

export default Home