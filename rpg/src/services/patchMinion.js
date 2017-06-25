import axios from 'axios';

export function patchMinion(enemy, minionId) {
  return axios.patch('http://localhost:3005/' + enemy + '/minions/' + minionId, {type: "frog"})
  .then(res => {
    return res.data
  })
}
