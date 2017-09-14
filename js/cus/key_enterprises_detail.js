/**
 * Created by yyg on 2016/12/27.
 */
$(document).ready(function(){
    $('.y_select select').select2();
    $("#pagination").pagination(56, {
        num_edge_entries: 2,
        num_display_entries: 4,
        prev_text:'<',
        next_text:'>',
        callback: function(){},
        items_per_page:1
    });
    initHotPoint();
    function initHotPoint(){
        var param = [
            {name:'尾气门',value:38},
            {name:'超级理财',value:138},
            {name:'虚假承诺',value:238},
            {name:'拖欠工资',value:88},
            {name:'一万赚十万',value:238},
            {name:'天价鱼',value:180}
        ];
        var colors = ['#ff3366','#339966','#cc6699','#3399cc','#0099ff','#3366ff'];
        var data = [];
        for(var i=0;i<param.length;i++){
            data.push({
                value:param[i].value,
                name:param[i].name,
                itemStyle : {
                    normal : {
                        color :colors[i]
                    }
                }
            });
        }
        var myChart = echarts.init(document.getElementById('hotPointId'));
        var option = {
            series: [{
                type: 'graph',
                layout: 'force',
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
        myChart.setOption(option);
        myChart.on('click',function(p){
            popLayer('#popId');
        });
    }
    function popLayer(select){
        var height = $(select).height() + 96+ 'px';
        var pagination = '<div class="pagination fr" id="paginationPop"></div>';
        layer.open({
            type: 1,
            btnAlign: 'l',
            title:['投诉明细','height: 46px;line-height:46px;font-size:18px;background: #fff;'],
            area: ['420px', height], //宽高
            shadeClose: true,
            content: $(select).html()+pagination,
            success: function(layero){
                $("#paginationPop").pagination(11, {
                    num_edge_entries: 2,
                    num_display_entries: 4,
                    prev_text:'<',
                    next_text:'>',
                    callback: function(){},
                    items_per_page:1
                });
            }
        });
    }
});