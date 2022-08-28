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
        this.setState({subLabel: 'G2'})
      } else {
        this.setState({subLabel: 'G1'})
      }
    } 
  
  }

  render() {
    return(
      <div>
        <input type='radio' name='subSelect' value="G1" checked={this.state.subSelect === 'G1'} onChange={event => this.onInputChanged(event)}/> Sub G1
        <input type='radio' name='subSelect' value="G2" checked={this.state.subSelect === 'G2'} onChange={event => this.onInputChanged(event)}/> Sub G2
        <br/>
        <br/>
        Nota {this.state.subLabel}:


      </div>
    )
  }

}

export default App;
