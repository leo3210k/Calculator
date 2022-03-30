import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import './Calculator.css';

import Display from '../components/Display';
import Button from '../components/Button';

const initialState = {
    values: [0, 0],
    display: '0',
    operation: '',
    current: 0
}

export default class Calculator extends Component {
    state = { ...initialState }

    constructor(props) {
        super(props)

        this.updateDisplay = this.updateDisplay.bind(this)
    }

    clearDisplay() {
        console.log('teste')
    }

    updateDisplay(element) {
        const number = element.target.innerHTML

        // if(this.state.display == '0') this.clearDisplay
        if(this.state.display == '0') {
            this.setState({ display: number }) 
        } else {
            this.setState({ display: this.state.display + number })
        }
    }

    setOperation(operation) {

    }
    
    render() {
        return(
            <div class="calculator">
                <Display display={this.state.display}/>
                <Button value="%" click={this.updateDisplay}/>
                <Button value="CE" click={this.updateDisplay}/>
                <Button value="C" click={this.updateDisplay}/>
                <Button value={<FontAwesomeIcon icon="fa-solid fa-delete-left" />} click={this.updateDisplay}/>
                <Button value="1/x" font_operation/>
                <Button value="x²" font_operation/>
                <Button value="²√x" click={this.clearDisplay}/>
                <Button value="/" click={this.setOperation}/>
                <Button value="7" click={this.updateDisplay}/>
                <Button value="8" click={this.updateDisplay}/>
                <Button value="9" click={this.updateDisplay}/>
                <Button value="X" click={this.setOperation}/>
                <Button value="4" click={this.updateDisplay}/>
                <Button value="5" click={this.updateDisplay}/>
                <Button value="6" click={this.updateDisplay}/>
                <Button value="-" click={this.setOperation}/>
                <Button value="1" click={this.updateDisplay}/>
                <Button value="2" click={this.updateDisplay}/>
                <Button value="3" click={this.updateDisplay}/>
                <Button value="+" click={this.setOperation}/>
                <Button value="+" click={this.updateDisplay}/>
                <Button value="0" click={this.updateDisplay}/>
                <Button value="," click={this.updateDisplay}/>
                <Button value="=" click={this.setOperation} blue/>
            </div>
        )
    }
}