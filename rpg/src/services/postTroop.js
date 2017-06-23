import axios from 'axios';

export function postTroop(type) {
  console.log('type of recruit', type);
  return axios.post('http://localhost:3005/defenses/', {type: type})
  .then(res => {
    console.log('res.data', res.data);
    return res.data
  })
}
