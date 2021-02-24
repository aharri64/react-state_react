import React, { Component } from "react" // class-based components


class Person extends Component {
    state = {
        cupsOfWater:0
    }

    increaseWater = () => {
        this.setState({
            cupsOfWater: this.state.cupsOfWater + 1
        })
    }

    render() {
        return (
            <div>
                <h2>Water Tracker</h2>
                <p>Current cups of water I have had {this.state.cupsOfWater}</p>
                <button onClick={this.increaseWater}>Drink water</button>

            </div>
        )
    }
}

export default Person;

