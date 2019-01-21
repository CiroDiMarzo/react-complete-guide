import React, { Component } from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 'rwe', name: 'Max', age: 28},
        { id: 'few', name: 'Manu', age: 29},
        { id: 'qwe', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    };

    console.log('[App.js] inside constructor()');
    // never reach out to a web server during the constructor execution
  }

  componentWillMount() {
      console.log('[App.js] inside componentWillMount()');
  }

  componentDidMount() {
      console.log('[App.js] inside componentDidMount()');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      p => p.id === id
    );

    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({}, this.state.persons[personIndex]);
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
    this.setState({
      showPersons: !doesShow
    });
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
      <div className={classes.App}>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler} />
        { persons }
      </div>
    );

    // return React.createElement('div', {className: 'App'}, 
    //   React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
