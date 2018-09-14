import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = () =>{
    return(
        <nav>
            <NavLink to="/">Game</NavLink>
            <NavLink to="/ranking">Ranking</NavLink>
        </nav>
    );
};

export default Navigation;