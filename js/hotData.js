var myTemplate = Handlebars.compile($("#table-template").html());
var myTemplate2 = Handlebars.compile($("#table-template2").html());
$(function(){
	// //设置地区
	var addressUrl=baseURl+"/selectRegionPojo/getRegions";
	var typeUrl=baseURl+"/selectIndustryPojo/getIndustries";
	setAd(addressUrl,"#address",'全省');
	setAd(typeUrl,"#type",'商品服务类型');

	cy();

	//http://192.168.20.166:8080/hotpointbubbles/graph?code=12700000&areaCode=620100&startYM=2014-05-01&2015-05-01
	//市场投诉热点 - select
	function setAd(url,obj,oneName){
		oneName = (oneName==null||oneName==undefined)?'全部':oneName;
		$.ajax({
			type:"GET",
			url: url,
			dataType:"json",
			success: function(msg){
				var li="<option value=''>"+"&nbsp;"+oneName+"</option>";
				var list=msg.list;
				var name = null;
				for(var i=0;i<list.length;i++){
					name = list[i].name;
					if (url == addressUrl) name = getRName(name);
					li+="<option value="+list[i].code+">"+"&nbsp;"+name+"</option>";
				}
				$(obj).html(li);
				$(obj).dropkick({
					change: function (value,label){
						$.ajax({
							url: baseURl+"/hotpointbubbles/graph",
							dataType:"json",
							data:{
								startYM:$("#date-slider_slider").next("div").find("span").eq(0).html(),
								endYM:$("#date-slider_slider").next("div").find("span").eq(1).html(),
								areaCode:$("#address").val(),
								typeCode:$("#type").val()
							},
							success: function(msg){
								chart.data(msg.datas);
							}
						});
					}
				});
			}
		});
	}
	//市场投诉热点 - 强制消费类投诉涉及商品服务排行柱图
	//http://192.168.20.166:8080/complaintHotPointPojo/getList?param1=3&param2=2013-05&param3=2016-05&param4=16500000&param5=621100
	//参数：
	//param1：热点ID(1,2,3)
	//param2：开始时间（YYYY-MM-DD）
	//param3：结束时间（YYYY-MM-DD）
	//param4：服务及商品类型代码
	//param5：区域代码
	function getColumn(param1){
		var data={
			param1:param1,
			param2:$("#date-slider_slider").next("div").find("span").eq(0).html(),
			param3:$("#date-slider_slider").next("div").find("span").eq(1).html(),
			param5:$("#address").val(),
			param4:$("#type").val()
		};
		$.ajax({
			type:"GET",
			url: baseURl+"/complaintHotPointPojo/getList",
			dataType:"json",
			data:data,
			success: function(msg){
				var data1=[];
				var data2=[];
				for (var i = 0;i<msg.list.length;i++) {
					data1[i]=msg.list[i].name;
					data2[i]=msg.list[i].value;
				}
				$("#v3").html(msg.list.length+"件");
				option1.xAxis.data=data1;
				option1.series[0].data=data2;
				var myChart1 = echarts.init(document.getElementById('market_bar'));
				myChart1.setOption(option1);
			}
		});
	}
	//市场投诉热点 - 强制消费投诉列表表格
	//http://192.168.20.166:8080/hotPointPojo/getList?param1=3&param2=620500&param3=12701013&param4=2013-05&param5=2016-05
	//传参：
	//param1：热点ID(1,2,3)
	//param2：区域代码:
	//param3：行业代码:
	//param4：开始时间 YYYY-MM-DD
	//param5：结束时间 YYYY-MM-DD
	function getClist(obj,param1){
		var data={
			param1:param1,
			param2:$("#address").val(),
			param3:$("#type").val(),
			param4:$("#date-slider_slider").next("div").find("span").eq(0).html(),
			param5:$("#date-slider_slider").next("div").find("span").eq(1).html()
		};
		$.ajax({
			type:"GET",
			url: baseURl+"/hotPointPojo/getList",
			dataType:"json",
			data:data,
			success: function(msg){
				var list=msg.dataList;
				var tr="";
				for(var i=0;i<msg.dataList.length;i++){
					tr+="<tr>"+
						"<td>"+list[i].optime+"</td>"+
						"<td id="+list[i].id+" class='Hide' title="+list[i].title+">"+list[i].title+"</td>"+
						"<td>"+list[i].subject+"</td></tr>";
				}
				$(obj).html(tr);
			}
		});
	}
	//网络舆情热点 - 声量图
	//请求链接?id=1
	//请求方式：get
	//传参：
	function getline(param1){
		var data={
			id:1
		};
		$.ajax({
			type:"GET",
			url: baseURl+"/hotpointbubbles/volume",
			dataType:"json",
			data:data,
			success: function(msg){
				test1(msg)
			}
		});
	}
	//网络舆情热点 -  本省最近一月类似投诉 表格
	//http://192.168.20.166:8080/hotPointPojo/getList2?param1=3
	//传参：
	//param1：热点ID(1,2,3)
	function getClist2(obj,param1){
		var data={
			id:param1
		};
		$.ajax({
			type:"GET",
			url: baseURl+"/hotPointPojo/getList2",
			dataType:"json",
			data:data,
			success: function(msg){
				var list=msg.dataList;
				var tr="";
				for(var i=0;i<msg.dataList.length;i++){
					tr+="<tr>"+
						"<td>"+list[i].optime+"</td>"+
						"<td id="+list[i].id+" class='title' style='cursor:pointer'>"+list[i].title+"</td>"+
						"<td>"+list[i].subject+"</td></tr>";
				}
				$(obj).html(tr);
			}
		});
	}
	//网络舆情热点 - 详细信息
	//请求链接：http://192.168.20.166:8180/hotpointbubbles/detail?id=1
	//请求方式：get
	//传参：
	//id  舆情信息ID
	function getP(param1){
		var data={
			id:1
		};
		$.ajax({
			type:"GET",
			url:baseURl+"/hotpointbubbles/detail",
			dataType:"json",
			data:data,
			success: function(msg){
				$("#fl2 .sky_price").eq(0).html(msg.dates.name);
				$("#fl2 h5 .sky_price").eq(0).html(msg.dates.name);
				$("#fl2 .hot_event").html(msg.dates.description);
			}
		});
	}
	//电商问题热点-电商假冒产品涉及商品服务排行 （第一个柱图）
	// http://192.168.16.216:8180/hotSpotProblemPojo/searchBarsData?param1=9&param2=2014-01&param3=2016-01
	function getColumn3(param1){
		var data={
			param1:param1,
			param2:$("#date-slider_slider").next("div").find("span").eq(0).html(),
			param3:$("#date-slider_slider").next("div").find("span").eq(1).html()
		};
		$.ajax({
			type:"GET",
			url: baseURl+"/hotSpotProblemPojo/searchBarsData",
			dataType:"json",
			data:data,
			success: function(msg){
				var data1=[];
				var data2=[];
				for (var i = 0;i<msg.datalist.length;i++) {
					data1[i]=msg.datalist[i].name;
					data2[i]=msg.datalist[i].value;
				}
				$("#v1").html(msg.datalist.length+"件");
				option3.xAxis[0].data=data1;
				option3.series[0].data=data2;
				var myChart1 = echarts.init(document.getElementById('problem_bar1'));
				myChart1.setOption(option3);
			}
		});
	}
	//电商问题热点-本省假冒产品投诉（第2个柱图）
	//http://192.168.16.216:8180/hotSpotProblemPojo/searchBarsData2?param4=9&param1=2014-01&param2=2016-01&param3=620000
	//http://192.168.16.216:8180//hotSpotProblemPojo/searchBarsData2?param4=9&param3=&param1=2016-03-01&param2=2016-05-01
	function getColumn4(param1){
		var data={
			param4:param1,
			param3:$("#address").val(),
			param1:$("#date-slider_slider").next("div").find("span").eq(0).html(),
			param2:$("#date-slider_slider").next("div").find("span").eq(1).html()
		};
		$.ajax({
			type:"GET",
			url: baseURl+"/hotSpotProblemPojo/searchBarsData2",
			dataType:"json",
			data:data,
			success: function(msg){
				var data1=[];
				var data2=[];
				for (var i = 0;i<msg.datalist.length;i++) {
					data1[i]=msg.datalist[i].name;
					data2[i]=msg.datalist[i].value;
				}
				$("#v2").html(msg.datalist.length+"件");
				option4.xAxis[0].data=data1;
				option4.series[0].data=data2;
				var myChart1 = echarts.init(document.getElementById('problem_bar2'));
				myChart1.setOption(option4);
			}
		});
	}
	//电商问题热点-本省假冒产品投诉 -投诉列表
	//http://192.168.16.216:8180/hotSpotProblemPojo/searchLists?param1=9&param2=620500&param3=16501013&param4=2013-05&param5=2016-05
	function getList_3(param1){
		var data={
			param1:param1,
			param2:$("#address").val(),
			param3:$("#type").val(),
			param4:$("#date-slider_slider").next("div").find("span").eq(0).html(),
			param5:$("#date-slider_slider").next("div").find("span").eq(1).html()
		};
		$.ajax({
			type:"GET",
			url: baseURl+"/hotSpotProblemPojo/searchListsData",
			dataType:"json",
			data:data,
			success: function(msg){
				$('#l1 tbody').html(myTemplate(msg));
			}
		});
	}
	//电商问题热点-电商假冒产品涉及商品服务排行 -列表
	//http:/192.168.16.216:8180/hotSpotProblemPojo/searchListsData?param1=9&param2=2013-05&param3=2016-05
	function getList_4(param1){
		var data={
			param1:param1
		};
		$.ajax({
			type:"GET",
			url: baseURl+"/hotSpotProblemPojo/searchLists",
			dataType:"json",
			data:data,
			success: function(msg){
				$('#l2 tbody').html(myTemplate2(msg));
			}
		});
	}
	// 词云
	function cy(){
		var width = 1200;
		var height = 600;
		var data = "";
		// 演示开始
		chart = new BubbleCloudChart();
		chart.domElement = document.getElementById("container");
		chart.width = width;
		chart.height = height;
		chart.minRadius = 20;
		chart.maxRadius = 50;
		chart.minFontSize = 10;
		chart.maxFontSize = 25;
		chart.collisionPadding = 10;
		chart.minCollisionRadius = 50;
		chart.legend=false;
		chart.categories = [
			{name: "投诉问题热点", color: "#fb3266"},
			{name: "电商问题热点", color: "#e3d400"},
			{name: "网络舆情热点", color: "#02a7d1"}
		];
		chart.labelFunction = function (d) {
			return d.name;
		};
		// 注意,目前数据中不能使用weight保留字作为字段名!
		chart.weightFunction = function (d) {
			return d.size;
		};
		chart.categoryFunction = function (d) {
			return d.category;
		};
		chart.clickHandler = function (d) {
			clFn(d)
		};
		$.ajax({
			url: baseURl+"/hotpointbubbles/graph",
			async: false,
			dataType:"json",
			success: function(msg){
				chart.init();
				chart.data(msg.datas);
			}
		});
		// 创建滑块(样式需要自行调整).
		var min = new Date("2016/01/01");
		var max = new Date();

		var defaultBegin = new Date("2016/03/01");
		var defaultEnd = new Date("2016/04/31");

		//测试
		/*    var min = new Date("2015/01/01");
		 var max = new Date("2015/12/31");

		 var defaultBegin = new Date("2015/03/01");
		 var defaultEnd = new Date("2015/04/31");     */
		var s = function(event, ui) {
			var startDate = new Date(ui.values[0]);
			var endDate = new Date(ui.values[1]);
			$.ajax({
				url: baseURl+"/hotpointbubbles/graph",
				dataType:"json",
				data:{
					startYM:$("#date-slider_slider").next("div").find("span").eq(0).html(),
					endYM:$("#date-slider_slider").next("div").find("span").eq(1).html(),
					areaCode:$("#address").val(),
					typeCode:$("#type").val()
				},
				success: function(msg){
					chart.data(msg.datas);
				}
			});
		};
		var ss = {
			format: "yyyy-MM-dd",
			dateCls: "dateSpan",
			offsetFontPath: 32
		};
		//测试
		createSliderUI("date-slider", defaultBegin, defaultEnd, min, max, s, ss);
		$(".dateSpan").eq(2).hide();
		$(".dateSpan").eq(3).hide()
	}

	function clFn(data){
		var data = data;
		if (data.category==="投诉问题热点") {
			//弹窗切换
			$("#fl1").slideDown();
			$("#fl2").slideUp();
			$("#fl3").slideUp();
			//获取表格信息
			getClist("#fl1 .hBox-table1 tbody",data.id);
			//获取柱形图
			getColumn(data.id)
		}else if(data.category==="网络舆情热点"){
			//弹窗切换
			$("#fl2").slideDown();
			$("#fl1").slideUp();
			$("#fl3").slideUp();
			//获取表格信息
			getClist2("#fl2 #hBox-table1 tbody",data.id);
			//获取折线图
			getline(data.id);
			getP(data.id)

		}else if(data.category==="电商问题热点"){
			//弹窗切换
			$("#fl3").slideDown();
			$("#fl1").slideUp();
			$("#fl2").slideUp();
			getColumn3(data.id);
			getColumn4(data.id);
			getList_3(data.id);
			getList_4(data.id)
		}
	}

	$(".hBox-table1").delegate('.title','click',function(){
		getDetail($(this).attr("id"));
		$("#fl4").slideDown();
		$("#fl2").slideUp();
		$("#fl1").slideUp();
		$("#fl3").slideUp();
	})
});

function getDetail(id){
	$.ajax({
		url:baseURl+"complaint/getComplaintById?id="+id,
		success:function(data){
			$("#fl4 .details-title").html(data.title);
			$("#fl4 .v1").html(data.subject);
			$("#fl4 .v2").html(data.opTime);
			$("#fl4 .v3").html(data.complainant);
			$("#fl4 .v4").html(data.complain)
		}
	})
}








