import React from 'react'
import { media } from "../../theme"
import styled from "styled-components"
import { Page } from "../common/Page"
import InfoBox from "../common/InfoBox";


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
    </Page>
}

export default Home