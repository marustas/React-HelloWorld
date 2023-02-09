import React from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

// class sytax for SMART components with STATE
class App extends React.Component { 
    //Making a STATE instead of PROPS
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield1: '',
            searchfield2: ''
        }
    }
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({robots: users }))
}
onSearchChange = (event) => {
    this.setState({searchfield1: event.target.value, searchfield2: event.target.value})
}
    render () {
        const {robots, searchfield1, searchfield2} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield1.toLowerCase()) ||
            robot.email.toLowerCase().includes(searchfield2.toLowerCase())
                })
                return !robots.length ? 
                <h1>Loading</h1> :
                (
                        <div className='tc'>
                            <h1 className="f1">RoboFriends</h1>
                            <SearchBox searchChange={this.onSearchChange}/>
                            <Scroll>
                                <ErrorBoundary>
                            <CardList robots ={filteredRobots}/>
                            </ErrorBoundary>
                            </Scroll>
                        </div>
                );
    }
}

export default App;