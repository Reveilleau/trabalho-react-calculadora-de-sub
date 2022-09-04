import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      score: '',
      subSelect: 'G1',
      subLabel: 'G2',
      resultado: null
    }
  }

  onInputChanged(event) {
    this.setState({
      [event.target.name]: event.target.value
    })

    if (event.target.name === 'subSelect') {
      if (event.target.value === 'G1') {
        this.setState({
          subLabel: 'G2',
          resultado: ''
        })
       
      } else {
        this.setState({
          subLabel: 'G1',
          resultado: ''
        })  
      }
    } 
  
  }

  scoreCalculate() {
    let result;
    let resultScore
    const {score, subSelect, subLabel} = this.state;

    if (subSelect === 'G1') {
      resultScore = 21 - (score *2)
      result = `Sua nota na sub ${subLabel} deverá ser ${resultScore}`
    } else {
      resultScore = (21 - score) / 2
      result = `Sua nota na sub ${subLabel} deverá ser ${resultScore}`
    }

    this.setState({ resultado: result })
  }

  render() {
    return(
      <div>
        <h1>Calculadora de Sub<h1/>
        <br/>
        <input type='radio' name='subSelect' value="G1" checked={this.state.subSelect === 'G1'} onChange={event => this.onInputChanged(event)}/> Sub G1
        <input type='radio' name='subSelect' value="G2" checked={this.state.subSelect === 'G2'} onChange={event => this.onInputChanged(event)}/> Sub G2
        <br/>
        <br/>
        Nota {this.state.subLabel}:
        <br/>
        <input type='number' name='score' onChange={event => this.onInputChanged(event)}/>
        <br/>
        <input type='button' name='calculate' value='Calculate' onClick={() => this.scoreCalculate()}/>
        <br/>
        <br/>
        {this.state.resultado}
        <br/>

      </div>
    )
  }

}

export default App;
