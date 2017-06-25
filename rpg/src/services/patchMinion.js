import axios from 'axios';

export function patchMinion(shortname, id) {
  return axios.patch('http://localhost:3005/' + shortname + '/minions/' + id, {type: "frog"})
  .then(res => {
    return res.status
  })
}
