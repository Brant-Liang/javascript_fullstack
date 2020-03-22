const { mysql } = require('../../mysql')

module.exports = async (ctx) => {
  //轮播图
  const banner = await mysql('nideshop_ad').where({
    ad_position_id: 1
  }).select()
  // tab类型
  const channel = await mysql('nideshop_channel').select()

  // 品牌列表
  const brandList = await mysql('nideshop_brand')
  ctx.body = {
    banner,
    channel,
    brandList
  }
}