

class _2573 extends _2579
{
    constructor()
    {
        super();
        this._2577 = F("句子结尾两次下行");
    }
    _2549(_2055, _2056, _1983, _2057, _2058)
    {
        let _2649;
        {
            let _2091;
            _2091 = _2056._1138._2102();
            let _2134, _2135;
            [_2134, _2135] = _2136._2137(_2056, _2091);
            let _2159;
            _2159 = _2056._2160(_2134);
            _2649 = _2056._2162() - _2159;
        }

        let _2650,_2651;
        {
            if (_2649 <= 1)
                return L("只有一个节拍（或者没有划分节拍），不能应用句子开头两次下行");
            else if (_2649 == 2 || _2649 == 3)
                _2650 = 1;
            else if (_2649 == 4 || _2649 == 5)
                _2650 = 2;
            else
                _2650 = 3;
            _2651 = _2650;
        }

        let _2633,_2632;
        let _2652;
        {
            let _2304;
            _2304 = _2056._2062(_2056._2059()-1);
            _2632 = _2304._2251(_2304._2216()-1);
            let _2653;
            {
                let _2654, _2655;
                [_2654, _2655] = _2056._2282(_2056._2162() - _2651 - _2650);
                _2652 = _2654;
                _2653 = _2056._2062(_2654);
            }
            _2633 = _2653._2251(0);
        }

        let _2656;
        let _2657 = _2056._2059()-1;
        {
            let _2641;
            [_2656, _2641] = _2056._2282(_2056._2162() - _2650);
        }
        let _2658;
        _2658 = _2656 - 1;

        for (let _1656 = _2652; _1656 <= _2658; _1656++)
        {
            let _333;
            _333 = _2056._2062(_1656);
            let _2188;
            _2188 = _581._761(_2633, _2632, _2652, _2658, _1656);
            _333._2193(_2188);
        }
        for (let _1656 = _2656; _1656 <= _2657; _1656++)
        {
            let _333;
            _333 = _2056._2062(_1656);
            let _2188;
            _2188 = _581._761(_2633, _2632, _2656, _2657, _1656);
            _333._2193(_2188);
        }
        return null;
    }
}





class _2659 extends _2579
{
    constructor()
    {
        super();
        this._2577 = F("倒数第二个音节滑音");
    }
    _2628()
    {

    }
    _2549(_2055, _2056, _1983, _2057, _2058)
    {

    }
}


class _2574 extends _2579
{
    constructor()
    {
        super();
        this._2577 = F("倒数第二个音节上滑音下滑音交替");
        this._2606 = true;
    }
    _2583()
    {
        let _824;
        _824 = "";
        _824 += "<span style='font-size:20px;font-weight: lighter;'>";
        let _1877 = new _2643();
        _1877._2660 = true;
        _824 += _2552._2644(L("咚呛"), _1877);
        _1877._2660 = false;
        _1877._2617 = true;
        _1877._2661 = true;
        _824 += _2552._2644(L("咚呛"), _1877);
        _824 += "</span>";
        return _824;
    };
    _2628(_1902, _2662, _2663, _2664, _2665, _2666, _2667) 
    {
        let _2668, _2669;
        _2668 = _1141._2162(_2662);
        _2669 = _1141._2162(_2665);
        if (_2668 <= 0 || _2669 <= 0)
            return [-1, -1];
        let _2670, _2671;
        _2670 = _2668 - 1;
        _2671 = _2669 - 1;
        let _2672, _2673;
        _2672 = _1141._2648(_2662, _2670);
        _2673 = _1141._2648(_2665, _2671);
        if (!_2672._2660)
            return [-1, -1];
        if (!_2673._2660)
            return [-1, -1];
        return [_2670, _2671];
    }
    _2549(_2055, _2674, _2664, _2675, _2676, _2667, _2677, _2058)
    {
        let _2670, _2671;
        _2670 = _2674._2162() - 1;
        _2671 = _2676._2162() - 1;

        {
            let _2678, _2679;
            _2678 = _2674._2286(_2670);
            _2679 = _2676._2286(_2671);
            if (!_2678._2660)
                _2552._2680(_2055, _2674, _2664, _2675, _2058, _2670);
            if (!_2679._2660)
                _2552._2680(_2055, _2676, _2667, _2677, _2058, _2671);
        }

        let _2681, _2682;
        let _2683, _2684;
        {
            let _2685;
            [_2681, _2685] = _2674._2282(_2670);
            _2683 = _2674._2062(_2681);
            [_2682, _2685] = _2676._2282(_2671);
            _2684 = _2676._2062(_2682);
        }
        {
            let _1607;
            _1607 = _2683._2064();
            if (_1607 * 2 <= 1)
                _1607 *= 2;
            else if (_1607 < 1)
                _1607 = 1;
            _2683._2065(_1607);
            let _518;
            _518 = new _2178();
            _2683._2185 = _518;
            _518.start = 0.55;
            _518._2069 = 0.8;
            _518.stop = 1.05;
            _518._2070 = 1;
            _518._2071 = 0.15;
            _518._2164 = true;
        }
        {
            let _1607;
            _1607 = _2684._2064();
            if (_1607 * 2 <= 1)
                _1607 *= 2;
            else if (_1607<1)
                _1607 = 1;
            _2684._2065(_1607);
            let _518;
            _518 = new _2178();
            _2684._2185 = _518;
            _518.start = 0.6;
            _518._2069 = 0.7;
            _518.stop = 1.05;
            _518._2070 = 1;
            _518._2071 = 1;
            _518._2164 = false;
        }
        return null;
    }
}


