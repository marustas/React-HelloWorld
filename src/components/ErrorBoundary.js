import React from "react";
class ErrorBoundary extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
hasError : true
    }
    }

componentDidCatch(error, info){
this.setState({hasError : false})
}

    render(){
        return !this.state.hasError ? 
        <h1>Ooops. That is not good</h1> :
        this.props.children
    }
}

export default ErrorBoundary;