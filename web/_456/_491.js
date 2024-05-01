function _7301(_582)
{
	
	_480._967(_582);
	_481._967(_582);
	_482._967(_582);
	_581._582(_483, _582);
}

function _7351(x)
{
    let _7315;
    _7315 = parseInt(_487.style.width);
    let _7320, _7321;
    _7320 = Math.round(_355.value);
    _7321 = Math.round(_355._1457);
    let _7332;
    _7332 = _581._761(_7320, _7321, 0, _7315 - 1, x);
    if (_7332 < 0)
        _7332 = 0;
    if (_7332 >= _7298._7299.length)
        _7332 = _7298._7299.length - 1;
    return _7332;
}
function _7352(_7332)
{
    let _7315;
    _7315 = parseInt(_487.style.width);
    let _7320, _7321;
    _7320 = Math.round(_355.value);
    _7321 = Math.round(_355._1457);
    return _581._761(0, _7315 - 1, _7320, _7321, _7332);
}
function _7335(y)
{
	let _7353, _7354;
    _7353 = _7298._7313 * _485.value / _7300;
    _7354 = _7298._7313 * _485._1457 / _7300;
	let _7325;
	_7325 = parseInt(_487.style.height);
	return _581._761(_7353, _7354,_7325 - 1, 0, y);
}
function _7337(_518)
{
	let _7353, _7354;
    _7353 = _7298._7313 * _485.value / _7300;
    _7354 = _7298._7313 * _485._1457 / _7300;
	let _7325;
	_7325 = parseInt(_487.style.height);
	return _581._761(_7325 - 1, 0, _7353, _7354, _518);
}

