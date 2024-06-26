class _7293 extends _1892
{
    static _7156 = L("纯计算");
    static _7157 = L("大市唱用纯数学的方法，生成没有滤波的声带音。");

    static _7418 = "";
    _7419 = _7293._7420;
    static _7420 = F('{"最小值": 0, "最大值": 1, "控制点数组":[{"m倍频":1,"m值":0}]}');
    static _7421 = 5;
    static _7422 = 3;
    static _7423 = L("振幅变化");
    static _7424 =
        L("这里设置：此参数是声带音振幅的变化量。这个参数越小，声带音音量变化越小，声音越明亮。这个参数越大，声带音音量变化越大，声音越粗糙，通常用来模拟气音。") + "<br/>" +
        L("单位是满幅振幅的倍数，一般在1以下。");

    static _7425 = "";
    _7426 = _7293._7427;
    static _7427 = F('{"最小值": 0, "最大值": 10, "控制点数组": [{"m倍频": 1 ,"m值": 0.2}]}');
    static _7428 = 11;
    static _7429 = 1;
    static _7430 = L("振幅变化速度");
    static _7431 =
        L("这里设置：振幅变化的速度，他决定了声音的沙哑程度，越小越沙哑；越大越柔和。单位是基频周期的倍数。参考值为2。") + "<br/>" +
        L("注意：1、一般使用默认值就可以，不需要修改。2、为了获得高速变化的效果，不宜设置1以下。设置到1以一下，振幅来不及变化，反而振幅会比较一致。");

    static _7432 = "";
    _7433 = _7293._7434;
    static _7434 = F('{"最小值": -1, "最大值": 1, "控制点数组": [{"m倍频": 1 ,"m值": 0.5}]}');
    static _7435 = 3;
    static _7436 = 1;
    static _7437 = L("振幅变化随机分布");
    static _7438 =
        L("这里设置：振幅变化的随机分布。中间的条带是第N倍频的形状。")+"<br/>"+
        L("此参数有如下取值：0 表示各种振幅变化量均匀分布，条带随机的断续，1 表示振幅变化量为0的较多，条带有些断续的地方没有完全断开，有的地方断的更彻底。-1 表示振幅变化量较大的比较多，断开的地方较为彻底。参考值为0。") +"<br/>"+
        L("注意：1、只有“振幅变化”有一定的值，本参数才起作用。2、一般使用默认值就可以，不需要修改。3、不宜设置-0.5以下。");




    static _7439 = "";
    _7440 = _7293._7441;
    static _7441 = F('{"最小值": -0.15, "最大值": 0.15, "上下对称": true,"控制点数组":[{"m倍频":1,"m最小值":-0.01,"m最大值":0.01}]}');
    static _7442 = 7;
    static _7443 = 3;
    static _7444 = L("频率变化");
    static _7445 =
        L("这里设置：此参数是声带音频率，距离中心频率的偏移。这个参数越小，声音就越明亮。如果变化速度快，这个参数越大声音越沙哑；如果变化速度慢，这个参数越大声音越厚重。") + "<br/>" +
        L("单位是基频的倍数。");

    static _7446 = "";
    _7447 = _7293._7448;
    static _7448 = F('{"最小值": 0, "最大值": 10, "控制点数组": [{"m倍频": 1 ,"m值": 0.2}]}');
    static _7449 = 11;
    static _7450 = 1;
    static _7451 = L("频率变化速度");
    static _7452 =
        L("这里设置：频率变化的速度，他决定了声音的沙哑程度，越小越沙哑；越大越柔和。单位是基频周期的倍数。参考值为2。") + "<br/>" +
        L("注意：1、一般使用默认值就可以，不需要修改。2、为了获得高速变化的效果，不宜设置1以下。设置到1以一下，频率来不及变化，反而频率会比较一致。");

    static _7453 = "";
    _7454 = _7293._7455;
    static _7455 = F('{"最小值": -1, "最大值": 1, "控制点数组": [{"m倍频": 1 ,"m值": 0.5}]}');
    static _7456 = 3;
    static _7457 = 1;
    static _7458 = L("频率变化随机分布");
    static _7459 =
        L("这里设置：频率变化的随机分布。中间的条带是第N倍频的形状。") +"<br/>" +
        L("此参数有如下取值：1 频谱图上N倍频的条带，中间振幅大，边沿振幅小，0 N倍频的条带中心和边沿的振幅一致，-1 N倍频的条带的边沿振幅大，中心振幅小，一般不用。参考值为0。") +"<br/>" +
        L("注意：1、只有设置频率变化有一定的宽度，当前参数才起作用。2、一般使用默认值就可以，不需要修改。3、不宜设置-0.5以下。");

    constructor()
    {
        super();
        super._7159 = F("纯计算");
    }
    _1893()
    {
        let _3150 = new _1209();
        _3150._1235();
        _3150._1247(F("振幅变化"),this._7419);
        _3150._1247(F("振幅变化速度"), this._7426);
        _3150._1247(F("振幅变化随机分布"), this._7433);
        _3150._1247(F("频率变化"),this._7440);
        _3150._1247(F("频率变化速度"), this._7447);
        _3150._1247(F("频率变化随机分布"), this._7454);
        return _3150._1260();
   }

    _7151(_893)
    {
        if (parent._3151)
        {
            let _6271;
            _6271 = _893;
            let _7164;
            _7164 = _6271;
            let _7160 = new _804();
            _7160._807(_7164, "read_from_file");
            if (_6271 = _7160._813(F("振幅变化")))
                this._7419 = _6271._792();
            if (_6271 = _7160._813(F("振幅变化速度")))
                this._7426 = _6271._792();
            if (_6271 = _7160._813(F("振幅变化随机分布")))
                this._7433 = _6271._792();

            if (_6271 = _7160._813(F("频率变化")))
                this._7440 = _6271._792();
            if (_6271 = _7160._813(F("频率变化速度")))
                this._7447 = _6271._792();
            if (_6271 = _7160._813(F("频率变化随机分布")))
                this._7454 = _6271._792();
            _6271 = _7164;
        }
        else
        {
            let _1580 = new _1261();
            _1580._1264(_893);
            let _623;
            if ((_623 = _1580._1247(F("振幅变化"))) !== undefined)
                this._7419 = _623;
            if ((_623 = _1580._1247(F("振幅变化速度"))) !== undefined)
                this._7426 = _623;
            if ((_623 = _1580._1247(F("振幅变化随机分布"))) !== undefined)
                this._7433 = _623;

            if ((_623 = _1580._1247(F("频率变化"))) !== undefined)
                this._7440 = _623;
            if ((_623 = _1580._1247(F("频率变化速度"))) !== undefined)
                this._7447 = _623;
            if ((_623 = _1580._1247(F("频率变化随机分布"))) !== undefined)
                this._7454 = _623;
        }
    }

    _7165()
    {
        return 80;
    }


    static _7460(_754)
    {
        let _456;
        _456 = _7461[_754];
        _7293._7418 = _456._7419;
        _7293._7425 = _456._7426;
        _7293._7432 = _456._7433;
        _7462();
    }
    static _7463(_754)
    {
        if (!(_7293._7418 && _7293._7425 && _7293._7432))
            return;
        let _456;
        _456 = _7461[_754];
        _456._7419 = _7293._7418;
        _456._7426 = _7293._7425;
        _456._7433 = _7293._7432;
        _7462();
    }
    static _7464(_754)
    {
        let _456;
        _456 = _7461[_754];
        _7293._7418 = _456._7419;
        _7462();
    }
    static _7465(_754)
    {
        if (!_7293._7418)
            return;
        let _456;
        _456 = _7461[_754];
        _456._7419 = _7293._7418;
        _7462();
    }

    static _7466(_754)
    {
        let _456;
        _456 = _7461[_754];
        _7293._7425 = _456._7426;
        _7462();
    }
    static _7467(_754)
    {
        if (!_7293._7425)
            return;
        let _456;
        _456 = _7461[_754];
        _456._7426 = _7293._7425;
        _7462();
    }

    static _7468(_754)
    {
        let _456;
        _456 = _7461[_754];
        _7293._7432 = _456._7433;
        _7462();
    }
    static _7469(_754)
    {
        if (!_7293._7432)
            return;
        let _456;
        _456 = _7461[_754];
        _456._7433 = _7293._7432;
        _7462();
    }

    static _7470(_754)
    {
        let _456;
        _456 = _7461[_754];
        _7293._7439 = _456._7440;
        _7293._7446 = _456._7447;
        _7293._7453 = _456._7454;
        _7462();
    }
    static _7471(_754)
    {
        if (!(_7293._7439 && _7293._7446 && _7293._7453))
            return;
        let _456;
        _456 = _7461[_754];
        _456._7440 = _7293._7439;
        _456._7447 = _7293._7446;
        _456._7454 = _7293._7453;
        _7462();
    }
    static _7472(_754)
    {
        let _456;
        _456 = _7461[_754];
        _7293._7439 = _456._7440;
        _7462();
    }
    static _7473(_754)
    {
        if (!_7293._7439)
            return;
        let _456;
        _456 = _7461[_754];
        _456._7440 = _7293._7439;
        _7462();
    }

    static _7474(_754)
    {
        let _456;
        _456 = _7461[_754];
        _7293._7446 = _456._7447;
        _7462();
    }
    static _7475(_754)
    {
        if (!_7293._7446)
            return;
        let _456;
        _456 = _7461[_754];
        _456._7447 = _7293._7446;
        _7462();
    }

    static _7476(_754)
    {
        let _456;
        _456 = _7461[_754];
        _7293._7453 = _456._7454;
        _7462();
    }
    static _7477(_754)
    {
        if (!_7293._7453)
            return;
        let _456;
        _456 = _7461[_754];
        _456._7454 = _7293._7453;
        _7462();
    }
}



