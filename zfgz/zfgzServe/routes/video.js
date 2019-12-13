var express = require('express');
var router = express.Router();
let video = require("../api/video")


/* GET users listing. */
router.post('/createVideo', function(req, res, next) {
    video.createVideo(req, res, next)
});

router.get('/getVideo', function(req, res, next) {
    video.getVideo(req, res, next)
});

router.get('/getImg', function(req, res, next) {
    video.getImg(req, res, next)
});

router.get('/getPdf', function(req, res, next) {
    video.getPdf(req, res, next)
});


module.exports = router;
