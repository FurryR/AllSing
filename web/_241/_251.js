class _2074
{
    static _612()
    {
        let _1902;
        _1902 = parent._585;

        if (_1902.length == 0)
        {
            _1906("");
            return;
        }
        let _824;
        _824 = "";
        _824 += "<div style='text-align:center;width:100%;'>\r\n";
        _824 += "   <div id='_2086' style='text-align: left; text-indent: 2em; display: inline-block;'>\r\n";
        _824 += "       <div>\r\n";
        _824 += "           " + L("在这里设置句子结构，机器会根据设置的信息，自动谱曲。") + "\r\n";
        _824 += "       </div>\r\n";
        _824 += "       <div>\r\n";
        _824 += "           " + L("句子结构，可分为")+"\r\n";
        _824 += "           " + "<span id='_2081' style='white-space: nowrap; padding-top: 7px; text-indent: 0em; display:inline-block; background: linear-gradient(to right, rgb(255 255 0 / 0.12) 0%, rgb(255 0 0 / 0.12) 33%, rgb(255 0 255 / 0.12) 66%, rgb(192 0 255 / 0.12) 100%);'>" + L("上行的句子结构、") + "</span>\r\n";
        _824 += "           " + "<span id='_2083' style='white-space: nowrap; padding-top: 7px; text-indent: 0em; display:inline-block; background: linear-gradient(to right, rgb(192 0 255 / 0.12) 0%, rgb(0 0 255 / 0.12) 33%, rgb(0 255 255 / 0.12) 66%, rgb(0 255 0 / 0.12) 100%);'>" + L("下行的句子结构、") + "</span>\r\n";
        _824 += "           " + L("平行的句子结构（另外设置），拖动句子就可以改变句子结构。一般来说，都是先上行，后下行。欢快的歌曲，一句之内上行多，上行的句子也多；悲哀的反之。");
        _824 += "       </div>\r\n";
        _824 += "       <div>\r\n";
        _824 += "           " + L("句子上下行对比，也会在这里显示，分别为：");
        _824 += "           " + "<span id='_2082' style='white-space: nowrap; padding-top: 7px; text-indent: 0em; display:inline-block; background: rgb(240 0 100 / 0.15);'>" + L("句子上下行对比的上行句子，") + "</span>\r\n";
        _824 += "           " + "<span id='_2084' style='white-space: nowrap; padding-top: 7px; text-indent: 0em; display:inline-block; background: rgb(0 130 240 / 0.15);'>" + L("句子上下行对比的下行句子。") + "</span>\r\n";
        _824 += "           " + L("在这里编辑上下行对比的句子，会取消他的上下行对比的属性。") + "\r\n";
        _824 += "       </div>\r\n";
        _824 += "   </div><br/><br/>\r\n";
        _824 += "   <span id='_2087' style='display: inline-block;'>\r\n";
        let _2075;
        _2075 = 0;
        for (let _620 = 0; _620 < _1902.length; _620++)
        {
            let _445;
            _445 = _1902[_620];
            if (_445._1137)
                continue;
            let _270;
            _270 = _445._1138;
            if (_1011._1903(_1902, _620) != -1 && _270._1139)
            {
                _824 += "<div id='_7626" + _2075 + "' style='width: 100%;'>&nbsp;</div>\r\n";
                _2075++;
            }
            let _93;
            _93 = _1141._1142(_445);
            function _2076(_2077)
            {
                if (!_2077.length)
                    return _2077;
                let _2078;
                _2078 = _2077.substring(_2077.length-1);
                if (_2078 == ',' || _2078 == '.' || _2078 == '_7747' || _2078 == '_7748' || _2078 == '_7749' || _2078 == ' ')
                    _2077 = _2077.substring(0, _2077.length - 1);
                return _2077;
            }
            _93 = _2076(_93);
            let _1736,_1929;
            if (_270._2041 != false)
            {
                
                _1736 = "onmousedown = '_2074._2101(" + _620 + ");'";
                
                _1929 = "e-resize";
            }
            else
            {
                _1736 = "onmousedown = '_2074._2101(" + _620 + ");'";
                _1929 = "e-resize";
            }
            _824 += "<span id='_7627" + _620 + "' style='position: relative; white-space: nowrap; display: inline-block; font-size: large; padding-top: 7px; cursor: " + _1929 +";' " + _1736 + ">" + _93 + "</span><br/>\r\n";
        }
        _824 += "   </span><br/>\r\n";
        _824 += "   <div id='_7626" + _2075 + "' style='width:100%;'>&nbsp;</div>\r\n";
        _824 += "   <br/><br/><br/>\r\n";
        _824 += "   <span id='_2085' style='display: inline-block; text-align: left;'>";
        _824 += "       <div>" + L("句子结构的建议有：") + "</div>\r\n";
        _824 += "       <ul style=''>\r\n";
        _824 += "           <li>\r\n";
        _824 += "              " + L("每个自然段中，不可以全部是以上行为主的句子，也不可以全部是以下行为主的句子。") + "\r\n";
        _824 += "              " + "<span style='cursor: pointer; color: blue; text-decoration: underline; white-space: nowrap;' onclick='_2074._2118();'>" + L("检测") + "</span>\r\n";
        _824 += "           </li>\r\n";
        _824 += "       </ul>\r\n";
        _824 += "   </span><br/>\r\n";
        _824 += "</div>\r\n";
        _1906(_824);
        _2074._2079("_7627", _1902);
        _2074._2080(_2081, 1);
        _2074._2080(_2082, 1);
        _2074._2080(_2083, 0);
        _2074._2080(_2084, 0);

        _1907(_2085, _2086, _2087);

        for (let _620 = 0; _620 < _1902.length; _620++)
        {
            let _445;
            _445 = _1902[_620];
            if (_445._1137)
                continue;
            let _270;
            _270 = _445._1138;

            let _2088;
            _2088 = document.getElementById("_7627" + _620);
            let _2089;
            _2089 = _2088.getBoundingClientRect();
            let _2090;
            _2090 = _2089.width;

            if (_270._2041 != false)
            {
                if (_270._2041 == F("下行"))
                {
                    _2088.style.backgroundColor = "rgba(0 130 240 / 0.15)";
                    _2088.title = L("下行（相邻句子上下行对比）");
                    _2088.style.left = (-_2090/2) + "px";
                }
                else
                {
                    _2088.style.backgroundColor = "rgba(240 0 100 / 0.15)";
                    _2088.title = L("上行（相邻句子上下行对比）");
                    _2088.style.left = (_2090/2) + "px";
                }
            }
            else
            {
                let _2091;
                _2091 = _270._2092;
                let _2093;
                
                _2093 = (_2091 - 0.5) * _2090;
                _2088.style.left = _2093 + "px";

                let _2094;
                _2094 = "";
                let _2095;
                _2095 = _2091;
                _2094 += "rgb(255 255 0 / 0.1) 0%, ";
                _2094 += "rgb(255 0 0 / 0.1) " + ((_2095 * 4 / 9) * 100) + "%, ";
                _2094 += "rgb(255 0 255 / 0.1) " + ((_2095 * 8 / 9) * 100) + "%, ";

                _2094 += "rgb(192 0 255 / 0.1) " + (_2095 * 100) + "%, ";

                let _2096;
                _2096 = 1 - _2095;
                _2094 += "rgb(0 0 255 / 0.1) " + ((_2095 + _2096 * 1 / 17) * 100) + "%, ";
                _2094 += "rgb(0 255 255  / 0.1) " + ((_2095 + _2096 * 9 / 17) * 100) + "%, ";
                _2094 += "rgb(0 255 0 / 0.1) 100%";
                _2088.style.background = "linear-gradient(to right, " + _2094 + ")";
                _2088.title = L("拖动改变句子结构");
            }
        }
    }


    static _2097;
    static _2098;
    static _2099;
    static _2100;
    static _2101(_620)
    {
        let _1902;
        _1902 = parent._585;

        _581._1307();
        this._2097 = event.clientX; 
        let _270;
        _270 = _1902[_620]._1138;
        this._2099 = _270._2102();
        this._2100 = _620;
        window.onmousemove = _2074._2103.bind(this);
        window.onmouseup = _2074._2104.bind(this);
    }
    static _2103()
    {
        let _1902;
        _1902 = parent._585;

        let _2088;
        _2088 = document.getElementById("_7627" + this._2100);
        let _2089;
        _2089 = _2088.getBoundingClientRect();
        let _2105;
        _2105 = _2089.width;
        let _2106;
        _2106 = event.clientX - this._2097;
        _2106 /= _2105;
        if (_2106 == 0)
            return;
        
        let _2107;
        _2107 = this._2099 + _2106;
        if (_2107 < 0)
            _2107 = 0;
        else if (_2107 > 1)
            _2107 = 1;
        let _270;
        _270 = _1902[this._2100]._1138;
        if (_270._2092 == _2107)
            return;

        if (_270._2041 != false)
        {
            
            
            
            let _2108, _2109;
            [_2108, _2109] = _1011._1998(_1902, _1902[this._2100], F("上下行"));
            let _2110, _2111;
            _2110 = _2108;
            _2111 = this._2100-1;
            if (_2111 - _2110 + 1 >= 2)
            {

            }
            else
            {
                for (let _1983 = _2110; _1983 <= _2111; _1983++)
                {
                    let _270;
                    _270 = _1902[_1983]._1138;
                    if (_270._2041 == F("下行"))
                        _270._2092 = 0;
                    else
                        _270._2092 = 1;
                    _270._2041 = false;
                    _270._2112 = false;
                }
            }

            let _2113, _2114;
            _2113 = this._2100 + 1;
            _2114 = _2109;
            if (_2114 - _2113 + 1 >= 2)
            {
                _1902[_2113]._1138._2115 = true;
            }
            else
            {
                for (let _1983 = _2113; _1983 <= _2114; _1983++)
                {
                    let _270;
                    _270 = _1902[_1983]._1138;
                    if (_270._2041 == F("下行"))
                        _270._2092 = 0;
                    else
                        _270._2092 = 1;
                    _270._2041 = false;
                    _270._2112 = false;
                }
            }

            _270._2041 = false;
            _270._2112 = false;
        }

        _270._2092 = _2107;
        this._612();
    }
    static _2104()
    {
        window.onmousemove = null;
        window.onmouseup = null;
        this._2100 = -1;
    }




    static _261()
    {
        let _1902;
        _1902 = parent._585;
        let _1984;
        _1984 = _1011._1985(_1902);
        for (let _1981 = 0; _1981 < _1984; _1981++)
        {
            let _2116;
            _2116 = document.getElementById("_7626" + _1981);
            _2116.innerHTML = "&nbsp;";
            _2116.title = "";
        }
    }
    static _1980(_1981, _1962)
    {
        let _2116;
        _2116 = document.getElementById("_7626" + _1981);
        
        _1978(_2116, "⬆&nbsp;&nbsp;" + _1962);
        _1979();
    }
    static _2117(_1962)
    {
        let _1902;
        _1902 = parent._585;
        let _1984;
        _1984 = _1011._1985(_1902);
        if (_1984 <= 0)
            return;
        let _2116;
        _2116 = document.getElementById("_7626" + (_1984 - 1));
        _1978(_2116, _1962);
        
        _1979();
    }

    static _2118()
    {
        let _1902;
        _1902 = parent._585;

        
        let _2033;
        _2033 = _1011._1985(_1902);
        let _2030;
        _2030 = false;
        for (let _1981 = 0; _1981 < _2033; _1981++)
        {
            let _2034, _2035;
            [_2034, _2035] = _1011._2036(_1902, _1981);
            let _2037;
            _2037 = 0;
            let _2119,_2120;
            _2119 = _2120 = 0;
            for (let _620 = _2034; _620 <= _2035; _620++)
            {
                let _445;
                _445 = _1902[_620];
                if (_445._1137)
                    continue;
                _2037++;
                let _270;
                _270 = _445._1138;
                let _2091;
                _2091 = _270._2102();
                if (_2091 < 0.5 - 0.23)
                    _2120++;
                else if (_2091 > 0.5 + 0.23)
                    _2119++;
            }
            if (_2037 >= 2)
            {
                if (_2120 == _2037)
                {
                    this._1980(_1981, L("这个自然段不可以全部都是下行为主的句子。"));
                    _2030 = true;
                }
                else if (_2119 == _2037)
                {
                    this._1980(_1981, L("这个自然段不可以全部都是上行为主的句子。"));
                    _2030 = true;
                }
            }
        }
        if (!_2030)
            _2031();
    }
    static _2080(_2088, _2121, _2122 = 0, _2123=0)
    {
        let _2089;
        _2089 = _2088.getBoundingClientRect();
        let _2090;
        _2090 = _2089.width + _2123;
        let _2124;
        _2124 = _2089.height;
        let _2125, _2126;
        _2125 = _2090 * _2121;
        _2126 = _2090 - _2125;

        if (_2088.style.display != "inline-block")
            console.assert(0);
        if (_2088.style.whiteSpace != "nowrap")
            console.assert(0);
        
        _2088.style.width = _2090 + "px";
        

        let _2127 = 9;
        let _2128;
        _2128 = document.createElement('span');
        _2128.style.zIndex = "-1";
        _2128.style.position = "relative";
        _2128.style.left = (-_2090 + _2123 + _2122) + "px";
        _2128.style.top = (-_2127 - 9) + "px";
        _2128.style.overflow = "hidden";
        _2128.style.width = _2090 + "px";
        _2128.style.height = _2127 + "px";
        _2088.appendChild(_2128);

        if (_2125 > 0.5)
        {
            let _2129;
            _2129 = document.createElement('span');
            _2129.style.position = "relative";
            _2129.style.display = "inline-block";
            _2129.style.overflow = "hidden";
            _2129.style.width = _2125 + "px";
            _2129.style.height = "10px";
            let _2130;
            if (_2125 / 2 == 0)
                _2130 = 0;
            else
                _2130 = Math.atan((_2127 / 2) / (_2125 / 2));
            _2129.style.transform = "rotate(-" + _2130 + "rad)";
            _2129.style.color = "rgb(255 0 0 /0.67)";
            _2129.innerText = F("￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣");
            _2128.appendChild(_2129);
        }

        if (_2126 > 0.5)
        {
            let _2131;
            _2131 = document.createElement('span');
            _2131.style.position = "relative";
            _2131.style.display = "inline-block";
            _2131.style.overflow = "hidden";
            _2131.style.width = _2126 + "px";
            _2131.style.height = "10px";
            let _2130;
            if (_2126 / 2 == 0)
                _2130 = 0;
            else
                _2130 = Math.atan((_2127 / 2) / (_2126 / 2));
            _2131.style.transform = "rotate(" + _2130 + "rad)";
            _2131.style.color = "rgb(0 128 0 / 0.67)";
            _2131.innerText = F("￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣");
            _2128.appendChild(_2131);
        }
     }
    static _2079(_2132, _1902)
    {
        for (let _620 = 0; _620 < _1902.length; _620++)
        {
            let _445;
            _445 = _1902[_620];
            if (_445._1137)
                continue;
            let _270;
            _270 = _445._1138;
            let _2091;
            _2091 = _270._2102();

            let _2133;
            _2133 = _1141._1654(_445);

            let _2134;
            let _2135;
            [_2134, _2135] = _2136._2137(_2133, _2091)

            let _2138, _2139;
            {
                let _2140;
                _2140 = _2133[_2134];
                _2138 = _2140._2141;
                _2139 = _2140._2142;
            }

            let _2143, _2144;
            _2143 = _2144 = -1;
            {
                let _2145 = new Array();
                _1141._1142(_445, _2145);
                for (let _754 = 0; _754 < _2145.length; _754++)
                {
                    let _2146;
                    _2146 = _2145[_754];
                    if ((_2146._2147 <= _2138 && _2138 <= _2146._2148) || (_2146._2147 <= _2139 && _2139 <= _2146._2148))
                    {
                        _2143 = _2146._2149;
                        _2144 = _2146._2150;
                        break;
                    }
                }
            }
            if (_2143 == -1 || _2144 == -1)
                console.assert(0);

            let _2088;
            _2088 = document.getElementById(_2132 + _620);
            let _2089;
            _2089 = _2088.getBoundingClientRect();
            let _2090;
            _2090 = _2089.width;
            let _2124;
            _2124 = _2089.height;

            let _2125, _2126;
            {
                
                
                const _1448 = document.createRange();
                _1448.setStart(_2088.firstChild, _2143);
                _1448.setEnd(_2088.firstChild, _2144 + 1);
                
                const _956 = _1448.getBoundingClientRect();
                _2125 = _581._761(_956.left, _956.right, 0, 1, _2135);
                _2125 -= _2089.left;
                _2126 = _2090 - _2125;
            }

            _2074._2080(_2088, _2125 / _2090);
        }
    }


    static _1626(_2055, _2056, _2151, _2152, _1983, _2057, _2058)
    {
        let _2153;
        _2153 = null;
        let _2053;
        _2053 = _2056._803();
        if (_2053 == 0)
            return null;
        if (_2053 == 1)
        {
            let _333;
            _333 = _2056._2154(_1656);
            _333._2155(_2151 + _2152 / 2, 0.5);
            return null;
        }
        let _270;
        _270 = _2056._1138;
        let _2091;
        _2091 = _270._2102();
        for (let _1656 = 0; _1656 < _2056._803(); _1656++)
        {
            let _333;
            _333 = _2056._2154(_1656);
            let _2156;
            _2156 = _1656 / (_2056._803() - 1);
            if (_2156 <= _2091)
            {
                let _2157;
                if (_2091 >= 0.5)
                    _2157 = 0;
                else
                    _2157 = _581._761(0, _2152 * 0.8, 0.5, 0, _2091);
                _333._2155(_581._761(_2151 + _2157, _2151 + _2152, 0, _2091, _2156), 0.5);
            }
            else
            {
                let _2158;
                if (_2091 <= 0.5)
                    _2158 = 0;
                else
                    _2158 = _581._761(0, _2152 * 0.8, 0.5, 1, _2091);
                _333._2155(_581._761(_2151 + _2152, _2151 + _2158, _2091, 1, _2156), 0.5);
            }
        }


        let _2134, _2135;
        [_2134, _2135] = _2136._2137(_2056, _2091);
        let _2159;
        _2159 = _2056._2160(_2134);
        let _2161;
        _2161 = _2056._2162();
        let _984;
        if (_2159 >= 1)
        {
            _984 = new _2163();
            _984.start = 0;
            _984._2069 = 0;
            _984.stop = _2134;
            _984._2070 = 0.68;
            _984._2071 = 1;
            _984._2164 = false;
            _2056._2165.push(_984);
        }

        if (_2159 <= _2161 - 1 - 1)
        {
            _984 = new _2163();
            _984.start = _2134 + 1;
            _984._2069 = _2056._803();
            _984.stop = _2056._803();
            _984._2070 = 0.68;
            _984._2071 = 1;
            _984._2164 = false;
            _2056._2165.push(_984);
        }

        return _2153;
    }
}

