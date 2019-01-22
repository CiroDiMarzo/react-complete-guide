import React from "react";
import classes from './Cockpit.css'
import Aux from "../../hoc/Auxiliary";

const cockpit = (props) => {

    const assignedClasses = [];
    let buttonClass = [classes.Button];

    if (props.showPersons) {
        buttonClass = [classes.Button, classes.Red];
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                onClick={props.clicked}
                className={buttonClass.join(' ')}>
                Toggle Persons
            </button>
            <button 
                onClick={props.addClicked}
                className={buttonClass.join(' ')}>
                Add Person
            </button>
        </Aux>
    );
};

export default cockpit;