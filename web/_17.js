class _689
{
    _690; _539; x1; y1; x2; y2; _691; _692;
    _693(_690, _539, x1, y1, x2, y2, _691, _692)
    {
        this._690 = _690;
        this._539 = _539;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this._691 = _691;
        this._692 = _692;
    }
    _694(_695, _696, _697, _698, _699, _700, _701, _702)
    {
        this._693(_695, _696, _695 + _697, _696 + _698, _699 + _701, _700 + _702,_699,_700);
    }
    _703(_704)
    {
        let _705, _706;
        _705 = _704 * _704;
        _706 = _705 * _704;
        let _707, _708, _709;
        _707 = 1 - _704;
        _708 = _707 * _707;
        _709 = _708 * _707;
        let x, y;
        x = this._690 * _709 + 3 * this.x1 * _704 * _708 + 3 * this.x2 * _705 * _707 + this._691 * _706;
        y = this._539 * _709 + 3 * this.y1 * _704 * _708 + 3 * this.y2 * _705 * _707 + this._692 * _706;
        return [x, y];
    }
    _710(_704)
    {
        
        let _705;
        _705 = _704 * _704;
        let _711,_712;
        _711 = -3 * this._690 + 3 * this.x1 + _704 * (6 * this._690 - 12 * this.x1 + 6 * this.x2) + _705*(-3 * this._690 + 9 * this.x1 - 9 * this.x2 + 3 * this._691);
        _712 = -3 * this._539 + 3 * this.y1 + _704 * (6 * this._539 - 12 * this.y1 + 6 * this.y2) + _705*(-3 * this._539 + 9 * this.y1 - 9 * this.y2 + 3 * this._692);
        return [_711, _712];
    }
}
class _713
{
    _714;
    _715;
    x;
    y;
    _716;
    _717;
}
class _718
{
    _719 = new Array();
    _720()
    {
        this._719.length = 0;
    }
    _721(_722, _723, x, y, _724, _725)
    {
        let _726;
        _726 = new _713();
        _726._714 = _722 - x;
        _726._715 = _723 - y;
        _726.x=x;
        _726.y=y;
        _726._716 = _724 - x;
        _726._717 = _725 - y;
        this._719.push(_726);
    }
    _727(x, y, _714, _715, _716, _717)
    {
        let _726;
        _726 = new _713();
        _726._714 = _714;
        _726._715 = _715;
        _726.x = x;
        _726.y = y;
        _726._716 = _716;
        _726._717 = _717;
        this._719.push(_726);
    }
    _728(_729, _730, _731)
    {
        function _732(x)
        {
            return x;
        }
        if (!_730)
            _730 = _732;
        if (!_731)
            _731 = _732;
        if (this._719.length == 0)
        {
            if (_729)
                return _729.x = 0;
            return 0;
        }
        if (this._719.length == 1)
        {
            let _733;
            _733 = this._719[0];
            if (_729)
                return _729.x = _730(_733.x);
            return _731(_733.y);
        }
        let _734 = new _689();
        let _735, _736;
        {
            let _737;
            _737 = this._719[0];
            _735 = _730(_737.x);
            _736 = _731(_737.y);
        }
        function _738(x,y)
        {
            if (y > _736)
            {
                _736 = y;
                _735 = x;
            }
        }
        {
            let _739;
            _739 = this._719[this._719.length-1];
            _738(_730(_739.x), _731(_739.y));
        }
        for (let _570 = 1; _570 < this._719.length; _570++)
        {
            let left, right;
            left = this._719[_570 - 1];
            right = this._719[_570];
            
            let _690, _539, x1, y1, x2, y2, _691, _692;
            _690 = _730(left.x);
            _539 = _731(left.y);
            x1 = _730(left.x + left._716);
            y1 = _731(left.y + left._717);
            x2 = _730(right.x + right._714);
            y2 = _731(right.y + right._715);
            _691 = _730(right.x);
            _692 = _731(right.y);
            _734._693(_690, _539, x1, y1, x2, y2, _691, _692);
            function _740()
            {
                let x, y;
                [x, y] = _734._703(0);
                _738(x, y);
                [x, y] = _734._703(1);
                _738(x, y);
            }
            let _741, _546, _545;
            _741 = -3 * _539 + 3 * y1;
            _546 = (6 * _539 - 12 * y1 + 6 * y2);
            _545 = (-3 * _539 + 9 * y1 - 9 * y2 + 3 * _692);
            let _742;
            _742 = _546 * _546 - 4 * _545 * _741;
            if (_742 < 0)
            {
                _740();
                continue;
            }
            _742 = Math.sqrt(_742);
            let _743;
            _743 = false;
            let _744, _705;
            _744 = (-_546 + _742) / (2 * _545);
            if (0 <= _744 && _744 <= 1)
            {
                let x, y;
                [x, y] = _734._703(_744);
                _738(x, y);
                _743 = true;
            }
            _705 = (-_546 - _742) / (2 * _545);
            if (0 <= _705 && _705 <= 1)
            {
                let x, y;
                [x, y] = _734._703(_705);
                _738(x, y);
                _743 = true;
            }
            if (!_743)
            {
                _740();
            }
        }
        if (_729)
            _729.x = _735;
        return _736;
    }
    static _745(_746, _730, _731, _747, _748)
    {
        function _732(x)
        {
            return x;
        }
        if (!_730)
            _730 = _732;
        if (!_731)
            _731 = _732;
        _746._690 = _730(_747.x);
        _746._539 = _731(_747.y);
        _746.x1 = _730(_747.x + _747._716);
        _746.y1 = _731(_747.y + _747._717);
        _746.x2 = _730(_748.x + _748._714);
        _746.y2 = _731(_748.y + _748._715);
        _746._691 = _730(_748.x);
        _746._692 = _731(_748.y);
    }
    
    
    
    
    
    
    
    
    _749(_730, _731)
    {
        let _750 = new Array();
        function _732(x)
        {
            return x;
        }
        if (!_730)
            _730 = _732;
        if (!_731)
            _731 = _732;
        let _751, _752;
        _751 = Math.round(_730(this._719[0].x));
        _752 = Math.round(_730(this._719[this._719.length - 1].x));
        let _753;
        _753 = _752 - _751 + 1;
        _750.length = Math.round(_753);
        _750.fill(null);
        let _746 = new _689();
        for (let _754 = 1; _754 < this._719.length; _754++)
        {
            let _747, _748;
            _747 = this._719[_754 - 1];
            _748 = this._719[_754];
            _718._745(_746, _730,_731,_747, _748);
            let _755, _756;
            _755 = Math.round(_746._690);
            _756 = Math.round(_746._691);
            _750[_755 - _751] = _746._539;
            let _757;
            _757 = 1 / (_756 - _755 + 1);
            _757 /= 2;
            if (_757 < 1 / 10_000)
                _757 = 1 / 10_000;
            for (let _704 = 0; _704 < 1; _704 += _757)
            {
                let x, y;
                [x, y] = _746._703(_704);
                let _758;
                _758 = Math.round(x);
                if (_755 <= _758 && _758 < _756)
                    _750[_758 - _751] = y;
            }
            if (_754 == this._719.length - 1)
                _750[_750.length - 1] = _746._692;
        }
        for (let _754 = 0; _754 < _753; _754++)
            if (_750[_754] == null)
            {
                let _759, _760;
                for (_759 = _754 - 1; _759 >= 0; _759--)
                    if (_750[_759] != null)
                        break;
                for (_760 = _754 + 1; _760 < _753; _760++)
                    if (_750[_760] != null)
                        break;
                _750[_754] = _581._761(_750[_759], _750[_760], _759, _760, _754);
            }
        return [_751, _752, _750];
    }
    _762(_751, _752)
    {
        function _730(x)
        {
            return _751 + (_752 - _751)*x;
        }
        let _750 = new Array();
        let _753;
        _753 = _752 - _751 + 1;
        _750.length = Math.round(_753);
        _750.fill(null);
        let _746 = new _689();
        for (let _754 = 1; _754 < this._719.length; _754++)
        {
            let _747, _748;
            _747 = this._719[_754 - 1];
            _748 = this._719[_754];
            _718._745(_746, _730, null, _747, _748);
            let _755, _756;
            _755 = Math.round(_746._690);
            _756 = Math.round(_746._691);
            _750[_755 - _751] = _746._539;
            let _757;
            _757 = 1 / (_756 - _755 + 1);
            _757 /= 2;
            if (_757 < 1 / 10_000)
                _757 = 1 / 10_000;
            for (let _704 = 0; _704 < 1; _704 += _757)
            {
                let x, y;
                [x, y] = _746._703(_704);
                let _758;
                _758 = Math.round(x);
                if (_755 <= _758 && _758 < _756)
                    _750[_758 - _751] = y;
            }
            if (_754 == this._719.length - 1)
                _750[_750.length - 1] = _746._692;
        }
        for (let _754 = 0; _754 < _753; _754++)
            if (_750[_754] == null)
            {
                let _759, _760;
                for (_759 = _754 - 1; _759 >= 0; _759--)
                    if (_750[_759] != null)
                        break;
                for (_760 = _754 + 1; _760 < _753; _760++)
                    if (_750[_760] != null)
                        break;
                _750[_754] = _581._761(_750[_759], _750[_760], _759, _760, _754);
            }
        return _750;
    }
    
    
    
