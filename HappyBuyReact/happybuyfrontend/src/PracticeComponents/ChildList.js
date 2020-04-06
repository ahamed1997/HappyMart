import React from 'react'

function ChildList({persons}) {
    return (
        <div>
            {
                <h2>
                Id : {persons.id} Name : {persons.name}  Age : {persons.age}

                </h2>
            }
        </div>
    )
}

export default ChildList
