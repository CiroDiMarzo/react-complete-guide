import React, { Component } from 'react';
import withClass from '../../../hoc/withClass';
import Aux from "../../../hoc/Auxiliary";
import classes from "./Person.css";
import PropTypes from "prop-types";

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor()');
        this.inputElelement = React.createRef();
    }

    componentWillMount = () => {
        console.log('[Person.js] inside componentWillMount()');
    }
  
    componentDidMount = () => {
        console.log('[Person.js] inside componentDidMount()');
        
        if (this.props.position === 1) {
            this.inputElelement.focus();   
        }
    }

    render = () => {
        console.log('[Person.js] inside render()');
        return ( 
            <Aux>
                <p onClick={() => this.props.click(this.props.keyValue)}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElelement}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
