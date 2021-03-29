
class BaseMetrics {
  type = ''
  METRICS_INTERVAL = 10 * 1000;

  constructor(options) {
    this.baseOptions = options;
    this.runCollectTask();
  }

  getData() {
    return {}
  }

  getRemoteAddr() {
    let host = DEFAULT_HTTP_REQ_HOST;
    let port = DEFAULT_HTTP_REQ_PORT;

    if (this.baseOptions.isExtranet) {
      host = EXTRANET_HTTP_REQ_HOST;
      port = EXTRANET_HTTP_REQ_PORT;
    }

    if (this.baseOptions.host) {
      host = this.baseOptions.host;
    }

    if (this.baseOptions.port) {
      port = this.baseOptions.port;
    }

    return { host, port }
  }

  async reportData() {
    const data = await this.getData();
    // console.log(data);
    if (!data) {
      return;
    }

    let params;
    console.log('data', data)
    // const baseParams = {
    //   secret: this.baseOptions.secret,
    //   ip: this.baseOptions.ip,
    //   pid: this.baseOptions.pid,
    // }

    // if (Array.isArray(data)) {
    //   params = data.map(item => {
    //     return {
    //       ...baseParams,
    //       ...item,
    //       type: this.type,
    //       timestamp: Date.now(),
    //       project: this.baseOptions.project,
    //     };
    //   })
    // } else {
    //   params = {
    //     ...baseParams,
    //     ...data,
    //     type: this.type,
    //     timestamp: Date.now(),
    //     project: this.baseOptions.project,
    //   }
    // }
  }

  runCollectTask() {
    const interval = this.METRICS_INTERVAL;
    setInterval(() => {
      this.reportData();
    }, interval);
  }
}

class MemoryUsage extends BaseMetrics {
  type = 'mem_sys';

  getData() {
    const memoryData = process.memoryUsage();
    const { rss, heapTotal, heapUsed, external } = memoryData;
    // heapTotal 可以简单地理解为js所占用的内存总体积
    // heapUsed 可以简单地理解为js所占用的内存大小。
    // external 主要为ArrayBuffer(包含Node.js中的Buffer)等和V8中js对象相关的内存体积
    // RSS 是常驻内存集（Resident Set Size），表示该进程分配的内存大小
    return {
      rss,
      heapTotal,
      heapUsed,
      external,
    }
  }
}

new MemoryUsage()