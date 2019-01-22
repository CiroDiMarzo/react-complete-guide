import React, { Component } from 'react';
import Person from "./Person/Person";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import classes from './Persons.css';

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
    return (
        <TransitionGroup>
            {this.props.persons.map((person, index) => {
            return (
                <CSSTransition 
                    key={person.id}
                    timeout={400}
                    classNames={{
                        enter: classes.personEnter,
                        enterActive: classes.personEnterActive,
                        exit: classes.personExit,
                        exitActive: classes.personExitActive
                    }}
                    onEnter={() => console.log('--onEnter')}
                    onEntering={() => console.log('--onEntering')}
                    onEntered={() => console.log('--onEntered')}>
                    <Person 
                        click={(key) => this.props.clicked(key)}
                        name={person.name}
                        age={person.age}
                        keyValue={person.id}
                        position={index}
                        changed={(event) => this.props.changed(event, person.id)} />
                </CSSTransition>
            );
        })}
        </TransitionGroup>
      )
    }
}

export default Persons;