import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
   <>
     <div className='col-md-2'>
   <div className='menu'>

    <ul>

        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Shorts">Shorts</Link></li>
        <li><Link to="/Subscriptions">Subscriptions</Link></li>
        <li><Link to="/Music">Music</Link></li>
        <li><Link to="/Gaming">Gaming</Link></li>
        <li><Link to="/MoviesShows">Movies & Shows</Link></li>
    </ul>


   </div>
    

     </div>
    
   </>
  )
}