var _7355=-1;
function _7324()
{
    if (_7298 == null)
        return;
    let _824;
    _824 = "";
    let _7315;
    _7315 = parseInt(_487.style.width);
    for (let _7356 = 0; _7356 < _7298._7314.length; _7356++)
    {
        if (_7356 == _7355)
            continue;
        let _7150 = _7298._7314[_7356];
        let x1, x2;
        x1 = _7352(_7150._7338);
        x2 = _7352(_7150._7339);
        if (x2 < 0)
            continue;
        if (x1 > _7315)
            continue;
        {
            let y1, y2;
            y1 = _7337(_7150._6336);
            y2 = _7337(_7150._6322);
            _824 += "<circle cx='" + x1 + "' cy='" + y1 + "' r='5' style='fill:rgb(255 128 0 / 0.1);stroke:rgb(255 128 0); stroke-width:1;cursor:move;' onmousedown='_7369(" + _7356 + ");' onmouseover =\"_218('" + L("拖动，使得控件对准N倍频\\r\\nN倍频曲线如果是弧线，控件的两端对准即可") + "');\"  />\r\n";
            _824 += "<line x1='" + x1 + "' y1='" + y1 + "' x2='" + x2 + "' y2='" + y2 + "' style='stroke:rgb(255 0 0);stroke-width:2;cursor:all-scroll;' onmousedown='_7381(" + _7356 + ");'  onmouseover =\"_218('" + L("整体拖动") + "');\"/>\r\n";
            _824 += "<circle cx='" + x2 + "' cy='" + y2 + "' r='5' style='fill:rgb(255 128 0 / 0.1);stroke:rgb(255 128 0); stroke-width:1;cursor:move;' onmousedown='_7376(" + _7356 + ");'   onmouseover =\"_218('" + L("拖动，使得控件对准N倍频\\r\\nN倍频曲线如果是弧线，控件的两端对准即可") + "');\"/>\r\n";

            let _5391;
            if (_7150._7340 == -1)
                _5391 = "?";
            else
                _5391 = _7150._7340 + L("倍频");
            _824 += "<text text-anchor='start' dominant-baseline='middle' x='" + (x2 + 10) + "' y='" + y2 + "'  style='stroke:rgb(255 0 100);cursor:pointer;'   onmouseover =\"_218('" + L("点击指定倍频数") + "');\" onclick='_7385(" + _7356 +");'  >" + _5391 + "</text>\r\n";
        }
        if (_7150._7340 != -1)
        {
            let _7357, _7358;
            _7357 = _7150._6336 / _7150._7340;
            _7358 = _7150._6322 / _7150._7340;
            for (let _754 = 0; _754 < _7150._7341.length; _754++)
            {
                let _5890 = _754 + 1;
                if (_5890 == _7150._7340)
                    continue;
                let _7359;
                _7359 = _7150._7341[_754];
                let y1, y2;
                y1 = _7337(_7357 * _5890);
                y2 = _7337(_7358 * _5890);
                if (_7359)
                {
                    _824 += "<circle cx='" + x1 + "' cy='" + y1 + "' r='3' style='fill:rgb(255 128 0 / 0.1);stroke:rgb(255 128 0); stroke-width:1;cursor:pointer;' onclick='_7386(" + _7356 + "," + _5890 + ");' onmouseover =\"_218('" + L("使能的N倍频\\r\\n点击去使能") + "');\"  />\r\n";
                    _824 += "<circle cx='" + x2 + "' cy='" + y2 + "' r='3' style='fill:rgb(255 128 0 / 0.1);stroke:rgb(255 128 0); stroke-width:1;cursor:pointer;' onclick='_7386(" + _7356 + "," + _5890 + ");'   onmouseover =\"_218('" + L("使能的N倍频\\r\\n点击去使能") + "');\"/>\r\n";
                    _824 += "<line x1='" + x1 + "' y1='" + y1 + "' x2='" + x2 + "' y2='" + y2 + "' style='stroke:rgb(255 0 0);stroke-width:2;cursor:pointer;' onclick='_7386(" + _7356 + "," + _5890 + ");'  onmouseover =\"_218('" + L("使能的N倍频\\r\\n点击去使能") + "');\"   />\r\n";
                    _824 += "<text text-anchor='start' dominant-baseline='middle' x='" + (x2 + 10) + "' y='" + y2 + "'  style='font-size: smaller;stroke:rgb(255 0 0);'  >" + _5890 + "</text>\r\n";
                }
                else
                {
                    _824 += "<circle cx='" + x1 + "' cy='" + y1 + "' r='3' style='fill:rgb(255 128 0 / 0.1);stroke:rgb(255 128 0); stroke-width:1;cursor:pointer;' onclick='_7387(" + _7356 + "," + _5890 + ");' onmouseover =\"_218('" + L("去使能的N倍频\\r\\n点击使能") + "');\"   />\r\n";
                    _824 += "<circle cx='" + x2 + "' cy='" + y2 + "' r='3' style='fill:rgb(255 128 0 / 0.1);stroke:rgb(255 128 0); stroke-width:1;cursor:pointer;' onclick='_7387(" + _7356 + "," + _5890 + ");'   onmouseover =\"_218('" + L("去使能的N倍频\\r\\n点击使能") + "');\"   />\r\n";
                    _824 += "<line x1='" + x1 + "' y1='" + y1 + "' x2='" + x2 + "' y2='" + y2 + "' style='stroke:rgb(255 0 0);stroke-width:2;cursor:pointer;' onclick='_7387(" + _7356 + "," + _5890 + ");'  onmouseover =\"_218('" + L("去使能的N倍频\\r\\n点击使能") + "');\"  stroke-dasharray='2 4'   />\r\n";
                    _824 += "<text text-anchor='start' dominant-baseline='middle' x='" + (x2 + 10) + "' y='" + y2 + "'  style='font-size: smaller;stroke:rgb(255 100 100);'  >" + _5890 + "</text>\r\n";
                }
            }
        }
    }
    _488.innerHTML = _824;
}

function _7360()
{
    let _1267;
    _1267 = _7298._1893();
    _1689(L("音色攫取")+".dsc_timbre_grab", _1267);
}


