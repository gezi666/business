$('select').select2();

var mainComplaintRanking = mainComplaintRanking();
var commodityComplaintRanking = commodityComplaintRanking();
var majorComplaints = majorComplaints();

//所涉主体投诉排行
function mainComplaintRanking(){
    var echart = echarts.init(document.getElementById('echart1'));

    var dataAxis = ['华为', '苏宁易购', '深圳天翼数码', '能良数码', '绿森数码', '华为', '苏宁易购', '深圳天翼数码', '能良数码', '绿森数码',];
    var data = [10.2, 9.4, 9.3, 8.9, 8.8, 8.2, 8.1, 7.5, 7.7, 7.3];
    var yMax = 12;
    var dataShadow = [];

    for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
    }

    var option = {
        title: {
            text: '（电商平台：淘宝旗舰店）',
            top:10
        },
        tooltip : {
            trigger: 'item',
            formatter: "{b} :<br/> {c}%"
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
            max:yMax,
            min:0,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: '{value}.0%',
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
                silent: true
            },
            {
                type: 'bar',
                z: 10,
                itemStyle: {
                    normal: {
                        color: '#65c4ff'
                    },
                    emphasis: {
                        color: '#65c4ff'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        formatter: '{c}%',
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

//商品投诉排行
function commodityComplaintRanking(){
    var echart = echarts.init(document.getElementById('echart2'));

    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:['#f54fc5','#ff315c','#fbd657','#1fa9f9','#00e6af'],
        series : [
            {
                name:'投诉商品投诉排行',
                type:'pie',
                radius : ['5%','70%'],
                center :'center',
                roseType : 'radius',
                data:[
                    {value:8, name:'包包'},
                    {value:11, name:'香烟'},
                    {value:15, name:'化妆品'},
                    {value:23, name:'笔记本电脑'},
                    {value:33, name:'手机'}
                ]
            }
        ]
    };

    echart.setOption(option);
    return echart;
}

//主要投诉问题
function majorComplaints(){
    var echart = echarts.init(document.getElementById('echart3'));

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