
class _2817
{
    static _612()
    {
        let _1902;
        _1902 = parent._585;

        let _824;
        _824 = "";
        _824 += "<div style='text-align:center; width:100%;'>\r\n";
        _824 += "   <span id='_2818' style='display: inline-block; text-align: left; '>\r\n";
        _824 += "       <div style='text-align: left; text-indent: 2em; display: inline-block;'>\r\n";
        _824 += "           " + L("在主界面编辑好节拍，在这里检查。机器根据在主界面编辑的节拍信息，进行自动谱曲。") + "\r\n";
        _824 += "       </div>\r\n";
        _824 += "       <div style='text-align: left; text-indent: 2em; display: inline-block;'>\r\n";
        _824 += "           " + L("根据作者对流行歌曲的分析，节拍再也不是传统的2/4拍、3/4拍的概念，而是大体和单词对应。") + "\r\n";
        _824 += "           " + L("单词的第一个音节重，其余的轻。") + "\r\n";
        _824 += "           " + L("也有单个音节的单词，合成一个接拍的。也有一个单词拆成两个节拍的（不提倡）。") + "\r\n";
        _824 += "           " + L("一般来说，一个节拍有两个音节，也有三个音节或者一个音节的时候。") + "\r\n";
        _824 += "           " + L("这里是人声的节拍，和背景音乐的beat，并不一致。") + "\r\n";
        _824 += "       </div>\r\n";
        _824 += "       <div style='text-align: left; text-indent: 2em; display: inline-block;'>\r\n";
        _824 += "           " + L("节拍合法的音节数量为1~3：") + "\r\n";
        _824 += "       </div>\r\n";
        _824 += "       <ul style='margin-bottom: 0px; margin-top: 0px;'>\r\n";
        _824 += "           <li>" + L("一个音节的节拍：") + "<span style='background-color: rgba(0 255 0 / 0.15);'>" + L("啪") + "</span>" + "</li>\r\n";
        _824 += "           <li>" + L("两个音节的节拍：") + "<span style='background-color: rgba(0 255 255 / 0.2);'>" + L("咚呛") + "</span>" + "</li>\r\n";
        _824 += "           <li>" + L("三个音节的节拍：") + "<span style='background-color: rgba(0 0 255 / 0.1);'>" + L("匡匡才") + "</span>" + "</li>\r\n";
        _824 += "           <li>" + L("错误的节拍：") + "<span style='background-color: rgba(255 0 0 / 0.1);'>" + L("错误的节拍") + "</span>" + "</li>\r\n";
        _824 += "       </ul>\r\n";
        _824 += "       <div style='text-align: left; text-indent: 2em; display: inline-block;'>\r\n";
        _824 += "           " + L("错误的节拍，可以通过节拍编辑器修改，节拍编辑器在主界面，也就是歌谱编辑器最下面的一行。") + "\r\n";
        _824 += "       </div>\r\n";
        _824 += "   </span><br/><br/><br/>\r\n"

        _824 += "   <div id='_2820' style='text-align: center; font-size:20px;font-weight: lighter; text-align: left; white-space: nowrap; display: inline-block;'>";
        _824 += "<span style='text-align: right; display: inline-block; text-align: center; position: relative; top: 12px;'>";
        for (let _620 = 0; _620 < _1902.length; _620++)
        {
            let _445;
            _445 = _1902[_620];
            if (_445._1137)
                continue;
            let _2133;
            _2133 = _1141._1654(_445);
            let _2161;
            _2161 = _1141._2162(_2133);
            _824 += "<div id='_7634" + _620 +"' style='white-space: nowrap; display: inline-block;'>";
            for (let _2283 = 0; _2283 < _2161; _2283++)
            {
                let _2743, _2685;
                [_2743, _2685] = _1141._2282(_2133, _2283);
                let _2744, _2745;
                _2744 = "";
                for (let _1656 = _2743; _1656 <= _2685; _1656++)
                {
                    _2744 += "<span id='_7635" + _620 + "_" + _1656 + "'>";
                    let _2262;
                    _2262 = _2133[_1656];
                    let _358;
                    _358 = _2262._1657;
                    _2744 += _358._1640;
                    _2744 += _358._1688();
                    if (_1656 == _2685)
                    {
                        let _2746;
                        let _2747;
                        _2746 = _2748._2749(_2133, _1656, '_7752', eval(_1410("_2747")));
                        if ((!_2746) || _2747)
                        {
                            _2745 = " ";
                            if (_2747)
                                _2744 += _2746;
                        }
                        else
                        {
                            _2745 = _2746;
                        }
                    }
                    _2744 += "</span>";
                }
                let _2053;
                _2053 = _2685 - _2743 + 1;
                let _2803, _1962;
                switch (_2053)
                {
                    case 1: _2803 = "0 255 0 / 0.15"; _1962 = L("一个音节的节拍"); break;
                    case 2: _2803 = "0 255 255 / 0.2"; _1962 = L("两个音节的节拍"); break;
                    case 3: _2803 = "0 0 255 / 0.1"; _1962 = L("三个音节的节拍"); break;
                    default: _2803 = "255 0 0 / 0.1"; _1962 = L("错误的节拍"); break;
                }
                _824 += "<span id='_7633" + (_620 + "_" + _2283)+"' title='" + _1962 +"' style='background-color: rgba(" + _2803 + ")'>";
                _824 += _2744;
                _824 += "</span>\r\n";
                _824 += _2745;
            }
            _824 += "</div>\r\n";
            _824 += _2552._2734(_1902, _620);
        }
        _824 += "</span>";
        _824 += _1938._2050();
        _824 += "<span style='font-size: 19px; virtical-align: top;'>" + _1938._1957(_1902, "_7745") + "<span>";
        _824 += _2552._2738(_1902);
        _824 += "</div><br/><br/>\r\n";

        _824 += "   <span id='_2819' style='display: inline-block; text-align: left; '>\r\n";
        _824 += "   <div style='text-align: left; display: inline-block;'>\r\n";
        _824 += "      "+L("节拍音节数的建议有：") + "\r\n";
        _824 += "   </div>\r\n";
        _824 += "   <ul style='margin-bottom: 0px; margin-top: 0px;'>\r\n";
        _824 += "       <li>\r\n";
        _824 += "           " + L("一句话内相邻的三个节拍音节数不能相同。提倡尽量都不相同。（如果节拍是两个音节，四个连续音节数相同的节拍才报错）") +"\r\n";
        _824 += "           <span style='cursor: pointer; color: blue; text-decoration: underline; ' onclick='_2817._2821();'>" + L("检测") + "</span>\r\n";
        _824 += "       </li>\r\n";
        _824 += "       <li>\r\n";
        _824 += "           " + L("不同的句子，节拍音节数方式要有规律的循环。");
        _824 += "       </li>\r\n";
        _824 += "   </ul>\r\n";
        _824 += "   </span><br/><br/><br/>\r\n"

        _824 += "</div>\r\n";
        _1906(_824);
        _1907(_2818, _2819, _2820);
        _2552._2079("_7634", "_7635", _1902, -6);
    }
    static _261()
    {
        _2552._261();
    }
    static _2821()
    {
        let _2030;
        _2030 = false;
        let _1902;
        _1902 = parent._585;
        for (let _620 = 0; _620 < _1902.length; _620++)
        {
            let _445;
            _445 = _1902[_620];
            if (_445._1137)
                continue;
            let _2133;
            _2133 = _1141._1654(_445);
            let _2161;
            _2161 = _1141._2162(_2133);
            let _2822;
            _2822 = -1;
            let _2823;
            _2823 = -1;
            let _2790;
            function _2791()
            {
                let _2824;
                _2824 = _2790 - 1;
                let _2825;
                _2825 = _2824 - _2823 + 1;
                let _2794;
                if (_2822 == 2)
                {
                    if (_2825 >= 4)
                        _2794 = true;
                }
                else
                {
                    if (_2825 >= 3)
                        _2794 = true;
                }
                if (_2794)
                {
                    _2552._2753(_620, _2823, _2824, L("这") + _2825 + L("个节拍拥有相同的音节数，建议修改。"));
                    _2030 = true;
                }
            }
            for (_2790 = 0; _2790 < _2161; _2790++)
            {
                let _2743, _2685;
                [_2743, _2685] = _1141._2282(_2133, _2790);
                let _2826;
                _2826 = _2685 - _2743 + 1;
                if (_2826 != _2822)
                {
                    if (_2822 != -1)
                        _2791();
                    _2823 = _2790;
                    _2822 = _2826;
                }
            }
            if (_2823 != _2161 - 1)
                _2791();
        }
        if (!_2030)
            _2031();
    }
}


