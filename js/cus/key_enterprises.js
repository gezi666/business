/**
 * Created by yyg on 2016/12/28.
 */
$(document).ready(function(){
    ininMap();
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
                        { name: '安徽', value: 1 },
                        { name: '山东', value: 1 },
                        { name: '新疆', value: 6 },
                        { name: '江苏', value: 1 },
                        { name: '浙江', value: 1 },
                        { name: '江西', value: 2 },
                        { name: '湖北', value: 1 },
                        { name: '广西', value: 1 },
                        { name: '甘肃', value: 2 },
                        { name: '山西', value: 2 },
                        { name: '内蒙古', value: 1 },
                        { name: '陕西', value: 2 },
                        { name: '吉林', value: 2 },
                        { name: '福建', value: 2 },
                        { name: '贵州', value: 1 },
                        { name: '广东', value: 2 },
                        { name: '青海', value: 3 },
                        { name: '西藏', value: 1 },
                        { name: '四川', value: 1 },
                        { name: '宁夏', value: 1 },
                        { name: '海南', value: 2 },
                        { name: '台湾', value: 1 },
                        { name: '香港', value: 1 },
                        { name: '澳门', value: 2 }
                    ]
                }
            ]
        };
        myChartMap.setOption(option);
    }
});