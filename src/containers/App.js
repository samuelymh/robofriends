import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
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
        // ajax request using fetch api which returns a promise
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    // We use arrow functions to ensure that 'this' reference to this parent object
    // and not from where it was called from.
    onSearchChange = event => {
        console.log(event.target.value); // Inputted data
        // We do this everytime we want to change state. setState() 
        this.setState({ searchField: event.target.value });
    }

    render(){
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name
                    .toLowerCase()
                    .includes(searchField.toLowerCase());
        });

        if (!robots.length){
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            {/* Catches any error that occurs in CardList */}
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;