    _703(x, _763, _730, _731)
    {
        let _746 = new _689();
        for (let _754 = 1; _754 < this._719.length; _754++)
        {
            let _747, _748;
            _747 = this._719[_754 - 1];
            _748 = this._719[_754];
            _718._745(_746, _730, _731, _747, _748);
            if (!(_746._690 <= x && x <= _746._691))
                continue;
            let _764;
            _764 = 1e100;
            let _765;
            let _766;
            let _767;
            let _755, _756;
            _755 = Math.round(_746._690);
            _756 = Math.round(_746._691);
            let _757;
            _757 = 1 / (_756 - _755 + 1);
            _757 /= 2;
            if (_757 < 1 / 10_000)
                _757 = 1 / 10_000;
            for (let _704 = 0; _704 < 1; _704 += _757)
            {
                let _768, _769;
                [_768, _769] = _746._703(_704);
                let _770;
                _770 = Math.abs(_768 - x);
                if (_770 < _764)
                {
                    _764 = _770;
                    _765 = _769;
                    [_766, _767] = _746._710(_704);
                }
            }
            if (_763)
            {
                if (Math.abs(_766) < 1e-12)
                    _771(_763, 1);
                else
                    _771(_763, _767 / _766);
            }
            return _765;
        }
        return null;
    }
}
