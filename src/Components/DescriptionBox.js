import React from "react"

const DescriptionBox = ({myDescription}) => {
     return (
          <p style = { {margin:'7%', overflowY: 'scroll', maxWidth:'50vw',  maxHeight:'65%'} }>
               {myDescription}
          </p>
     )
}

export default DescriptionBox