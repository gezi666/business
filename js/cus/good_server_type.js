/**
 * Created by yyg on 2016/12/28.
 */
$(document).ready(function(){
    ininMap();
    serverWarn();
    goodsWarn();
    function ininMap(){
        var dom = document.getElementById('map');
        var myChartMap = echarts.init(dom);
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
                formatter: "{a}<br/>{b}: {c}"
            },
            visualMap: {
                type:'piecewise',
                min: 0,
                max: 6,
                splitNumber:4,
                itemWidth:20,
                itemHeight:26,
                itemGap:4,
                left: '16%',
                bottom: '6%',
                text: ['高','低'],
                calculable: true,
                color:["#fc355f",'#fad562','#2cabf6','#51e6fc'],
                textStyle: {
                    color: '#fff'
                }
            },
            series: [
                {
                    name: '商品举报数量',
                    type: 'map',
                    mapType: 'china',
                    // roam: false,
                    itemStyle: {
                        normal: { label: { show: true,textStyle:{color:'#fff'}} },
                        emphasis: { label: { show: true} }
                    },
                    data: [
                        { name: '北京', value: 3 },
                        { name: '天津', value: 4 },
                        { name: '上海', value: 1 },
                        { name: '重庆', value: 3 },
                        { name: '河北', value: 2 },
                        { name: '河南', value: 1 },
                        { name: '云南', value: 2 },
                        { name: '辽宁', value: 2 },
                        { name: '黑龙江', value: 1 },
                        { name: '湖南', value: 1 },
                        { name: '安徽', value: 4 },
                        { name: '山东', value: 1 },
                        { name: '新疆', value: 3 },
                        { name: '江苏', value: 1 },
                        { name: '浙江', value: 5 },
                        { name: '江西', value: 2 },
                        { name: '湖北', value: 1 },
                        { name: '广西', value: 1 },
                        { name: '甘肃', value: 6 },
                        { name: '山西', value: 2 },
                        { name: '内蒙古', value: 4 },
                        { name: '陕西', value: 2 },
                        { name: '吉林', value: 2 },
                        { name: '福建', value: 2 },
                        { name: '贵州', value: 1 },
                        { name: '广东', value: 2 },
                        { name: '青海', value: 3 },
                        { name: '西藏', value: 1 },
                        { name: '四川', value: 3 },
                        { name: '宁夏', value: 4 },
                        { name: '海南', value: 2 },
                        { name: '台湾', value: 1 },
                        { name: '香港', value: 4 },
                        { name: '澳门', value: 2 }
                    ]
                }
            ]
        };
        myChartMap.setOption(option);
    }
    function serverWarn(){
        var opt= {
            chartId:'serverWarnId',
            color:['#059be9'],
            yAxis:["其他","中介服务","文化娱乐服务","旅游服务","租凭服务","装饰装修服务","修理维护服务","居民服务","住宿服务","餐饮"],
            values:[2893,2345,3656,3789,4678,2000,5785,5000,6200,6300]
        };
        warnChart(opt);
    }
    function goodsWarn(){
        var opt= {
            chartId:'goodsWarnId',
            color:['#fd5b76'],
            yAxis:["其他","运动娱乐用品","装修建材类","用生产资料类","交通工具类","食品类","日用百货类","机及配套设备","通用器材","家用电器类"],
            values:[1893,2345,3656,4789,5678,6000,6785,7000,7200,7300]
        };
        warnChart(opt);
    }
    function warnChart(opt){
        var dom = document.getElementById(opt.chartId);
        var myChartWarn = echarts.init(dom);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {
                    type : 'shadow'
                }
            },
            grid: {
                right: '7%',
                left:'20',
                bottom: '12%',
                top:'0',
                containLabel: true
            },
            yAxis: {
                type : 'category',
                axisLabel:{
                    interval: 0,
                    textStyle:{
                        fontSize:10,
                        color:'#929292'
                    }
                },
                data:opt.yAxis,
                splitLine: {
                    show: false
                }
            },
            xAxis: {
                type : 'value',
                splitLine:{
                    lineStyle:{
                        type:'dashed',
                        color:'rgba(5,155,233,0.6)'
                    }
                }
            },
            color:opt.color,
            series: [
                {
                    name: '数量',
                    type: 'bar',
                    stack: '总量',
                    barWidth : '50%',
                    data:opt.values
                }
            ]
        };
        myChartWarn.setOption(option);
    }
});