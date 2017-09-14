layer.alert('1231231231')
//$(".registerform").Validform();  //就这一行代码！;
$(".registerform").Validform({
    tiptype: 2,
    datatype: {
        oldpassword: function(gets) {
            if (gets == $("#passwordold").val()) {
                return "新密码不能与旧密码一致！";
            }
        }
    },
    ajaxPost: true
});





//这是一个非常简单的demo实例，让列表元素分页显示
//回调函数的作用是显示对应分页的列表项内容
//回调函数在用户每次点击分页链接的时候执行
//参数page_index{int整型}表示当前的索引页
var initPagination = function() {
    var num_entries = $("#hiddenresult div.result").length;
    // 创建分页
    $("#Pagination").pagination(num_entries, {
        num_edge_entries: 1, //边缘页数
        num_display_entries: 4, //主体页数
        callback: pageselectCallback,
        items_per_page: 1 //每页显示1项
    });
}();

function pageselectCallback(page_index, jq) {
    var new_content = $("#hiddenresult div.result:eq(" + page_index + ")").clone();
    $("#Searchresult").empty().append(new_content); //装载对应分页的内容
    return false;
}

