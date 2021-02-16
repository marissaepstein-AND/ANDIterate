import React from 'react'
import styled, {withTheme} from "styled-components"
import { Page } from "../common/Page"
import { getCompilerHooks } from 'webpack-manifest-plugin'


const Title = styled.div`
    font-size: 2rem;
    color: ${p => p.theme.colors.primaryBlue}; 
`

const Heading = styled.h2`
    color: ${p => p.theme.colors.primaryRed};
`;

const ScrumInfo = () => {
    
    return <Page>
        <Title>Scrum Hints & Tips</Title>
        <Heading>What is a sprint?</Heading>
        <Heading>Who is on a scrum team?</Heading>
        <Heading>Sprint Ceremonies </Heading>
        </Page>
}

export default withTheme(ScrumInfo)