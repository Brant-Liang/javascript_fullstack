const router = require('koa-router')({
  prefix: '/lc'
})

const controllers = require('../controllers/index')
router.get('/index/index',  controllers.home.index) 


module.exports = router