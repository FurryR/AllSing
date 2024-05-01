function _589()
{
    let _1861;
    _1861 = _39.contentWindow._1792();
    _923._612();
    for (let _657 = 0; _657 < _658._659; _657++)
    {
        let options;
        options = _1099[_657].options;
        options.length = 0;
        if (_657 != 0)
            options.add(new Option(L("不使用"), ""));
        for (let _1890 = 0; _1890 < _1861.length; _1890++)
        {
            let 名称;
            名称 = _1861[_1890]._1891;
            options.add(new Option(名称, 名称));
        }
        _1099[_657].value = _923._445._1153[_657];
        if (_1099[_657].selectedIndex == -1)
            _1099[_657].selectedIndex = 0;
    }
}
function _1895()
{
    for (let _620 = 0; _620 < _585.length; _620++)
    {
        let _445;
        _445 = _585[_620];
        if (_445._1137)
            continue;
        _6929(_445);
    }
    _589();
}
function _1057()
{
    let _6962;
    _6962 = _36.contentWindow._1865()[5]._1232;
    for (let _620 = 0; _620 < _585.length; _620++)
    {
        let _445;
        _445 = _585[_620];
        let _1681 = _445._1164;
        for (let _6963 = 0; _6963 < _1681.length; _6963++)
        {
            let _455 = _1681[_6963];
            let _6567 = _455._6527;
            for (let _6568 = 0; _6568 < _6567.length; _6568++)
            {
                if (!_36.contentWindow._602(_6567[_6568]))
                    _6567[_6568] = _6962;
            }
        }
    }
}
function _630()
{
    let _1862;
    _1862 = _40.contentWindow._1863();
    let options;
    options = _168.options;
    options.length = 0;
    for (let _6964 = 0; _6964 < _1862.length; _6964++)
    {
        let 名称;
        名称 = _1862[_6964].名称;
        options.add(new Option(名称, 名称));
    }
}
function _1060()
{
    let _6965 = _40.contentWindow._1863()[0].名称;
    for (let _620 = 0; _620 < _585.length; _620++)
    {
        let _445;
        _445 = _585[_620];
        if (!_40.contentWindow._1878(_445._1154))
            _445._1154 = _6965;
    }
    _630();
}

