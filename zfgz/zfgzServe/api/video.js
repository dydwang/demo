
const request = require('request');
const fs = require('fs');
let api={}
api.createVideo=function(req, res, next) {
    if (req.file) {
        //console.log(req.file)
        fs.stat(`./public/uploads/${req.file.filename}`, (err, stats) => {
            if(stats.size===req.file.size){
                console.log(req.file.filename)
                res.send(req.file.filename)
            }else{
                //删除文件  923a2db205cc06fefb7b8c3ff944edde
            }
        })
    }
}
//telnet 20e2f4a536-xgn21.cn-shenzhen.nas.aliyuncs.com 445
api.getVideo=function(req, res, next) {
    let path="./public/uploads/"+req.query.videoPath
    let stat = fs.statSync(path);
    let fileSize = stat.size;
    let range = req.headers.range;
    if (range) {
        //有range头才使用206状态码
        console.log("zl")
        let parts = range.replace(/bytes=/, "").split("-");
        let start = parseInt(parts[0], 10);
        let end = parts[1] ? parseInt(parts[1], 10) : start + 999999;

        // end 在最后取值为 fileSize - 1
        end = end > fileSize - 1 ? fileSize - 1 : end;

        let chunksize = (end - start) + 1;
        let file = fs.createReadStream(path, { start, end, });
        let head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        let head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(path,{encoding:'base64'}).pipe(res);
    }
}

api.getImg=function(req, res, next) {
    console.log(req.query.imagePath)
    let path="./public/uploads/"+req.query.imagePath
    var content = fs.readFileSync(path,"binary");
    res.writeHead(200, "Ok");
    res.write(content,"binary"); //格式必须为 binary，否则会出错
    res.end();
}

api.getPdf=function(req, res, next) {
    console.log(req.query.pdfPath)
    let path="./public/uploads/"+req.query.pdfPath
    var content = fs.readFileSync(path,"binary");
    res.writeHead(200, "Ok");
    res.write(content,"binary"); //格式必须为 binary，否则会出错
    res.end();
}
module.exports =api