/**
 * 对应的一个页面内的所有api接口
 *
 */

define(function (require, exports) {

    var ajax = require('service/ajax');

    /**
     * 获取业务线数据
     */
    exports.getProduct = function (params, options) {
        return ajax.post('/module-project/product/get', params, options);
    };

    exports.saveProduct = function (params, options) {
        if (params.ProductId) {
            return ajax.post('/module-project/product/edit', params, options);
        }
        return ajax.post('/module-project/product/add', params, options);
    };
});