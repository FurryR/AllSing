

function _24(click, _838)
{
    let _839;
    _839 = event.target;
    _839._840 = function ()
    {
        if (_839._841)
        {
            clearTimeout(_839._841);
            _839._841 = null;
        }
        if (_839._842)
        {
            clearTimeout(_839._842);
            _839._842 = null;
        }
        if (_839._843)
        {
            clearTimeout(_839._843);
            _839._843 = null;
        }
        if (_839._844)
        {
            clearTimeout(_839._844);
            _839._844 = null;
        }
    }
    _839._845 = function ()
    {
        _839._840();
        let event;
        event = _839._846;
        _839._846 = null;
        eval(click);
    }
    _839.onclick = function ()
    {
        _839._846 = event;
        if (!_839._841)
            _839._841 = setTimeout(_839._845.bind(_839), 400);
        else
            _839._842 = setTimeout(_839._845.bind(_839), 400);
    }
    _839.ondblclick = function ()
    {
        _839._840();
        eval(_838);
    }
    _839.onclick();
}
