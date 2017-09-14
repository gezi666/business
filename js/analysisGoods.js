/**
 * Created by 魏阁 on 2017/1/10.
 */
$(function(){
    initAssociationMap();     //涉诉重点商品关联图谱
});


//涉诉重点商品关联图谱
function initAssociationMap(){
    var myChart = echarts.init(document.getElementById('echart_associationMap'));
    var data = {"data":[{"id":"371","name":"化妆品","category":null,"weight":5,"category_type":null},{"id":"373","name":"护肤品","category":null,"weight":5,"category_type":null},{"id":"374","name":"洁肤品","category":null,"weight":5,"category_type":null},{"id":"375","name":"防晒品","category":null,"weight":5,"category_type":null},{"id":"376","name":"香水","category":null,"weight":5,"category_type":null},{"id":"377","name":"口红","category":null,"weight":5,"category_type":null},{"id":"378","name":"唇膏","category":null,"weight":5,"category_type":null},{"id":"379","name":"指甲油","category":null,"weight":5,"category_type":null},{"id":"380","name":"眉笔","category":null,"weight":5,"category_type":null},{"id":"381","name":"眼线","category":null,"weight":5,"category_type":null},{"id":"382","name":"粉底","category":null,"weight":5,"category_type":null},{"id":"383","name":"粉饼","category":null,"weight":5,"category_type":null},{"id":"384","name":"卸妆用品","category":null,"weight":5,"category_type":null},{"id":"385","name":"其他美容用品","category":null,"weight":5,"category_type":null},{"id":"393","name":"服装、鞋帽","category":null,"weight":5,"category_type":null},{"id":"418","name":"针织衬衫","category":null,"weight":5,"category_type":null},{"id":"419","name":"纯棉衬衫","category":null,"weight":5,"category_type":null},{"id":"420","name":"真丝衬衫","category":null,"weight":5,"category_type":null},{"id":"421","name":"其他衬衫","category":null,"weight":5,"category_type":null},{"id":"472","name":"家居用品","category":null,"weight":5,"category_type":null},{"id":"474","name":"沙发","category":null,"weight":5,"category_type":null},{"id":"475","name":"床","category":null,"weight":5,"category_type":null},{"id":"476","name":"床垫","category":null,"weight":5,"category_type":null},{"id":"477","name":"组合家具","category":null,"weight":5,"category_type":null},{"id":"478","name":"卧室柜","category":null,"weight":5,"category_type":null},{"id":"479","name":"梳妆台","category":null,"weight":5,"category_type":null},{"id":"482","name":"电脑台","category":null,"weight":5,"category_type":null},{"id":"613","name":"家用电器","category":null,"weight":5,"category_type":null},{"id":"615","name":"普通彩色电视机","category":null,"weight":5,"category_type":null},{"id":"616","name":"黑白电视机","category":null,"weight":5,"category_type":null},{"id":"617","name":"投影电视机","category":null,"weight":5,"category_type":null},{"id":"618","name":"液晶电视机","category":null,"weight":5,"category_type":null},{"id":"619","name":"等离子电视机","category":null,"weight":5,"category_type":null},{"id":"620","name":"家庭影院","category":null,"weight":5,"category_type":null},{"id":"621","name":"其他电视机","category":null,"weight":5,"category_type":null},{"id":"650","name":"分体式空调","category":null,"weight":5,"category_type":null},{"id":"651","name":"柜式空调","category":null,"weight":5,"category_type":null},{"id":"652","name":"中央空调","category":null,"weight":5,"category_type":null},{"id":"653","name":"窗式空调","category":null,"weight":5,"category_type":null},{"id":"654","name":"移动式空调","category":null,"weight":5,"category_type":null},{"id":"655","name":"吸顶式空调","category":null,"weight":5,"category_type":null},{"id":"656","name":"其他空调","category":null,"weight":5,"category_type":null},{"id":"730","name":"计算机产品","category":null,"weight":5,"category_type":null},{"id":"732","name":"台式计算机","category":null,"weight":5,"category_type":null},{"id":"733","name":"便携式计算机","category":null,"weight":5,"category_type":null},{"id":"734","name":"掌上式计算机","category":null,"weight":5,"category_type":null},{"id":"735","name":"二手计算机","category":null,"weight":5,"category_type":null},{"id":"819","name":"通讯产品","category":null,"weight":5,"category_type":null},{"id":"821","name":"普通电话机","category":null,"weight":5,"category_type":null},{"id":"822","name":"室内无绳电话机","category":null,"weight":5,"category_type":null},{"id":"823","name":"子母电话机","category":null,"weight":5,"category_type":null},{"id":"827","name":"手持移动电话（手机）","category":null,"weight":5,"category_type":null},{"id":"828","name":"车载移动电话","category":null,"weight":5,"category_type":null},{"id":"829","name":"固定台站电话","category":null,"weight":5,"category_type":null},{"id":"830","name":"手机电池","category":null,"weight":5,"category_type":null},{"id":"831","name":"其他移动电话及配件","category":null,"weight":5,"category_type":null},{"id":"832","name":"对讲机","category":null,"weight":5,"category_type":null},{"id":"833","name":"小灵通","category":null,"weight":5,"category_type":null},{"id":"834","name":"寻呼机","category":null,"weight":5,"category_type":null},{"id":"835","name":"传呼机","category":null,"weight":5,"category_type":null},{"id":"836","name":"股票机","category":null,"weight":5,"category_type":null},{"id":"837","name":"数字机","category":null,"weight":5,"category_type":null},{"id":"838","name":"汉字机","category":null,"weight":5,"category_type":null},{"id":"839","name":"其他寻呼机","category":null,"weight":5,"category_type":null},{"id":"981","name":"卫生用品","category":null,"weight":5,"category_type":null},{"id":"983","name":"电动剃须刀","category":null,"weight":5,"category_type":null},{"id":"984","name":"电动牙刷","category":null,"weight":5,"category_type":null},{"id":"987","name":"浴液","category":null,"weight":5,"category_type":null},{"id":"1225","name":"交通工具","category":null,"weight":5,"category_type":null},{"id":"1227","name":"乘用车","category":null,"weight":5,"category_type":null},{"id":"1228","name":"普通乘用车","category":null,"weight":5,"category_type":null},{"id":"1229","name":"敞篷车","category":null,"weight":5,"category_type":null},{"id":"1230","name":"旅行车","category":null,"weight":5,"category_type":null},{"id":"1231","name":"专用乘用车","category":null,"weight":5,"category_type":null},{"id":"1232","name":"越野乘用车","category":null,"weight":5,"category_type":null},{"id":"1233","name":"其他乘用车","category":null,"weight":5,"category_type":null},{"id":"1234","name":"商用车","category":null,"weight":5,"category_type":null},{"id":"1235","name":"客车","category":null,"weight":5,"category_type":null},{"id":"1236","name":"货车","category":null,"weight":5,"category_type":null},{"id":"1237","name":"半挂牵引车","category":null,"weight":5,"category_type":null},{"id":"1238","name":"其他商用车","category":null,"weight":5,"category_type":null}],"links":[{"source":"化妆品","target":"护肤品","type":null,"type_code":null},{"source":"化妆品","target":"洁肤品","type":null,"type_code":null},{"source":"化妆品","target":"防晒品","type":null,"type_code":null},{"source":"化妆品","target":"香水","type":null,"type_code":null},{"source":"化妆品","target":"口红","type":null,"type_code":null},{"source":"化妆品","target":"唇膏","type":null,"type_code":null},{"source":"化妆品","target":"指甲油","type":null,"type_code":null},{"source":"化妆品","target":"眉笔","type":null,"type_code":null},{"source":"化妆品","target":"眼线","type":null,"type_code":null},{"source":"化妆品","target":"粉底","type":null,"type_code":null},{"source":"化妆品","target":"粉饼","type":null,"type_code":null},{"source":"化妆品","target":"卸妆用品","type":null,"type_code":null},{"source":"化妆品","target":"其他美容用品","type":null,"type_code":null},{"source":"服装、鞋帽","target":"针织衬衫","type":null,"type_code":null},{"source":"服装、鞋帽","target":"纯棉衬衫","type":null,"type_code":null},{"source":"服装、鞋帽","target":"真丝衬衫","type":null,"type_code":null},{"source":"服装、鞋帽","target":"其他衬衫","type":null,"type_code":null},{"source":"家居用品","target":"沙发","type":null,"type_code":null},{"source":"家居用品","target":"床","type":null,"type_code":null},{"source":"家居用品","target":"床垫","type":null,"type_code":null},{"source":"家居用品","target":"组合家具","type":null,"type_code":null},{"source":"家居用品","target":"卧室柜","type":null,"type_code":null},{"source":"家居用品","target":"梳妆台","type":null,"type_code":null},{"source":"家居用品","target":"电脑台","type":null,"type_code":null},{"source":"家用电器","target":"普通彩色电视机","type":null,"type_code":null},{"source":"家用电器","target":"黑白电视机","type":null,"type_code":null},{"source":"家用电器","target":"投影电视机","type":null,"type_code":null},{"source":"家用电器","target":"液晶电视机","type":null,"type_code":null},{"source":"家用电器","target":"等离子电视机","type":null,"type_code":null},{"source":"家用电器","target":"家庭影院","type":null,"type_code":null},{"source":"家用电器","target":"其他电视机","type":null,"type_code":null},{"source":"家用电器","target":"分体式空调","type":null,"type_code":null},{"source":"家用电器","target":"柜式空调","type":null,"type_code":null},{"source":"家用电器","target":"中央空调","type":null,"type_code":null},{"source":"家用电器","target":"窗式空调","type":null,"type_code":null},{"source":"家用电器","target":"移动式空调","type":null,"type_code":null},{"source":"家用电器","target":"吸顶式空调","type":null,"type_code":null},{"source":"家用电器","target":"其他空调","type":null,"type_code":null},{"source":"计算机产品","target":"台式计算机","type":null,"type_code":null},{"source":"计算机产品","target":"便携式计算机","type":null,"type_code":null},{"source":"计算机产品","target":"掌上式计算机","type":null,"type_code":null},{"source":"计算机产品","target":"二手计算机","type":null,"type_code":null},{"source":"通讯产品","target":"普通电话机","type":null,"type_code":null},{"source":"通讯产品","target":"室内无绳电话机","type":null,"type_code":null},{"source":"通讯产品","target":"子母电话机","type":null,"type_code":null},{"source":"通讯产品","target":"手持移动电话（手机）","type":null,"type_code":null},{"source":"通讯产品","target":"车载移动电话","type":null,"type_code":null},{"source":"通讯产品","target":"固定台站电话","type":null,"type_code":null},{"source":"通讯产品","target":"手机电池","type":null,"type_code":null},{"source":"通讯产品","target":"其他移动电话及配件","type":null,"type_code":null},{"source":"通讯产品","target":"对讲机","type":null,"type_code":null},{"source":"通讯产品","target":"小灵通","type":null,"type_code":null},{"source":"通讯产品","target":"寻呼机","type":null,"type_code":null},{"source":"通讯产品","target":"传呼机","type":null,"type_code":null},{"source":"通讯产品","target":"股票机","type":null,"type_code":null},{"source":"通讯产品","target":"数字机","type":null,"type_code":null},{"source":"通讯产品","target":"汉字机","type":null,"type_code":null},{"source":"通讯产品","target":"其他寻呼机","type":null,"type_code":null},{"source":"卫生用品","target":"电动剃须刀","type":null,"type_code":null},{"source":"卫生用品","target":"电动牙刷","type":null,"type_code":null},{"source":"卫生用品","target":"浴液","type":null,"type_code":null},{"source":"交通工具","target":"乘用车","type":null,"type_code":null},{"source":"交通工具","target":"普通乘用车","type":null,"type_code":null},{"source":"交通工具","target":"敞篷车","type":null,"type_code":null},{"source":"交通工具","target":"旅行车","type":null,"type_code":null},{"source":"交通工具","target":"专用乘用车","type":null,"type_code":null},{"source":"交通工具","target":"越野乘用车","type":null,"type_code":null},{"source":"交通工具","target":"其他乘用车","type":null,"type_code":null},{"source":"交通工具","target":"商用车","type":null,"type_code":null},{"source":"交通工具","target":"客车","type":null,"type_code":null},{"source":"交通工具","target":"货车","type":null,"type_code":null},{"source":"交通工具","target":"半挂牵引车","type":null,"type_code":null},{"source":"交通工具","target":"其他商用车","type":null,"type_code":null}]};
    //var data = data;
    var nodes = data.data;
    var links = data.links;
    var map = {};
    nodes.forEach(function(item) {
        item._id = item.id;
        item.id = item.name;
        item.level = 0;
        item.inDegree = 0;
        map[item.id] = item;
    });

    links.forEach(function(item) {
        var target = map[item.target];
        target.inDegree++;
    });
    nodes.forEach(function(item) {
        item.level = item.inDegree == 0 ? 0 : 1;
    });
    setNodeStyle(nodes);

    function setNodeStyle(nodes) {
        for (var i in nodes) {
            var node = nodes[i];
            if (node.level == 0) {
                node.itemStyle = {
                    normal: {
                        color: 'rgba(248,54,104,1)'
                    }
                };
                node.label = {
                    normal: {
                        shwo: true,
                        position: "inside",
                        textStyle: {
                            color: "#000"
                        }
                    }
                };
                node.symbolSize = 40;
            }else{
                node.itemStyle = {
                    normal: {
                        color: 'rgba(34,198,252,1)'
                    }
                };
                node.label = {
                    normal: {
                        shwo: true,
                        position: "inside",
                        textStyle: {
                            color: "#000"
                        }
                    }
                };
                node.symbolSize = 20;
            }
        }
    }
    var option = {
        title: {
            text: '',
            subtext: '',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {
            show:true,
            formatter:function(d){ return d.name}
        },
        animation: false,
        series: [{
            name: '',
            type: 'graph',
            layout: 'force',
            data: nodes,
            links: links,
            roam: true,
            label: {
                normal: {
                    position: 'inside',
                    show: true
                }
            },
            force: {
                repulsion: 80,
                edgeLength:50
            }
        }]
    };
    myChart.setOption(option);
    myChart.on("click", function(z) {
        if (z.data.level===0) {
            return false;
        }
        //window.location.href = "analysis_Of_Related_Goods.html";     本页面跳转
        window.open("analysis_Of_Related_Goods.html");       //新页面跳转
        //window.location.href = "./complaintAnalysisDetail.html?id="+z.data._id+"&name="+z.data.name;
    });
}