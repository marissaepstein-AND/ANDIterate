import { white } from 'material-ui/styles/colors';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import styled from 'styled-components'
import TeamMembers from '../../resources/data/teams'
import { SvgIcon } from 'material-ui';

/* STYLED COMPONENTS */
const Card = styled.div`
    padding: 20px;
    text-align: center;
    ${props => props};
`
const MailButton = styled.button`
    border-color: ${props => props.theme.colors.secondaryPurple}
`
const MemberDetailsRow = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    ${props => props};
`

const MemberDetails = styled.div`
    padding: 5px 20px 10px 10px;
`

const MemberImage = styled.img`
    border-radius: 50%;
    height: 200px;
    width: 200px;
    ${props => props};
`
const MemberName = styled.h2`
    background-color: ${p => p.theme.colors.secondaryPurple};
    color: white;
    margin: 1rem 0;
    padding: 0.5rem;
    ${props => props};
`

const MemberRole = styled.h4`
    color: ${p => p.theme.colors.secondaryPurple};
    
`

const TitleBox = styled.div`
    border-bottom: solid;
    border-radius: 16px 16px 0 0;
    color: ${p => p.theme.colors.secondaryPurple};
    font-size: 1rem;
    padding: 0 1rem;
    ${props => props};
`

const Wrapper = styled.div`
    border-color: ${p => p.theme.colors.secondaryPurple};
    border-radius: 20px;
    border-style: solid;
    box-shadow: 0 4px 2px -1px #c1c1c1;
    margin: 1.5rem 1rem;
    ${props => props};
`
/* STYLED COMPONENTS END */

const carouselProps = {
    "autoPlay" : false,
    "navButtonsAlwaysVisible" : true,
}

const MemberCard = (m) => {
    const mailText = "Mail " + m.name
    return (
        <Card>
            <MemberDetailsRow>
                <MemberDetails>
                    <MemberImage src={m.photo} />
                </MemberDetails>
                <MemberDetails>
                    <MemberName>{m.name}</MemberName>
                    <MemberRole>{m.role}</MemberRole>
                    <a title={mailText} href={"mailto:" + m.email} target="_blank"><MailOutlineIcon></MailOutlineIcon></a>
                </MemberDetails>
            </MemberDetailsRow>
        </Card>
    );
}
const TeamMembersInfoBox = (props) => {
    const [members, setMembers] = useState(TeamMembers)

    return (
        <Wrapper>
            <TitleBox><h1>Members of your Scrum Team</h1></TitleBox>
            <Carousel {...carouselProps}>
                {members.map(member => (
                    <MemberCard {...member} />
                ))}
            </Carousel>
        </Wrapper>
    );
}

export default TeamMembersInfoBox