
class _2570 extends _2579
{
    constructor()
    {
        super();
        this._2577 = F("句子开头两次上行");
    }
    _2549(_2055, _2056, _1983, _2057, _2058)
    {
        let _2629;
        {
            let _2091;
            _2091 = _2056._1138._2102();
            let _2134, _2135;
            [_2134, _2135] = _2136._2137(_2056, _2091);
            let _2159;
            _2159 = _2056._2160(_2134);
            _2629 = _2159 + 1;
        }

        let _2630, _2631;
        {
            if (_2629 <= 1)
                return L("只有一个节拍（或者没有划分节拍），不能应用句子开头两次上行");
            else if (_2629 == 2 || _2629 == 3)
                _2630 = 1;
            else if (_2629 == 4 || _2629 == 5)
                _2630 = 2;
            else
                _2630 = 3;
            _2631 = _2630;
        }

        let _2632, _2633;
        let _2634;
        {
            let _2635;
            _2635 = _2056._2062(0);
            _2632 = _2635._2251(0);
            let _2636;
            {
                let _2637, _2638;
                [_2637, _2638] = _2056._2282(_2630 + _2631 - 1);
                _2634 = _2638;
                _2636 = _2056._2062(_2638);
            }
            _2633 = _2636._2251(_2636._2216()-1);
        }

        let _2639 = 0;
        let _2640;
        {
            let _2641;
            [_2641, _2640] = _2056._2282(_2630 - 1);
        }
        let _2642;
        _2642 = _2640 + 1;

        for (let _1656 = _2639; _1656 <= _2640; _1656++)
        {
            let _333;
            _333 = _2056._2062(_1656);
            let _2188;
            _2188 = _581._761(_2632, _2633, _2639, _2640, _1656);
            _333._2193(_2188);
        }
        for (let _1656 = _2642; _1656 <= _2634; _1656++)
        {
            let _333;
            _333 = _2056._2062(_1656);
            let _2188;
            _2188 = _581._761(_2632, _2633, _2642, _2634, _1656);
            _333._2193(_2188);
        }
        return null;
    }
}






class _2571 extends _2579
{
    constructor()
    {
        super();
        this._2577 = F("句子开头的节拍停顿");
    }
    _2583()
    {
        let _824;
        _824 = "";
        _824 += "<span style='font-size:20px;font-weight: lighter;'>";
        let _1877 = new _2643();
        _1877._2620 = true;
        _824 += _2552._2644(L("咚呛"), _1877);
        _824 += "</span>";
        return _824;
    };
    _2645(_2161)
    {
        let _2646;
        switch (_2161)
        {
            case 0: _2646 = 0; break;
            case 1: _2646 = 0; break;
            case 2: _2646 = 1; break;
            case 3: _2646 = 1; break;
            case 4: _2646 = 1; break;
            case 5: _2646 = 2; break;
            default: _2646 = 3; break;
        }
        return _2646;
    }
    _2628(_1902, _2133, _2611, _1983)
    {
        let _2161;
        _2161 = _1141._2162(_2133);
        let _2646;
        _2646 = this._2645(_2161);
        for (let _2283 = 0; _2283 < _2646; _2283++)
        {
            let _2647;
            _2647 = _1141._2648(_2133, _2283);
            if (_2647._2620)
                return _2283;
        }
        return -1;
    }
    _2549(_2055, _2056, _1983, _2057, _2058)
    {
        let _2161;
        _2161 = _2056._2162();
        let _2646;
        _2646 = this._2645(_2161);
        if (_2646 <= 0)
        {
            _2056._2280(L("句子只有") + _2161 + L("。太短了（或者是沒有划分节拍），无法实现，句子开头的节拍停顿。"));
            return null;
        }
        for (let _2283 = 0; _2283 < _2646; _2283++)
        {
            let _2647;
            _2647 = _2056._2286(_2283);
            if (_2647._2620)
                return null;
        }
        let _2647;
        _2647 = _2056._2286(_2646 - 1);
        if (!_2647._2619)
            _2552._2621(_2055, _2056, _1983, _2057, _2058, _2646 - 1);
        return null;
    }
}

