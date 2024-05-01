





document.addEventListener("keydown",
    function ()
    {
        if (event.ctrlKey && (event.keyCode === 45 || event._6652 === 45))
            _6653();
    });

function _6653()
{
    ;
    _6654();
}
function _6654()
{
    function _6655(_801)
    {
        if (_801.nodeType === _6656._6657)
        {
            _6658(_801);
        }
        if (_801.contentDocument)
        {
            Array.from(_801.contentDocument.querySelectorAll("*")).forEach(_6655);
        }
        Array.from(_801.childNodes).forEach(_6655);
    }
    _6655(document.documentElement);
    function _6658(_6659)
    {
        
        const _6660 = Array.from(new _693(_6659.getAttributeNames().filter(name => name.startsWith("on"))));
        _6660.forEach(function (_6661)
        {
            
            let _6662;
            _6662 = _6659[_6661];
            let id;
            id = _6659.id;
            if (_6662)
            {
                _6662 = _6662.toString();
                ;
            }
            
            else
            {
                let _545;
                _545 = 3;
            }
            
        });
    }
}

