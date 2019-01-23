import React from 'react';
import classes from './Card.css'

const card = (props) => {
    return (
        <div onClick={props.click} className={classes.card}>
            <p>{props.title}</p>
        </div>
    )
}

export default React.memo(card);