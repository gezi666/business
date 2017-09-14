$('.problem-num select').select2();

var trend = trend();
var problemDistribution = problemDistribution();
var complaintHotspots = complaintHotspots();
var publicSentiment = publicSentiment();

//商品/服务投诉走势图
function trend(){
    var echart = echarts.init(document.getElementById('echart'));
    var option = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['每百笔交易平均投诉率','每万元交易平均投诉率'],
            left: '3%',
            top:15
        },
        color:['#ff5974','#1fa9f9'],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : {
            type : 'category',
            boundaryGap : false,
            axisLine: {
                lineStyle: {
                    color: '#a3b1df'
                }
            },
            axisLabel:{
                textStyle: {
                    color:'#000'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#a3b1df'
                }
            },
            data : ['1月','2月','3月','4月','5月','6月','7月']
        },
        yAxis :{
            type : 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: '#46a6fa',
                    width: 1,
                    type: 'dashed'
                }
            }
        },
        series : [
            {
                name:'每百笔交易平均投诉率',
                type:'line',
                smooth:true,
                symbolSize: 10,
                itemStyle:{
                    normal:{
                        borderWidth: 2
                    }
                },
                areaStyle: {normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0, color: '#ff5974' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#fff' // 100% 处的颜色
                    }], false)
                }},
                data:[120, 132, 101, 134, 90, 230, 210],
                z:8
            },
            {
                name:'每万元交易平均投诉率',
                type:'line',
                smooth:true,
                symbolSize: 10,
                itemStyle:{
                    normal:{
                        borderWidth: 2
                    }
                },
                areaStyle: {normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0, color: '#1fa9f9' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#fff' // 100% 处的颜色
                    }], false)
                }},
                data:[220, 182, 191, 234, 290, 330, 310],
                z:7
            }
        ]
    };

    echart.setOption(option);
    return echart;
}

//商品/服务投诉问题分布
function problemDistribution(){
    var echart = echarts.init(document.getElementById('echart1'));

    option = {
        tooltip: {
            trigger: 'item'
            // backgroundColor: 'rgba(255,255,255,0.7)',
            // borderColor: '#ff3333',
            // borderWidth:1,
            // textStyle:{
            //     color:'#333',
            //     fontSize:14
            // },
            // formatter: "涉及企业数: <a style='color:#ff5a00;font-weight:600; font-size:16px;'>{c}</a> 家",
            // padding: 10,
        },
        title: {
            text:"投诉总量：84466453",
            textStyle: {
                color:'#f72f63'
            },
            left: '3%',
            top:15
        },
        calculable : true,
        color:['#fa2a60','#1fa9f9','#6dd94f','#01e161','#00f2f0','#4a54fc','#fc6804','#d720a3','#f54fc5','#fbd657'],
        series : [
            {
                name:'',
                type:'pie',
                radius : [50, 150],
                center : ['50%', '50%'],
                roseType : 'radius',
                label: {
                    normal: {
                        show: true,
                        textStyle:{
                            fontSize:13
                        }
                    }
                },
                labelLine:{
                    normal:{
                        length:10,
                        length2:12
                    }
                },
                
                itemStyle:{
                    normal:{
                        show:false
                    },
                    emphasis:{
                        borderColor:'#fff',
                        borderWidth:3
                    }
                },
                data:[
                    {value:4, name:'售后'},
                    {value:4, name:'人格尊严'},
                    {value:2, name:'计量'},
                    {value:5, name:'合同'},
                    {value:3, name:'商标'},
                    {value:2, name:'广告'},
                    {value:3, name:'安全'},
                    {value:4, name:'质量'},
                    {value:2, name:'其他'}
                ]
            }
        ]
    };

    echart.setOption(option);
    return echart;
}

//商品/服务投诉热点
function complaintHotspots(){
    var echart = echarts.init(document.getElementById('echart2'));

        var param = [
            {name:'电话的安装服务',value:38,category:0},
            {name:'宾馆住宿服务',value:138,category:0},
            {name:'啤酒',value:238,category:0},
            {name:'白酒',value:88,category:0},
            {name:'果酒',value:238,category:0},
            {name:'GPRS服务',value:180,category:1},
            {name:'境外住宿',value:110,category:1},
            {name:'电话的安装服务1',value:130,category:1},
            {name:'度假村服务',value:150,category:1}
        ];
        var colors = ['#ff315c','#0099ec'];
        var data = [];
        var categories = [{name:'热点投诉商品'},{name:'热点投诉服务'}];
        for(var i=0;i<param.length;i++){
            data.push({
                value:param[i].value,
                name:param[i].name,
                symbolSize:param[i].value/5 + 40,
                category:param[i].category
            });
        }
        var option = {
            legend: [{
                data: categories.map(function (a) {
                    return a.name;
                }),
                icon:'circle',
                left: '3%',
                top:15
            }],
            color:['#ff315c','#0099ec'],
            series: [{
                type: 'graph',
                layout: 'force',
                categories:categories,
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
                draggable: false,    //控制节点是否可以拖拽
                data:data,
                force: {
                    repulsion: 150
                },
                symbolSize: 60
            }]
        };

    echart.setOption(option);
    return echart;
}


//商品/服务舆情监测
function publicSentiment(){
    var echart = echarts.init(document.getElementById('echart3'));

    var data1 = [];
    var data2 = [];
    var date = [];
    for(var i=0;i<200;i++){
        data1[i] = 200*Math.random();
        data2[i] = 200*Math.random();
        date[i] = '2009/6/12';
    }

    option = {
        grid: {
            bottom: 80
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },
        color:['#f8d2de','#dff3ff'],
        dataZoom: [
            {
                show: true,
                realtime: true,
                start: 65,
                end: 85
            },
            {
                type: 'inside',
                realtime: true,
                start: 65,
                end: 85
            }
        ],
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLine: {onZero: false},
                data : date
            }
        ],
        yAxis: [
            {
                name: '',
                type: 'value',
                max: 600,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: '#46a6fa',
                        width: 1,
                        type: 'dashed'
                    }
                }
            },
            {
                name: '',
                nameLocation: 'start',
                max: 600,
                type: 'value',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: '#46a6fa',
                        width: 1,
                        type: 'dashed'
                    }
                },
                inverse: true
            }
        ],
        series: [
            {
                name:'正面舆情',
                type:'line',
                animation: false,
                areaStyle: {
                    normal: {}
                },
                lineStyle: {
                    normal: {
                        color:'#ff315c',
                        width: 2
                    }
                },
                symbolSize: 0,
                itemStyle:{
                    normal:{
                        borderWidth: 0,
                    }
                },
                markArea: {
                    silent: true,
                    data: [[{
                        xAxis: '2009/6/12'
                    }, {
                        xAxis: '2009/6/12'
                    }]]
                },
                data:data1
            },
            {
                name:'负面舆情',
                type:'line',
                yAxisIndex:1,
                animation: false,
                areaStyle: {
                    normal: {}
                },
                symbolSize: 0,
                itemStyle:{
                    normal:{
                        borderWidth: 0,
                    }
                },
                lineStyle: {
                    normal: {
                        color:'#65c4ff',
                        width: 2
                    }
                },
                markArea: {
                    silent: true,
                    data: [[{
                        xAxis: '2009/6/12'
                    }, {
                        xAxis: '2009/6/12'
                    }]]
                },
                data:data2
            }
        ]
    };

    echart.setOption(option);
    return echart;
}