function createSliderUI(id, defaultBegin, defaultEnd, min, max, changeFn, option) {
    var me = document.getElementById(id);
    if (me == null) return;

    option = option || {};

    var dateFormat = option.format || "yyyy-MM-dd";
    var offsetFontPath = option.offsetFontPath || 42;

    // Date format
    var format = function(date, fmt) {
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
    var intToDateFormat = function(val) {
        if (val instanceof Date) {
            return format(val, dateFormat);
        } else {
            return format(new Date(val), dateFormat);
        }
    };
    var sliderPath = function(date) {
        return (date.getTime() - min.getTime()) / (max.getTime() - min.getTime()) * 100 + "%"
    };

    var createDateSpan = function(date) {
        var span = document.createElement("SPAN");
        span.className = option.dateCls || "";
        span.style.position = "absolute";
        span.style.zIndex = 3;
        span.style.width = "100px";
        span.style.left = sliderPath(date);
        span.style.marginLeft = "-" + offsetFontPath + "px";
        span.style.marginTop = "2px";
        span.style.overflow = "hidden";
        span.style.whiteSpace = "nowrap";
        span.innerHTML = intToDateFormat(date);
        dateDiv.appendChild(span);
        return span;
    };
    var createMinDateSpan = function(date) {
        var span = document.createElement("SPAN");
        span.className = option.dateCls || "";
        span.style.position = "absolute";
        span.style.zIndex = 3;
        span.style.marginTop = "3px";
        span.innerHTML = intToDateFormat(date);
        dateDiv.appendChild(span);
        return span;
    };
    var createMaxDateSpan = function(date) {
        var span = document.createElement("SPAN");
        span.className = option.dateCls || "";
        span.style.position = "absolute";
        span.style.zIndex = 3;
        span.style.marginTop = "2px";
        span.style.left = "100%";
        span.style.marginLeft = "-" + (option.offsetFontPath * 2.1) + "px";
        span.innerHTML = intToDateFormat(date);
        dateDiv.appendChild(span);
        return span;
    };
    var setDateSpan = function(span, date) {
        span.style.left = sliderPath(date);
        span.innerHTML = intToDateFormat(date);
    };

    var slider = document.createElement("div");
    slider.id = id + "_slider";
    me.appendChild(slider);
    var dateDiv = document.createElement("div");
    dateDiv.style.position = "relative";
    me.appendChild(dateDiv);

    var spanStart = createDateSpan(defaultBegin);
    var spanEnd = createDateSpan(defaultEnd);

//    createMinDateSpan(min);
//    createMaxDateSpan(max);

    $("#" + slider.id).slider({
        animate: true,
        step: 1000 * 60 * 60 * 24,
        range: true,
        //最小值ֵ
        min: min.getTime(),
        //最大值ֵ
        max: max.getTime(),
        //初始值ֵ
        values: [defaultBegin.getTime(), defaultEnd.getTime()],
        //slide/change (slide:滑动触发 change：数据变更触发)
        //滑动监听
        slide: function(event, ui) {
            if (ui.value == ui.values[0]) {
                setDateSpan(spanStart, new Date(ui.value));
            } else if (ui.value == ui.values[1]) {
                setDateSpan(spanEnd, new Date(ui.value));
            }
        },
        //数值变化监听
        change: function(event, ui) {
            if (changeFn) changeFn(event, ui);
        }
    });
}