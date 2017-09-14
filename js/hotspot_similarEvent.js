/**
 * Created by 魏阁 on 2016/12/30.
 */
$(function(){
    intSimMap();       //初始化 涉事主体分布地图
});

//初始化 涉事主体分布地图
function intSimMap(){
    var myChart = echarts.init(document.getElementById('echart_simMap'));

    function randomData() {
        return Math.round(Math.random()*1000);
    }

    // 指定图表的配置项和数据
    var option = {
        tooltip: {
            trigger: 'item',
            backgroundColor:'#303030',
            formatter: "{a}<br/>{b}: {c}"
        },
        visualMap: {
            show: false,
            type:'piecewise',
            min: 0,
            max: 6,
            text: ['高','低'],
            calculable: true,
            color:["#ff3366",'#ffcc66','#3399ff','#66ffff']
        },
        series: [
            {
                name: '消费维权登记数量',
                type: 'map',
                mapType: 'china',
                // roam: false,
                itemStyle: {
                    normal: { label: { show: true,textStyle:{color:'#000'}} },
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

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}