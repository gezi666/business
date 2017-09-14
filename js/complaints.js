/**
 * Created by 魏阁 on 2016/12/30.
 */
$(function(){
    //$('.sel_region').select2();
    intCptChannel();         //初始化 所涉商品／服务投诉渠道图
    intMajorComplaints();   //初始化 主要投诉问题
});


//初始化 主要投诉问题
function intMajorComplaints(){
    var echart = echarts.init(document.getElementById('echart_mainComplaints'));

    var dataAxis = ['强制消费', '虚假宣传', '以次充好', '强制消费', '虚假宣传', '以次充好','强制消费', '虚假宣传', '以次充好','强制消费'];
    var data = [102, 94, 93, 89, 88, 82, 81, 75, 77, 73];
    var yMax = 120;
    var dataShadow = [];

    for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
    }

    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{b} :<br/> {c}次"
        },
        xAxis: {
            data: dataAxis,
            axisLabel: {
                textStyle: {
                    color: '#000'
                }
            },
            axisLine: {
                show:true,
                lineStyle: {
                    color: '#a3b1df',
                    width: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show:false
            },
            nameGap: 34,
            z: 10
        },
        yAxis: {
            name: '次数',
            max:yMax,
            min:0,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#000'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#46a6fa',
                    width: 1,
                    type: 'dashed'
                }
            },
            z: 9
        },
        series: [
            { // For shadow
                type: 'bar',
                z: 8,
                itemStyle: {
                    normal: {color: '#ebf6fe'}
                },
                barGap:'-100%',
                barCategoryGap:'40%',
                data: dataShadow,
                animation: false,
                silent: true,
            },
            {
                type: 'bar',
                z: 10,
                itemStyle: {
                    normal: {
                        color: '#ff5974'
                    },
                    emphasis: {
                        color: '#ff5974'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle:{
                            color:'#000'
                        }
                    }
                },
                data: data
            }
        ]
    };

    echart.setOption(option);
    return echart;
}

//初始化 所涉商品／服务投诉渠道图
function intCptChannel(){
    var myChart = echarts.init(document.getElementById('echart_cptChannel'));

    // 指定图表的配置项和数据
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'投诉渠道',
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
                    {value:135,name:'线下'},
                    {value:648,name:'网络'},
                    {value:379,name:'电话'}
                ]
            },
            {
                name:'投诉渠道',
                type:'pie',
                radius: ['40%', '55%'],
                color:["#fad562","#f72f63","#28f2ef","#2cabf6","#24df67","#d52aa2","#fa6822","#4c5bf8"],
                data:[
                    {value:335,name:'其他'},
                    {value:310,name:'微信'},
                    {value:234,name:'微博'},
                    {value:135,name:'商家网站'},
                    {value:1048, name:'315网站'},
                    {value:251,name:'商家客服'},
                    {value:147,name:'315投诉热线'},
                    {value:102,name:'工商部门'}
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}