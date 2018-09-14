import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Boards from "./container/board";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:"",
            ready: false,
            circle:0,
            locationMarks:[0,1,2,3,4,5,6,7,8],
            locationX:[0,1,2,0,1,2,0,1,2],
            locationY:[0,0,0,1,1,1,2,2,2],
            number:[0,1,2,3,4,5,6,7,8],
            canMove:[[1,3],[0,2,4],[1,5],[0,4,6],[1,3,5,7],[2,4,8],[3,7],[4,6,8],[5,7]],
            space:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleStartGame = this.handleStartGame.bind(this);
        this.handleMove = this.handleMove.bind(this);
        this.checkState = this.checkState.bind(this);
    }
    checkState(){
        const startButton = document.querySelector(".menu>button");
        startButton.disabled=true;
    }
    handleChange(e){
        const startButton = document.querySelector(".menu>button");
        this.setState({value: e.currentTarget.value});
        if(this.state.value.trim === ""){
            this.setState({ready: false});
            startButton.disabled=true;
        } else if(this.state.value.trim){
            this.setState({ready: true});
            startButton.disabled=false;
        }
    }
    handleStartGame(e){
        const boardDiv = document.querySelector(".board");
        const nameInput = document.querySelector(".name>input");
        nameInput.readOnly=true;
        boardDiv.classList.remove("board-disabled");
    
        function randomSort(arr, newArr) { // 如果原数组arr的length值等于1时，原数组只有一个值，其键值为0 // 同时将这个值push到新数组newArr中 
            if(arr.length == 1) { 
                newArr.push(arr[0]); 
                return newArr; // 相当于递归退出 
            } // 在原数组length基础上取出一个随机数 
            var random = Math.ceil(Math.random() * arr.length) - 1; // 将原数组中的随机一个值push到新数组newArr中 
            newArr.push(arr[random]); // 对应删除原数组arr的对应数组项 
            arr.splice(random,1); 
            return randomSort(arr, newArr); 
        }
        var arr=[1,2,3,4,5,6,7,8,0]; 
        var newArr=[]; 
        randomSort(arr,newArr); 
        this.setState({number:newArr});
        this.setState({space:newArr.indexOf(0)});
    }
    handleMove(e){
        let newNumber = [];
        let canMoveLocation = this.state.canMove[e.currentTarget.id];
        canMoveLocation.forEach(i => {
            if(i == this.state.space){

                let nowSpaceLoaction = this.state.space;
                let spaceNumber = 0;

                let nowMoveNumberLoaction = e.currentTarget.id;
                let moveNumber = parseInt(e.currentTarget.textContent);

                for(let i =0; i<this.state.number.length;i++){
                    newNumber.push(parseInt(this.state.number[i]));
                }

                newNumber.splice(nowSpaceLoaction,1,moveNumber);
                newNumber.splice(nowMoveNumberLoaction,1,spaceNumber);
                this.setState({number:newNumber});

                let currentState = this.state.circle;
                currentState +=1;
                this.setState({circle:currentState});
                this.setState({space:e.currentTarget.id});

                if(this.state.locationMarks[0] == this.state.number[0] && 
                    this.state.locationMarks[1] == this.state.number[1] && 
                    this.state.locationMarks[2] == this.state.number[2] && 
                    this.state.locationMarks[3] == this.state.number[3] && 
                    this.state.locationMarks[4] == this.state.number[4] && 
                    this.state.locationMarks[5] == this.state.number[5] && 
                    this.state.locationMarks[6] == this.state.number[6] && 
                    this.state.locationMarks[7] == this.state.number[7] && 
                    this.state.locationMarks[8] == this.state.number[8]){
                    alert("K.O");
                }
            }
        });
    }
    render() {
        return (
            <main onClick={this.checkState}>
                <header>
                    <div className="name">
                        <input type="text" placeholder="Enter Name" value={this.state.value}  onChange={this.handleChange}/>
                    </div>
                    <div className="menu">
                        <button onClick={this.handleStartGame}>Start Game</button>
                    </div>
                </header>
                <div className="step">Step Count: {this.state.circle}</div>
                <Boards 
                    locationMarks={this.state.locationMarks} 
                    locationX={this.state.locationX} 
                    locationY={this.state.locationY}
                    number={this.state.number}
                    handleMove={this.handleMove}
                />
            </main>
        );
    }
}
export default Game;

const Boards = ({locationMarks,locationX,locationY,number,handleMove}) => {

    let boardArray = [];
    for(let i = 0; i<locationMarks.length ; i ++){
        let boardDiv = 
        <Board key={locationMarks[i]} 
            locationMarks={locationMarks[i]} 
            number={number[i]} 
            top={locationY[i]*100} 
            left={locationX[i]*100}
            handleMove={handleMove}
        />;
        boardArray.push(boardDiv);
    }

    return <div className="board board-disabled">
        {boardArray}
    </div>;
};

const Board = (props) => (
    <div className = {`cell number${props.number}`} 
        style={{left:`${props.left}px`,top:`${props.top}px`}} 
        id={props.locationMarks} 
        onClick={props.handleMove}
    >
        {props.number}
    </div>
);