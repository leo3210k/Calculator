import React, { useState } from 'react';
import './Calculator.css';

import Display from '../components/Display';
import Button from '../components/Button';

export default function Calculator() {
    const [values, setValues] = useState([])
    const [display, setDisplay] = useState('0')
    const [operation, setOperation] = useState('')
    const [current, setCurrent] = useState(0)

    function updateDisplay(element) {
        const number = element.target.innerHTML

        if(display == '0') {
            setDisplay(number)
        } else {
            setDisplay(display + number)
        }
    }
    
    return(
        <div class="calculator">
            <Display display={display}/>
            <Button value="%" click={updateDisplay}/>
            <Button value="CE" click={updateDisplay}/>
            <Button value="C" click={updateDisplay}/>
            <Button value="Apagar" click={updateDisplay}/>
            <Button value="1/x"/>
            <Button value="x²"/>
            <Button value="²√x" click={setDisplay('0')}/>
            <Button value="/" click={setOperation}/>
            <Button value="7" click={updateDisplay}/>
            <Button value="8" click={updateDisplay}/>
            <Button value="9" click={updateDisplay}/>
            <Button value="X" click={setOperation}/>
            <Button value="4" click={updateDisplay}/>
            <Button value="5" click={updateDisplay}/>
            <Button value="6" click={updateDisplay}/>
            <Button value="-" click={setOperation}/>
            <Button value="1" click={updateDisplay}/>
            <Button value="2" click={updateDisplay}/>
            <Button value="3" click={updateDisplay}/>
            <Button value="+" click={setOperation}/>
            <Button value="+" click={updateDisplay}/>
            <Button value="0" click={updateDisplay}/>
            <Button value="," click={updateDisplay}/>
            <Button value="=" click={setOperation} blue/>
        </div>
    )
}