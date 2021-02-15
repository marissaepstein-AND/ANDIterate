import React from 'react'
import { media } from "../../styles/theme"
import styled, {withTheme} from "styled-components"
import { Page } from "../common/Page"
import { getCompilerHooks } from 'webpack-manifest-plugin'


const Title = styled.div`
    font-size: 2rem;
    color: ${props => props.color = "#2897FF"}; 
`

const Heading = styled.h2`
    color: ${props => props.theme.primaryRed};
`;

const ScrumInfo = () => {

    return <Page>
        <Title>Scrum Hints & Tips</Title>
        <Heading>What is a sprint?</Heading>
        <Heading color="#FF323C" >Who is on a scrum team?</Heading>
        <Heading>Sprint Ceremonies </Heading>
        </Page>
}

export default withTheme(ScrumInfo)