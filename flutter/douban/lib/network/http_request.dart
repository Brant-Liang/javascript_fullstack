import 'package:dio/dio.dart';

class HttpRequest {
  static Future request(String url,
      {String method = "get", Map<String, dynamic>params}) async {
    //1、创建dio实例
    BaseOptions baseOptions = BaseOptions(
        baseUrl: "https://douban.uieee.com/v2",
        connectTimeout: 5000
    );
    final dio = Dio(baseOptions);
    //2、发送网络请求
    Options options = Options(method: method);
    try {
      final result = await dio.request(
          url, queryParameters: params, options: options);
      return result;
    } on DioError catch (err) {
      throw err;
    }
  }
}
