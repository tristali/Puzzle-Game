import React, { Component } from "react";
import ReactDOM from "react-dom";

const Ranking = () =>{
    return(
        <main>
            <div className="list">
                <div className="rank rank-head">
                    <div className="number">Ranking</div>
                    <div className="name">Name</div>
                    <div className="step">Steps</div>
                </div>
                <div className="rank">
                    <div className="number">1.</div>
                    <div className="name">name</div>
                    <div className="step">1</div>
                </div>
            </div>
        </main>
    );
};

export default Ranking;
