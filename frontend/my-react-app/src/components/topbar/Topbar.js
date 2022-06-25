import React from 'react';

import "./topbar.css";



export default function Topbar() {

         return (

                  
              <div className="topbarContainer">

              <div className='topbarLeft'>
               
                <span className='logo'>Facebook</span>

              </div>

              <div className='topbarCenter'>

                <div className='searchbar'></div>
                    
                  
                     <input placeholder='search for friend' className='searchInput'/>

                     <button>Search</button>

              </div>

              <div className='topbarRight'>

                   <div className='topbarLinks'>


                         
                      <div className='topbarLinks'>

                        <span className='topbarLinks'>Homepage</span>
                        <span className='topbarLinks'>Timeline</span>




                      </div>




                   

                   </div>

                        


              </div>

                 <img src='/assets/1.jpeg' alt='' className='topbarImg'/>




       </div>



         )




}
