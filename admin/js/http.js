/* 沙箱模式 */
(function (window) {
    // 获取本地缓存中的 token 数据
    const token = localStorage.getItem('token');
    // ajaxSetup() 方法为将来的 AJAX 请求设置默认值。
    $.ajaxSetup({
        // 发送请求前运行的函数 - 拦截器
        beforeSend(xhr) {
            // 判断本地里面是否有 token 数据
            if (!token) {
                // 没有，弹出信息，并跳转到登录页面
                alert('信息有误，正在返回登录页面');
                location.href = './login.html';
            }
            if (location.href.indexOf('login.html') === -1) {
                // 注意这里的 xhr 是原生的对象，所以用原生的方式添加请求头
                xhr.setRequestHeader("Authorization", token);
            }
        }
    });
})(window);