import React, { Component } from 'react'

class Counter extends React.Component {
    state = {
        value: this.props.value
    };

    handleIncrement = product => {
        console.log(product);
        this.setState({ value: this.state.value + 1 }) // makes react look for changes in state.
    }

    render() {
        console.log('props', this.props)
        return (<div>
            {this.props.children}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
                onClick={() => this.handleIncrement({ id: 1 })}
                className="btn btn-secondary btn-sm"
            >
                Increment
            </button>
        </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? 'Zero' : count;
    };
}

export default Counter;