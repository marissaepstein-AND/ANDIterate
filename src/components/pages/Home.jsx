import React, {useState} from 'react'
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
import information from '../../resources/data/information.json';
import Modal from "../common/modal";




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

      <RetroActionsCard openModal={(id) => openModal(id)}/>


      
    </Page>
}

export default Home