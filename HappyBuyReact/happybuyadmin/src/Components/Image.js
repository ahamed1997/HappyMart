import React from 'react'

function Image() {
   const handleChange = (e) =>{
    console.log(e.target.files)
    }
    return (
        <div>
            <input multiple={true} type="file" onChange={handleChange}/>
        </div>
    )
}

export default Image
