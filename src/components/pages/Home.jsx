import React from 'react'
import { media } from "../../theme"
import styled from "styled-components"
import { Page } from "../common/Page"


const Title = styled.div`
    font-size: 2rem; 
`

const Home = () => {

    return <Page><Title>Hello</Title></Page>
}

export default Home