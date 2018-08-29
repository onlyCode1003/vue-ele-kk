import { getStore } from 'common/js/util'
const axios = require('axios')
/**
 * 获取城市列表
 * @param  {func} callback
 */
export function getCity(type, callback) {
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
/**
 * 获取验证码
 * @param {func} callback 
 */
export function getCheckCode(callback) {
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
/**
 * login
 * @param {json} data 
 * @param {*} callback 
 */
export function login(data, callback) {
  axios({
    method: 'post',
    url: 'api/v2/login',
    data: data
  })
    .then(res => {
      callback(res)
    })
    .catch(err => {
      callback(err)
    })
}
/**
 * 获取用户信息
 */
export function getUser() {
  let userId = getStore('user_id')
  if (!userId) return
  return axios({
    method: 'get',
    url: 'api/v1/user?user_id=' + userId
  })
}
/**
 * 获取个人中心地址列表
 * @param {String} userId 
 */
export function getAddressList(userId) {
  return axios({
    method: 'get',
    url: '/v1/users/' + userId + '/addresses'
  })
}
/**
 * 获取城市信息
 * @param {String} id 
 * @param {func} callback 
 */
export function getCityById(id, callback) {
  axios({
    method: 'get',
    url: 'api/v1/cities/' + id,
  })
    .then(res => {
      callback(res)
    })
    .catch(err => {
      callback(err)
    })
}
/**
 * 根据经纬度获取位置信息
 * @param {String} geohash 
 * @param {func} callback 
 */
export function getPosByGeohash(geohash, callback) {
  axios({
    method: 'get',
    url: 'api/v2/pois/' + geohash,
  })
    .then(res => {
      callback(res)
    })
    .catch(err => {
      callback(err)
    })
}
/**
 * 获取食品类型
 */
export function getFoodType() {
  return axios({
    method: 'get',
    url: 'api/v2/index_entry',
  })
}
/**
 * 搜索
 * @param {json} data 
 * @param {func} callback 
 */
export function searchByKeyword(data, callback) {
  axios({
    method: 'get',
    url: 'api/v1/pois',
    params: data
  })
    .then(res => {
      callback(res)
    })
    .catch(err => {
      callback(err)
    })
}
/**
 * 获取商铺列表
 * @param  {json} data
 * @param  {func} callback
 */
export function getShopList(data, callback) {
  let config = {
    latitude: data.latitude,
    longitude: data.longitude
  }
  axios({
    method: 'get',
    url: 'api/shopping/restaurants',
    params: config
  })
    .then(res => {
      callback(res)
    })
    .catch(err => {
      callback(err)
    })
}

export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
  let supportStr = '';
  support_ids.forEach(item => {
    if (item.status) {
      supportStr += '&support_ids[]=' + item.id;
    }
  });
  let data = {
    latitude,
    longitude,
    offset,
    limit: '20',
    'extras[]': 'activities',
    keyword: '',
    restaurant_category_id,
    'restaurant_category_ids[]': restaurant_category_ids,
    order_by,
    'delivery_mode[]': delivery_mode + supportStr
  };
  return fetch('/shopping/restaurants', data);
};