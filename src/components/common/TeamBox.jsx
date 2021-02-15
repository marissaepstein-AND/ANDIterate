import React from 'react';
import Teams from '../data/teams.js';
import TeamMembers from './TeamMembers';

export default function TeamBox() {
    const teamMembers = Teams.map(members => <TeamMembers key={members.id} members={members} />)
    return (
        <div>
            {teamMembers}
        </div>)
}
