import React from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";
import { treasures } from "./treasures";

// class sytax for SMART components with STATE
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            treasures: treasures,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const { treasures, searchfield } = this.state;
        const filteredCards = treasures.filter(treasure => {
            return treasure.id.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !treasures.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className="f1">MunchkinCards </h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList treasures={filteredCards} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default App;