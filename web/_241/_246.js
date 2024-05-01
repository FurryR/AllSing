class _1901
{
    static _612()
    {
        let _1902;
        _1902 = parent._585;

        let _824;
        _824 = "";
        _824 += "<div style='text-align:center;width:100%;'>\r\n";
        _824 += "<div id='_1908' style='text-align: left; text-indent: 2em; display: inline-block;'>";
        _824 += L("在这里手工划分好自然段后，机器会根据自然的段的划分，半自动谱曲。") + "\r\n";
        _824 += "</div><br/>";
        _824 += "<div id='_1909' style='text-align: left; text-indent: 2em; display: inline-block;'>";
        _824 += L("自然段用空行隔开，点击行之间的空白间隔分开自然段，点击自然段之间的空行合并自然段。") + "\r\n";
        _824 += L("也可以点击行的末尾切换自然段的划分。") + "\r\n";
        _824 += "</div><br/>\r\n";
        _824 += "<br/><br/>\r\n";
        _824 += "<span id='_1910' style='text-align: left; display: inline-block;'>\r\n";
        for (let _620 = 0; _620 < _1902.length; _620++)
        {
            let _445;
            _445 = _1902[_620];
            if (_445._1137)
                continue;
            let _270;
            _270 = _445._1138;
            if (_1011._1903(_1902, _620) != -1)
            {
                if (_270._1139)
                {
                    _824 += "<div title='" + L("合并自然段") + "' style='width:100%;height:40px;cursor:copy;' onclick='_1901._1911(" + _620 +");'>&nbsp;</div>\r\n";
                }
                else
                {
                    _824 += "<div title='" + L("分开自然段") + "' style='width:100%;height:10px;cursor:vertical-text;' onclick='_1901._1912(" + _620 +");'>&nbsp;</div>\r\n";
                }
            }
            let _93;
            _93 = _1141._1142(_445);
            _824 += "<div style='white-space: nowrap;'>" + _93;
            {
                let _1904;
                _1904 = _1011._1905(_1902, _620);
                if (_1904 != -1)
                {
                    if (_1902[_1904]._1138._1139)
                        _824 += "<span title='" + L("合并自然段") + "' style='color: rgb(black / 0.3); font-size: smaller; cursor: pointer;' onclick='_1901._1911(" + _1904 + ");'>" + L("⤣") +"</span>\r\n";
                    else
                        _824 += "<span title='" + L("分开自然段") + "' style='color: rgb(black / 0.3); font-size: smaller; cursor: pointer;' onclick='_1901._1912(" + _1904 + ");'>" + L("↙") +"</span>\r\n";
                }
            }
            _824 += "</div>\r\n";
        }
        _824 += "</span><br/>\r\n";
        _824 += "</div>\r\n";
        _1906(_824);
        _1907(_1908,_1909,_1910);
    }

    static _1911(_620)
    {
        let _1902;
        _1902 = parent._585;
        let _445;
        _445 = _1902[_620];
        let _270;
        _270 = _445._1138;
        _270._1139 = false;
        _1901._612();
    }
    static _1912(_620)
    {
        let _1902;
        _1902 = parent._585;
        let _445;
        _445 = _1902[_620];
        let _270;
        _270 = _445._1138;
        _270._1139 = true;
        _1901._612();
    }
}
class _1913
{
    static _612()
    {
        let _1902;
        _1902 = parent._585;
        let _824;
        _824 = "";
        _824 += "<br/>\r\n";
        _824 += "<div style='text-align:center;width:100%;'>\r\n";
        _824 += "<div id='_1916' style='text-align: left; text-indent: 2em; display: inline-block;'>";
        _824 += L("在这里手工指定好高潮自然段后，机器会根据高潮自然段的信息，半自动谱曲。") + "\r\n";
        _824 += "</div><br/>\r\n";
        _824 += "<div id='_1917' style='text-align: left; text-indent: 2em; display: inline-block;'>";
        _824 += L("自然段分为高潮和非高潮（不再区分主歌、副歌、预副歌、桥段）。") + "\r\n";
        _824 += "<span style='background-color: rgb(100 0 255 / 0.1);'>" + L("蓝色背景的是高潮。") + "</span>\r\n";
        _824 += L("点击自然段可以切换。") + "\r\n";
        _824 += "</div><br/><br/>\r\n";
        _824 += "<span id='_1918' style='text-align: left; display: inline-block;'>\r\n";
        for (let _620 = 0; _620 < _1902.length; _620++)
        {
            let _445;
            _445 = _1902[_620];
            if (_445._1137)
                continue;
            let _270;
            _270 = _445._1138;
            if (_1011._1903(_1902, _620) != -1 && _270._1139)
                _824 += "<br/>\r\n";
            let _93;
            _93 = _1141._1142(_445);
            let _1914;
            _1914 = _1011._1915(_1902, _445);
            _824 += "<div style='cursor: pointer;" + (_1914 ? "background-color: rgb(100 0 255 / 0.075);" : "")+"' onclick='_1913._1919(" + _620 + "," + (_1914 ? "false" : "true") + ");'>" + _93 + "</div>\r\n";
        }
        _824 += "</span><br/>\r\n";
        _824 += "</div>\r\n";
        _1906(_824);
        _1907(_1916, _1917, _1918);
    }

