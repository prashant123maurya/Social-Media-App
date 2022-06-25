import React from 'react';

import "./share.css";









export default function Share() {



    return (


        <div className='share'>

            <div className='shareWrapper'>


                <div className='shareTop'>

                    <img src='/assets/1.jpeg' className='shareProfileImg' />

                    <input placeholder="What's in your mind ?" className='shareInput' />


                </div>

                <hr className='shareHr' />

                <div className='shareBottom'>


                    <div className='shareOptions'></div>


                    <div className='shareOption'>


                        <span className='shareOptionText'>Photo or Video</span>


                    </div>


                    <div className='shareOption'>


                        <span className='shareOptionText'>Tag</span>


                    </div>


                    <div className='shareOption'>


                        <span className='shareOptionText'>Location</span>


                    </div>

                    <div className='shareOption'>


                        <span className='shareOptionText'>Feelings</span>


                    </div>


                    <button className='shareButton'> Share</button>


                </div>

               



            </div>




        </div>








    )








}