function _7361()
{
    let x, y;
    x = event.clientX;
    y = event.clientY;
    let _1472;
    _1472 = _487.getBoundingClientRect();
    return [x - _1472.left, y - _1472.top];
}
function _6195()
{
    let x, y;
    [x, y] = _7361();
    let _1472;
    _1472 = _487.getBoundingClientRect();
    if (0 <= x && x <= _1472.width && 0 <= y && y <= _1472.height)
        return true;
    return false;
}
var _2097;
var _2098;
function _1082()
{
    if (!_7298._7299)
		return;
	_581._1307();
	_483.title = L("拖动到编辑器，添加n倍频");
	_483.style.cursor = "move";
	window.onmousemove = _6193;
	window.onmouseup = _6194;
	_483.style.position = "relative";
	_483.ondragstart = function () { return false; };
    [_2097, _2098] = _7361();
}
function _6193()
{
	let x, y;
	[x, y] = _7361();
	if (_6195())
		_483.style.cursor = "crosshair";
	else
		_483.style.cursor = "move";
	_483.style.left = (x - _2097) + "px";
	_483.style.top = (y - _2098) + "px";
}
function _6194()
{
	if (_6195())
	{
		let _7150 = new _7307();
        _7298._7314.push(_7150);
        let _7362, _7363;
        [_7362, _7363] = _7361();
        _7150._7338 = _7351(_7362 - 20);
        _7150._7339 = _7351(_7362 + 20);
        _7150._6322 = _7150._6336 = _7335(_7363);
		_7150._7340=-1;
        _7150._7341.length = _7307._7308;
        for (let _754 = 0; _754 < _7150._7341.length; _754++)
            _7150._7341[_754] = false;
        _7324();
	}
	_483.style.cursor = "hand";
	window.onmousemove = null;
	window.onmouseup = null;
	_483.style.position = "relative";
	_483.style.left = "0px";
	_483.style.top = "0px";
	_483.ondragstart = null;
}


var _7364;
var _5449;
var _5450;

var _7365;
var _7366;
var _7367;
var _7368;

function _7369(_7356)
{
    _581._1307();
    _7364 = _7356;
    let _7150;
    _7150 = _7298._7314[_7356];
    _7365 = _7150._7338;
    _7366 = _7150._6336;
    [_5449, _5450] = _7361();
    window.onmousemove =_7370;
    window.onmouseup = _7371;
}
function _7370()
{
    let _5466,_5486;
    [_5466, _5486] = _7361();

    let _7372, _7373;
    _7372 = _7365 + (_7351(_5466) - _7351(_5449));
    _7373 = _7366 + (_7335(_5486) - _7335(_5450));
    let _7150;
    _7150 = _7298._7314[_7364];
    if (_7150._7338 == _7372 && _7150._6336 == _7373)
        return;
    _7150._7338 = _7372;
    _7150._6336 = _7373;
    if (_7150._7338 > _7150._7339)
    {
        let _2799;
        _2799 = _7150._7338; _7150._7338 = _7150._7339; _7150._7339 = _2799;
        _2799 = _7150._6336; _7150._6336 = _7150._6322; _7150._6322 = _2799;
        _7367 = _7365;
        _7368 = _7366;
        window.onmousemove = _7374;
        window.onmouseup = _7375;
    }
    _7324();
}
function _7371()
{
    window.onmousemove = null;
    window.onmouseup = null;
}


function _7376(_7356)
{
    _581._1307();
    _7364 = _7356;
    let _7150;
    _7150 = _7298._7314[_7356];
    _7367 = _7150._7339;
    _7368 = _7150._6322;
    [_5449, _5450] = _7361();
    window.onmousemove = _7374;
    window.onmouseup = _7375;
}
function _7374()
{
    let _5466, _5486;
    [_5466, _5486] = _7361();

    let _7377, _7378;
    _7377 = _7367 + (_7351(_5466) - _7351(_5449));
    _7378 = _7368 + (_7335(_5486) - _7335(_5450));
    let _7150;
    _7150 = _7298._7314[_7364];
    if (_7150._7339 == _7377 && _7150._6322 == _7378)
        return;
    _7150._7339 = _7377;
    _7150._6322 = _7378;
    if (_7150._7339 < _7150._7338)
    {
        let _2799;
        _2799 = _7150._7338; _7150._7338 = _7150._7339; _7150._7339 = _2799;
        _2799 = _7150._6336; _7150._6336 = _7150._6322; _7150._6322 = _2799;
        _7365=_7367;
        _7366 = _7368;
        window.onmousemove = _7370;
        window.onmouseup = _7371;
    }
    _7324();
}
function _7375()
{
    window.onmousemove = null;
    window.onmouseup = null;
}

