import React, { Component } from 'react';
import classes from './App.css';
import Person from "../components/Persons/Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 'rwe', name: 'Max', age: 28},
      { id: 'few', name: 'Manu', age: 29},
      { id: 'qwe', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

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

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
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
    let persons = null;
    let buttonClass = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person 
                  click={this.deletePersonHandler.bind(this, index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />)
            })
          }
        </div>
      );
      buttonClass = classes.Red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    let className = assignedClasses.join(' ');

    return (
      <div className={classes.App}>
        <h1>Hi I'm a react app</h1>
        <p className={className}>This is really working!</p>
        <button 
          onClick={this.togglePersonsHandler}
          className={buttonClass}>
          Toggle Persons
        </button>
        { persons }
      </div>
    );

    // return React.createElement('div', {className: 'App'}, 
    //   React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
