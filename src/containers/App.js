import React, { Component } from 'react';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/Auxiliary";
import withClass from "../hoc/withClass";
import classes from "./App.css"

import Cards from "../components/Cards/Cards";

import AuthContext from '../auth-context';

class App extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 'rwe', name: 'Max', age: 28},
        { id: 'few', name: 'Manu', age: 29},
        { id: 'qwe', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClickedCounter: 0,
      authenticated: false 
    };

    // console.log('[App.js] inside constructor()');
    // never reach out to a web server during the constructor execution
  }

  componentWillMount() {
      console.log('[App.js] inside componentWillMount()');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[App.js] Inside getDerivedStateFromProps',
    nextProps,
    prevState);

    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('[App.js] Inside getSnapshotBeforeUpdate');
  }

  componentDidMount() {
    this.context.toggleAuth = this.loginHandler;
    console.log('[App.js] inside componentDidMount()');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      p => p.id === id
    );

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (id) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];

    const index = persons.findIndex(p => p.id === id);
    persons.splice(index, 1);

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClickedCounter: prevState.toggleClickedCounter + 1
      }
    });
  }

  addPersonHandler = () => {
    const personsCopy = [...this.state.persons];
    personsCopy.push({ id: 'ci' + personsCopy.length, name: 'Ciro ' + personsCopy.length, age: 36 + personsCopy.length })
    this.setState({persons : personsCopy})
  }

  loginHandler = () => {
    this.context.isAuth = !this.context.isAuth;
    this.setState({authenticated: this.context.isAuth});
  }

  render() {
    console.log('[App.js] inside render()');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler} />
      ); 
    }

    return (
      <Aux>
        <Cards></Cards>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler}
          addClicked={this.addPersonHandler} />
          { persons }
      </Aux>
    );

    // return React.createElement('div', {className: 'App'}, 
    //   React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