    static _1919(_620,_1914)
    {
        let _1902;
        _1902 = parent._585;
        let _445;
        _445 = _1902[_620];
        let _270;
        _270 = _1011._1920(_1902,_445)._1138;
        _270._1921 = _1914;
        _1913._612();
    }
}

class _1922
{
    static _612()
    {
        let _1902;
        _1902 = parent._585;

        let _824;
        _824 = "";
        _824 += "<br/>\r\n";
        _824 += "<div style='text-align:center;width:100%;'>\r\n";
        _824 += "<p id='_1930' style='text-align: left; text-indent: 2em; font-style: italic; display: inline-block;'>";
        _824 += L("有一部分歌曲，谱曲时，相邻的句子成对出现。") + "\r\n";
        _824 += L("对于一对句子，可能是一个上行，一个下行。一个使用向上的滑音，一个使用向下的滑音。") + "\r\n";
        _824 += L("可能是在第一个句子结尾上行，第二个句子结尾下行。可能是在第一个句子结尾下行，第二个句子结尾上行。") + "\r\n";
        _824 += "<br/>\r\n";
        _824 += L("允许有句子不出现在任何句子对里。") + "\r\n";
        _824 += "</p><br/>\r\n";
        _824 += "<span id='_1931' style='text-align: left; display: inline-block;'>\r\n";
        for (let _620 = 0; _620 < _1902.length; _620++)
        {
            let _445;
            _445 = _1902[_620];
            if (_445._1137)
                continue;
            let _270;
            _270 = _445._1138;
            let _1923;
            _1923 = _1011._1903(_1902, _620);
            if (_1923 != -1)
            {
                let _1924;
                _1924 = _1902[_1923];
                let _1925;
                _1925 = _1924._1138;
                if (_270._1139)
                {
                    _824 += "<div title='" + L("自然段的分割，不能组成句子对") + "' style='width:100%;height:33px;cursor:pointer;' >&nbsp;</div>\r\n";
                }
                else
                {
                    if (_1925._1926)
                        _824 += "<div title='" + L("拆开句子对") + "' style='width:100%;height:8px;cursor:pointer;background-color: rgb(255 200 200 / 0.3)' onclick='_1922._1937(" + _1923 + ");'>&nbsp;</div>\r\n";
                    else
                        _824 += "<div title='" + L("合成句子对") + "' style='width:100%;height:14px;cursor:pointer;' onclick='_1922._1932(" + _1923 + ");'>&nbsp;</div>\r\n";
                }
            }
            let _93;
            _93 = _1141._1142(_445);
            let _1927, _1736, _1928, _1929;
            _1929=_1928 = _1736 = _1927 = "";
            if (_270._1926 || (_1923 != -1 && _1902[_1923]._1138._1926))
            {
                _1927 = "background-color: rgb(255 200 200 / 0.3);";
                if (_270._1926)
                {
                    _1736 = "onclick='_1922._1937(" + _620 + ");'";
                    _1928 = "<span title='" + L("拆开句子对") + "' style='color: rgb(black / 0.3); font-size: smaller; cursor: vertical-text;' " + _1736 + ">" + L("↙") + "</span>\r\n";
                }
                else
                {
                    _1736 = "onclick='_1922._1937(" + _1923 + ");'";
                    _1928 = "<span title='" + L("拆开句子对") + "' style='color: rgb(black / 0.3); font-size: smaller; cursor: vertical-text;' " + _1736 + ">" + L("↖") + "</span>\r\n";
                }
                _1929 = "cursor: pointer;";
            }
            else
            {
                let _1904;
                _1904 = _1011._1905(_1902, _620);
                if (_1904 != -1 && (!_1902[_1904]._1138._1139))
                    _1928 = "<span title='" + L("向下组成句子对") + "' style='color: rgb(black / 0.3); font-size: smaller; cursor: copy;' onclick='_1922._1932(" + _620 + ");'>" + L("⤦") + "</span>\r\n";
                else
                    _1928 = "<span title='" + L("向上组成句子对") + "' style='color: rgb(black / 0.3); font-size: smaller; cursor: copy;' onclick='_1922._1932(" + _1923 + ");'>" + L("⤣") + "</span>\r\n";
            }
            _824 += "<div style='width:100%;display:inline-block;" + _1929 + _1927 + "' " + _1736 + " >" + _93;
            _824 += _1928;
            _824 += "</div><br/>\r\n";
        }
        _824 += "</span><br/>\r\n";
        _824 += "</div>\r\n";
        _1906(_824);
        _1907(_1930,_1931);
    }
    static _1932(_620)
    {
        let _1902;
        _1902 = parent._585;
        let _445;
        _445 = _1902[_620];
        let _270;
        _270 = _445._1138;
        _270._1926 = true;
        let _1933;
        _1933=_1011._1903(_1902, _620);
        if (_1933!=-1)
        {
            let _1934;
            _1934 = _1902[_1933];
            _1934._1138._1926 = false;
        }
        let _1935;
        _1935 = _1011._1905(_1902, _620);
        if (_1935 != -1)
        {
            let _1936;
            _1936 = _1902[_1935];
            _1936._1138._1926 = false;
        }
        _1922._612();
    }
    static _1937(_620)
    {
        let _1902;
        _1902 = parent._585;
        let _445;
        _445 = _1902[_620];
        let _270;
        _270 = _445._1138;
        _270._1926 = false;
        _1922._612();
    }
}
