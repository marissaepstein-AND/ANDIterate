import React from 'react';
import styled, {withTheme} from "styled-components";
import { Page } from "../common/Page";
import ScrumRoles from "../../layouts/ScrumRoles";
import SprintCeremonies from "../../layouts/SprintCeremonies";
import ScrumPillars from "../../layouts/ScrumPillars";
import ScrumValues from "../../layouts/ScrumValues";

const ContentWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    margin: 0 auto;
    padding: 1rem;
    min-height: -webkit-fill-available;
`;

const Title = styled.div`
    font-size: 4rem;
    color: ${p => p.theme.colors.primaryBlue}; 
    text-align: center;
    font-family: Poppins;
    font-weight: bold;
`;

const Heading = styled.h2`
    color: ${p => p.theme.colors.primaryRed};
`;

const ScrumInfo = () => {
    
    return <Page>
        <ContentWrapper>
            <Title>Scrum Hints & Tips</Title>
            <ScrumRoles />
            <SprintCeremonies />
            <ScrumPillars />
            <ScrumValues />
        </ContentWrapper>
    </Page>
}

export default withTheme(ScrumInfo);
