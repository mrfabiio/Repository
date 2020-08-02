import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';

class MyButton extends Component{
  render(){
    return (
      <button
        onClick={()=> {this.props.handleClick(this.props.label);}}
  > 
    {this.props.label}
    </button>
    );
  }
}
class MyLabel extends Component{
  render(){
    return <p>Clique no: {this.props.text}</p>
  }
}
class App extends Component {
  constructor (props){
    super (props);
    
    this.state={      
    labelText:'',
    };
  }  
      setlabelText =(labelText) =>{
        this.setState({labelText})     
    }
  render() {
    console.log(this.state);
    return (
    <div className="App">
    <MyLabel text={this.state.labelText}/>
    <MyButton handleClick={this.setlabelText} label="Botão1"/>
    <MyButton handleClick={this.setlabelText} label="Botão2"/>
    <MyButton handleClick={this.setlabelText} label="botão3"/>
    <MyButton handleClick={this.setlabelText} label="botão4"/>
    </div>
    );
  }
}     
export default App;
