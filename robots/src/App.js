import React, {Component} from "react";
import CardList from "./components/CardList";
import {robots} from "./robots";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots:  [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
        if (this.state.robots.length === 0){
            return <h1>CARGANDO</h1>
        } else {
            return (
                <div className={"tc"}>
                    <h1>Robo Amigos</h1>
                    <SearchBox
                        searchChange={this.onSearchChange}
                    />
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;