import React from 'react'
import { Tooltip } from '@material-ui/core';

function Image({match}) {      
  switch(match){
    case 1:
        return ( <div>  <img top  height="100%" width="100%" src={ require('../images/samsungm31.jpg')} />   </div>)
    case 2:
        return ( <div> <img top  height="100%" width="100%" src={ require('../images/note8pro.jpg')} />   </div>)
    case 3:
        return ( <div> <img top width="100%" src={ require('../images/hp.jpg')} />   </div>)
    case 4:
            return ( <div> <img top width="100%" src={ require('../images/mac.jpg')} />   </div>)
    case 5:
        return ( <div> <img top width="100%" src={ require('../images/miled.jpg')} />   </div>)
    case 6:
        return ( <div> <img top width="100%" src={ require('../images/oneplustv.jpg')} />   </div>)
    case 7:
        return ( <div> <img top width="100%" src={ require('../images/boat.jpg')} />   </div>)
    case 8:
        return ( <div> <img top width="100%" src={ require('../images/jbl.jpeg')} />   </div>)
    case 9:
        return ( <div> <img top width="100%" src={ require('../images/canon.jpg')} />   </div>)
    case 10:
        return ( <div> <img top height="100%" width="100%" src={ require('../images/sony.jpg')} />   </div>)
    case 11:
        return ( <div> <img top width="100%" src={ require('../images/hp2.jpg')} />   </div>)
    case 12:
        return ( <div> <img top width="100%" src={ require('../images/lg.jpg')} />   </div>)
    case 13:
        return ( <div> <img top width="100%" src={ require('../images/acer.jpg')} />   </div>)
    case 14:
        return ( <div> <img  top  height="100%" width="100%"  src={ require('../images/rings.jpg')} />   </div>)
    default:
        return ( <div> <img top width="100%" src={ require('../images/logo1.jpg')} />   </div>) 
  }
   
}

export default Image
