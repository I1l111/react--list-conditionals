import React, { Component } from 'react';

import Validation from "./components/Validation/Validation";
import Char from './components/Char/Char';
import './App.css';

class App extends Component {
  state = {
    text: '',
    textArr: [],
    textLength: 0,
  }

  inputChangedHandler = (event) => {
    const currentText = event.target.value;
    const currentTextArray = currentText.split('');
    const currentTextLength = event.target.value. length;

    this.setState({
      text: currentText,
      textArr: currentTextArray,
      textLength: currentTextLength,
    })
  }

  deleteCharHandler = (i) => {
    let textArr = this.state.textArr;
    textArr.splice(i, 1);
    let text = textArr.join('');
    this.setState({
      text: text,
      textArr: textArr,
      textLength: text.length
    })
  }

  render() {
    const charArray = this.state.textArr;

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <div className='container' >
          <input type='text' onChange={this.inputChangedHandler} value={this.state.text} />
          <p>Text length: {this.state.textLength}</p>
          <Validation textLength={this.state.textLength} />
          <div className='characters'>
            {
              charArray.map((char, i )=> (
                <Char
                  char={char}
                  key={char + i}
                  delete={(i) => {this.deleteCharHandler(i)}}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
