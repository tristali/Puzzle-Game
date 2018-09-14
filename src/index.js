// import StylishContainer from "./js/components/container/StylishContainer";
import "./css/style.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./js/components/home";
import Ranking from "./js/components/ranking";
import Navigation from "./js/components/navigation";

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/ranking" component={Ranking} exact/>
                    </Switch>
                </div>    
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
