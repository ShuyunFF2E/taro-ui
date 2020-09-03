const API_PREFIX = '/mall-c/1.0';

module.exports = router => {

  /**
   * 主页配置数据信息
   */
  router.get(`${API_PREFIX}/index`, (req, res) => {
    res.json({
      code: 200,
      data: [
      {
        type: "name",
        value: "张三"
      },
      {
        type: "sex",
        value: "男"
      }
    ]});
  });

};
