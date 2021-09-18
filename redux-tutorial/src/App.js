import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  };
  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  };
   render (){
     return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <input onChange={this.onUpdateUser}/>
      {this.props.user};
    </div>
    )
  };
}

const mapStateProps = (state,props) =>{
  
  return {
    products: state.products,
    user: state.user,
    userPlusProp: '${state.user} ${props.aRandomProps}'
  }
  
};

const mapActionsToProps = (dispatch,props) =>{
  console.log(props);
  return bindActionCreators({
    onUpdateUser: updateUser
  },dispatch);
};

const mergeProps =(propsFromState,propsFromDispatch,ownProps) => {
  console.log(propsFromState,propsFromDispatch,ownProps)
  return {};
}

export default connect(mapStateProps,mapActionsToProps,mergeProps)(App);
