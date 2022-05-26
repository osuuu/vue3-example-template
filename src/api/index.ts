
import request from '@/utils/request'

/**
 * 登录
 */
 export function login(data:object) {
  return request({
    url: '/api/AccountClass/login',
    method: 'post',
    data
  })
}










