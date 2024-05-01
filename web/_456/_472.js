
function _7233(_7024, _7025, _2090, _2124, _6621, _6622, _7026, _7027, _7028, _7029, _7030, _7031, _7008 = "0 128 0", _7229=false,_7032 = 0)
{
    
    
    
    
    
    
    
    
    
    
    
    _7024.style.display = "inline-block";
    _7024.style.width = _2090;
    _7024.style.height = _2124;
    _7024.style.overflow = "hidden";

    let _7033;
    _7033 = 55;
    let _7034, _7035, _7036, _7037;
    if (_6621)
        _7034 = 70;
    else
        _7034 = 10;
    if (_6622)
        _7035 = 70;
    else
        _7035 = 10;
    if (_7026)
        _7036 = 35;
    else
        _7036 = 10;
    if (_7027)
        _7037 = 35;
    else
        _7037 = 10;
    
    
    let _7038;
    _7038 = document.createElement("div");
    _7038._7024 = _7024;
    _7024.appendChild(_7038);
    _7038.style.width = "100%";
    _7038.style.height = "100%";
    _7038.style.position = "relative";

    if (_6621)
    {
        _7024._7013 = function (_7039)
        {
            _6621 = _7039;
            let _824;
            _824 = "<div style='width:100%;height:100%;position:relative;'>";
            for (let _754 = 0; _754 < _7039.length; _754++)
            {
                let _7040;
                _7040 = _7039[_754];
                let y;
                y = _754 / (_7039.length - 1);
                y = 1 / 20 + (1 - 2 * 1 / 20) * y;
                _824 += "<div style='position: absolute; top: " + (100 * y) + "%; transform: translateY(-50%); width:100%; text-align:right;'>" + _7040 + "&nbsp-</div>\r\n";
            }
            _824 += "</div>";
            _7024._7041.innerHTML = _824;
        }
        let _7041;
        _7041 = document.createElement("div");
        _7041._7024 = _7024;
        _7024._7041 = _7041;
        _7038.appendChild(_7041);
        _7041.style.width = _7034 + "px";
        _7041.style.height = "100%";
        _7041.style.position = "absolute";
        _7041.style.left = "0px";
        _7041.style.top = "-2px";
        _7041.style.boxSizing = "border-box";
        _7041.style.paddingTop = _7036 + "px";
        _7041.style.paddingBottom = _7037 + "px";
        _7024._7013(_6621);
    }
    if (_6622)
    {
        _7024._7014 = function (_7039)
        {
            _6622 = _7039;
            let _824;
            _824 = "";
            for (let _754 = 0; _754 < _7039.length; _754++)
            {
                let _7040;
                _7040 = _7039[_754];
                let y;
                y = _754 / (_7039.length - 1);
                y = 1 / 20 + (1 - 2 * 1 / 20) * y;
                _824 += "<span style='position: absolute; top: " + (100 * y) + "%; transform: translateY(-50%);'>-&nbsp" + _7040 + "</span>\r\n";
            }
            _7024._7042.innerHTML = _824;
        }
        
        
        
        let _7043;
        _7043 = document.createElement("div");
        _7043._7024 = _7024;
        _7038.appendChild(_7043);
        _7043.style.width = "100%";
        _7043.style.height = "100%";
        _7043.style.position = "absolute";
        _7043.style.left = "0px";
        _7043.style.top = "-2px";
        _7043.style.boxSizing = "border-box";
        _7043.style.paddingTop = _7036 + "px";
        _7043.style.paddingBottom = _7037 + "px";
        let _824;
        _824 = "";
        _824 += "<nobr>";
        _824 += "<span style='display:inline-block;width:100%;height:100%;'></span>";
        _824 += "<span style='width:100%;height:100%;position:relative;display:inline-block;left:-" + (_7033 + _7035) + "px;'>";
        _824 += "</span>\r\n";
        _824 += "</nobr>\r\n";
        _7043.innerHTML = _824;
        _7024._7042 = _7043.getElementsByTagName("span")[1];
        _7024._7014(_6622);
    }
    if (_7026)
    {
        let _7044;
        _7044 = document.createElement("div");
        _7044._7024 = _7024;
        _7038.appendChild(_7044);
        _7044.style.width = "100%";
        _7044.style.height = _7036 + "px";
        _7044.style.position = "absolute";
        _7044.style.left = "0px";
        _7044.style.top = "0px";
        _7044.style.boxSizing = "border-box";
        _7044.style.paddingLeft = _7034 + "px";
        _7044.style.paddingRight = (_7033 + _7035) + "px";
        let _824;
        _824 = "<div style='width:100%;height:100%;position:relative;'>";
        for (let _754 = 0; _754 < _7026.length; _754++)
        {
            let _7040;
            _7040 = _7026[_754];
            _824 += "<div style='text-align:center;position: absolute; left: " + (100 * _754 / (_7026.length - 1)) + "%; transform: translateX(-50%); width:100%;'>" + _7040 + "<br/>╵</div>\r\n";
        }
        _824 += "</div>";
        _7044.innerHTML = _824;
    }
    if (_7027)
    {
        
        
        
        let _7045;
        _7045 = document.createElement("div");
        _7045._7024 = _7024;
        _7038.appendChild(_7045);
        _7045.style.width = "100%";
        _7045.style.height = "100%";
        _7045.style.position = "absolute";
        _7045.style.left = "0px";
        _7045.style.top = "0px";
        _7045.style.boxSizing = "border-box";
        _7045.style.paddingLeft = _7034 + "px";
        _7045.style.paddingRight = (_7035 + _7033) + "px";
        let _824;
        _824 = "";
        _824 += "<div>";
        _824 += "<span style='display:inline-block;width:100%;height:100%;'></span>";
        _824 += "<span style='width:100%;height:100%;position:relative;display:inline-block;top:-" + _7037 + "px;'>";
        for (let _754 = 0; _754 < _7027.length; _754++)
        {
            let _7040;
            _7040 = _7027[_754];
            _824 += "<span style='position: absolute;top:-8px; left: " + (100 * _754 / (_7027.length - 1)) + "%; transform: translateX(-50%);text-align:center;'>ᛧ<br/>" + _7040 + "</span>\r\n";
        }
        _824 += "</span>\r\n";
        _824 += "</div>\r\n";
        _7045.innerHTML = _824;
    }
    
    
    
    
    let _7046;
    _7046 = document.createElement("div");
    _7046._7024 = _7024;
    _7024.appendChild(_7046);
    _7046.style.paddingLeft = _7034 + "px";
    _7046.style.paddingRight = (_7033 + _7035) + "px";
    _7046.style.paddingTop = _7036 + "px";
    _7046.style.paddingBottom = _7037 + "px";
    _7046.style.width = "100%";
    _7046.style.height = "100%";
    _7046.style.boxSizing = "border-box";
    _7046.style.position = "relative";
    _7046.style.top = "-100%";

    let _7047;
    _7047 = document.createElement("span");
    _7047._7024 = _7024;
    _7046.appendChild(_7047);
    _7047.style.display = "inline-block";
    _7047.style.width = "100%";
    _7047.style.height = "100%";


    
    
    
    
    
    let _7051;
    let _7052;
    let _7053;
    if (_7025)
    {
        _7051 = null;
        _7052 = null;
        _7053 = _7025;
    }
    else
    {
        _7051 = document.createElement("nobr");
        _7051._7024 = _7024;
        _7024.appendChild(_7051);
        _7051.style.position = "relative";
        _7051.style.top = "-200%";
        _7051.style.display = "inline-block";
        _7051.style.width = "100%";
        _7051.style.height = "0px";

        _7052 = document.createElement("span");
        _7052._7024 = _7024;
        _7051.appendChild(_7052);
        _7052.style.display = "inline-block";
        _7052.style.width = "100%";
        _7052.style.height = "0px";

        _7053 = document.createElement("span");
        _7053._7024 = _7024;
        _7051.appendChild(_7053);
        _7053.style.display = "inline-block";
        _7053.style.verticalAlign = "top";
        _7053.style.width = _7033 + "px";
        _7053.style.position = "relative";
        _7053.style.left = "-" + _7033 + "px";
        _7053.style.boxSizing = "border-box";
        _7053.style.paddingTop = _7036 + "px";
        _7053.style.paddingBottom = _7037 + "px";
    }

    let _7054;
    _7054 = document.createElement("span");
    _7054._7024 = _7024;
    _7053.appendChild(_7054);
    _7054.innerHTML = "<img src='_466.png' style='width:32px;height:32px;' ><br/>" + L("添加");
    _7054.title = L("把我拖到编辑区，添加控制点。\r\n或者在编辑区双击");
    if (!_7025)
        _7054.style.width = "100%";
    _7054.style.textAlign = "center";
    _7054.style.display = "inline-block";
    _7054.style.cursor = "pointer";
    

    {
        let _7055;
        _7055 = document.createElement("span");
        _7053.appendChild(_7055);
        if (_7025)
            _7055.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
        else
            _7055.innerHTML = "<br/>\r\n";
    }

    let _7056;
    _7056 = document.createElement("span");
    _7056._7024 = _7024;
    _7053.appendChild(_7056);
    _7056.innerHTML = "<img src='/_379.png' style='width:32px;height:32px;' ><br/>" + L("回收站");
    _7056.title = L("把控制点拖到这里，就可以删除控制点");
    if (!_7025)
        _7056.style.width = "100%";
    _7056.style.textAlign = "center";
    _7056.style.display = "inline-block";
    _7056.style.cursor = "default";
    

    
    
    
    class _7062
    {
        _7063 = 10;
        _7234 = 0.5;
        _7235 = -0.5;
    };
    _7065 = new Array();
    let _7066 = -1;
    let _7067 = true;
    _7024._7068 = function ()
    {
        _7065.length = 0;
        _7067 = true;
        _7066 = -1;
        _7069();
    }
    _7024._7068();
    
    
    
    function _7070()
    {
        let _956;
        _956 = _7047.getBoundingClientRect();
        _2475 = _956.width;
        _2480 = _956.height;
    }
    function _7071(_7072)
    {
        return (_2475 - 1) * (_7072 - _7028) / (_7029 - _7028);
    }
    function _7073(_7074)
    {
        return _7028 + (_7029 - _7028) * _7074 / (_2475 - 1);
    }
    function _7075(_7076)
    {
        if(_7229)
            return _581._761(_2480 - 1 - _2480 / 20, _2480 / 20, -1, 1, _7076);
        else
            return _581._761(_2480 - 1 - _2480 / 20, _2480 / 20, 0, 1, _7076);
    }
    function _7077(_7078)
    {
        if (_7229)
            return _581._761(-1, 1, _2480 - 1 - _2480 / 20, _2480 / 20, _7078);
        else
            return _581._761(0, 1, _2480 - 1 - _2480 / 20, _2480 / 20, _7078);
    }
    function _7079()
    {
        if (_7065.length <= 0)
            return "";
        let _7236;
        _7236 = new Array();
        for (let _979 = 1; _979 <= 2; _979++)
        {
            function _7237(x, y)
            {
                let _5531 = new Object();
                _5531.x = x;
                _5531.y = y;
                if (_979 == 1)
                    _7236.push(_5531);
                else
                    _7236.unshift(_5531);
            }
            {
                let _7081;
                _7081 = _7065[0];
                let x;
                x = _7071(_7081._7063);
                let y1, y2;
                y1 = _7075(_7081._7234);
                y2 = _7075(_7081._7235);
                if (_979 == 1)
                {
                    _7237(-1, y1);
                    _7237(x, y1);
                }
                else
                {
                    _7237(-1, y2);
                    _7237(x, y2);
                }
            }
            for (let _7082 = 1; _7082 < _7065.length; _7082++)
            {
                let _7083, _7084;
                _7083 = _7065[_7082 - 1];
                _7084 = _7065[_7082];
                let _7085, _7086;
                _7085 = _7071(_7083._7063);
                _7086 = _7071(_7084._7063);
                let _7238, _7239, _7240, _7241;
                _7238 = _7075(_7083._7234);
                _7239 = _7075(_7083._7235);
                _7240 = _7075(_7084._7234);
                _7241 = _7075(_7084._7235);
                if (_979 == 1)
                {
                    _7237(_7085, _7238);
                    _7237(_7086, _7240);
                }
                else
                {
                    _7237(_7085, _7239);
                    _7237(_7086, _7241);
                }
            }
            {
                let _7089;
                _7089 = _7065[_7065.length - 1];
                let x;
                x = _7071(_7089._7063);
                let y1, y2;
                y1 = _7075(_7089._7234);
                y2 = _7075(_7089._7235);
                if (_979 == 1)
                {
                    _7237(x, y1);
                    _7237(_2475, y1);
                }
                else
                {
                    _7237(x, y2);
                    _7237(_2475, y2);
                }
            }
        }
        let _5367;
        _5367 = "";
        _5367 += "<path d='";
        let _7080;
        _7080 = true;
        function _7242(x, y)
        {
            if (_7080)
            {
                _7080 = false;
                _5367 += "M" + x + "," + y + " ";
            }
            else
                _5367 += "L" + x + "," + y + " ";
        }
        for (let _754 = 0; _754 < _7236.length; _754++)
            _7242(_7236[_754].x, _7236[_754].y);
        _5367 += "' style='stroke:rgb(" + _7008 + ");stroke-width:1;fill:rgb(" + _7008 +"/ 0.02);' />;\r\n";
        return _5367;
    }
    function _7090(_7091)
    {
        if (_7065.length == 0)
            return [-0.5,0.5];
        {
            let _7081;
            _7081 = _7065[0];
            if (_7091 <= _7081._7063)
                return [_7081._7235,_7081._7234];
        }
        for (let _7082 = 1; _7082 < _7065.length; _7082++)
        {
            let _7083, _7084;
            _7083 = _7065[_7082 - 1];
            _7084 = _7065[_7082];
            if (_7083._7063 <= _7091 && _7091 <= _7084._7063)
            {
                let _2498, _1739;
                _2498 = _581._761(_7083._7235, _7084._7235, _7083._7063, _7084._7063, _7091);
                _1739 = _581._761(_7083._7234, _7084._7234, _7083._7063, _7084._7063, _7091);
                return [_2498, _1739];
            }
        }
        {
            let _7089;
            _7089 = _7065[_7065.length - 1];
            return [_7089._7235, _7089._7234];
        }
    }
    function _7092(_7093, _754)
    {
        let _987;
        _987 = "";
        let x, _7243,_7244;
        x = _7071(_7093._7063);
        _7243 = _7075(_7093._7234);
        _7244 = _7075(_7093._7235);
        _987 += "<line x1='" + x + "' y1='" + _7243 + "' x2='" + x + "' y2='" + _7244 + "' style='stroke:rgb(0 0 0 / 0.3);stroke-width:3; cursor: w-resize;' onmousedown='event.target.parentNode.parentNode._7024._7206(" + _754 + ");'  onmouseover =\"_218('" + L("平移") + "');\"/>\r\n";
        if (_7244 - _7243 < 20)
            _987 += "<rect x='" + (x-4) + "' y='" + (_7243 - 20) + "' width='8' height='8'style='stroke:rgb(0 150 0 );fill:rgb(0 150 0 / 0.1);stroke-width:1; cursor: w-resize;' onmousedown='event.target.parentNode.parentNode._7024._7206(" + _754 + ");'  onmouseover =\"_218('" + L("平移") + "');\"/>\r\n";
        _987 += "<circle cx='" + x + "' cy='" + _7243 + "' r='4' style='fill:rgb(180 20 0 / 0.1); stroke:rgb(180 20 0); stroke-width:1; cursor: s-resize;' onmousedown='event.target.parentNode.parentNode._7024._7245(" + _754 + ");'  onmouseover =\"_218('" + L("最大值") + "');\"  />\r\n";
        _987 += "<circle cx='" + x + "' cy='" + _7244 + "' r='4' style='fill:rgb(180 20 0 / 0.1); stroke:rgb(180 20 0); stroke-width:1; cursor: s-resize;' onmousedown='event.target.parentNode.parentNode._7024._7250(" + _754 + ");'  onmouseover =\"_218('" + L("最小值") + "');\"  />\r\n";
        return _987;
    }
    function _7069()
    {
        _7070();
        let _5367;
        _5367 = "";
        if (_7032 != 0)
        {
            for (let _979 = 1; _979 < _7032; _979++)
            {
                let x;
                x = _2475 * _979 / _7032;
                _5367 += "<line x1='" + x + "' y1='0' x2='" + x + "' y2='" + (_2480 - 1) + "' style='stroke:rgb(0 0 0 / 0.1);stroke-width:1;' />\r\n";
            }
        }
        {
            let y;
            y = _7075(1);
            _5367 += "<line x1='0' y1='" + y + "' x2='" + (_2475 - 1) + "' y2='" + y + "' style='stroke:rgb(0 0 0 / 0.3);stroke-width:1;' />\r\n";
            if (_7229)
            {
                y = _7075(0);
                _5367 += "<line x1='0' y1='" + y + "' x2='" + (_2475 - 1) + "' y2='" + y + "' style='stroke:rgb(0 0 0 / 0.3);stroke-width:1;' />\r\n";
                y = _7075(-1);
                _5367 += "<line x1='0' y1='" + y + "' x2='" + (_2475 - 1) + "' y2='" + y + "' style='stroke:rgb(0 0 0 / 0.3);stroke-width:1;' />\r\n";
            }
            else
            {
                y = _7075(0);
                _5367 += "<line x1='0' y1='" + y + "' x2='" + (_2475 - 1) + "' y2='" + y + "' style='stroke:rgb(0 0 0 / 0.3);stroke-width:1;' />\r\n";
            }
        }
        _5367 += _7079();
        for (let _754 = 0; _754 < _7065.length; _754++)
        {
            if ((!_7067) && _7066 == _754)
                continue;
            _5367 += _7092(_7065[_754], _754);
        }
        _7047.innerHTML = "<svg style='width:100%;height:100%; background-color:rgb(200 100 100 / 0.03);' xmlns='http://www.w3.org/2000/svg' version='1.1' >" + _5367 + "</svg>";
        _7047.childNodes[0].ondragstart = function () { return false; };
    }
    _7069();
    
    
    

    window.addEventListener("resize", function () { _7069(); });

    _7054.onmousedown = function ()
    {
        let _839;
        _839 = event.target;
        _1082(_839);
    }
    let _2097 = 0;
    let _2098 = 0;
    let _6192 = null;
    
    function _6195()
    {
        let x, y;
        x = event.clientX;
        y = event.clientY;
        let _1472;
        _1472 = _7047.getBoundingClientRect();
        if (_1472.left <= x && x <= _1472.right && _1472.top <= y && y <= _1472.bottom)
            return true;
        return false;
    }
    function _7098()
    {
        let _7099, _7100;
        _7099 = event.clientX;
        _7100 = event.clientY;
        let _1472;
        _1472 = _7047.getBoundingClientRect();
        _7099 -= _1472.left;
        if (_7099 < 0)
            _7099 = 0;
        if (_7099 >= _2475)
            _7099 = _2475 - 1;
        _7100 -= _1472.top;
        if (_7100 < 0)
            _7100 = 0;
        if (_7100 >= _2480)
            _7100 = _2480 - 1;
        return [_7099, _7100];
    }
    function _6193()
    {
        let x, y;
        x = event.clientX;
        y = event.clientY;
        if (_6195())
            _6192.style.cursor = "crosshair";
        else
            _6192.style.cursor = "move";
        _6192.style.left = (x - _2097) + "px";
        _6192.style.top = (y - _2098) + "px";
    }

    function _7101()
    {
        
        for (let _7102 = 0; _7102 < _7065.length; _7102++)
        {
            for (let _7103 = _7065.length - 1; _7103 > _7102; _7103--)
            {
                let _5346 = _7065[_7103];
                let _7104 = _7065[_7103 - 1];
                if (_5346._7063 < _7104._7063)
                {
                    let _1458;
                    _1458 = _7065[_7103];
                    _7065[_7103] = _7065[_7103 - 1];
                    _7065[_7103 - 1] = _1458;
                    if (_7066 == _7103)
                        _7066 = _7103 - 1;
                    else if (_7066 == _7103 - 1)
                        _7066 = _7103;
                }
            }
        }
    }

    function _6194()
    {
        if (_6195())
        {
            let _7099;
            [_7099] = _7098();
            let _7093 = new _7062();
            _7093._7063 = _7073(_7099);
            
            if (_7093._7063 < _7028)
                _7093._7063 = _7028;
            if (_7093._7063 >= _7029)
                _7093._7063 = _7029;
            [_7093._7235, _7093._7234] = _7090(_7093._7063);
            _7066 = _7065.length;
            _7065.push(_7093);
            _7101();
        }
        _6192.style.cursor = "hand";
        window.onmousemove = null;
        window.onmouseup = null;
        _6192.title = L("把我拖到编辑区，添加控制点。\r\n或者在编辑区双击");
        _6192.style.position = "";
        _6192.style.left = "0px";
        _6192.style.top = "0px";
        _6192.ondragstart = null;
        _6192 = null;
        _7069();
    }
    function _1082(_839)
    {
        _581._1307();
        _839.title = L("把我拖到编辑区，添加控制点。");
        _839.style.cursor = "move";
        window.onmousemove = _6193;
        window.onmouseup = _6194;
        _839.style.position = "relative";
        _839.style.left = "0px";
        _839.style.top = "0px";
        _839.ondragstart = function () { return false; };
        _6192 = _839;
        _2097 = event.clientX;
        _2098 = event.clientY;
    }

    function _6206(_6173)
    {
        _7067 = _6173;
    }
    function _6208()
    {
        let x, y;
        x = event.clientX;
        y = event.clientY;
        let _1472 = _7056.getBoundingClientRect();
        if (_1472.left <= x && x <= _1472.right && _1472.top <= y && y <= _1472.bottom)
            return true;
        return false;
    }
    function _6387()
    {
        window.onmousemove = null;
        window.onmouseup = null;
        _7066 = -1;
    }


    _7024._7206 = function (_754)
    {
        _581._1307();
        _7066 = _754;
        window.onmousemove = _7207;
        window.onmouseup = _7208;
        _2097 = event.clientX;
        _2098 = event.clientY;
        _7056._7108 = _7056.style.backgroundColor;
        _7056.style.backgroundColor = "rgb(255 100 100 / 0.2)";
    }
    function _7207()
    {
        if (_6208())
        {
            if (_7056._7109 == null)
            {
                _7056._7109 = _7056.style.backgroundColor;
                _7056.style.backgroundColor = "rgb(255 100 100 / 0.8)";
                _6206(false);
            }
        }
        else
        {
            if (_7056._7109 != null)
            {
                _7056.style.backgroundColor = _7056._7109;
                _7056._7109 = null;
                _6206(true);
            }
        }
        let x;
        x = event.clientX;
        let _7110;
        _7110 = x - _2097;
        _7110 = _7073(_7110);
        if (_7110 == 0)
        {
            _7069();
            return;
        }
        let _7093;
        _7093 = _7065[_7066];
        _7093._7063 += _7110;
        if (_7093._7063 < _7028)
            _7093._7063 = _7028;
        if (_7093._7063 > _7029)
            _7093._7063 = _7029;
        _2097 = x;
        _7101();
        _7069();
    }
    function _7208()
    {
        if (_7056._7109 != null)
        {
            _7056.style.backgroundColor = _7056._7109;
            _7056._7109 = null;
        }
        if (_7056._7108 != null)
        {
            _7056.style.backgroundColor = _7056._7108;
            _7056._7108 = null;
        }
        if (_6208())
        {
            _7065.splice(_7066, 1);
            _7066 = -1;
        }
        _6206(true);
        _6387();
        _7069();
    }


    _7024._7245 = function (_754)
    {
        _581._1307();
        _7066 = _754;
        window.onmousemove = _7246;
        window.onmouseup = _7247;
        _2097 = event.clientX;
        _2098 = event.clientY;
    }
    function _7246()
    {
        let _7093;
        _7093 = _7065[_7066];
        let y;
        y = event.clientY;
        let _7111;
        _7111 = -(y - _2098);
        _7111 /= ((_2480- 2 * _2480 / 20) / 2);
        if (_7111 == 0)
            return;
        _7093._7234 += _7111;
        if (_7229)
        {
            if (_7093._7234 > 1)
                _7093._7234 = 1;
            if (_7093._7234 < 0)
            {
                _7093._7235 = _7093._7234;
                _7093._7234 = -_7093._7234;
                window.onmousemove = _7248;
                window.onmouseup = _7249;
            }
            else
                _7093._7235 = -_7093._7234;
        }
        else
        {
            if (_7093._7234 > 1)
                _7093._7234 = 1;
            if (_7093._7234 < 0)
                _7093._7234 = 0;
            if (_7093._7234 < _7093._7235)
            {
                let _2799;
                _2799 = _7093._7234;
                _7093._7234 = _7093._7235;
                _7093._7235 = _2799;
                window.onmousemove = _7248;
                window.onmouseup = _7249;
            }
        }
        _2098 = y;
        _7069();
    }
    function _7247()
    {
        _6387();
    }




    _7024._7250 = function (_754)
    {
        _581._1307();
        _7066 = _754;
        window.onmousemove = _7248;
        window.onmouseup = _7249;
        _2097 = event.clientX;
        _2098 = event.clientY;
    }
    function _7248()
    {
        let _7093;
        _7093 = _7065[_7066];
        let y;
        y = event.clientY;
        let _7111;
        _7111 = -(y - _2098);
        _7111 /= ((_2480- 2 * _2480 / 20) / 2);
        if (_7111 == 0)
            return;
        _7093._7235 += _7111;
        if (_7229)
        {
            if (_7093._7235 < -1)
                _7093._7235 = -1;
            if (_7093._7235 > 0)
            {
                _7093._7234 = _7093._7235;
                _7093._7235 = -_7093._7235;
                window.onmousemove = _7246;
                window.onmouseup = _7247;
            }
            else
                _7093._7234 = -_7093._7235;
        }
        else
        {
            if (_7093._7235 > 1)
                _7093._7235 = 1;
            if (_7093._7235 < 0)
                _7093._7235 = 0;
            if (_7093._7235 > _7093._7234)
            {
                let _2799;
                _2799 = _7093._7235;
                _7093._7235 = _7093._7234;
                _7093._7234 = _2799;
                window.onmousemove = _7246;
                window.onmouseup = _7247;
            }
        }
        _2098 = y;
        _7069();
    }
    function _7249()
    {
        _6387();
    }

    
    
    
    _7024._7112=function (_893)
    {
        if (!_893)
        {
            _7065.length = 0;
        }
        else
        {
            let _985;
            _985 = JSON.parse(_893);
            if (_985[F("最小值")] != _7030)
                console.assert(0);
            if (_985[F("最大值")] != _7031)
                console.assert(0);
            _7065.length = _985[F("控制点数组")].length;
            for (let _570 = 0; _570 < _7065.length; _570++)
            {
                let _1102;
                _1102 = new _7062();
                _7065[_570] = _1102;
                let _1103;
                _1103 = _985[F("控制点数组")][_570];
                _1102._7063 = _1103[F("m倍频")];
                _1102._7234 = _1103[F("m最大值")];
                _1102._7235 = _1103[F("m最小值")];
            }
        }
        _7066 = -1;
        _7069();
    }
    _7024._7113=function ()
    {
        let _985 = new Object();
        _985[F("控制点数组")] = new Array();
        _985[F("控制点数组")].length = _7065.length;
        for (let _754 = 0; _754 < _985[F("控制点数组")].length; _754++)
        {
            let _7114;
            _7114 = new Object();
            _985[F("控制点数组")][_754] = _7114;
            let _7115;
            _7115 = _7065[_754];
            _7114[F("m倍频")] = _7115._7063;
            _7114[F("m最大值")] = _7115._7234;
            _7114[F("m最小值")] = _7115._7235;
        }
        _985[F("最小值")] = _7030;
        _985[F("最大值")] = _7031;
        _985[F("上下对称")] = _7229;
        return JSON.stringify(_985);
    }
    _7024._7015 = function (_2498, _1739)
    {
        _7030 = _2498;
        _7031 = _1739;
    }
    _7024._7230 = function (_7251)
    {
        _7229 = _7251;
    }
    _7024._7016 = function (_7116)
    {
        _7008 = _7116;
    }
    
}
var _7117 = null;
function _7232(_7024, _7025,_2090, _2124, _6621, _6622, _7026, _7027, _7028, _7029, _7030, _7031, _7008 = "0 128 0", _7229 =false,_7032 = 0)
{
    
    
    let _7118 = false;
    let _7119 = false;
    let _7120 = false;
    let _7121 = null;

    if (_7117 == null)
    {
        _7117 = new Array();
        function _7122()
        {
            for (let _754 = 0; _754 < _7117.length; _754++)
                _7117[_754]._7123();
        }
        window.addEventListener("resize", _7122);
    }
    _7117.push(_7024);

    function _7124()
    {
        if ((!_7120) || _7024.style.display == "none")
            return false;
        return true;
    }
    _7024._7017 = function (_893)
    {
        if (!_7124())
            _7121 = _893;
        else
        {
            _7024._7112(_893);
            _7121 = null;
        }
    }
    _7024._7020 = function ()
    {
        if (!_7124())
            return _7121;
        return _7024._7113();
    }
    _7024._7123=function ()
    {
        if (_7124())
        {
            if (_7121 != null)
                this._7112(_7121);
            return;
        }
        if (window.innerHeight > 1 && (!_7118))
        {
            _7118 = true;
            setTimeout(function ()
            {
                if (_7119)
                    return;
                _7119 = true;
                _7233(_7024, _7025,_2090, _2124, _6621, _6622, _7026, _7027, _7028, _7029, _7030, _7031, _7008, _7229,_7032);
                setTimeout(function ()
                {
                    if (_7120)
                        return;
                    _7120 = true;
                    if (_7121)
                    {
                        _7024._7112(_7121);
                        _7121 = null;
                    }
                }, 300);
            }, 300);
        }
    }
    _7024._7125= function ()
    {
        if (_7124())
            _7121 = this._7020();
        this.style.display = 'none';
    }
    _7024._6173=function ()
    {
        this.style.display = 'inline-block';
        this._7123();
    }
    _7024._7013 = function (_7012)
    {
        _6621 = _7012;
    }
    _7024._7014 = function (_7012)
    {
        _6622 = _7012;
    }
    _7024._7015 = function (_2498, _1739)
    {
        _7030 = _2498;
        _7031 = _1739;
    }
    _7024._7230 = function (_7251)
    {
        _7229 = _7251;
    }
    _7024._7016 = function (_7116)
    {
        _7008 = _7116;
    }
    _7024._7123();
}
function _7252(_7049)
{
    if (!_7049)
        return L("无变化");
    let _569;
    _569 = "";
    let _985;
    _985 = JSON.parse(_7049);
    let _2498, _1739, _7229;
    _2498 = _985[F("最小值")];
    _1739 = _985[F("最大值")];
    _7229 = _985[F("上下对称")];
    let _7065;
    _7065 = _985[F("控制点数组")];
    let length;
    length = _7065.length;
    if (length > 3)
        length = 3;
    for (let _754 = 0; _754 < length; _754++)
    {
        let _7093;
        _7093 = _7065[_754];
        let _7253, _7254;
        _7253 = _7093[F("m最小值")];
        _7254 = _7093[F("m最大值")];
        if (_7229)
        {
            _7253 = _581._761(_2498, _1739, -1, 1, _7253);
            _7254 = _581._761(_2498, _1739, -1, 1, _7254);
        }
        else
        {
            _7253 = _581._761(_2498, _1739, 0, 1, _7253);
            _7254 = _581._761(_2498, _1739, 0, 1, _7254);
        }
        _569 += _7253.toFixed(4);
        _569 += "~" + _7254.toFixed(4);
        _569 += "@" + _7093[F("m倍频")].toFixed(1) + L("倍频");
        if (_754 != length - 1)
            _569 += L("，");
    }
    if (_7065.length > 3)
        _569 += L("，...");
    if (length == 0)
        _569 += L("无变化");
    return _569;
}

