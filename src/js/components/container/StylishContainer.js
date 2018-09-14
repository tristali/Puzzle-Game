import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
// import Header from "../presentational/header";
import Footer from "../presentational/footer";
class StylishContainer extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    {/* <Header /> */}
                    <Switch>
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}
export default StylishContainer;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<StylishContainer />, wrapper) : false;