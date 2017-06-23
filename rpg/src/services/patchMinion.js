import axios from 'axios';

export function patchMinion(id) {
  return axios.patch('http://localhost:3005/barbarian/minions/' + id, {type: "frog"})
  .then(res => {
    return res.data
  })
}
