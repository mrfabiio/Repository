import React,{Component} from 'react';
import Repositories from './container/Repositories';
class App extends Component{
  render(){
    return(
    <div className = "App">
      <ul>
        <Repositories/>
      </ul>
    </div>
    )
  }
}
export default App;



