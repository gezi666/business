;
(function(window) {

    var LoadingTip = function(obj, type) {
        this.dom = '';
        var reg = /^[#.][0-9a-zA-Z_-]+$/
        if (!reg.test(obj)) {
            console.error('Please enter the correct node such as class and ID!')
            return false;
        }
        if (obj.substr(0, 1) == "#") {
            this.dom = document.getElementById(obj.substr(1))
        } else if (obj.substr(0, 1) == ".") {
            this.dom = document.getElementsByClassName(obj.substr(1))
        }
        this.id = "";
        this.loadDom = ''
        this.tip(obj, type);
        this.loadCss();
    };

    LoadingTip.prototype = {
        isIe: function() {
            var DEFAULT_VERSION = "8.0";
            var ua = navigator.userAgent.toLowerCase();
            var isIE = ua.indexOf("msie") > -1;
            var safariVersion;
            if (isIE) {
                safariVersion = ua.match(/msie ([\d.]+)/)[1];
                if (safariVersion <= DEFAULT_VERSION) {
                    return true
                } else {
                    // alert(2)
                    return false
                }
            } else {
                // alert(3)
                return false
            }

        },
        loadCss: function() {
            var baseurl='';
            var base = document.scripts;
            for (var i=0;i<base.length;i++) {
                if (/loadingTip.js/.test(base[i].src)) {
                    baseurl=base[i].src.substr(0,base[i].src.indexOf("loadingTip.js")); 
                }
            }
            var cssTag = document.getElementById('loadCss');
            var head = document.getElementsByTagName('head').item(0);
            if (cssTag) return;
            css = document.createElement('link');
            css.href = baseurl+"/css/loadingTip.css";
            css.rel = 'stylesheet';
            css.type = 'text/css';
            css.id = 'loadCss';
            head.appendChild(css);
        },
        showType: function(obj, type) {
            var loading = document.createElement('div')
            if (!this.isIe()) {
                if (!type || type == 1) {
                    loading.className = 'loading'
                } else if (type == 2) {
                    for (var i = 0; i < 6; i++) {
                        loading.appendChild(document.createElement('div'));
                    }
                    loading.className = 'loading2'
                } else if (type == 3) {
                    for (var i = 0; i < 3; i++) {
                        loading.appendChild(document.createElement('span'));
                    }
                    loading.className = 'code csshub-108-loader'
                } else if (type == 4) {
                    loading.className = 'csshub-102-loading'
                }
            } else {
                var text = document.createTextNode('数据加载中...')
                loading.appendChild(text)
            }
            return loading;
        },
        createDom: function(obj, type) {
            if (this.dom.length) {
                for (var i = 0; i < this.dom.length; i++) {
                    if (!this.dom[i].style.position) {
                        this.dom[i].style.position = "relative"
                    }
                    var div = document.createElement('div');
                    div.className = 'load-mark'
                    div.appendChild(this.showType(obj, type));
                    this.dom[i].appendChild(div);
                    div.id = "loading" + Math.floor(Math.random() * 100)
                    this.id = div.id
                }

            } else {
                if (!this.dom.style.position) {
                    this.dom.style.position = "relative"
                }
                var div = document.createElement('div');
                div.className = 'load-mark'
                div.appendChild(this.showType(obj, type));
                this.dom.appendChild(div);
                div.id = "loading" + Math.floor(Math.random() * 100)
                this.id = div.id
            }

        },
        tip: function(obj, type) {
            this.createDom(obj, type);
        },
        close: function(i) {
            if (this.dom.length > 1) {
                if (i) {
                    this.dom[i].removeChild(this.dom[i].getElementsByClassName('load-mark')[0])
                } else {
                    for (var i = 0; i < this.dom.length; i++) {
                        this.dom[i].removeChild(this.dom[i].getElementsByClassName('load-mark')[0])
                    }
                }
            } else {
                this.dom.removeChild(document.getElementsByClassName('load-mark')[0])
            }
        }
    }

    window.LoadingTip = LoadingTip;
}(window));
