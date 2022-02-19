import React, { Component } from 'react';
import './Calculator.css';

import Display from '../components/Display';
import Button from '../components/Button';

const initialState = {
    values: [],
    display: 1,
    operation: '',
}

export default class Calculator extends Component {
    state = { ...initialState }

    teste() {
        console.log('teste')
    }
    
    render() {
        return(
            <div class="calculator">
                <Display display={this.state.display}/>
                <Button value=""/>
                <Button value={this.state.display}/>
                <Button click={this.teste} value="Aqui"/>
                <Button value="/"/>
                <Button value="7"/>
                <Button value="8"/>
                <Button value="9"/>
                <Button value="*"/>
                <Button value="4"/>
                <Button value="5"/>
                <Button value="6"/>
                <Button value="-"/>
                <Button value="1"/>
                <Button value="2"/>
                <Button value="3"/>
                <Button value="+"/>
                <Button value="+"/>
                <Button value="0"/>
                <Button value=","/>
                <Button value="="/>
            </div>
        )
    }
}