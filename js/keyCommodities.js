/**
 * Created by 魏阁 on 2016/12/29.
 */
$(function(){
    intCommodities();      //初始化 重点投诉主体
    intTreStatus();       //初始化 投诉处理状态结构图
    intComplaintCase1();  //初始化 投诉案件结构图1
    intComplaintCase2();  //初始化 投诉案件结构图2
});

//初始化 重点投诉主体
function intCommodities(){

    var myChart = echarts.init(document.getElementById('echart_commodities'));

    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{b} :<br/> {c}%"
        },
        grid: {
            left:'15%'
        },
        yAxis: {
            type : 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisLabel:{
                interval: 0,
                textStyle:{
                    fontSize:10,
                    color:'#000'
                }
            },
            data:["乐天玛特","世纪华联","君太百货","华联商厦","翠微百货","五星电器","大中电器","淘宝旗舰店","苏宁易购","京东商城"],
            splitLine: {
                show: false
            }
        },
        xAxis: {
            type : 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: '{value}.0%',
                textStyle: {
                    color: '#000'
                }
            },
            axisLine: {
                show: false
            },
            splitLine:{
                lineStyle:{
                    type:'dashed',
                    color:'rgba(5,155,233,0.6)'
                }
            }
        },
        label:{
            normal:{
                show:true,
                position:'right',
                formatter: '{c}%',
                textStyle:{
                    color:'#000'
                }
            },
            emphasis: {
                show:true,
                position:'right',
                formatter: '{c}%',
                textStyle:{
                    color:'#000'
                }
            }
        },
        series: [
            {
                name: '数量',
                type: 'bar',
                stack: '总量',
                barWidth : '50%',
                data:[
                    {
                        name:'乐天玛特',
                        value:6.8,
                        itemStyle:{
                            normal:{
                                color:'#0099ff'
                            }
                        }
                    },
                    {
                        name:'世纪华联',
                        value:6.8,
                        itemStyle:{
                            normal:{
                                color:'#0099ff'
                            }
                        }
                    },
                    {
                        name:'君太百货',
                        value:6.8,
                        itemStyle:{
                            normal:{
                                color:'#0099ff'
                            }
                        }
                    },
                    {
                        name:'华联商厦',
                        value:6.8,
                        itemStyle:{
                            normal:{
                                color:'#0099ff'
                            }
                        }
                    },
                    {
                        name:'翠微百货',
                        value:6.8,
                        itemStyle:{
                            normal:{
                                color:'#0099ff'
                            }
                        }
                    },
                    {
                        name:'五星电器',
                        value:6.8,
                        itemStyle:{
                            normal:{
                                color:'#0099ff'
                            }
                        }
                    },
                    {
                        name:'大中电器',
                        value:6.8,
                        itemStyle:{
                            normal:{
                                color:'#0099ff'
                            }
                        }
                    },
                    {
                        name:'淘宝旗舰店',
                        value:7.1,
                        itemStyle:{
                            normal:{
                                color:'#33cccc'
                            }
                        }
                    },
                    {
                        name:'苏宁易购',
                        value:7.9,
                        itemStyle:{
                            normal:{
                                color:'#ff9933'
                            }
                        }
                    },
                    {
                        name:'京东商城',
                        value:9.4,
                        itemStyle:{
                            normal:{
                                color:'#ff3366'
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

//初始化 投诉案件结构图1
function intComplaintCase1(){
    var myChart = echarts.init(document.getElementById('echart_complaintCase1'));

    // 指定图表的配置项和数据
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:['#f72f63','#2cabf6','#24df67','#28f2ef','#4c5bf8','#fa6822','#d52aa2','#f355c4','#fad562'],
        series : [
            {
                name:'投诉案件结构图',
                type:'pie',
                radius : ['5%','70%'],
                center :'center',
                roseType : 'radius',
                data:[
                    {value:45, name:'售后服务'},
                    {value:40, name:'人格尊严'},
                    {value:35, name:'计量'},
                    {value:30, name:'合同'},
                    {value:25, name:'商标'},
                    {value:20, name:'广告'},
                    {value:15, name:'安全'},
                    {value:10, name:'质量'},
                    {value:13, name:'其他'}
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//初始化 投诉案件结构图2
function intComplaintCase2(){
    var myChart = echarts.init(document.getElementById('echart_complaintCase2'));

    // 指定图表的配置项和数据
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'投诉内容',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '30%'],

                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                color:["#4c5bf8","#d52aa2","#2cabf6"],
                data:[
                    {value:535,name:'合同'},
                    {value:648,name:'售后服务'},
                    {value:679,name:'质量'}
                ]
            },
            {
                name:'投诉内容',
                type:'pie',
                radius: ['40%', '55%'],
                color:["#fad562","#f72f63","#28f2ef","#2cabf6","#24df67","#d52aa2","#fa6822","#4c5bf8"],
                data:[
                    {value:335,name:'其他'},
                    {value:310,name:'赠品质量'},
                    {value:234,name:'噪音'},
                    {value:135,name:'以次充好'},
                    {value:1048, name:'多次维修'},
                    {value:251,name:'服务态度'},
                    {value:147,name:'售后不及时'},
                    {value:102,name:'合同造假'}
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//初始化 投诉处理状态结构图
function intTreStatus(){
    var myChart = echarts.init(document.getElementById('echart_treatmentStatus'));
    var dataStyle = {
        normal: {
            label: {show:false},
            labelLine: {show:false}
        }
    };
    var placeHolderStyle = {
        normal : {
            color: 'rgba(0,0,0,0)',
            label: {show:false},
            labelLine: {show:false}
        },
        emphasis : {
            color: 'rgba(0,0,0,0)'
        }
    };
    option = {
        color: ['#2cabf6','#4c5bf8','#fad562','#f72f63'],
        title: {
            text: '1,787.98万元\n\n挽回经济损失',
            x: 'center',
            y: '45%',
            itemGap: 20,
            textStyle : {
                color : '#000',
                fontFamily : '微软雅黑',
                fontSize : 14
            }
        },
        tooltip : {
            show: true,
            formatter: "{b} : ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : '52%',
            y : '16%',
            itemGap:1,
            textStyle : {
                color : '#000'
            },
            data:['达成调解协议','未达成调解协议','撤回','其他']
        },
        series : [
            {
                name:'0',
                type:'pie',
                clockWise:false,
                radius : [90, 105],
                itemStyle : dataStyle,
                data:[
                    {
                        value:1000,
                        name:'达成调解协议'
                    },
                    {
                        value:324,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:'1',
                type:'pie',
                clockWise:false,
                radius : [75, 90],
                itemStyle : dataStyle,
                data:[
                    {
                        value:300,
                        name:'未达成调解协议'
                    },
                    {
                        value:389,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:'2',
                type:'pie',
                clockWise:false,
                radius : [60, 75],
                itemStyle : dataStyle,
                data:[
                    {
                        value:127,
                        name:'撤回'
                    },
                    {
                        value:412,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            },
            {
                name:'3',
                type:'pie',
                clockWise:false,
                radius : [45, 60],
                itemStyle : dataStyle,
                data:[
                    {
                        value:87,
                        name:'其他'
                    },
                    {
                        value:432,
                        name:'invisible',
                        itemStyle : placeHolderStyle
                    }
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}