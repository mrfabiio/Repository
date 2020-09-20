import React,{Component} from 'react';
import {ListRepositories} from '../api/github'
import Item from '../component/Item'
class Repositories extends Component{
  constructor(props){
    super(props);
    this.state= {
      data:[]
    }
  }
  componentDidMount(){
    ListRepositories()
    .then(data => {
      this.setState({data})
    })       
  }
  render(){
    const {data} = this.state
    return(
    <div className = "App">
      <ul>
        {data.map(item => <Item {...item}/>)}
      </ul>
    </div>
    )
  }
}
//top
export default Repositories;



