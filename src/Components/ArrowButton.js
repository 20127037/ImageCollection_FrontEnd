import React from "react"

const ArrowButton = ({handleArrowButton, iconLink}) => {
     return (
          <img 
               alt='Icon'
               src= {iconLink}
               style = { {
                    height: '50px',
                    width: '50px',
                    margin: '0px 2px 0px 2px'
               } }
               onClick = {handleArrowButton}
          />
     )
}

export default ArrowButton