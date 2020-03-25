const router = require('koa-router')({
  prefix: '/lc'
})

const controllers = require('../controllers/index')
router.get('/index/index',  controllers.home.index) 

// 搜索相关接口
router.get('/search/indexaction', controllers.search.index.indexAction)
router.post('/search/addhistoryaction', controllers.search.index.addHistoryAction)
router.post('/search/clearhistoryAction', controllers.search.index.clearHistoryAction) // 清除搜索历史
router.get('/search/helperaction', controllers.search.index.helperAction) // 搜索提示

//详情页接口
router.get('/goods/detailaction', controllers.goods.index.detailAction)
module.exports = router