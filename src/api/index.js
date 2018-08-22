const axios = require('axios')
/**
 * @param  {function} callback
 */
export function getCity (type, callback) {
  axios({
    method: 'get',
    url: 'api/v1/cities',
    params: {
      type: type
    }
  })
    .then(res => {
      callback(res)
    })
    .catch(err => {
      callback(err)
    })
}
export function getCheckCode (callback) {
  axios({
    method: 'post',
    url: 'api/v1/captchas',
  })
    .then(res => {
      callback(res)
    })
    .catch(err => {
      callback(err)
    })
}
export function login (data, callback) {
  axios({
    method: 'get',
    url: 'api/v2/login',
    params: data
  })
    .then(res => {
      callback(res)
    })
    .catch(err => {
      callback(err)
    })
}