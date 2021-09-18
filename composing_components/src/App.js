import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from "./components/counters";

class App extends React.Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    };

    constructor(){//this method can be called only when a componet is rendered and placed into the DOM
        super();
        console.log('App - Constructor');
    }

    componentDidMount(){//this method is called after the component is rendered into the DOM
        // perfect for Ajax calls
        console.log('App - Mounted');
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };
    render() {
        console.log("App-Rendered");
        return <React.Fragment>
            <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />;
            <main className="container">
                <Counters
                    counters={this.state.counters}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDelete={this.handleDelete}
                />
            </main>
        </React.Fragment>
    }
}

export default App;