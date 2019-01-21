import React, { Component } from 'react';
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
      super(props);
      console.log('[Persons.js] inside constructor()');
  }

  componentWillMount() {
      console.log('[Persons.js] inside componentWillMount()');
  }

  componentDidMount() {
      console.log('[Persons.js] inside componentDidMount()');
  }

  render() {
    console.log('[Persons.js] inside render()');
    return this.props.persons.map((person) => {
        return (
          <Person 
            click={(key) => this.props.clicked(key)}
            name={person.name}
            age={person.age}
            key={person.id}
            keyValue={person.id}
            changed={(event) => this.props.changed(event, person.id)} />
        );
      })
    }
}

export default Persons;