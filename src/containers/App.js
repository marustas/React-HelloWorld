import React from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";
import ScopeChooser from "../components/ScopeChooser/ScopeChooser";
import Counter from "../components/Counter/Counter";
import "./App.css";
import { treasures } from "./CardSet/treasures";
import { doors } from "./CardSet/doors";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            treasures: treasures,
            doors: doors,
            searchfield: '',
            scope: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    onScopeChange = (scope) => {
        this.setState({ scope: scope })
    }
    render() {
        const { treasures, searchfield, scope, doors } = this.state;
        const filteredTreasures = treasures.filter(treasure => {
            return treasure.id.toLowerCase().includes(searchfield.toLowerCase())
        })
        const filteredDoors = doors.filter(door => {
            return door.id.toLowerCase().includes(searchfield.toLowerCase())
        })

        return !treasures.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className="f1">MunchkinCards </h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Counter />
                    <ScopeChooser onScopeChange={this.onScopeChange} />
                    {scope === 'doors' ?
                        <div>
                            <Scroll>
                                <ErrorBoundary>
                                    <CardList scope={scope} cards={filteredDoors} />
                                </ErrorBoundary>
                            </Scroll>
                        </div>
                        : (scope === 'treasures' ?
                            <Scroll>
                                <ErrorBoundary>
                                    <CardList scope={scope} cards={filteredTreasures} />
                                </ErrorBoundary>
                            </Scroll>
                            : <Scroll>
                                <ErrorBoundary>
                                </ErrorBoundary>
                            </Scroll>
                        )
                    }
                </div>
            );
    }
}

export default App;