const express = require('express')
const router = express.Router();

var index = (res, req, next) => {
    console.log('首页')
    next()
}
router.use('/',index);//这里等效于router.use(index);因为'/'等效于''

module.exports = router;

