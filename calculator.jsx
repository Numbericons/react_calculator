import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      result: 0
    };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.calc = this.calc.bind(this);
    this.reset = this.reset.bind(this);
  };

  setNum1(e) {
    e.preventDefault();
    this.setState({num1: e.target.value})
  }

  setNum2(e) {
    e.preventDefault();
    this.setState({num2: e.target.value})
  }
  
  calc(e) {
    e.preventDefault();
    const operation = e.target.value;
    const first = parseInt(this.state.num1);
    const second = parseInt(this.state.num2);
    let opResult;
    switch (operation) {
      case "+":
        opResult = first + second;
        break;
      case "-":
        opResult = first - second;
        break;
      case "*":
        opResult = first * second;
        break;
      case "/":
        opResult = first / second;
        break;
    }
    this.setState( {result: opResult } );
  }

  reset(e) {
    this.setState( {
      num1: "",
      num2: "",
      result: 0
    })
  }

  render() {
    return (
      <div>
        Result: <h1>{this.state.result}</h1>
        <input onChange={this.setNum1} value={this.state.num1}/>
        <input onChange={this.setNum2} value={this.state.num2}/>
        <button onClick={this.calc} value="+">+</button>
        <button onClick={this.calc} value="-">-</button>
        <button onClick={this.calc} value="*">*</button>
        <button onClick={this.calc} value="/">/</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Calculator;