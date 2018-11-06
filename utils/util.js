const app = getApp()

const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => { // 不足2位数的数字，自动在前面补0
    n = n.toString()
    return n[1] ? n : '0' + n
}

// 添加事件结束
Promise.prototype.finally = function (callback) {
    var Promise = this.constructor
    return this.then(
        function (value) {
            Promise.resolve(callback()).then(
                function () {
                    return value
                }
            )
        },
        function (reason) {
            Promise.resolve(callback()).then(
                function () {
                    throw reason
                }
            )
        }
    )
}
const request = (url, data, config) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: app.globalData.baseUrl + url,
            data: data,
            method: (config && config.method) || 'POST', // 使用传入的method值，或者默认的post
            header: {
                'content-type': (config && config.contentType) || 'application/json', // 使用传入的contentType值，或者默认的application/json
                'token': (config && config.token) || app.globalData.token || '', // 使用传入的token值，或者全局的token，都没有则默认空字符串
            },
            success: function (res) {
                if (res.statusCode == 200) {
                    resolve(res.data || res) // 返回成功提示信息
                } else {
                    reject(res.data || res) // 返回错误提示信息
                }
            },
            fail: function (res) {
                if (res && res.errMsg && res.errMsg === 'request:fail') { // 小程序请求失败，可以在这里检查是否联网，处理断网
                    
                }
                reject(res) // 返回错误提示信息
            },
            complete: function (res) {

            }
        })
    })
}

module.exports = {
    formatTime: formatTime,
    formatNumber: formatNumber,
    request: request
}