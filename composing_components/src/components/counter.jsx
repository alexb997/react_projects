import React, { Component } from 'react'

class Counter extends React.Component {
    // using controlled component. (it doesn't has it's own local storage, it gets data from it's parent component)

    componentDidUpdate(prevProps,prevState){
        //used to compare the new state with old state, or new props with old props. Even a ajax request to get new data from server.
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);
        // if(prevProps.counter.value !== this.props.counter.value){
        //     //here we can decide if to make a ajax call based on the changes on props and state objects.
        // }
    }

    render() {
        console.log('Counter-Rendered');
        return (<div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
                onClick={() => this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm m-2"
            >
                Increment
            </button>
            <button
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger btn-sm m-2"
            >
                Delete
            </button>
        </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    };
}

export default Counter;