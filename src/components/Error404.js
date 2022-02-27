import React from 'react';
import img from '../assets/images/error-web.jpg'

function Error404() {
    return (
    <div>
         <img src={ img }></img>
         <h1 style={{textAlign: "center"}}>404 page not found</h1>
    </div>
    )
}
export default Error404