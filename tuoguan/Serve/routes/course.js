var express = require('express');
var router = express.Router();
let linkSql=require('../sql/linkSql')
let fs=require('fs')
/* GET users listing. */
router.post('/upVideo', function(req, res, next) {
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
});

router.post('/createCourse', function(req, res, next) {
    let courseId=req.body.courseId
    let name=req.body.name
    let sql=`INSERT INTO tbl_course(courseId,name) values ( ${courseId},"${name}")`
    linkSql(sql,r=>{
        res.send(r);
    })
});
router.post('/createVideo', function(req, res, next) {
    let courseId=req.body.courseId
    let videoId=req.body.videoId
    let index=req.body.index
    let videoName=req.body.videoName
    let videoPath=req.body.videoPath
    let sql=`INSERT INTO tbl_video(courseId,videoId,indexs,videoName,videoPath) values ( ${courseId},"${videoId}",${index},"${videoName}","${videoPath}")`
    linkSql(sql,r=>{
        res.send(r);
    })
});

router.post('/getCourse', function(req, res, next) {
    let sql=`SELECT * FROM  tbl_course`
    linkSql(sql,r=>{
        res.send(r);
    })
});

router.post('/getVideo', function(req, res, next) {
    let courseId=req.body.courseId
    let sql=`SELECT * FROM  tbl_video where courseId = ${courseId}`
    linkSql(sql,r=>{
        res.send(r);
    })
});

router.post('/updateVideo', function(req, res, next) {
    let courseId=req.body.courseId
    let videoId=req.body.videoId
    let index=req.body.index
    let videoName=req.body.videoName
    let videoPath=req.body.videoPath
    let sql=`UPDATE tbl_video SET videoId="${videoId}" ,indexs="${index}" ,videoName="${videoName}" ,videoPath="${videoPath}" where courseId=${courseId}`
    linkSql(sql,r=>{
        res.send(r);
    })
});

router.post('/updateCourse', function(req, res, next) {
    let courseId=req.body.courseId
    let name=req.body.name
    let sql=`UPDATE tbl_course SET name="${name}" where courseId=${courseId}`
    linkSql(sql,r=>{
        res.send(r);
    })
});

router.get('/getVideos', function(req, res, next) {
    let path = "./public/uploads/" + req.query.videoPath
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
        let file = fs.createReadStream(path, {start, end,});
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
        fs.createReadStream(path, {encoding: 'base64'}).pipe(res);
    }
})

router.post('/createNews', function(req, res, next) {
    let newId=req.body.newId
    let newName=req.body.newName
    let videoPath=req.body.videoPath
    let pdfPath=req.body.pdfPath
    let sql=`INSERT INTO tbl_news(newId,newName,videoPath,pdfPath) values (${newId},"${newName}","${videoPath}","${pdfPath}")`
    linkSql(sql,r=>{
        res.send(r);
    })
});

router.post('/getNews', function(req, res, next) {

    let sql=`select * from tbl_news`
    linkSql(sql,r=>{
        res.send(r);
    })
});
router.post('/deNews', function(req, res, next) {
    let newId=req.body.newId
    let sql=`DELETE FROM  tbl_news where newId=${newId}`
    linkSql(sql,r=>{
        res.send(r);
    })
});

router.get('/getPdf', function(req, res, next) {
    console.log(req.query.pdfPath)
    let path="./public/uploads/"+req.query.pdfPath
    var content = fs.readFileSync(path,"binary");
    res.writeHead(200, "Ok");
    res.write(content,"binary"); //格式必须为 binary，否则会出错
    res.end();
});





module.exports = router;
