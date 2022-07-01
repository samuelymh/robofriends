import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


function App() {
    // useState hook
    // Array destruturing. useState returns a pair.
    // Naming convention is [stateVariable, setStateVariable]
    // Parameter of useState is default value of stateVariable
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    // useEffect hook - gets called after each render.
    // useEffect hook is a combo of componentDidMount, componentDidUpdate, and componentWillUpdate
    useEffect(() => {
        // ajax request using fetch api which returns a promise
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)})
            .catch(err => console.log(err, ": Error in ajax request."))
        // console.log(robots, searchField);
    }, []);
    // Second parameter basically tells useEffect to be called only when one of the objects in array
    // has changed. So everytime an empty array is changed (which is never), useEffect gets called.
    // This is a shortcut way to making componentDidMount.
    // TL;DR we only want useEffect to fetch when it FIRST renders (componentDidMount).

    // We use arrow functions to ensure that 'this' reference to this parent object
    // and not from where it was called from.
    const onSearchChange = event => {
        console.log(event.target.value); // Inputted data
        // We do this everytime we want to change state. setState() 
        // this.setState({ searchField: event.target.value });

        setSearchField(event.target.value);
    }

    // const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (!robots.length){
        return <h1>Loading...</h1>
    } else {
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
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

export default App;