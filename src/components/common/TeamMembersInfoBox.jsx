import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import TeamMembers from '../data/teams'

/* STYLED COMPONENTS */
const Card = styled.div`
    padding: 30px;
    text-align: center;
`

const MemberImage = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
`
const MemberRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    border-style: solid;
    border-radius: 20px;
    border-color: ${p => p.theme.colors.secondaryPurple};
    border-width: 2px;
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
        <MemberRow>
            {members.map(member => (
                <MemberCard {...member} />
            ))}
        </MemberRow>
    );
}

export default TeamMembersInfoBox