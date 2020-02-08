import serveUrl from './url'
import dydUtil from './axios'
let util=new dydUtil(serveUrl).util


import user from './api/user'
import login from './api/login'
import school from './api/school'
import pay from './api/pay'
import course from './api/course'

let api= Object.assign(
    user,
    login,
    school,
    pay,
    course
)

export {
    util,
    api
}