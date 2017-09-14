/**
 * Created by 魏阁 on 2016/12/30.
 */
$(function(){
    $('.evens_sel').select2();
    intTrendChart();     //初始化 事件关注度传播走势图
    intVolumeMap();     //初始化 舆情声量图
});

//初始化 事件关注度传播走势图
function  intTrendChart(){
    var myChart = echarts.init(document.getElementById('echart_trend'));

    function randomData() {
        return Math.round(Math.random()*5000);
    }

    // 指定图表的配置项和数据
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        //legend: {
        //    data:['企业排放量','行业均值'],
        //    textStyle: {
        //        // color: ''
        //    }
        //},
        //grid: {
        //    left: '-50',
        //    top: '12%',
        //    right: '4%',
        //    bottom: '3%',
        //    containLabel: true
        //},
        xAxis: {
            type: 'category',
            //boundaryGap: false,
            data: ['1/20','1/21','1/22','1/23','1/24','1/25','1/26']
        },
        yAxis: {
            type: 'value',
            offset: -40,
            axisTick: {
                show: false
            }
            //name: 'Kg/千瓦电'
        },
        series: [
            {
                name:'企业排放量',
                type:'line',
                stack: '总量',
                data:[randomData(), randomData(), randomData(), randomData(), randomData(), randomData()],
                smooth: true,
                symbolSize: 15,
                itemStyle: {
                    normal: {
                        color: '#fc355f'
                    }
                }
            },
            {
                name:'行业均值',
                type:'line',
                stack: '总量',
                data:[randomData(), randomData(), randomData(), randomData(), randomData(), randomData()],
                smooth: true,
                symbolSize: 15,
                itemStyle: {
                    normal: {
                        color: '#20baec'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//初始化 舆情声量图
function  intVolumeMap(){
    var myChart = echarts.init(document.getElementById('echart_VolumeMap'));

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
                        borderWidth: 0
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
                        borderWidth: 0
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

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}