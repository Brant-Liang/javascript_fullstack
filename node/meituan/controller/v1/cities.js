import BaseClass from '../../prototype/baseClass'
class Cities extends BaseClass{
  constructor() {
    super();
    this.suggestion = this.suggestion.bind(this);
  }
  async suggestion(req, res, err) {
    let { keyword } = req.query;
    if (!keyword) {
      // 参数校验
      res.send({
        state: -1,
        message: '参数错误'
      })
      return;
    }
    try {
      // 数据库， 网络 处理
      let data = await this.locationSearch(keyword)
      res.send({
        state: 200,
        message: '获取位置成功',
        data
      })
    } catch(e) {
      res.send({
        state: -1,
        message: '获取位置失败',
        data
      })
    }
  }
}

export default new Cities();