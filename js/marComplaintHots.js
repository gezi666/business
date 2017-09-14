/**
 * Created by 魏阁 on 2016/12/29.
 */
$(function(){

    ieTips();    //IE9以下兼容性提示
    //$('.highSelect select').select2();
    cy();   //初始化 市场投诉热点图

});

//初始化 市场投诉热点图
function cy(){
    var width = 1200;
    var height = 600;
    var d ={"datas":[{"size":133,"name":"质量太差","id":"1","category":"投诉问题热点"},{"size":26,"name":"强制消费","id":"2","category":"投诉问题热点"},{"size":100,"name":"配件异常","id":"3","category":"投诉问题热点"},{"size":97,"name":"虚假承诺","id":"4","category":"投诉问题热点"},{"size":119,"name":"消费欺骗","id":"5","category":"投诉问题热点"},{"size":90,"name":"服务态度恶劣","id":"6","category":"投诉问题热点"},{"size":199,"name":"虚假宣传","id":"7","category":"投诉问题热点"},{"size":92,"name":"售后服务差","id":"8","category":"投诉问题热点"},{"size":93,"name":"消费欺诈","id":"9","category":"投诉问题热点"},{"size":36,"name":"捆绑销售","id":"10","category":"投诉问题热点"},{"size":112,"name":"承诺失效","id":"11","category":"投诉问题热点"},{"size":41,"name":"服务损伤","id":"12","category":"投诉问题热点"},{"size":46,"name":"商品过敏","id":"13","category":"投诉问题热点"},{"size":379,"name":"天价鱼","id":"1","category":"网络舆情热点"},{"size":2661,"name":"毒跑道","id":"2","category":"网络舆情热点"},{"size":399,"name":"假海蜇丝","id":"3","category":"网络舆情热点"},{"size":157,"name":"假冒出租车","id":"4","category":"网络舆情热点"},{"size":208,"name":"反电诈中心","id":"5","category":"网络舆情热点"},{"size":1937,"name":"延期交房","id":"6","category":"网络舆情热点"},{"size":1204,"name":"尾气门","id":"7","category":"网络舆情热点"},{"size":4469,"name":"烂尾楼","id":"8","category":"网络舆情热点"},{"size":8888,"name":"假冒产品","id":"9","category":"电商问题热点"}]};
    // 演示开始
    chart = new BubbleCloudChart();
    chart.domElement = document.getElementById("container");
    chart.width = width;
    chart.height = height;
    chart.minRadius = 20;
    chart.maxRadius = 50;
    chart.minFontSize = 10;
    chart.maxFontSize = 25;
    chart.collisionPadding = 10;
    chart.minCollisionRadius = 50;
    chart.legend=false;
    chart.categories = [
        {name: "投诉问题热点", color: "#fb3266"},
        {name: "电商问题热点", color: "#e3d400"},
        {name: "网络舆情热点", color: "#02a7d1"}
    ];
    chart.labelFunction = function (d) {
        return d.name;
    };
    // 注意,目前数据中不能使用weight保留字作为字段名!
    chart.weightFunction = function (d) {
        return d.size;
    };
    chart.categoryFunction = function (d) {
        return d.category;
    };
    chart.clickHandler = function (d) {
        clFn(d)
    };
    chart.init();
    chart.data(d.datas);

    // 创建滑块(样式需要自行调整).
    var min = new Date("2016/01/01");
    var max = new Date();

    var defaultBegin = new Date("2016/03/01");
    var defaultEnd = new Date("2016/04/31");

    var s = function(event, ui) {
        var startDate = new Date(ui.values[0]);
        var endDate = new Date(ui.values[1]);
        //$.ajax({
        //    url: baseURl+"/hotpointbubbles/graph",
        //    dataType:"json",
        //    data:{
        //        startYM:$("#date-slider_slider").next("div").find("span").eq(0).html(),
        //        endYM:$("#date-slider_slider").next("div").find("span").eq(1).html(),
        //        areaCode:$("#address").val(),
        //        typeCode:$("#type").val()
        //    },
        //    success: function(msg){
        //        chart.data(msg.datas);
        //    }
        //});
    };
    var ss = {
        format: "yyyy-MM-dd",
        dateCls: "dateSpan",
        offsetFontPath: 32
    };
    //测试
    createSliderUI("date-slider", defaultBegin, defaultEnd, min, max, s, ss);
    $(".dateSpan").eq(2).hide();
    $(".dateSpan").eq(3).hide()
}

//热点图点击事件
function clFn(data){
    var data = data;
    if (data.category==="投诉问题热点") {
        //location.href ="complaints.html";      本页面跳转
        window.open("complaints.html");         //新页面跳转
    }else if(data.category==="网络舆情热点"){
        //location.href ="publicHotspot.html";
        window.open("publicHotspot.html");
    }else if(data.category==="电商问题热点"){
        //location.href ="rights_analysis.html";
        window.open("rights_analysis.html");
    }
}


