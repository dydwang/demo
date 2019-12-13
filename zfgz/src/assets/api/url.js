const env=process.env.NODE_ENV  //判断模式
 /**
  * @development 本地开发模式
  * @production  服务器生产模式
  */

const developmentNode='http://localhost:3000/' //本地NODE
const productionNode='http://47.106.248.148:3000/' //服务器NODE

const developmentPHP= 'http://192.168.2.177:8088/GZZFGZ/'    //'http://192.168.2.177:8088/GZZFGZ/' //本地PHP
const productionPHP='http://47.106.248.148/GZZFGZ/' //服务器PHP

export const nodeUrl = env==='development'?developmentNode:productionNode //node默认路径，
export const phpUrl=env==='development'?developmentPHP:productionPHP //php默认路径，