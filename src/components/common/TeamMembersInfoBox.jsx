import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

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

    const [members, setNames] = useState([ 
        { 
            id: 1, 
            name:'Jess Torri', 
            role: 'Scrum Master',
            email: 'jess.tori@and.digital',
            imgurl: '../../assets/pigeon-placeholder-img.jpg' 
        }, 
        { 
            id: 2,
            name: 'Marissa Epstein',
            role: 'Developer',
            email: 'marissa.epstein@and.digital',
            imgurl: '../../assets/pigeon-placeholder-img.jpg' 
        }
        , 
        { 
            id: 3,
            name: 'Ryan Gilbert',
            role: 'Developer',
            email: 'ryan.gilbert@and.digital',
            imgurl: '../../assets/pigeon-placeholder-img.jpg' 
        },
        {
            id: 5,
            name: 'Bronte Hampton',
            role: 'Developer',
            email: 'bronte.hampton@and.digital',
            imgurl: '../../assets/pigeon-placeholder-img.jpg' 
        },
        { 
            id: 1, 
            name:'Yna Ramos', 
            role: 'Developer',
            email: 'yna.ramos@and.digital',
            imgurl: '../../assets/pigeon-placeholder-img.jpg' 
        }, 
        {
            id: 6,
            name: 'Sam West',
            role: 'Developer',
            email: 'sam.west@and.digital',
            imgurl: '../../assets/pigeon-placeholder-img.jpg' 
        }
    ]);

    return (
        <MemberRow>
            {members.map(member => (
                <MemberCard {...member} />
            ))}
        </MemberRow>
    );
}

export default TeamMembersInfoBox