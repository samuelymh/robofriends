import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';


// Smart components typically have class syntax and have state
class App extends Component {
    // Constructor to store our states(2, robots and searchField).
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
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

        if (this.state.robots.length === 0){
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;