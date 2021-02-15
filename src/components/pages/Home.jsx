import React from 'react'
import { media } from "../../theme"
import styled from "styled-components"
import TeamMembersInfoBox from "../common/TeamMembersInfoBox"
import { Page } from "../common/Page"


const Title = styled.div`
    font-size: 2rem; 
`


const Home = () => {
    return (
        <Page>
            <Title>Hello</Title>
            <TeamMembersInfoBox/>
        </Page> 
    )
    
}

export default Home