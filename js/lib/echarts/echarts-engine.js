var serviceHost = 'http://www.zhu18.cn';
var localChartDataName = '/chartData.json';

var charts = {
    localData:null,
    init: function(params) {

        if (!params || !params.containerId || !params.id) {
            console.log("参数有误");
            return null;
        }

        //图表容器
        var $container = $.type(params.containerId) == "string" ?
            $("#" + params.containerId) : $(params.containerId);
        if ($container.length == 0) {
            console.log("图表容器" + params.containerId + "不存在");
            return null;
        }

        var myChart = echarts.init($container[0]);

        setOptions(myChart, params);
        return myChart;
    }
};

try{
    $.ajax({ //获取本地图表数据
        type: 'GET',
        url: localChartDataName,
        success: function(data) {
            charts.localData=eval(data);
        },
        error: function(e) {
        },
        async: false
    });
}catch(e){
    console.log(e);
}



//设置图表option
function setOptions(myChart, params) {

    if(!params.useOnline && charts.localData)
    {
        useLocalData(myChart, params);
    }
    else
    {
        useOnlineData(myChart, params);
    }
}

function useLocalData(myChart, params){
    var result={};
    $.each(charts.localData,function(){
        if(this.id==params.id)
            result.json=this.json;
    })

    if(result.json)
        buildChart(result,myChart,params);
    else
        useOnlineData(myChart, params);//本地不存在,尝试线上
}

function useOnlineData(myChart, params){
    $.ajax({ //获取图表option
        type: 'GET',
        url: serviceHost + '/api/chart/GetChart?id=' + params.id,
        success: function(result) {
            buildChart(result, myChart, params);
        },
        error: function(e) {
            console.log(e);
        }
    });
}

function buildChart(result,myChart,params){
    if (result == null || !result.json)
        console.log("获取图表id=" + params.id + " 的数据失败");

    var option;
    eval(result.json);
    console.log(option);
    if (params.option) option = $.extend(true, option, params.option);

    myChart.setOption(option, true);
}