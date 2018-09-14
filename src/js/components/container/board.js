import React from "react";
import PropTypes from "prop-types";
const Boards = () => {
    // const Boards = ({ display, handleDisplayState }) => {

    let boardArray = [];
    let spaceBoardDiv = <Board space={"cell cell-space"} top={200} left={200}/>;
    boardArray.push(spaceBoardDiv);
    let topArray =[0,0,0,100,100,100,200,200];
    let leftArray =[0,100,200,0,100,200,0,100];
    for(let i = 0; i<9 ; i ++){
        let boardDiv = <Board number={i} top={topArray[i]} left={leftArray[i]}/>;
        boardArray.push(boardDiv);
    }
        
    return <div className="board board-disabled">
        {boardArray}
    </div>;
};
Boards.propTypes = {
    display: PropTypes.string.isRequired,
    handleDisplayState: PropTypes.func.isRequired
};

const Board = (props) => (
    <div className={`${props.space} cell`} style={`left: ${props.left}px; top: ${props.top}px;`}>
        {props.number}
    </div>
);

export default Boards;

