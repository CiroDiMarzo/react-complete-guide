import React, { Component } from "react";
import classes from './Cockpit.css'
import Aux from "../../hoc/Auxiliary";
import AuthContext from "../../auth-context";

class Cockpit extends Component 
{
    static contextType = AuthContext;

    render() {
        const assignedClasses = [];
        let buttonClass = [classes.Button];
    
        if (this.props.showPersons) {
            buttonClass = [classes.Button, classes.Red];
        }
    
        if (this.props.persons.length <= 2) {
          assignedClasses.push(classes.red);
        }
        
        if (this.props.persons.length <= 1) {
          assignedClasses.push(classes.bold);
        }
    
        return (
            <Aux>
                <h1>{this.props.appTitle}</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button 
                    onClick={this.props.clicked}
                    className={buttonClass.join(' ')}>
                    Toggle Persons
                </button>
                        {
                            this.context.isAuth 
                            ? (<button className={buttonClass.join(' ')} onClick={this.context.toggleAuth}>Logout</button>)
                            : (<button className={buttonClass.join(' ')} onClick={this.context.toggleAuth}>Login</button>)
                        }
                <button 
                    onClick={this.props.addClicked}
                    className={buttonClass.join(' ')}>
                    Add Person
                </button>
            </Aux>
        );
    }
}


export default Cockpit;