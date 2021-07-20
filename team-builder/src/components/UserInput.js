import React, {useState} from 'react'

export default function UserInput({team, setTeam}) {

    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [role, setRole]=useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        let newMember = { name, email, role}
        addToTeam(newMember)
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' name='name' onChange={(event)=>{setName(event.target.value) }} value={name} />
                <input type='text' name='email' onChange={(event)=>{setEmail(event.target.value) }} value={email} />
                <select id='role' name='role' onChange={(event)=>{setRole(event.target.value)}} value={role}>
                <option value=''>-- Select a Role --</option>
                <option value='Student'>Student</option>
                <option value='TL'>Team Lead</option>
                <option value='Instructor'>Instructor</option>
                <option value='Alumni'>Alumni</option>
                </select>
                <input type='submit' value='Submit' />
            </div>
        </form>
    )
}
