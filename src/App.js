import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robot";

class App extends React.Component { 
    //Making a STATE instead of PROPS
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
}
    render () {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
                })
        return(
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots ={filteredRobots}/>
            </div>
        );
    }
}

export default App;