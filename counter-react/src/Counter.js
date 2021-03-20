import React, {Component} from "react";
import "./App.css";

class Counter extends Component{
    state = {
        count: 0
    };

    incrementButton = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    resetButton = () => {
        this.setState({
            count: 0
        });
    }

    render() {
        return (
            <div>
                <h1 className="count">{this.state.count}</h1>
                <button className="incrementButton" onClick={this.incrementButton}>Increment Button</button>
                <button className="resetButton" onClick={this.resetButton}>RESET</button>
            </div>
        );
    }
}

export default Counter;