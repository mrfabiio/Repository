import React, { useState,useEffect } from 'react'
import {ListRepositories} from '../api/github'
import Item from '../component/Item';

function Repositories () {
    const [data, setData] = useState([]);
    useEffect(() => {
        ListRepositories()
            .then(data => {
                setData(data);
          })
    },[])

    return (
        <ul>
            {data.map(item => <Item key={item.id} {...item}/>)}
        </ul>
    )   
}

/*class Repositories extends Component{
  constructor(props){
    super(props);
      this.state={
        data:[]
      }  
  }
  componentDidMount(){
    ListRepositories()
    .then(({data}) => {
        this.setState({data})
      })
  }
  render(){
    const {data} = this.state
    return (
      <div className="App">
        <ul>
          {data.map(item => <Item {...item}/>)}
        </ul>
      </div>
    );
  }
}*/
export default Repositories
