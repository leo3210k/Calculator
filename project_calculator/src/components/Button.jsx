import React from 'react';
import './Button.css';

export default props => {
    let classes = 'button ' 
    classes += props.blue ? ' button-blue' : ''

    return <button onClick={props.click} className={classes}>{ props.value }</button>
}
