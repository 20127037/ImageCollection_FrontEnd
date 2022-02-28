import React from "react"

const HeartButton = ({handleHeartButton,numOfClick,iconLink}) => {
     return (
          <div style={{
               background: `url(${iconLink})`, 
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center center',
               backgroundSize: '100%',
               height: '100px', 
               width: '96px'
               }} 
               onClick={handleHeartButton}>
                    <p style={{margin:'0 20% 0 80%'}}> {numOfClick} </p>
          </div>
          
     )
}

export default HeartButton