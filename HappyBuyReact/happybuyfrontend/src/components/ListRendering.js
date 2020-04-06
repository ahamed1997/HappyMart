import React from 'react'
import ChildList from '../PracticeComponents/ChildList'

function ListRendering() {
    //First type of rendering
    // const names = ['Tom','Jerry']
    // return (
    //     <div>
    //         {        
    //             names.map(name => <h1>{name}</h1>)
                
    //         }
    //     </div>
    // )


    //Second type of rendering
    //const names = ['Ton','jerry']
    // const nameList = names.map(name=><h1>{name}</h1>)
    // return <div>nameList</div>


    const nameList =[
        {
            id : 1,
            name : 'tom',
            age : 22
        },
        {
            id :2,
            name : 'jerry',
            age : 20
        }
    ]

//WITHOUT ANY KEY or INDEX
//const personList = nameList.map( (persons) =>  <ChildList persons = {persons} />    

//Listing by INDEX
//const personList = nameList.map( (persons,index) =>  <ChildList key={index} persons = {persons} />    

//Listing by Unique KEY
const personList = nameList.map( (persons) =>  <ChildList key={persons.id} persons = {persons} />    
    )
    return (
        <div>
            {        
               personList
                
            }
        </div>
    )
}

export default ListRendering
