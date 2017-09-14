/**
 * Created by 魏阁 on 2016/12/26.
 */
$(function(){
    intMap();    //初始化 消费维权登记热力图
    intTotalRegistration();    //初始化 登记总量类型图
    intComplaint();   //初始化 投诉热点图
    intCommodity();   //初始化 重点商品监管图
    intService();     //初始化 重点服务监管图

    $("div.selectTime button").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
});

//初始化 消费维权登记热力图
function intMap(){
    var myChart = echarts.init(document.getElementById('echart_hot'));

    function randomData() {
        return Math.round(Math.random()*500);
    }

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            backgroundColor:'#303030',
            formatter: function(arguments){
                return arguments.data.name+'<br/>登记总量:'+ arguments.data.value+'件<br/>挽回金额:' +arguments.data.money +'万元'
            }
        },
        visualMap: {
            type:'piecewise',
            min: 0,
            max: 500,
            splitNumber:4,
            itemWidth:20,
            itemHeight:25,
            itemSymbol: 'rect',
            itemGap:4,
            left: '16%',
            bottom: '6%',
            text: ['高','低'],
            calculable: true,
            color:["#ff3366",'#ffcc66','#3399ff','#66ffff'],
            textStyle: {
                color: '#000'
            }
        },
        series: [
            {
                //name: '消费维权登记数量',
                type: 'map',
                mapType: 'china',
                // roam: false,
                itemStyle: {
                    normal: { label: { show: true,textStyle:{color:'#000'}} },
                    emphasis: { label: { show: true} }
                },
                data: [
                    { name: '北京', value: randomData(), money:randomData()},
                    { name: '天津', value: randomData(), money:randomData()},
                    { name: '上海', value: randomData(), money:randomData()},
                    { name: '重庆', value: randomData(), money:randomData()},
                    { name: '河北', value: randomData(), money:randomData()},
                    { name: '河南', value: randomData(), money:randomData()},
                    { name: '云南', value: randomData(), money:randomData()},
                    { name: '辽宁', value: randomData(), money:randomData()},
                    { name: '黑龙江', value: randomData(), money:randomData()},
                    { name: '湖南', value: randomData(), money:randomData()},
                    { name: '安徽', value: randomData(), money:randomData()},
                    { name: '山东', value: randomData(), money:randomData()},
                    { name: '新疆', value: randomData(), money:randomData()},
                    { name: '江苏', value: randomData(), money:randomData()},
                    { name: '浙江', value: randomData(), money:randomData()},
                    { name: '江西', value: randomData(), money:randomData()},
                    { name: '湖北', value: randomData(), money:randomData()},
                    { name: '广西', value: randomData(), money:randomData()},
                    { name: '甘肃', value: randomData(), money:randomData()},
                    { name: '山西', value: randomData(), money:randomData()},
                    { name: '内蒙古', value: randomData(), money:randomData()},
                    { name: '陕西', value: randomData(), money:randomData()},
                    { name: '吉林', value: randomData(), money:randomData()},
                    { name: '福建', value: randomData(), money:randomData()},
                    { name: '贵州', value: randomData(), money:randomData()},
                    { name: '广东', value: randomData(), money:randomData()},
                    { name: '青海', value: randomData(), money:randomData()},
                    { name: '西藏', value: randomData(), money:randomData()},
                    { name: '四川', value: randomData(), money:randomData()},
                    { name: '宁夏', value: randomData(), money:randomData()},
                    { name: '海南', value: randomData(), money:randomData()},
                    { name: '台湾', value: randomData(), money:randomData()},
                    { name: '香港', value: randomData(), money:randomData()},
                    { name: '澳门', value: randomData(), money:randomData()}
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//初始化 登记总量类型图
function intTotalRegistration(){
    var myChart = echarts.init(document.getElementById('echart_register'));

    // 指定图表的配置项和数据
    var option = {
        tooltip : {
            show: true,
            formatter: "{d}%"
        },
        legend: {
            top: 10,
            left: 'center',
            data:['投诉','咨询','表扬','检举','举报','建议']
        },
        grid:{
            top:40
        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                center : ['50%', '50%'],
                radius : [40, 60],
                labelLine:{
                    normal:{
                        length:20,
                        length2:20
                    }
                },
                label: {
                    normal: {
                        position: 'outside',
                        show: true,
                        formatter: "{d}%{b}",
                        textStyle: {
                            fontSize:14,
                            color:"#000"
                        }
                    }
                },
                data:[
                    {
                        value:38,  //数据填充
                        name:'投诉',
                        itemStyle : {
                            normal : {
                                color :'#33d9ff'          //颜色填充
                            }
                        }
                    },
                    {
                        value:170,  //数据填充
                        name:'咨询',
                        itemStyle : {
                            normal : {
                                color :'#ff528b'           //颜色填充
                            }
                        }
                    },
                    {
                        value:120,
                        name:'表扬',
                        itemStyle : {
                            normal : {
                                color :'#42fd93'           //颜色填充
                            }
                        }
                    },
                    {
                        value:120,
                        name:'检举',
                        itemStyle : {
                            normal : {
                                color :'#ff8115'           //颜色填充
                            }
                        }
                    },
                    {
                        value:120,
                        name:'举报',
                        itemStyle : {
                            normal : {
                                color :'#ff0000'           //颜色填充
                            }
                        }
                    },
                    {
                        value:292,
                        name:'建议',
                        itemStyle : {     //数据填充
                            normal : {
                                color :'#f9ff4d'           //颜色填充
                            }
                        }
                    }
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//初始化 投诉热点图
function intComplaint(){
    var myChart = echarts.init(document.getElementById('echart_complaint'));

    // 指定图表的配置项和数据
    var option = {
            //tooltip:{
            //    show: true,
            //    //trigger: 'item',
            //    position: 'right',
            //    // formatter: '信用等级：A',   //这里要传信用等级值
            //    //formatter: function(params) {
            //    //    if(params.dataType == "edge") { // is edge
            //    //        //return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
            //    //        return params.data.target + " > " + params.data.source;
            //    //    } else { // is node
            //    //        return params.name
            //    //    }
            //    //},
            //    textStyle:{
            //        color:'#fff',
            //        fontSize:10
            //    }
            //},
        series: [{
            type: 'graph',
            layout: 'force',
            roam: true,
            animation: false,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{b}',
                    textStyle:{
                        color:'#fff',
                        fontSize:10
                    }
                }
            },
            itemStyle:{
                normal:{
                    //borderColor: '#74FF98',
                    //borderWidth: 1,
                    //borderType: 'solid'
                }
            },
            draggable: false,    //控制节点是否可以拖拽
            data:[
                {
                    value:38,  //数据填充
                    name:'尾气门',
                    itemStyle : {
                        normal : {
                            color :'#ff3366'          //颜色填充
                        }
                    }
                },
                {
                    value:170,  //数据填充
                    name:'超级理财',
                    itemStyle : {
                        normal : {
                            color :'#339966'           //颜色填充
                        }
                    }
                },
                {
                    value:120,
                    name:'虚假承诺',
                    itemStyle : {
                        normal : {
                            color :'#cc6699'           //颜色填充
                        }
                    }
                },
                {
                    value:120,
                    name:'拖欠工资',
                    itemStyle : {
                        normal : {
                            color :'#3399cc'           //颜色填充
                        }
                    }
                },
                {
                    value:120,
                    name:'一万赚十万',
                    itemStyle : {
                        normal : {
                            color :'#0099ff'           //颜色填充
                        }
                    }
                },
                {
                    value:292,
                    name:'天价鱼',
                    itemStyle : {     //数据填充
                        normal : {
                            color :'#3366ff'           //颜色填充
                        }
                    }
                }
            ],
            //categories: webkitDep.categories,
            force: {
                // initLayout: 'circular'
                //gravity: 0,
                //edgeLength: 150,
                repulsion: 150
            },
            symbolSize: 60
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}

//初始化 重点商品监管图
function intCommodity(){
    var myChart = echarts.init(document.getElementById('echart_commodity'));

    // 指定图表的配置项和数据
    var option = {
        tooltip: {
            formatter:"<span style='display:inline-block;width:7px;height:7px;border-radius:50%;background:#ffff99;margin-right:5px;'></span>"+"{a} <br/> {c}"
        },
        grid: {
            bottom: 100
        },
        xAxis: {
            type: "category",
            data: [	"家用\n电器类", "通讯\n器材类", "计算机及\n配套设备", "日用\n百货类", "食品类"],
            axisLabel: {
                //interval: 0,
                //rotate: [45],
                textStyle: {
                    color: '#000' //X轴类名称颜色
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#000'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            min: "0",
            max: '4000',
            //splitNumber:10,
            name: '数量',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#2d7ed4',
                    type : "dashed"
                }
            },
            axisLabel: {
                margin:5,
                formatter: function(value){
                    if(value!=0){
                    var v = value/1000;
                    v = v+'k';
                    return v
                    }
                    else{
                        return 0;
                    }
                },
                textStyle: {
                    color: '#000' //Y轴刻度颜色
                }
            }
        },
        series: [{
            name:'数量',
            type: 'bar',
            data: [1530,3400,2589,3860,2453],

            itemStyle: {
                normal: {
                    color: "#66ccff" //柱状体颜色
                }
            },
            barWidth: "40" //柱状体宽度
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart.on('click', function (params) {
        location.href="keyCommodities.html";
    });
}

//初始化 重点服务监管图
function intService(){
    var myChart = echarts.init(document.getElementById('echart_service'));

    // 指定图表的配置项和数据
    var option = {
        tooltip: {
            formatter:"<span style='display:inline-block;width:7px;height:7px;border-radius:50%;background:#ffff99;margin-right:5px;'></span>"+"{a} <br/> {c}"
        },
        grid: {
            bottom: 100
        },
        xAxis: {
            type: "category",
            data: [	"家用\n电器类", "文化\n娱乐\n体育", "餐饮\n住宿", "旅游", "物业\n服务"],
            axisLabel: {
                //interval: 0,
                //rotate: [45],
                textStyle: {
                    color: '#000' //X轴类名称颜色
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#000'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            min: "0",
            max: '4000',
            //splitNumber:10,
            name: '数量',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#2d7ed4',
                    type : "dashed"
                }
            },
            axisLabel: {
                margin:5,
                formatter: function(value){
                    if(value!=0){
                        var v = value/1000;
                        v = v+'k';
                        return v
                    }
                    else{
                        return 0;
                    }
                },
                textStyle: {
                    color: '#000' //Y轴刻度颜色
                }
            }
        },
        series: [{
            name:'数量',
            type: 'bar',
            data: [1530,3400,2589,3860,2453],

            itemStyle: {
                normal: {
                    color: "#66ccff" //柱状体颜色
                }
            },
            barWidth: "40" //柱状体宽度
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}