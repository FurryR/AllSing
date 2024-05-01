


function _7184(_7024, _7025,_2090, _2124, _6621, _6622, _7026, _7027, _7028, _7029, _7030, _7031, _7008 = "0 128 0", _7171 = false, _7032 = 0)
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
        _7024._7185 = function (_7186)
        {
            _7026 = _7186;
            let _824;
            _824 = "<div style='width:100%;height:100%;position:relative;'>";
            for (let _754 = 0; _754 < _7026.length; _754++)
            {
                let _7040;
                _7040 = _7026[_754];
                _824 += "<div style='text-align:center;position: absolute; left: " + (100 * _754 / (_7026.length - 1)) + "%; transform: translateX(-50%); width:100%;'>" + _7040 + "<br/>╵</div>\r\n";
            }
            _824 += "</div>";
            _7024._7044.innerHTML = _824;
        }
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
        _7024._7044 = _7044;
        _7024._7185(_7026);
    }
    if (_7027)
    {
        _7024._7176 = function (_7186)
        {
            _7027 = _7186;
            let _824;
            _824 = "";
            for (let _754 = 0; _754 < _7027.length; _754++)
            {
                let _7040;
                _7040 = _7027[_754];
                _824 += "<span style='position: absolute;top:-8px; left: " + (100 * _754 / (_7027.length - 1)) + "%; transform: translateX(-50%);text-align:center;'>ᛧ<br/>" + _7040 + "</span>\r\n";
            }
            _7024._7187.innerHTML = _824;
        }
        
        
        
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
        _824 += "</span>\r\n";
        _824 += "</div>\r\n";
        _7045.innerHTML = _824;
        _7024._7187 = _7045.getElementsByTagName("span")[1];
        _7024._7176(_7027);
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
    _7054.innerHTML = "<img src='/_425.png' style='width:32px;height:32px;' ><br/>" + L("添加");
    _7054.title = L("把我拖到编辑区，添加修改。\r\n或者在编辑区双击");
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
    

    
    
    
    class _7188
    {
        _7189 = 200;
        _7190 = 300;
        _7191 = 500;
        _2358 = 1;
        _7192 = 1;
        _7193 = 1;
        _7194 = true;
        _5516(x)
        {
            let _987;
            if (x <= this._7189)
                return 0;
            if (x >= this._7191)
                return 0;
            let _6397;
            if (x <= this._7190)
            {
                if (Math.abs(this._7190 - this._7189) < 1e-12)
                    _987 = 0;
                else
                    _987 = -Math.PI * (this._7190 - x) / (this._7190 - this._7189);
                _6397 = this._7192;
            }
            else
            {
                if (Math.abs(this._7190 - this._7191) < 1e-12)
                    _987 = 0;
                else
                    _987 = Math.PI * (x - this._7190) / (this._7191 - this._7190);
                _6397 = this._7193;
            }
            _987 = (1 + Math.cos(_987)) / 2;
            _987 = Math.pow(_987, _6397);
            _987 *= this._2358;
            if (!this._7194)
                _987 = -_987;
            return _987;
        }
    };
    _7195 = new Array();
    let _7196 = -1;
    let _7197 = true;
    _7024._7068 = function ()
    {
        _7195.length = 0;
        _7197 = true;
        _7196 = -1;
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
        if (_7171)
            return _581._761(_2480 - 1 - 22, 22, 0, 1, _7076);
        else
            return _581._761(_2480 - 1 - 22, 22, -1, 1, _7076);
    }
    function _7077(_7078)
    {
        if (_7171)
            return _581._761(0, 1, _2480 - 1 - 22, 22, _7078);
        else
            return _581._761(-1, 1, _2480 - 1 - 22, 22, _7078);
    }
    function _7198()
    {
        let _7199, _7200;
        if (_7171)
        {
            _7199 = 0;
            _7200 = 1;
        }
        else
        {
            _7199 = -1;
            _7200 = 1;
        }
        return [_7199, _7200];
    }
    function _7079()
    {
        let _753;
        _753 = Math.round(_2475);
        let _5985 = new Array(_753);
        _5985.fill(0);
        let _7199, _7200;
        [_7199, _7200] = _7198();
        for (let _7201 = 0; _7201 < _7195.length; _7201++)
        {
            let _7202;
            _7202 = _7195[_7201];
            let _751, _752;
            _751 = Math.round(_7071(_7202._7189));
            _752 = Math.round(_7071(_7202._7191));
            let _5953, _5954;
            _5953 = _751;
            if (_5953 < 0)
                _5953 = 0;
            _5954 = _752;
            if (_5954 >= _5985.length)
                _5954 = _5985.length - 1;
            for (let _979 = _5953; _979 <= _5954; _979++)
            {
                let _623;
                _623 = _7202._5516(_7073(_979));
                _5985[_979] += _623;
            }
            for (let _754 = 0; _754 < _5985.length; _754++)
            {
                if (_5985[_754] < _7199)
                    _5985[_754] = _7199;
                if (_5985[_754] > _7200)
                    _5985[_754] = _7200;
            }
        }
        function _7203(_623)
        {
            return _7075(_623);
        }
        let _5367;
        _5367 = "";
        _5367 += "<path d='";
        _5367 += "M0," + _7203(_5985[0]) + " ";
        for (let _754 = 1; _754 < _5985.length; _754++)
            _5367 += "L" + _754 + "," + _7203(_5985[_754]) + " ";
        _5367 += "' style='stroke:rgb(0 0 0);stroke-width:1;fill:none;' />;\r\n";
        return _5367;
    }
    function _7204(_7202)
    {
        let _987;
        _987 = "";
        let _751, _752;
        _751 = _7071(_7202._7189);
        _752 = _7071(_7202._7191);
        _987 += "<polyline  points='";
        for (let x = _751; x <= _752 + 1; x++)
        {
            let y;
            y = _7073(x);
            y = _7202._5516(y);
            _987 += x + "," + _7075(y) + " ";
        }
        _987 += "' style='fill:rgb(" + _7008 + " / " + 0.05 + ");stroke:rgb(" + _7008 + " / " + 1 + ");stroke-width:1; ' />\r\n";
        return _987;
    }
    function _7205(_7202, _754)
    {
        let _987;
        _987 = "";
        let _751, _752;
        _751 = _7071(_7202._7189);
        _752 = _7071(_7202._7191);
        let x, y;
        x = _7071(_7202._7189);
        y = _7202._5516(_7202._7189);
        _987 += "<circle cx='" + x + "' cy='" + _7075(y) + "' r='3' style='fill:rgb(180 20 0 / 0.1); stroke:rgb(180 20 0); stroke-width:1; cursor:w-resize;' onmousedown='event.target.parentNode.parentNode._7024._6226(" + _754 + ");'  onmouseover =\"_218('" + L("开始频率") + "');\"  />\r\n";
        x = _7071(_7202._7191);
        y = _7202._5516(_7202._7191);
        _987 += "<circle cx='" + x + "' cy='" + _7075(y) + "' r='3' style='fill:rgb(180 20 0 / 0.1); stroke:rgb(180 20 0); stroke-width:1; cursor:w-resize;' onmousedown='event.target.parentNode.parentNode._7024._7222(" + _754 + ");'  onmouseover =\"_218('" + L("结束频率") + "');\"  />\r\n";
        if (_7202._7194)
        {
            x = _7071(_7202._7190);
            y = _7202._2358;
            _987 += "<circle cx='" + x + "' cy='" + _7075(y) + "' r='3' style='fill:rgb(180 20 0 / 0.1); stroke:rgb(180 20 0); stroke-width:1; cursor:move; ' onmousedown='event.target.parentNode.parentNode._7024._6406(" + _754 + ");'  onmouseover =\"_218('" + L("峰的频率和大小\\r\\nShift拖动仅改变频率\\r\\nAlt拖动仅改变大小") + "');\"  />\r\n";
        }
        else
        {
            x = _7071(_7202._7190);
            y = _7202._2358;
            _987 += "<circle cx='" + x + "' cy='" + _7075(-y) + "' r='3' style='fill:rgb(180 20 0 / 0.1); stroke:rgb(180 20 0); stroke-width:1; cursor:move;'  onmousedown='event.target.parentNode.parentNode._7024._6415(" + _754 + ");' onmouseover =\"_218('" + L("谷的频率和大小\\r\\nShift拖动仅改变频率\\r\\nAlt拖动仅改变大小") + "');\"  />\r\n";
        }

        let _6362 = new Array();
        _6362.push(["onmousedown='event.target.parentNode.parentNode._7024._7206(" + _754 + ");'", L("拖动修改频率\\r\\n也可以拖到回收站删除")]);
        _6362.push(["onmousedown='event.target.parentNode.parentNode._7024._7214(" + _754 + ");'", L("修改左侧形状")]);
        _6362.push(["onmousedown='event.target.parentNode.parentNode._7024._7211(" + _754 + ");'", L("修改左右两侧的形状")]);
        _6362.push(["onmousedown='event.target.parentNode.parentNode._7024._7217(" + _754 + ");'", L("修改右侧形状")]);
        for (let _6363 = 0; _6363 < _6362.length; _6363++)
        {
            let x, y;
            if (_6363 == 0)
            {
                x = (_751 + _752) / 2;
                y = _7075(0);
            }
            else
            {
                x = (_751 + _752) / 2;
                x += (_6363 - 2) * 18;
                y = _7075(0) - 18;
            }
            let _5381;
            switch (_6363)
            {
                case 0: _5381 = "0 100 0"; break;
                case 1: _5381 = "0 0 255"; break;
                case 2: _5381 = "200 100 0"; break;
                case 3: _5381 = "200 0 200"; break;
            }
            let _6369;
            _6369 = "move";
            if (_6363 == 0)
                _6369 = "e-resize";
            else if (_6363 == 1 || _6363 == 2 || _6363 == 3)
                _6369 = "n-resize";
            _987 += "<rect x='" + (x - 4) + "' y='" + (y - 4) + "' width='8' height='8' style='fill:rgb(" + _5381 + " / 0.1); stroke:rgb(" + _5381 + "); stroke-width:1; cursor:" + _6369 + ";' " + _6362[_6363][0] + "   onmouseover =\"_218('" + _6362[_6363][1] + "');\"   />\r\n";
        }
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
            let _7199, _7200;
            [_7199, _7200] = _7198();
            let y;
            y = _7075(_7200);
            _5367 += "<line x1='0' y1='" + y + "' x2='" + (_2475 - 1) + "' y2='" + y + "' style='stroke:rgb(0 0 0 / 0.3);stroke-width:1;' />\r\n";
            if (!_7171)
            {
                y = _7075((_7200 + _7199) / 2);
                _5367 += "<line x1='0' y1='" + y + "' x2='" + (_2475 - 1) + "' y2='" + y + "' style='stroke:rgb(0 0 0 / 0.3);stroke-width:1;' />\r\n";
            }
            y = _7075(_7199);
            _5367 += "<line x1='0' y1='" + y + "' x2='" + (_2475 - 1) + "' y2='" + y + "' style='stroke:rgb(0 0 0 / 0.3);stroke-width:1;' />\r\n";
        }
        _5367 += _7079();
        for (let _754 = 0; _754 < _7195.length; _754++)
        {
            if ((!_7197) && _7196 == _754)
                continue;
            _5367 += _7204(_7195[_754]);
        }
        for (let _754 = 0; _754 < _7195.length; _754++)
        {
            if ((!_7197) && _7196 == _754)
                continue;
            _5367 += _7205(_7195[_754], _754);
        }
        _7047.innerHTML = "<svg style='width:100%;height:100%; background-color:rgb(0 0 255 / 0.03);' xmlns='http://www.w3.org/2000/svg' version='1.1' >" + _5367 + "</svg>";
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
    function _6194()
    {
        if (_6195())
        {
            let _7099;
            [_7099] = _7098();
            let _7202 = new _7188();
            let _753;
            _753 = _7029 - _7028;
            _753 /= 10;
            _7202._7190 = _7073(_7099);
            _7202._7189 = _7202._7190 - _753 / 2
            _7202._7191 = _7202._7190 + _753 / 2;
            _7196 = _7195.length;
            _7195.push(_7202);
        }
        _6192.style.cursor = "hand";
        window.onmousemove = null;
        window.onmouseup = null;
        _6192.title = L("把我拖到编辑区，添加修改。\r\n或者在编辑区双击");
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
        _839.title = L("把我拖到编辑区，添加修改。");
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
        _7197 = _6173;
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
        _7196 = -1;
    }


    _7024._7206 = function (_754)
    {
        _581._1307();
        _7196 = _754;
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
        let _7202;
        _7202 = _7195[_7196];
        if (_7110 < 0)
        {
            if (-_7110 > _7202._7189)
                _7110 = -_7202._7189;
        }
        else
        {
            let _6392;
            _6392 = _7029 - _7202._7191;
            if (_7110 > _6392)
                _7110 = _6392;
        }
        if (_7110 == 0)
        {
            _7069();
            return;
        }
        _7202._7189 += _7110;
        _7202._7190 += _7110;
        _7202._7191 += _7110;
        _2097 = x;
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
            _7195.splice(_7196, 1);
            _7196 = -1;
        }
        _6206(true);
        _6387();
        _7069();
    }


    let _7209;
    let _7210;
    _7024._7211 = function (_754)
    {
        _581._1307();
        let _7202;
        _7202 = _7195[_754];
        _7196 = _754;
        window.onmousemove = _7212;
        window.onmouseup = _7213;
        _2097 = event.clientX;
        _2098 = event.clientY;
        _7209 = _7202._7192;
        _7210 = _7202._7193;
    }
    function _7212()
    {
        let _7202;
        _7202 = _7195[_7196];
        let y;
        y = event.clientY;
        let _6396;
        _6396 = y - _2098;
        _6396 /= (_2480 / 4);
        if (_7202._7194 == false)
            _6396 = -_6396;
        else if (_7202._7194 == false)
            _6396 = -_6396;
        if (_6396 == 0)
            return;
        let _6397;
        _6397 = _7209 + _6396;
        if (_6397 < 0.1)
            _6397 = 0.1;
        else if (_6397 > 10)
            _6397 = 10;
        _7202._7192 = _6397;
        _6397 = _7210 + _6396;
        if (_6397 < 0.1)
            _6397 = 0.1;
        else if (_6397 > 10)
            _6397 = 10;
        _7202._7193 = _6397;
        _7069();
    }
    function _7213()
    {
        _6387();
    }




    _7024._7214 = function (_754)
    {
        _581._1307();
        _7196 = _754;
        window.onmousemove = _7215;
        window.onmouseup = _7216;
        _2097 = event.clientX;
        _2098 = event.clientY;
    }
    function _7215()
    {
        let _7202;
        _7202 = _7195[_7196];
        let y;
        y = event.clientY;
        let _6396;
        _6396 = y - _2098;
        _6396 /= (_2480 / 4);
        if (_7202._7194 == false)
            _6396 = -_6396;
        else if (_7202._7194 == false)
            _6396 = -_6396;
        if (_6396 == 0)
            return;
        let _6397;
        _6397 = _7202._7192 + _6396;
        if (_6397 < 0.1)
            _6397 = 0.1;
        else if (_6397 > 10)
            _6397 = 10;
        _7202._7192 = _6397;
        _2098 = y;
        _7069();
    }
    function _7216()
    {
        _6387();
    }




    _7024._7217 = function (_754)
    {
        _581._1307();
        _7196 = _754;
        window.onmousemove = _7218;
        window.onmouseup = _7219;
        _2097 = event.clientX;
        _2098 = event.clientY;
    }
    function _7218()
    {
        let _7202;
        _7202 = _7195[_7196];
        let y;
        y = event.clientY;
        let _6396;
        _6396 = y - _2098;
        _6396 /= (_2480 / 4);
        if (_7202._7194 == false)
            _6396 = -_6396;
        else if (_7202._7194 == false)
            _6396 = -_6396;
        if (_6396 == 0)
            return;
        let _6397;
        _6397 = _7202._7193 + _6396;
        if (_6397 < 0.1)
            _6397 = 0.1;
        else if (_6397 > 10)
            _6397 = 10;
        _7202._7193 = _6397;
        _2098 = y;
        _7069();
    }
    function _7219()
    {
        _6387();
    }


    _7024._6226 = function (_754)
    {
        _581._1307();
        _7196 = _754;
        window.onmousemove = _7220;
        window.onmouseup = _7221;
        _2097 = event.clientX;
    }
    function _7220()
    {
        let _7202;
        _7202 = _7195[_7196];
        let x;
        x = event.clientX;
        let _7110;
        _7110 = x - _2097;
        _7110 = _7073(_7110);
        if (_7110 == 0)
            return;
        let _6024;
        _6024 = _7202._7189 + _7110;
        if (_6024 < 0)
            _6024 = 0;
        if (_6024 > _7029)
            _6024 = _7029;
        if (_6024 > _7202._7190)
            _6024 = _7202._7190;
        if (_7202._7189 == _6024)
            return;
        _7202._7189 = _6024;
        _2097 = x;
        _7069();
    }
    function _7221()
    {
        _6387();
    }



    _7024._7222 = function (_754)
    {
        _581._1307();
        _7196 = _754;
        window.onmousemove = _7223;
        window.onmouseup = _7224;
        _2097 = event.clientX;
    }
    function _7223()
    {
        let _7202;
        _7202 = _7195[_7196];
        let x;
        x = event.clientX;
        let _7110;
        _7110 = x - _2097;
        _7110 = _7073(_7110);
        if (_7110 == 0)
            return;
        let _6024;
        _6024 = _7202._7191 + _7110;
        let _6405;
        _6405 = _7202._7190;
        if (_6024 < _6405)
            _6024 = _6405;
        if (_6024 > _7029)
            _6024 = _7029;
        if (_7202._7191 == _6024)
            return;
        _7202._7191 = _6024;
        _2097 = x;
        _7069();
    }
    function _7224()
    {
        _6387();
    }




    _7024._6406 = function (_754)
    {
        _581._1307();
        _7196 = _754;
        window.onmousemove = _6407;
        window.onmouseup = _6408;
        _2097 = event.clientX;
        _2098 = event.clientY;
    }
    function _6409()
    {
        let _7202;
        _7202 = _7195[_7196];
        let x;
        x = event.clientX;
        let _7110;
        _7110 = x - _2097;
        _7110 = _7073(_7110);
        if (_7110 == 0)
            return;
        let _2200;
        _2200 = _7202._7190 + _7110;
        let _6405;
        _6405 = _7202._7189;
        if (_2200 < _6405)
            _2200 = _6405;
        let _6401;
        _6401 = _7202._7191;
        if (_2200 > _6401)
            _2200 = _6401;
        if (_7202._7190 == _2200)
            return;
        _2097 = x;
        _7202._7190 = _2200;
        _7069();
    }
    function _6407()
    {
        let _7202;
        _7202 = _7195[_7196];
        if (!event.shiftKey)
            _6409();
        if (event.altKey)
            return;
        let y;
        y = event.clientY;
        let _6411;
        _6411 = _7077(y);
        _6411 -= _7077(_2098);
        if (_6411 == 0)
            return;
        let _6412;
        _6412 = _7202._2358 + _6411;
        if (_6412 > 1)
            _6412 = 1;
        if (_6412 < 0)
        {
            if (_7171)
            {
                _6412 = 0;
            }
            else
            {
                _7202._7194 = false;
                window.onmousemove = _6413;
                window.onmouseup = _6414;
                _6412 = -_6412;
            }
        }
        if (_7202._2358 == _6412)
            return;
        _2098 = y;
        _7202._2358 = _6412;
        _7069();
    }
    function _6408()
    {
        _6387();
    }




    _7024._6415 = function (_754)
    {
        _581._1307();
        _7196 = _754;
        window.onmousemove = _6413;
        window.onmouseup = _6414;
        _2097 = event.clientX;
        _2098 = event.clientY;
    }
    function _6413()
    {
        let _7202;
        _7202 = _7195[_7196];
        if (!event.shiftKey)
            _6409();
        if (event.altKey)
            return;
        let y;
        y = event.clientY;
        let _6411;
        _6411 = _7077(y);
        _6411 -= _7077(_2098);
        _6411 = -_6411;
        if (_6411 == 0)
            return;
        let _6412;
        _6412 = _7202._2358 + _6411;
        if (_6412 > 1)
            _6412 = 1;
        if (_6412 < 0)
        {
            _7202._7194 = true;
            window.onmousemove = _6407;
            window.onmouseup = _6408;
            _6412 = -_6412;
        }
        if (_7202._2358 == _6412)
            return;
        _2098 = y;
        _7202._2358 = _6412;
        _7069();
    }
    function _6414()
    {
        _6387();
    }

    
    
    
    _7024._7112=function (_893)
    {
        if (!_893)
        {
            _7195.length = 0;
        }
        else
        {
            let _985;
            _985 = JSON.parse(_893);
            if (_985[F("最小值x")] != _7028 || _985[F("最大值x")] != _7029)
                console.assert(0);
            if (_985[F("最小值y")] != _7030 || _985[F("最大值y")] != _7031 || _985[F("只能为正")] != _7171)
                console.assert(0);
            _7195.length = _985[F("控制点数组")].length;
            for (let _570 = 0; _570 < _7195.length; _570++)
            {
                let _1102;
                _1102 = new _7188();
                _7195[_570] = _1102;
                let _1103;
                _1103 = _985[F("控制点数组")][_570];
                _1102._7189 = _1103[F("m开始x")];
                _1102._7190 = _1103[F("m峰的x")];
                _1102._7191 = _1103[F("m结束x")];
                _1102._2358 = _1103[F("m峰值")];
                _1102._7192 = _1103[F("m左尖锐")];
                _1102._7193 = _1103[F("m右尖锐")];
                _1102._7194 = _1103[F("m增加")];
            }
        }
        _7196 = -1;
        _7069();
    }
    _7024._7113=function ()
    {
        let _985 = new Object();
        _985[F("控制点数组")] = new Array();
        _985[F("控制点数组")].length = _7195.length;
        for (let _754 = 0; _754 < _985[F("控制点数组")].length; _754++)
        {
            let _7114;
            _7114 = new Object();
            _985[F("控制点数组")][_754] = _7114;
            let _7115;
            _7115 = _7195[_754];
            _7114[F("m开始x")] = _7115._7189;
            _7114[F("m峰的x")] = _7115._7190;
            _7114[F("m结束x")] = _7115._7191;
            _7114[F("m峰值")] = _7115._2358;
            _7114[F("m左尖锐")] = _7115._7192;
            _7114[F("m右尖锐")] = _7115._7193;
            _7114[F("m增加")] = _7115._7194;
        }
        _985[F("最小值x")] = _7028;
        _985[F("最大值x")] = _7029;
        _985[F("最小值y")] = _7030;
        _985[F("最大值y")] = _7031;
        _985[F("只能为正")] = _7171;
        return JSON.stringify(_985);
    }
    _7024._7177 = function (_2498, _1739)
    {
        _7028 = _2498;
        _7029 = _1739;
    }
    _7024._7179 = function (_7225)
    {
        _7032 = _7225;
    }
    _7024._7015 = function (_2498, _1739)
    {
        _7030 = _2498;
        _7031 = _1739;
    }
    _7024._7178 = function (_7226)
    {
        _7171 = _7226;
    }
    _7024._7016 = function (_7116)
    {
        _7008 = _7116;
    }
    
}
var _7117 = null;
function _7182(_7024, _7025,_2090, _2124, _6621, _6622, _7026, _7027, _7028, _7029, _7030, _7031, _7008 = "0 128 0", _7171 = false, _7032 = 0)
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
                _7184(_7024, _7025, _2090, _2124, _6621, _6622, _7026, _7027, _7028, _7029, _7030, _7031, _7008 , _7171 , _7032);
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
    _7024._7185 = function (_7227)
    {
        _7026 = _7227;
    }
    _7024._7176 = function (_7227)
    {
        _7027 = _7227;
    }
    _7024._7177 = function (_2498, _1739)
    {
        _7028 = _2498;
        _7029 = _1739;
    }
    _7024._7179 = function (_7225)
    {
        _7032 = _7225;
    }
    _7024._7015 = function (_2498, _1739)
    {
        _7030 = _2498;
        _7031 = _1739;
    }
    _7024._7178 = function (_7226)
    {
        _7171 = _7226;
    }
    _7024._7016 = function (_7116)
    {
        _7008 = _7116;
    }
    _7024._7123();
}
function _7228(_7049)
{
    if (!_7049)
        return L("无变化");
    let _569;
    _569 = "";
    let _985;
    _985 = JSON.parse(_7049);
    let _7169, _7170, _7171;
    _7169 = _985[F("最小值y")];
    _7170 = _985[F("最大值y")];
    _7171 = _985[F("只能为正")];
    let _7195;
    _7195 = _985[F("控制点数组")];
    let length;
    length = _7195.length;
    if (length > 3)
        length = 3;
    for (let _754 = 0; _754 < length; _754++)
    {
        let _7202;
        _7202 = _7195[_754];
        let _623;
        _623 = _7202[F("m峰值")];
        if (!_7171)
            if (!_7202[F("m增加")])
                _623 = -_623;
        if (_7171)
            _623=_581._761(_7169, _7170, 0, 1, _623);
        else
            _623 =_581._761(_7169, _7170, -1, 1, _623);
        _569 += _623.toFixed(4) + "@" + ((_7202[F("m开始x")] + _7202[F("m结束x")]) / 2).toFixed(1) + L("倍频");
        if (_754 != length - 1)
            _569 += L("，");
    }
    if (_7195.length > 3)
        _569 += L("，...");
    if (length == 0)
        _569 += L("无变化");
    return _569;
}
