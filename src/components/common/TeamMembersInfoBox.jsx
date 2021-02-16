import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import TeamMembers from '../data/teams'

/* STYLED COMPONENTS */
const Card = styled.div`
    padding: 30px;
    text-align: center;
    ${props => props};
`

const MemberImage = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    ${props => props};
`
const MemberRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    border-color: ${p => p.theme.colors.secondaryPurple};
    box-shadow: 0 4px 2px -1px #c1c1c1;
    border-radius: 20px;
    ${props => props};
`
const TitleBox = styled.div`
    font-size: 1rem;
    background-color: ${p => p.theme.colors.secondaryPurple};
    border-radius: 16px 16px 0 0;
    padding: 0 1rem;
    color: white;
    ${props => props};
`
/* STYLED COMPONENTS END */


const MemberCard = (m) => {

    return (
        <Card>
            <MemberImage src={m.photo} />
            <h2>{m.name}</h2>
            <h4>{m.role}</h4>
            <h4><a href={'mailto:' + m.email}>{m.email}</a></h4>
        </Card>
    );
}
const TeamMembersInfoBox = (props) => {
    const [members, setMembers] = useState(TeamMembers)

    return (
        <div>
            <TitleBox><h1>Members of your Scrum Team</h1></TitleBox>
            <MemberRow>
                {members.map(member => (
                    <MemberCard {...member} />
                ))}
            </MemberRow>
        </div>
    );
}

export default TeamMembersInfoBox