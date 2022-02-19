import React from 'react';
import './Button.css';

export default props => 
    <button onClick={props.click} class="button">{ props.value }</button>
