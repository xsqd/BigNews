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
                //渲染
                $('.modal-body').html('输入信息有误,正在跳转到登录页');
                //通过 JavaScript 调用 modal 模态框
                $('#myModal').modal({ keyboard: true });
                location.href = './login.html';
            }
            if (location.href.indexOf('login.html') === -1) {
                // 注意这里的 xhr 是原生的对象，所以用原生的方式添加请求头
                xhr.setRequestHeader("Authorization", token);
            }
        }
    });
    const baseURL = 'http://localhost:8080/api/v1';
    const urls = {
        userLogin: baseURL + '/admin/user/login',
        userInfo: baseURL + '/admin/user/info',
        userDetail: baseURL + '/admin/user/detail',
        userEdit: baseURL + '/admin/user/edit',
        userClist: baseURL + '/admin/category/list',
        userCadd: baseURL + '/admin/category/add',
        userCsearch: baseURL + '/admin/category/search',
        userCedit: baseURL + '/admin/category/edit',
        userCdelete: baseURL + '/admin/category/delete',
        userAquery: baseURL + '/admin/article/query',
        userApublish: baseURL + '/admin/article/publish',
        userAsearch: baseURL + '/admin/article/search',
        userAedit: baseURL + '/admin/article/edit',
        userAdelete: baseURL + '/admin/article/delete',
        userAinfo: baseURL + '/admin/data/info',
        userDarticle: baseURL + '/admin/data/article',
        userDcategory: baseURL + '/admin/data/category',
        userDvisit: baseURL + '/admin/data/visit',
        userCsearch: baseURL + '/admin/comment/search',
        userCpass: baseURL + '/admin/comment/pass',
        userCreject: baseURL + '/admin/comment/reject',
        userCdelete: baseURL + '/admin/comment/delete'
    };
    window.urls = urls;
})(window);