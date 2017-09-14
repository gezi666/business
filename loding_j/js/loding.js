var Loding = function(config){

	this.config = {
		dom:'body',
		tips:false,
		animation:'ball-pulse',
		image:false,
		overtime:{time:false,callback:function(){}},
		stop:{open:false,callback:function(){}}
	}

	if (config && $.isPlainObject(config)) {
		$.extend(true,this.config, config);
	}
	this.dom = this.config.dom;
	if (this.dom) { this.initDom(); }else{ return }
};

Loding.prototype = {

	initDom:function(){
		var _this = this;
		var tips = this.config.tips,
			stop = this.config.stop,
			animation = this.config.animation,
			image = this.config.image;

		//动画节点数组
		var aTypeArr = [];
			aTypeArr['ball-pulse'] = 3,
			aTypeArr['ball-grid-pulse'] = 9,
			aTypeArr['ball-clip-rotate'] = 1,
			aTypeArr['ball-clip-rotate-pulse'] = 2,
			aTypeArr['square-spin'] = 1,
			aTypeArr['ball-clip-rotate-multiple'] = 2,
			aTypeArr['ball-pulse-rise'] = 5,
			aTypeArr['line-scale'] = 6,
			aTypeArr['ball-scale-multiple'] = 3,
			aTypeArr['ball-pulse-sync'] = 3,
			aTypeArr['ball-beat'] = 3,
			aTypeArr['ball-spin-fade-loader'] = 8,
			aTypeArr['line-spin-fade-loader'] = 8,
			aTypeArr['triangle-skew-spin'] = 1,
			aTypeArr['pacman'] = 5,
			aTypeArr['semi-circle-spin'] = 1,
			aTypeArr['ball-triangle-path'] = 3;

	 	this.shade = $('<div class="shade"></div>'),
	 	this.lodingWarp = $('<div class="lodingWarp"></div>'),
		this.lodingBox = $('<div class="lodingBox"></div>');

		
		if(image){
			this.imgBox = $('<div class="imgBox" ></div>'),
			this.lodingImg = $('<img class="lodingImg" src="'+image+'">');
			this.imgBox.append(this.lodingImg);
			this.lodingBox.append(this.imgBox).append(this.tipsBox);
		}else{
			var aNodeNum = aTypeArr[animation];

			if (!aNodeNum) { 
				console.warn('动画类型错误!'); 
				aNodeNum = aTypeArr['ball-pulse'];
				animation = 'ball-pulse'; 
			}

			this.loaderInner = $('<div class="loader-inner '+animation+'"></div>');

			for (var i = 0; i < aNodeNum; i++) {
				this.loaderInner.append($('<div></div>'));
			}

			this.lodingBox.append(this.loaderInner);
		}
		
		if (tips) { this.lodingBox.append($('<div class="tipsBox">'+tips+'</div>')); }

		if (stop.open) { 
			this.lodingWarp.click(function(event) {
				_this.stop();
				setTimeout(function() {
					stop.callback();
				},100);
			});
			
		}
		this.lodingWarp.append(this.lodingBox);
	},
	start:function(){
		var _this = this,
			overtime = _this.config.overtime;

		$(this.dom).append(this.shade).append(this.lodingWarp);
		
		if (overtime.time && overtime.time > 0) { _this.overTime(overtime);}
	},
	stop:function(){
		var _this = this;
			_this.lodingWarp.remove();
			_this.shade.remove();
		_this.overTime();	//加载停止结束计时器
	},
	overTime:function(overtime){
		var _this = this;
		if (!overtime) {clearInterval(_this.timer); return } //没有传参时停止计时器
		var i = 0;
		_this.timer = setInterval(function(){ //设置定时器
			i++;if (i>=overtime.time) { clearInterval(_this.timer); _this.stop(); overtime.callback();}
			//console.log(i);
		},1000);
	}
}