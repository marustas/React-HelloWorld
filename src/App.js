import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";

// class sytax for SMART components with STATE
class App extends React.Component { 
    //Making a STATE instead of PROPS
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({robots: users }))
}
onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
}
    render () {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
                })
                if(this.state.robots.length === 0){
                    return <h1>Loading</h1>
                }else{
                    return(
                        <div className='tc'>
                            <h1 className="f1">RoboFriends</h1>
                            <SearchBox searchChange={this.onSearchChange}/>
                            <CardList robots ={filteredRobots}/>
                        </div>
                    );
                }

    }
}

export default App;