class _2686 extends _2579
{
    constructor()
    {
        super();
        this._2577 = F("倒数第二个音节变快");
    }
    _2628()
    {

    }
    _2549(_2055, _2056, _1983, _2057, _2058)
    {

    }
}


class _2687 extends _2579
{
    constructor()
    {
        super();
        this._2577 = F("倒数第二个音节加重");
    }
    _2628()
    {

    }
    _2549(_2055, _2056, _1983, _2057, _2058)
    {

    }
}


class _2688 extends _2579
{
    constructor()
    {
        super();
        this._2577 = F("最后一个节拍上行");
    }
    _2628()
    {

    }
    _2549(_2055, _2056, _1983, _2057, _2058)
    {

    }
}




class _2575 extends _2579
{
    constructor()
    {
        super();
        this._2577 = F("句子结尾停顿然后滑音");
        this._2606 = true;
    }
    _2549(_2055, _2674, _2664, _2675, _2676, _2667, _2677, _2058)
    {
        
        do
        {
            
            
            
            let _2689, _2690;
            _2690 = _2674._2162() - 1;
            _2689 = _2690 - 1;
            if (_2689 < 0)
                break;
            let _2691, _2692, _2693, _2694;
            [_2691, _2692] = _2674._2282(_2689);
            [_2693, _2694] = _2674._2282(_2690);
            let _2695;
            _2695 = Math.max(_2691, _2692 - 1);
            for (let _2696 = _2695; _2696 <= _2692; _2696++)
            {
                let _2697;
                _2697 = _2674._2062(_2696);
                _2697._2191(((_2692 - _2696)+1)*2);
                _2552._2698(_2055, _2674, _2664, _2675, _2058, _2696);
                let _984;
                _984 = new _2163();
                _2697._2184 = _984;
                _984.start = 0;
                _984.stop = 0.5;
                _984._2069 = 0.25*0.23;
                _984._2070 = 1;
                _984._2164 = true;
            }

            let _2699;
            _2699 = _2674._2062(_2693);
            _2699._2191(4);
            let _518;
            _518 = new _2178();
            _2699._2185 = _518;
            _518.start = 0.55;
            _518._2069 = 0.8;
            _518.stop = 1.05;
            _518._2070 = 1;
            _518._2071 = 0.15;
            _518._2164 = true;
        }
        while (0);
        
        do
        {
            let _2689, _2690;
            _2690 = _2676._2162() - 1;
            _2689 = _2690 - 1;
            if (_2689 < 0)
                break;
            let _2696, _2693, _2694;
            [_2694, _2696] = _2676._2282(_2689);
            [_2693, _2694] = _2676._2282(_2690);

            let _2697;
            _2697 = _2676._2062(_2696);
            _2552._2698(_2055, _2676, _2667, _2677, _2058, _2696);
            let _984;
            _984 = new _2163();
            _2697._2184 = _984;
            _984.start = 0;
            _984.stop = 0.5;
            _984._2069 = 0.25 * 0.23;
            _984._2070 = 1;
            _984._2164 = true;

            let _2699;
            _2699 = _2676._2062(_2693);
            let _518;
            _518 = new _2178();
            _2699._2185 = _518;
            _518.start = 0.55;
            _518._2069 = 0.8;
            _518.stop = 1.05;
            _518._2070 = 1;
            _518._2071 = 0.15;
            _518._2164 = true;
        }
        while (0);
    }
}



