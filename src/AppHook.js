import { useState } from "react";

const AppHook = () => {
    const [score, setScore] = useState('')
    const [subSelect, setSubselect] = useState('G1')
    const [subLabel, setSublabel] = useState('G2')
    const [result, setResult] = useState('')
    const [scoreCalculated, setScoreCalculated] = useState('')

    const changeLabel = (event) => {
        if (event === 'G1') {
            setSubselect('G1')
            setSublabel('G2')
        } else {
            setSubselect('G2')
            setSublabel('G1')
        }
        setResult('')
    }

    const calculate = () => {
        if (subSelect === 'G1') {
            setScoreCalculated(21 - (score *2))
            setResult(`Sua nota na sub ${subLabel} deverá ser ${scoreCalculated}`)
        } else {
            setScoreCalculated((21 - score) / 2)
            setResult(`Sua nota na sub ${subLabel} deverá ser ${scoreCalculated}`)
        }
    }

    return (
        <div>
            <h1> Calculadora de Sub </h1>

            <input type='radio' name='subSelect' value="G1" checked={subSelect === 'G1'} onChange={event => changeLabel(event.target.value)}/> Sub G1
            <input type='radio' name='subSelect' value="G2" checked={subSelect === 'G2'} onChange={event => changeLabel(event.target.value)}/> Sub G2
            <br/>
            <br/>
            Nota {subLabel}:
            <br/>
            <input type='number' name='score' onChange={event => setScore(event.target.value)}/>
            <br/>
            <input type='button' name='calculate' value='Calculate' onClick={calculate}/>
            <br/>
            
            {result}
        </div>
    )
}

export default AppHook