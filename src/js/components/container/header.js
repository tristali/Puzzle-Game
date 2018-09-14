import React from "react";

class Header extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <header>
                <div className="name">
                    <input type="text" placeholder="Enter Name" value="" />
                </div>
                <div className="menu">
                    <button disabled="">Start Game</button>
                </div>
            </header>
        );
    }
}
export default Header;