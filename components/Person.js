import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>{person.name}, dengan id : {person.id}</h2>
        </div>
    )
}

export default Person
