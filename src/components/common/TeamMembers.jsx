import React from 'react';

export default function TeamMembers(props) {
    return (
        <div>
            <div>{props.members.name}</div>
            <div>{props.members.email}</div>
            <div>{props.members.role}</div>
        </div>
    )
}