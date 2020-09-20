import axios from 'axios'
export const ListRepositories = () => 
    axios.get('https://api.github.com/repositories')
    .then(({data}) => data)
//top