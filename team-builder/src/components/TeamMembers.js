import React from 'react'

export default function TeamMembers(props){
    return(
        <div>
            <h2>{props.teamMember.name}</h2>
            <p>{props.teamMember.email}</p>
            <p>{props.teamMember.role}</p>
        </div>
    )
}