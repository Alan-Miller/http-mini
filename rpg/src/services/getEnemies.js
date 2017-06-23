import axios from 'axios';
import {turnApiObjIntoArray} from '../components/turnApiObjIntoArray';

export function getEnemies() {
  return axios.get('http://localhost:3005/db')
  .then(res => {
    return turnApiObjIntoArray(res.data)
  })
}
