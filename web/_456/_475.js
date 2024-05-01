class _7255
{
    static _7256;
    static _7257;

    static _7258;
    static _7259;
    static _7260;
    static _454()
    {
        return Math.random()
    }
    static _7068()
    {
        
    }
    static _7261(_7262)
    {
        let _7263;
        _7263 = Math.abs(_7262);
        _7263 /= (this._7258 * this._7257);
        if (_7263 >= 1)
            return 0;
        if (this._7256 < -0.5 )
        {
            let _7264;
            _7264 = _581._761(3., 1., -1., -0.5, this._7256);
            return Math.pow(Math.sin(_7263 * Math.PI), _7264);
        }
        else if (this._7256 < 0 )
        {
            let _7265;
            _7265 = _581._761(0., 1., -0.5, 0., this._7256);
            return (1 * _7265 + Math.sin(_7263 * Math.PI) * (1 - _7265));
        }
        else if (this._7256 < 0.5)
        {
            let _7266;
            _7266 = _581._761(0., 1., 0., 0.5, this._7256);
            return (Math.cos(_7263 * Math.PI / 2) * _7266 + 1 * (1 - _7266));
        }
        else 
        {
            let _7264;
            _7264 = _581._761(1., 3., 0.5, 1., this._7256);
            return Math.pow(Math.cos(_7263 * Math.PI / 2), _7264);
        }
    }
    static _7267(_7268, _7269, _7270, _7271)
    {
        
        
        this._7256 = _7268;
        this._7257 = 1;
        this._7258 = 1;
        this._7259 = 1e100;
        this._7260 = false;
        const _1013 = 1 << 8;
        const _7272 = 1. / _1013;
        let _7273;
        _7273 = 0;
        for (let _979 = 0; _979 < _1013; _979++)
        {
            let _7262;
            _7262 = (_979 + 0.5) * _7272;
            _7273 += _7272 * this._7261(_7262);
        }
        this._7257 = 1 / _7273;

        
        this._7258 = _7269;
        this._7259 = _7270;
        if (this._7258 * this._7257 > this._7259)
            this._7257 = this._7259 / this._7258;
        this._7260 = _7271;
    }
    static _5516()
    {
        while (true)
        {
            let _7262;
            _7262 = _581._761(0., this._7258 * this._7257, 0., 1., this._454());
            let _7261;
            _7261 = this._7261(_7262);
            let _454;
            _454 = _581._761(0., 1., 0., 1., this._454());
            if (_7261 < _454)
                continue;
            if (this._7260)
                if (((Math.round(this._454() * 10)) % 2) == 1)
                    _7262 = -_7262;
            return _7262;
        }
    }
}

