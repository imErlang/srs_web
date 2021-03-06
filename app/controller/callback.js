'use strict';

const Controller = require('egg').Controller;

class CallbackController extends Controller {
  async on_connect() {
    const { ctx } = this;
    this.logger.info("on connect:", ctx.request.body, ctx.params);
    ctx.body = 0;
  }
}

module.exports = CallbackController;
