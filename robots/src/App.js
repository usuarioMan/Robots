import React, {Component} from "react";
import CardList from "./components/CardList";
import {robots} from "./robots";
import SearchBox from "./components/SearchBox";


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });

        return (
            <div className={"tc"}>
                <h1>Robo Amigos</h1>
                <SearchBox
                    searchChange={this.onSearchChange}
                />
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;