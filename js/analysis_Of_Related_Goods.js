/**
 * Created by 魏阁 on 2017/1/10.
 */
$(function(){
    initBrand();             //初始化投诉商品品牌分析图
    initRanking();          //初始化所涉主体投诉排行图
    initDistribution();    //初始化涉诉主体分布图
});


//初始化投诉商品品牌分析图
function initBrand(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart_brand'));

    // 指定图表的配置项和数据
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:['#1fa9f9','#01e6af','#fbd657','#f54fc5','#ff315c'],
        series : [
            {
                name:'商品品牌',
                type:'pie',
                radius : ['10%','60%'],
                center :'center',
                roseType : 'radius',
                data:[
                    {value:43, name:'创维'},
                    {value:35, name:'三星'},
                    {value:30, name:'索尼'},
                    {value:23, name:'乐视'},
                    {value:28, name:'其他'}
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//初始化所涉主体投诉排行图
function initRanking(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart_ranking'));

    // 指定图表的配置项和数据

    var option = {

        tooltip: {
            trigger: 'item'
        },
        color:['#66c4ff'],
        xAxis: {
            type: 'category',
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick:
            {
                show:false
            },
            data: ['淘宝','天猫','京东','乐视','魅族','华为','小米','锤子','OPPO']
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: false
            },
            axisLabel: {
                show:false
            },
            axisTick:
            {
                show:false
            },
            splitLine: {
                show:false
            }
        },
        series: [
            {
                name: '投诉量',
                type: 'bar',
                barCategoryGap: '50%',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: '{b}\n{c}',
                        textStyle: {
                            color: '#000'
                        }
                    }
                },
                data: [170, 140, 280, 200, 143,150, 80, 220, 180]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//初始化涉诉主体分布图
function initDistribution(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart_distribution'));

    // 指定图表的配置项和数据

    function randomData() {
        return Math.round(Math.random()*500);
    }

    var option = {
        tooltip: {
            trigger: 'item',
            backgroundColor:'#303030'

        },
        dataRange: {
            show: false,
            min: 0,
            max: 500,
            color: ['orangered','yellow','lightskyblue'],
            text:['高','低'],   // 文本，默认为数值文本
            calculable : true
        },
        series: [
            {
                name: '涉诉主体数量',
                type: 'map',
                mapType: '甘肃',
                selectedMode : 'single',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '酒泉市',value: randomData()},
                    {name: '张掖市',value: randomData()},
                    {name: '甘南藏族自治州',value: randomData()},
                    {name: '武威市',value: randomData()},
                    {name: '陇南市',value: randomData()},
                    {name: '庆阳市',value: randomData()},
                    {name: '白银市',value: randomData()},
                    {name: '定西市',value: randomData()},
                    {name: '天水市',value: randomData()},
                    {name: '兰州市',value: randomData()},
                    {name: '平凉市',value: randomData()},
                    {name: '临夏回族自治州',value: randomData()},
                    {name: '金昌市',value: randomData()},
                    {name: '嘉峪关市',value: randomData()}
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}