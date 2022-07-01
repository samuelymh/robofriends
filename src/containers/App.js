import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField } from '../actions';

// This is a standard naming, but u can name it wtv.
const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

// dispatch is what triggers the action
const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value))
    }
}

function App(props) {
    // useState hook
    // Array destruturing. useState returns a pair.
    // Naming convention is [stateVariable, setStateVariable]
    // Parameter of useState is default value of stateVariable
    const [robots, setRobots] = useState([]);


    // useEffect hook - gets called after each render.
    // useEffect hook is a combo of componentDidMount, componentDidUpdate, and componentWillUpdate
    useEffect(() => {
        // ajax request using fetch api which returns a promise
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)})
            .catch(err => console.log(err, ": Error in ajax request."))
    }, []);
    // Second parameter basically tells useEffect to be called only when one of the objects in array
    // has changed. So everytime an empty array is changed (which is never), useEffect gets called.
    // This is a shortcut way to making componentDidMount.
    // TL;DR we only want useEffect to fetch when it FIRST renders (componentDidMount).

    const { searchField, onSearchChange } = props;
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

// connect is a higher order function which returns another function,
// hence the weird syntax below.
// This is how we make App subscribe and listen to any changes that happens
// in the redux store.
export default connect(mapStateToProps, mapDispatchToProps)(App);