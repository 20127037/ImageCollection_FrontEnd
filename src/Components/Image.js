import React from "react"

const Image = ({imageURL}) => {
     return (imageURL!=='') 
     ? (
          <img 
               alt={'Picture'} 
               src={imageURL} 
               style = { {height:'100%', maxHeight:'80vh', width: 'auto', maxWidth:'30vw' } }
          />
     )
     : <p> Click the Next button to see something really special! </p>
}

export default Image