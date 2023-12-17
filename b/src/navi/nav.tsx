


import React from 'react';
import styles from  './nav.module.css';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
     <nav className={styles.navigation}>
        
                 
     <div className="logo">   
                 <img src="/image/logo.png" alt="logo" />
             </div>
             <div className="links">
                 <ul>
                     <li><Link to ="/">Home</Link></li>
                     <li><Link to ="/About_game">Rules</Link></li>
                     <li><Link to ="/About_Baghchal">Baghchal</Link></li>
                 </ul>
             </div>
             
             
     
             {/* container */}
            
            
 
            
         </nav>
         </>
   
  )
}

export default Header;




