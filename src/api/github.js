import axios from 'axios'
export const ListRepositories = () => axios
    .get('https://api.github.com/repositories')
        .then(({data}) => data)

export const getRepository = (owner, name) => axios
    .get(`https://api.github.com/repos/${owner}/${name}`)
        .then(({data}) => data)
