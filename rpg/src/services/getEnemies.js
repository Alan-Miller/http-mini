import axios from 'axios';

export function getEnemies() {
  return axios.get('http://localhost:3005/db')
  .then(res => {
    console.log('res', res);
    return res.data
  })
}