function _6208()
{
    let x, y;
    x = event.clientX;
    y = event.clientY;
    let _1472 = _484.getBoundingClientRect();
    if (_1472.left <= x && x <= _1472.right && _1472.top <= y && y <= _1472.bottom)
        return true;
    return false;
}
function _7379()
{
    _7355 = -1;
    _7324();
}
function _7380()
{
    _7355 = _7364;
    _7324();
}

function _7381(_7356)
{
    _581._1307();
    _7364 = _7356;
    let _7150;
    _7150 = _7298._7314[_7356];
    _7365 = _7150._7338;
    _7366 = _7150._6336;
    _7367 = _7150._7339;
    _7368 = _7150._6322;
    [_5449, _5450] = _7361();
    window.onmousemove = _7382;
    window.onmouseup = _7383;
    _484.style.display = "inline-block";
}
function _7382()
{
    if (_6208())
    {
        if (_484._6214==null)
        {
            _484._6214 = _484.style.backgroundColor;
            _484.style.backgroundColor = "rgb(255 100 100 / 0.2)";
            _7380();
        }
        return;
    }
    if (_484._6214!=null)
    {
        _484.style.backgroundColor = _484._6214;
        _484._6214 = null;
        _7379();
    }

    let _5466, _5486;
    [_5466, _5486] = _7361();

    let _7384, _5487;
    _7384 = (_7351(_5466) - _7351(_5449));
    _5487 = (_7335(_5486) - _7335(_5450));
    let _7372, _7373;
    let _7377, _7378;
    _7372 = _7365 + _7384;
    _7373 = _7366 + _5487;
    _7377 = _7367 + _7384;
    _7378 = _7368 + _5487;
    let _7150;
    _7150 = _7298._7314[_7364];
    if (_7150._7338 == _7372 && _7150._6336 == _7373 || _7150._7339 == _7377 && _7150._6322 == _7378)
        return;
    _7150._7338 = _7372;
    _7150._6336 = _7373;
    _7150._7339 = _7377;
    _7150._6322 = _7378;
    _7324();
}
function _7383()
{
    if (_484._6214!=null)
    {
        _484.style.backgroundColor = _484._6214;
        _484._6214 = null;
    }
    if (_6208())
    {
        _7298._7314.splice(_7364, 1);
        _7355 = -1;
        _7324(); 
    }
    else
    {
        _7379();
    }
    _484.style.display = "none";

    window.onmousemove = null;
    window.onmouseup = null;
}



function _7385(_7356)
{
    _7364 = _7356;
    let _7150;
    _7150 = _7298._7314[_7356];
    let x, y;
    x = _7352(_7150._7339);
    y = _7337(_7150._6322);
    _490.value = _7150._7340;
    _490.style.left = (parseInt(_487.style.left) + x + 10) + "px";
    _490.style.top = (parseInt(_487.style.top) + y + 8) + "px";
    _490.style.display = "";
    _490.focus();
    _490.setAttribute("size", _490.options.length); 
}
function _7306()
{
    let _7150;
    _7150 = _7298._7314[_7364];
    _7150._7340 = parseInt(_490.value);
    _490.setAttribute("size", 0); 
    _490.style.display = "none";
    _7324();
}

function _7386(_7356, _5890)
{
    let _7150;
    _7150 = _7298._7314[_7356];
    _7150._7341[_5890 - 1] = false;
    _7324();
}
function _7387(_7356, _5890)
{
    let _7150;
    _7150 = _7298._7314[_7356];
    _7150._7341[_5890 - 1] = true;
    _7324();
}
