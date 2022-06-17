import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    // lifecycle method
    // similar to try-catch block in js
    componentDidCatch(error, info){
        this.setState({ hasError: true });
    }

    render(){
        if(this.state.hasError){
            return <h1>Oops. That's not good</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;