import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { updateUser,apiRequest } from './actions/user-actions';
import {createSelector} from 'reselect';

class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  };
  componentDidMount(){
    setTimeout(()=>{
      this.props.onApiRequest();
    },1500)
  }

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

const mapStateProps = createSelector(
  state => state.products,
  state=> state.user,
  (products, user) => ({
    products,
    user
  })
);

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
};



export default connect(mapStateProps,mapActionsToProps)(App);
