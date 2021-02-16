import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import TeamMembers from '../data/teams'
/* STYLED COMPONENTS */
const MemberRow = styled.div`
    display: flex;
    flex-direction: row;
    border-style: solid;
    border-radius: 10px;
    border-color: black;
    border-width: 2px;
`

const Card = styled.div`
        padding: 15px;
        text-align: center;
`
/* STYLED COMPONENTS END */

const MemberCard = (m) => {
    return (
        <Card>
            <h2>{m.name}</h2>
            <h4>{m.role}</h4>
            <h4><a href={'mailto:' + m.email}>{m.email}</a></h4>
        </Card>
    );
}
const TeamMembersInfoBox = (props) => {
    return (
        <MemberRow>
            {TeamMembers.map(member => (
                <MemberCard {...member} />
            ))}
        </MemberRow>
    );
}

export default TeamMembersInfoBox