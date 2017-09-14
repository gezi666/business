/*!
 * Bubble Cloud Chart v0.1.0
 * http://www.jusfoun.com/
 * http://vis.jusfoun.com/
 *
 * Copyright 2016, Jusfoun Data Wealth Inc.
 * All rights reserved.
 * http://www.jusfoun.com/license
 *
 * Includes D3.js
 * http://d3js.org/
 * Copyright 2010-2016 Mike Bostock
 * All rights reserved.
 *
 * Date: Wed Jun 22 2016 00:38:15 GMT+0800 (CST)
 *
 * WARNING: This is not a free software.
 */
(function (window) {
    if (typeof d3 === "undefined") throw new Error("Please include D3.js Library first.");
    /**
     * 泡沫云图.
     * 注意,此为DEMO,功能并不完善,组件化将在7月初进行.
     * @author Molay Chen
     * @constructor
     */
    function BubbleCloudChart() {
        this._force = d3.layout.force()
            .gravity(0)
            .charge(0)
            .on("tick", this._force_tickHandler.bind(this));
    }

    BubbleCloudChart.prototype = {
        constructor: BubbleCloudChart,
        /*** 此图形对应的绘制容器.* @type {Element}*/
        domElement: null,
        /*** 图形的宽.* @type {number}*/
        width: 100,
        /*** 图形的高.* @type {number}*/
        height: 100,
        /*** 泡沫的最小半径.* @type {number}*/
        minRadius: 10,
        /*** 泡沫的最大半径.* @type {number}*/
        maxRadius: 50,
        /*** 名称的最小半径.* @type {number}*/
        minFontSize: 10,
        /*** 名称的最大半径.* @type {number}*/
        maxFontSize: 20,
        /**
         * 自定义分类信息.
         * 分类信息需具备如下结构:
         * name - 分类名称
         * color - 分类颜色
         * @type {Array}
         */
        categories: null,
        /*** 自定义泡沫名称获取方法,可指定每个泡沫的名称.* @type {function}*/
        labelFunction: null,
        /*** 自定义泡沫权重获取方法,可指定每个泡沫的权重,将依据权重比率自动设置泡沫尺寸.* @type {function}*/
        weightFunction: null,
        /** * 自定义泡沫分类获取方法.* @type {function}*/
        categoryFunction: null,
        /** * 点击事件监听.* @type {function}*/
        clickHandler: null,
        /*** 自定义绘制方法,若未设置则使用默认方法.* @type {function}*/
        customDrawFunction: null,
        /*** 泡沫间扩散距离的填充,可影响泡沫云图的疏密度.* @type {number}*/
        collisionPadding: 20,
        /*** 泡沫间的最小扩散距离,可影响泡沫云图的疏密度.* @type {number}*/
        minCollisionRadius: 10,

        _jitter: 0.618,
        _force: null,
        _categoryMap: null,
        _svg: null,
        _bubbles: null,
        _legend: null,
        _radiusScale: null,
        _fontSizeScale: null,

        init: function () {
            var _this = this;

            this._radiusScale = d3.scale.linear().range([this.minRadius, this.maxRadius]);
            this._fontSizeScale = d3.scale.linear().range([this.minFontSize, this.maxFontSize]);

            this._force.size([this.width, this.height]);

            d3.select(this.domElement).selectAll().remove();

            this._svg = d3.select(this.domElement)
                .append("svg")
                .attr("width", this.width)
                .attr("height", this.height);

            this._categoryMap = {};
            if (this.categories) this.categories.forEach(function (c) {
                _this._categoryMap[c.name] = c;
            });

            this._legend = this._svg.append("g").attr("transform", "translate(20, 20)");
            if (this.categories) this.categories.forEach(function (c, i) {
                if (!c.name) return;
                _this._legend.append("circle")
                    .attr({
                        r: 9,
                        transform: "translate(" + (i * 150) + ", 0)",
                        fill: c.color
                    });
                _this._legend.append("text")
                    .text(c.name)
                    .attr({
                        transform: "translate(" + (20 + i * 150) + ", 0)",
                        fill: "#000",
                        "font-size": "12px",
                        //"text-anchor": "middle",
                        dy: ".3em"
                    });
            });
        },

        _data: null,
        data: function (value) {
            if (arguments.length < 1) return this._data;
            this._data = value;

            var _this = this;

            var labelFunction = this.labelFunction || function (d) {
                    return d.label || "";
                };
            var weightFunction = this.weightFunction || function (d) {
                    return d._weight || 1;
                };
            var categoryFunction = this.categoryFunction || function (d) {
                    return d.category || "";
                };

            this._radiusScale.domain([
                d3.min(this._data, weightFunction),
                d3.max(this._data, weightFunction)
            ]);

            this._fontSizeScale.domain([
                d3.min(this._data, weightFunction),
                d3.max(this._data, weightFunction)
            ]);

            this._svg.selectAll(".node").remove();

            this._bubbles = this._svg.selectAll(".node")
                .data(this._data)
                .enter()
                .append("g")
                .attr("class", "node")
                .style("cursor", "pointer")
                .on("click", function (d) {
                    if (_this.clickHandler instanceof Function) _this.clickHandler.call(null, d);
                });

            if (this.customDrawFunction instanceof Function) {
                this._bubbles.each(function (d) {
                    var radius = _this._radiusScale(weightFunction(d));
                    var c = _this._categoryMap[categoryFunction(d)];
                    var color = c ? c.color : "#000000";
                    return _this.customDrawFunction(d3.select(this), d, radius, color);
                });
            }
            else {
                this._bubbles.append("circle")
                    .attr("r", function (d) {
                        return _this._radiusScale(weightFunction(d));
                    })
                    .style("fill", function (d) {
                        var c = _this._categoryMap[categoryFunction(d)];
                        if (!c) c = _this.categories[Math.floor(Math.random() * _this.categories.length)];
                        if (c) return c.color;
                        return "#000000";
                    });
            }
            this._bubbles.append("text")
                .attr({
                    "text-anchor": "middle",
                    dy: ".3em"
                })
                .attr("font-size", function (d) {
                    return _this._fontSizeScale(weightFunction(d));
                })
                .attr("fill", "#FFFFFF")
                .text(labelFunction);

            this._force.nodes(this._data).start();

            this._data.forEach(function (d, i) {
                d.fr = Math.max(_this.minCollisionRadius, _this._radiusScale(weightFunction(d)));
            });
        },

        _force_tickHandler: function (e) {
            this._bubbles.each(this._gravity(e.alpha * 0.1))
                .each(this._collide(this._jitter))
                .attr("transform", function (d) {
                    return "translate(" + d.x + "," + d.y + ")"
                });
        },

        _gravity: function (a) {
            var cx = this.width / 2;
            var cy = this.height / 2;
            var ax = a / 4;
            var ay = a;

            return function (d) {
                d.x += (cx - d.x) * ax;
                d.y += (cy - d.y) * ay;
            }
        },

        _collide: function (j) {
            var data = this._data;
            var collisionPadding = this.collisionPadding;
            return function (d) {
                data.forEach(function (d2) {
                    if (d !== d2) {
                        var x = d.x - d2.x;
                        var y = d.y - d2.y;
                        var dis = Math.sqrt(x * x + y * y);
                        var minDis = d.fr + d2.fr + collisionPadding;
                        if (dis < minDis) {
                            dis = (dis - minDis) / dis * j;
                            var mx = x * dis;
                            var my = y * dis;
                            d.x -= mx;
                            d.y -= my;
                            d2.x += mx;
                            d2.y += my;
                        }
                    }
                });
            }
        }
    };

    if (window) window.BubbleCloudChart = BubbleCloudChart;
})(window);