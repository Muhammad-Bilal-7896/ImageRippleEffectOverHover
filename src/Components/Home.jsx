import React, { useState, useEffect } from "react";
//Imoprting Components
import Navbar from "./Navbar";
import Player from "./Player";
import RippleEffect from "./RippleEffect";

const Home = () => {
    return (
        <>
            <Navbar />
            <br />
            {/* <Player /> */}
            <RippleEffect/>
        </>
    )
}
export default Home;