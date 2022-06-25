import React from "react";
import Topbar from '../../components/topbar/Topbar';

import Sidebar from "../../components/sidebar/Sidebar";

import Rightbar from "../../components/rightbar/Rightbar";

import Feed from "../../components/feed/Feed";


import "./profile.css";


export default function Profie() {

    return (

        <>

            <Topbar />


            <div className="profile">


                <Sidebar />

                <div className="profileRight">

                    <div className="profileRightTop">


                        <div className="profileCover">


                            <img className="profileCoverImg" src="assets/g.jpeg" alt="" />

                            <img className="profileUserImg" src="assets/7.jpeg" alt="" />



                        </div>

                       <div className="profileInfo">

                         <h4 className="profileInfoName">Safak Korlugu</h4>

                         <span className="profileInfoDesc">Hello my friends</span>




                       </div>





                    </div>

                    <div className="profileRightBottom">



                        <Feed />


                        <Rightbar profile/>




                    </div>





                </div>








            </div>













        </>






    )








}