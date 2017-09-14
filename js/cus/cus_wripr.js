/**
 * Created by yyg on 2016/12/27.
 */
$(document).ready(function(){
    $('.y_select select').select2();
    $('.ranking').mCustomScrollbar({
        axis:"y", // vertical and horizontal scrollbar
        theme:"minimal-dark",
        autoHideScrollbar:true
    });
    initMap();
    function initMap(){
        var map = new BMap.Map("mapId");    // 创建Map实例
        map.centerAndZoom(new BMap.Point(103, 38), 5);  // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        map.setCurrentCity("甘肃省");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        $('#searchMap').on('click',function(){
            var searchValue = $.trim($('#mapInput').val());
            var bdary = new BMap.Boundary();
            bdary.get(searchValue, function(rs){       //获取行政区域
                map.clearOverlays();        //清除地图覆盖物
                var count = rs.boundaries.length; //行政区域的点有多少个
                for(var i = 0; i < count; i++){
                    var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 1,fillColor:'rgba(0,0,255,0.1)', strokeColor: "#0000ff"}); //建立多边形覆盖物
                    map.addOverlay(ply);  //添加覆盖物
                    //map.setViewport(ply.getPath()); //调整视野
                }
            });
        });
        $('#searchMap').trigger('click');
    }
});