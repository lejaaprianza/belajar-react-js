import React from 'react'
import Person from './Person'

function NameList() {
    const person = [
        {
            id: 1,
            name: 'abdi'
        },
        {
            id: 2,
            name: 'budi'
        }
    ]
    // const names = ['budi','abdi', 'loki']
    const personList = person.map(person =><Person person={person}/>)
    return (
        <div>
            {
                personList
            }
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
        </div>
    )
}

export default NameList
