import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';


class App extends Component {
    // Constructor to store our states(2, robots and searchField).
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    // We use arrow functions to ensure that 'this' reference to this parent object
    // and not from where it was called from.
    onSearchChange = event => {
        console.log(event.target.value); // Inputted data
        // We do this everytime we want to change state. setState() 
        this.setState({ searchField: event.target.value });
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;