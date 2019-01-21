import React from "react";

const _withClass = (props) => {
    return (
        <div className={props.class}>
            {props.children}
        </div>
    );
}

export default _withClass;