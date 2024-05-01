class _1026
{
    static async _7596()
    {
        let _7597;
        _7597 = localStorage.getItem(F("版本"));
        if (!_7597)
            return false;

        let _7598;
        _7598 = null;
        for (let _979 = 0; _979 < 3; _979++)
        {
            try
            {
                let _1510;
                _1510 = await fetch("_512/版本.cfg?" + new Date().getTime(), { _6282: 'no-store' });
                _7598 = await _1510.text();
                break;
            }
            catch (_678)
            {
                await new _7599(_7600 => setTimeout(_7600, 1000));
            }
        }
        if (_7598 === null)
            return false;

        return (_7597 == _7598);
    }

    static async _1027()
    {
        // NOTE: Patched by FurryR
        // 注: 本地版也需要跑一遍初始化。
        // {
        //     let _7601;
        //     _7601 = window.location.hostname;
        //     if (_7601.includes("127.0.0.1") || _7601.includes("localhost"))
        //         return;
        // }
        {
            let _7602;
            _7602 = window.location.pathname;
            if ((!_7602.includes("index.htm")) && _7602 != "/")
                return;
            if (! await this._7596())
                window.location.href = "_512/_512.htm";
        }
    }

    
    
    
    static async _222(_610)
    {
        for (let _979 = 0; true; _979++)
        {
            try
            {
                let _1510;
                _1510 = await fetch(_610 + "?" + new Date().getTime(), { _6282: 'no-store' });
                let _569;
                _569 = await _1510.text();
                _517.innerText = "";
                _517.style.color = "";
                return _569;
            }
            catch (_678)
            {
                await new _7599(_7600 => setTimeout(_7600, 2000));
            }
            _517.innerText = L("无法得到“") + _610 + L("”！等两秒钟重试。重试第") + (_979 + 1) + L("次");
            _517.style.color = "red";
        }

    }
    static async _1626()
    {
        localStorage.setItem(F("版本"), F("测试localStorage使能"));
        if (localStorage.getItem(F("版本")) != F("测试localStorage使能"))
        {
            _517.style.color = "red";
            _517.innerText = L("必须启用cookie才能用大市唱");
            return;
        }
        localStorage.removeItem(F("版本"));
        let _7598;
        _7598 = await _1026._222("版本.cfg");


        let _7603;
        _7603 = await _1026._222("文件列表.cfg");
        _7603 = _7603.split("\r\n");
        let _7604;
        _7604 = 0;
        for (let _7605 = 0; _7605 < _7603.length; _7605++)
        {
            let _431;
            _431 = _7603[_7605];
            if (!_431.includes("?"))
            {
                _7603.splice(_7605, 1);
                _7605--;
                continue;
            }
            _431 = _431.split("?");
            _7604 += parseInt(_431[1]);
            _7603[_7605] = _431[0];
        }
		let _7606;
		_7606 = 0;
        for (let _7605 = 0; _7605 < _7603.length; _7605++)
        {
            let _7602;
            _7602 = _7603[_7605];
            let _7607;
            _7607 = (_7602.toLowerCase() == "/Binary/install_data.bin".toLowerCase());
            _516.innerText = _7602;
            _517.style.color = "";
            _517.innerText = "";
            let _6281;
            _6281 = false;
			for (let _635 = 0; true; _635++)
			{
				try
                {
                    let _6279;
                    if (_7607)
                        _6279 = new Array();
					let _1510;
                    _1510 = await fetch(_7602);
                    
                    
                    
                    
                    
                    
					let _1414;
                    _1414 = parseInt(_1510.headers.get('content-length'));
					let _682;
					_682 = _1510.body.getReader();
					let _6283;
					_6283 = 0;
					while (true)
					{
						let { _6284, value } = await _682.read();
						if (_6284)
							break;
						if (!value)
                            break;
                        if (_7607)
                            _6279.push(value.buffer);
                        _6283 += value.length;

                        _514._837(_7606 + _6283, _7604);
                        if (_1414 == 0 || _6283 >= _1414)
                            _515._837(100, 100);
                        else
                            _515._837(_6283, _1414);

						if (_6283 >= _1414)
							break;
                    }
                    
                    if (_7607)
                    {
                        let _6280;
                        _6280 = _1510.headers.get("last-modified");
                        _6280 = new Date(_6280);
                        _6280 = _6280.getTime();
                        let _784;
                        _784 = new _634();
                        for (let _635 = 0; _635 < 2; _635++)
                        {
                            if (_635 == 0)
                                _784._636();
                            else
                                _784._637();
                            _784._778(_6280);
                            for (let _6285 = 0; _6285 < _6279.length; _6285++)
                                _784._783(_6279[_6285]);
                        }
                        function _7608(buffer)
                        {
                            buffer._636();
                            buffer._783(_784._640);
                            buffer._637();
                            buffer._783(_784._640);
                        }
                        _6237("install_data", _7608);
                    }
                    _7606 += _1414;
                    _6281 = true;
					break;
				}
				catch (_678)
				{
					_6281 = false;
                }
                if (_635 > 3)
                {
                    _517.innerText = L("加载失败，等待2秒钟，从新加载。第") + _635 + L("次");
                    _517.style.color = "red";
                    await new _7599(_7600 => setTimeout(_7600, 2000));
                }
			}
        }

        _514._837(100, 100);
        _515._837(100, 100);
        _516.innerText = L("全部完成");
        _517.innerText = "";
        _517.style.color = "";

        localStorage.setItem(F("版本"), _7598);

        window.location.href = "/";
    }
}

