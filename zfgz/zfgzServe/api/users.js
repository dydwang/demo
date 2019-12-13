let api={}
var request = require('request');

api.getQQinfo=function(req, res, next) {
    let data=req.body
    request.get({  //获取qq信息
            url: 'https://graph.qq.com/user/get_user_info?access_token='+data.accessToken+'&oauth_consumer_key=101831906&openid='+data.openId,
        },
        function(error, response,body ) {
            if (response.statusCode === 200) {
                request.get({  //获取unionid
                        url: 'https://graph.qq.com/oauth2.0/me?access_token='+data.accessToken+'&unionid=1',
                    },
                    function(err, r,bod ) {
                    let c=JSON.parse(bod.substring(10,bod.length-3))
                        let b=JSON.parse(body)
                        b.unionid=c.unionid
                        res.send(JSON.stringify(b))
                    })
            } else {
                console.log('cw')
                res.send('error')
            }
        }
    );
}

module.exports =api