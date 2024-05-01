

function _1074(_942,min,max,_822,width,height)
{
    _942._1417 = 1;
    _942._1418 = 2;
    _942._1419 = 3;
    if ((!width) || (!height))
    {
        let _956;
        _956 = _942.getBoundingClientRect();
        width = _956.width;
        height = _956.height;
    }
    let value;
    value=(min+max)/2;
    _942.style.display="inline-block";
    _942.style.textAlign="left";
    _942.style.whiteSpace="normal";
    _942.style.width=width+"px";
    _942.style.height=height+"px";
    _942.min=min;
    _942.max=max;
    _942._1420=function (value)
    {
        return (value-this.min)/(-this.min+this.max);
    };
    _942._1421=function (_1422)
    {
        return this.min+(-this.min+this.max)*_1422;
    };
    _942._1422=_942._1420(value);
    _942._822=_822;
    _942._834=true;
    _942._1423=0;
    _942._1424=false;
    _942._1425=false;
    _942._1426=false;

    _942.innerHTML="";
    _942.style.overflow="hidden";
    _942._1427=width;
    _942._1428=height;
    _942._1429 = width;
    _942._1430 = height;
    _942._1431=function ()
    {
        this._1427 = this._1429;
        this._1428 = this._1430;
    };
    _942._1431();
   
    var background;
    background=document.createElement("span");
    _942.background=background;
    background._942=_942;
    background.style.display="inline-block";
    background.ondragstart=function(){return false;};
    _942.appendChild(background);
    var _1432;
    _1432=document.createElement("img");
    background._1432=_1432;
    _1432.background=background;
    _1432.ondragstart=function(){return false;};
    background.appendChild(_1432);
    var _1433;
    _1433=document.createElement("img");
    background._1433=_1433;
    _1433.background=background;
    _1433.ondragstart=function(){return false;};
    background.appendChild(_1433);
    var _1434;
    _1434=document.createElement("img");
    background._1434=_1434;
    _1434.background=background;
    _1434.ondragstart=function(){return false;};
    background.appendChild(_1434);
    _942._1435=function()
    {
        this._1431();
        this.style.height=this._1428+"px";
        if(!this._1425)
        {
            if(this._1427<this._1428*2+2)
                this._1427=this._1428*2+2;
            this.background._1432.style.width=this._1428+"px";
            this.background._1432.style.height=this._1428+"px";
            this.background._1432.src="_207.png";
            this.background._1433.style.width=(this._1427-this._1428*2)+"px";
            this.background._1433.style.height=this._1428+"px";
            this.background._1433.src="_208.png";
            this.background._1434.style.width=this._1428+"px";
            this.background._1434.style.height=this._1428+"px";
            this.background._1434.src="_209.png";
        }
        else
        {
            if(this._1428<this._1427*2+2)
                this._1428=this._1427*2+2;
            this.background._1432.style.width=this._1427+"px";
            this.background._1432.style.height=this._1427+"px";
            this.background._1432.src="_212.png";
            this.background._1433.style.width=this._1427+"px";
            this.background._1433.style.height=(this._1428-this._1427*2)+"px";
            this.background._1433.src="_211.png";
            this.background._1434.style.width=this._1427+"px";
            this.background._1434.style.height=this._1427+"px";
            this.background._1434.src="_210.png";
        }
        this.background.style.width=this._1427+"px";
        this.background.style.height=this._1428+"px";
    }

    var _1436;
    _1436=document.createElement("img");
    _942._1436=_1436;
    _1436._942=_942;
    _1436.src="_213.png";
    _1436.style.visibility="hidden";
    _1436.style.position="relative";
    _1436.style.borderWidth="2px";
    _942.appendChild(_1436);
    _942._1437=0;
    _942._1438=0;


    var _1439;
    _1439=document.createElement("img");
    _942._1439=_1439;
    _1439._942=_942;
    _1439.src="_215.png";
    _1439.style.position="relative"; 
    _1439.style.borderWidth="2px";
    _1439.style.display="none";
    _1439.ondragstart=function(){return false;};
    _1439._1440=null;
    _1439._1441=null;
    _1439._1442=false;
    _1439.onmousedown=function ()
    {
        if(!this._942._834)
            return ;
        this._1442=true;
        if(!this._942._1425)
            this._1443=window.event.clientX;
        else
            this._1443=window.event.clientY;
        this._1444=this._942._1422;
        if(this.setCapture)
            this.setCapture();
        else
        {
            _1439._1440=document.onmouseup;
            document.onmouseup=_1439.onmouseup;
            _1439._1441=document.onmousemove;
            document.onmousemove=_1439.onmousemove;
            document._1445=this._942;
        }
    };
    _1439.onmouseup=function()
    {
        var _839;
        if(this==document)
        {
            if(document._1445==null)
                return;
            _839=document._1445._1439;
        }
        else
            _839=this;
        if(!_839._942._834)
            return ;
        _839._1442=false;
        if(_839.releaseCapture)
            _839.releaseCapture();
        else
        {
            document.onmouseup=_839._1440;
            _839._1440=null;
            document.onmousemove=_839._1441;
            _839._1441=null;
            document._1445=null;
        }
        _839._942._1446(true, _839._942._1417);
    };
    _1439.onmousemove=function ()
    {
        var _839;
        if(this==document)
        {
            if(document._1445==null)
                return;
            _839=document._1445._1439;
        }
        else
            _839=this;
        if(!_839._942._834)
            return ;
        if(_839._1442)
        {
            var _1447;
            if(!_839._942._1425)
                _1447=window.event.clientX;
            else
                _1447=window.event.clientY;
            _1447-=_839._1443;
            var _1448;
            _1448=_839._942._1449();
            _1447/=_1448;
            var _1422;
            _1422=_839._1444;
            _1422+=_1447;
            if(_1422<0)
                _1422=0;
            var _1423;
            _1423=_839._942._1423;
            if(_1422>_1423)
                _1422=_1423;
		    _839._942._1450(_1422,_1423);
            _839._942._1446(false, _839._942._1417);
        }
    };
    _942.appendChild(_1439);


    var _1451;
    _1451=document.createElement("img");
    _942._1451=_1451;
    _1451._942=_942;
	_1451.src="_214.png";
    _1451.style.position="relative"; 
    _1451.style.borderWidth="2px";
    _1451.ondragstart=function(){return false;};
    _1451._1440=null;
    _1451._1441=null;
    _1451._1442=false;
    _1451.onmousedown=function ()
    {
        if(!this._942._834)
            return ;
        this._1442=true;
        if(!this._942._1425)
            this._1443=window.event.clientX;
        else
            this._1443=window.event.clientY;
        this._1444=this._942._1422;
        this._1452=this._942._1423;
        if(this.setCapture)
            this.setCapture();
        else
        {
            _1451._1440=document.onmouseup;
            document.onmouseup=_1451.onmouseup;
            _1451._1441=document.onmousemove;
            document.onmousemove=_1451.onmousemove;
            document._1445=this._942;
        }
    };
    _1451.onmouseup=function()
    {
        var _839;
        if(this==document)
        {
            if(document._1445==null)
                return;
            _839=document._1445._1451;
        }
        else
            _839=this;
        if(!_839._942._834)
            return ;
        _839._1442=false;
        if(_839.releaseCapture)
            _839.releaseCapture();
        else
        {
            document.onmouseup=_839._1440;
            _839._1440=null;
            document.onmousemove=_839._1441;
            _839._1441=null;
            document._1445=null;
        }
        _839._942._1446(true, _839._942._1418);
    };
    _1451.onmousemove=function ()
    {
        var _839;
        if(this==document)
        {
            if(document._1445==null)
                return;
            _839=document._1445._1451;
        }
        else
            _839=this;
        if(!_839._942._834)
            return ;
        if(_839._1442)
        {
            var _1447;
            if(!_839._942._1425)
                _1447=window.event.clientX;
            else
                _1447=window.event.clientY;
            _1447-=_839._1443;
            var _1448;
            _1448=_839._942._1449();
            _1447/=_1448;
            var _1422;
            _1422=_839._1444;
            _1422+=_1447;
            if(!_839._942._1424)
            {
                if(_1422<0)
                    _1422=0;
                if(_1422>1)
                    _1422=1;
                _839._942._1453(_1422);
            }
            else
            {
                var _1423;
                _1423=_839._1452;
                _1423+=_1447;
                if(_1422<0)
                {
                    _1423-=_1422;
                    _1422=0;
                }
                if(_1423>1)
                {
                    _1422-=(_1423-1);
                    _1423=1;
                }
                _839._942._1450(_1422,_1423);
            }
            _839._942._1446(false, _839._942._1418);
        }
    };
    _942.appendChild(_1451);

    var _1454;
    _1454=document.createElement("img");
    _942._1454=_1454;
    _1454._942=_942;
    _1454.src="_215.png";
    _1454.style.position="relative"; 
    _1454.style.borderWidth="2px";
    _1454.style.display="none";
    _1454.ondragstart=function(){return false;};
    _1454._1440=null;
    _1454._1441=null;
    _1454._1442=false;
    _1454.onmousedown=function ()
    {
        if(!this._942._834)
            return ;
        this._1442=true;
        if(!this._942._1425)
            this._1443=window.event.clientX;
        else
            this._1443=window.event.clientY;
        this._1452=this._942._1423;
        if(this.setCapture)
            this.setCapture();
        else
        {
            _1454._1440=document.onmouseup;
            document.onmouseup=_1454.onmouseup;
            _1454._1441=document.onmousemove;
            document.onmousemove=_1454.onmousemove;
            document._1445=this._942;
        }
    };
    _1454.onmouseup=function()
    {
        var _839;
        if(this==document)
        {
            if(document._1445==null)
                return;
            _839=document._1445._1454;
        }
        else
            _839=this;
        if(!_839._942._834)
            return ;
        _839._1442=false;
        if(_839.releaseCapture)
            _839.releaseCapture();
        else
        {
            document.onmouseup=_839._1440;
            _839._1440=null;
            document.onmousemove=_839._1441;
            _839._1441=null;
            document._1445=null;
        }
        _839._942._1446(true, _839._942._1419);
    };
    _1454.onmousemove=function ()
    {
        var _839;
        if(this==document)
        {
            if(document._1445==null)
                return;
            _839=document._1445._1454;
        }
        else
            _839=this;
        if(!_839._942._834)
            return ;
        if(_839._1442)
        {
            var _1447;
            if(!_839._942._1425)
                _1447=window.event.clientX;
            else
                _1447=window.event.clientY;
            _1447-=_839._1443;
            var _1448;
            _1448=_839._942._1449();
            _1447/=_1448;
            var _1423;
            _1423=_839._1452;
            _1423+=_1447;
            if(_1423>1)
                _1423=1;
            var _1422;
            _1422=_839._942._1422;
            if(_1423<_1422)
                _1423=_1422;
		    _839._942._1450(_1422,_1423);
            _839._942._1446(false, _839._942._1419);
        }
    };
    _942.appendChild(_1454);

    _942._1449=function()
    {
        var _569;
        if(!this._1425)
        {
            if(!this._1424)
                _569=this._1427-5-(2+parseInt(this._1451.style.width)+2)-5;
            else
                _569=this._1427-5-(2+parseInt(this._1439.style.width))-1-(parseInt(this._1454.style.width)+2)-5;
        }
        else
        {
            if(!this._1424)
                _569=this._1428-5-(2+parseInt(this._1451.style.height)+2)-5;
            else
                _569=this._1428-5-(2+parseInt(this._1439.style.height))-1-(parseInt(this._1454.style.height)+2)-5;
        }
        if(_569<20)
            _569=20;
        return _569;
    }
    _942._1453=function(_1422)
    {
        if(_1422<0)
            _1422=0;
        if(_1422>1)
            _1422=1;
        this._1422=_1422;
        this.value=this._1421(_1422);
        var _1448;
        _1448=this._1449();
        var _1455;
        _1455=_1422*_1448;
        if(!this._1425)
        {
            _1455-=5;
            _1455=parseInt(_1455)+"px";
            this._1451.style.left=_1455;
        }
        else
        {
            _1455-=this._1428;
            _1455-=5;
            _1455=parseInt(_1455)+"px";
            this._1451.style.top=_1455;
        }
    };
    _942._1450=function(_1422,_1423)
    {
        if(_1422<0)
            _1422=0;
        if(_1422>1)
            _1422=1;
        if(_1423<0)
            _1423=0;
        if(_1423>1)
            _1423=1;
        if(_1422>_1423)
        {
            var _1456;
            _1456=_1422;
            _1422=_1423;
            _1423=_1456;
        }
        var _1448;
        _1448=this._1449();
        var _1455;
        _1455=_1422*_1448;
        this._1422=_1422;
        this.value=this._1421(_1422);

        if(!this._1425)
        {
            _1455-=5;
            _1455=parseInt(_1455)+"px";
            this._1439.style.left=_1455;
            this._1451.style.left=(parseInt(_1455)+2+parseInt(this._1439.style.width)-5)+"px";
        }
        else
        {
            _1455-=this._1428;
            _1455-=5;
            _1455=parseInt(_1455)+"px";
            this._1439.style.top=_1455;
            this._1451.style.top=(parseInt(_1455)+2+parseInt(this._1439.style.height)-5)+"px";
        }

        this._1423=_1423;
        this._1457=this._1421(_1423);
        if(this.value>this._1457)
        {
            var _1458;
            _1458=this.value;
            this.value=this._1457;
            this._1457=_1458;
        }
        _1455=_1423*_1448;
        var size;
        size=(_1423-_1422)*_1448;
        if(!this._1425)
        {
            this._1451.style.width=parseInt(size+1)+"px";
            this._1454.style.left=(parseInt(this._1439.style.left))+"px";
        }
        else
        {
            this._1451.style.height=parseInt(size+1)+"px";
            this._1454.style.top=(parseInt(this._1439.style.top))+"px";
        }
    };
    _942._837=function(value,_1457)
    {
        if(!this._1424)
            this._1453(this._1420(value));
        else
            this._1450(this._1420(value),this._1420(_1457));
    };
    _942._967=function(_834)
    {
        if(_834)
        {
            let cursor;
            if (this._1425)
                cursor ="s-resize";
            else
                cursor ="w-resize";
            this.background.style.webkitFilter = "";
            this._1451.style.webkitFilter = "";
            this._1451.style.cursor = cursor;
            if (this._1425)
                cursor = "row-resize";
            else
                cursor = "col-resize";
            this._1439.style.webkitFilter = "";
            this._1439.style.cursor = cursor;
            this._1454.style.webkitFilter = "";
            this._1454.style.cursor = cursor;
            this._834=true;
        }
        else
        {
            _1459();
            this.background.style.webkitFilter= "grayscale(100%)";
            this._1451.style.webkitFilter= "grayscale(100%)";
            this._1451.style.cursor = "auto";
            this._1439.style.webkitFilter = "grayscale(100%)";
            this._1439.style.cursor = "auto";
            this._1454.style.webkitFilter = "grayscale(100%)";
            this._1454.style.cursor = "auto";
            this._834=false;
        }
    };
    _942._1446 = function (_739, _1460)
    {
        if(_739&&this._1426)
        {
            if(!this._1424)
                this._1453(this._1420(Math.round(this.value)));
            else
                this._1450(this._1420(Math.round(this.value)),this._1420(Math.round(this._1457)));
        }
        if (this._822 != null)
        {
            if(!this._1424)
                this._822(this.value, _739, _1460);
            else
                this._822(this.value, this._1457, _739, _1460);
        }
    };
    _942._1461=function ()
    {
        if(!this._1424)
            this._1453(this._1422);
        else
            this._1450(this._1422,this._1423);
    };
    _942._1462=function (_834)
    {
        this._1424=_834;
        if(_834)
        {
            this._1451.style.borderLeftStyle="none"; 
            this._1451.style.borderRightStyle="none"; 
            this._1451.style.cursor ="w-resize"; 
            this._1439.style.display="";
            this._1454.style.display="";
            this._1450(this._1422,this._1423);
        }
        else
        {
            this._1451.style.borderLeftStyle="outset"; 
            this._1451.style.borderRightStyle="outset"; 
            this._1451.style.width="10px"; 
            this._1451.style.cursor="w-resize"; 
            this._1439.style.display="none";
            this._1454.style.display="none";
            this._1453(this._1422);
        }
    };
    _942._1463 = function ()
    {
        _942._1435();
        if (_942._1425)
        {
            this._1439.style.left="0px"; 
            this._1439.style.top=(5-this._1428)+"px";  
            this._1439.style.width="25px"; 
            this._1439.style.height="3px"; 
            this._1439.style.cursor ="row-resize"; 
            this._1439.style.borderTopStyle="outset"; 
            this._1439.style.borderLeftStyle="outset"; 
            this._1439.style.borderRightStyle="outset"; 
            this._1439.style.borderBottomStyle="none"; 

            this._1451.style.left=this._1436.style.left="0px";
            this._1451.style.top=(5-this._1428)+"px";  
            this._1451.style.width=this._1436.style.width="25px";
            this._1451.style.height=this._1436.style.height="10px";
            if(!this._1424)
            {
                this._1451.style.cursor="s-resize"; 
                this._1451.style.borderTopStyle="outset"; 
                this._1451.style.borderBottomStyle="outset"; 
            }
            else
            {
                this._1451.style.cursor="hand"; 
                this._1451.style.borderTopStyle="none"; 
                this._1451.style.borderBottomStyle="none"; 
            }
            this._1451.style.borderLeftStyle="outset"; 
            this._1451.style.borderRightStyle="outset"; 

            this._1454.style.left="0px"; 
            this._1454.style.top=(-this._1428)+"px";  
            this._1454.style.width="25px"; 
            this._1454.style.height="3px";
            this._1454.style.cursor ="row-resize"; 
            this._1454.style.borderBottomStyle="outset"; 
            this._1454.style.borderLeftStyle="outset"; 
            this._1454.style.borderRightStyle="outset"; 
            this._1454.style.borderTopStyle="none"; 
        }
        else
        {
            this._1439.style.left="5px"; 
            this._1439.style.top=(-this._1428)+"px";  
            this._1439.style.width="3px"; 
            this._1439.style.height="25px"; 
            this._1439.style.cursor ="col-resize"; 
            this._1439.style.borderLeftStyle="outset"; 
            this._1439.style.borderTopStyle="outset"; 
            this._1439.style.borderBottomStyle="outset"; 
            this._1439.style.borderRightStyle="none"; 

            this._1451.style.left = "5px";
            
            
            this._1451.style.top = this._1436.style.top = (-this._1428) + "px";
            this._1451.style.width=this._1436.style.width="10px";
            this._1451.style.height=this._1436.style.height="25px";
            if(!this._1424)
            {
                this._1451.style.cursor="w-resize"; 
                this._1451.style.borderLeftStyle="outset"; 
                this._1451.style.borderRightStyle="outset"; 
            }
            else
            {
                this._1451.style.cursor="auto"; 
                this._1451.style.borderLeftStyle="none"; 
                this._1451.style.borderRightStyle="none"; 
            }
            this._1451.style.borderTopStyle="outset"; 
            this._1451.style.borderBottomStyle="outset"; 

            this._1454.style.left="5px"; 
            this._1454.style.top=(-this._1428)+"px";  
            this._1454.style.width="3px"; 
            this._1454.style.height="25px"; 
            this._1454.style.cursor ="col-resize"; 
            this._1454.style.borderRightStyle="outset"; 
            this._1454.style.borderTopStyle="outset"; 
            this._1454.style.borderBottomStyle="outset"; 
            this._1454.style.borderLeftStyle="none"; 
        }
        this._1461();
        this._1464();
    }
    _942._1080=function (_1425)
    {
        this._1425 = _1425;
        this._1463();
    }
    _942._1416 = function (width, height)
    {
        this._1429 = width;;
        this._1430=height;
        this.style.width = width + "px";
        this.style.height = height + "px";
        this._1463();
    }
    _942._1465=function(min,max)
    {
        this.min=min;
        this.max=max;
        this._1463();
    }
    _942._1464=function(value)
    {
        if(this._1436.style.visibility=="hidden")
            return;
        this._1466(this._1438);
    }
    _942._1466=function(value)
    {
        this._1436.style.visibility="visible";
        var _1467;
        _1467=this._1420(value);
        if(_1467<0)
            _1467=0;
        if(_1467>1)
            _1467=1;
        this._1437=_1467;
        this._1438=value;
        var _1448;
        _1448=this._1449();
        var _1455;
        _1455=_1467*_1448;
        if(!this._1425)
        {
            _1455+=5;
            _1455=parseInt(_1455)+"px";
            this._1436.style.left=_1455;
        }
        else
        {
            _1455-=this._1428;
            _1455+=5;
            _1455=parseInt(_1455)+"px";
            this._1436.style.top=_1455;
        }
    }
    _942._1468=function()
    {
        this._1436.style.visibility="hidden";
    }

    let _1469 = 1;
    let _1470 = 0;
    function _1459()
    {
        if (_1470 == 0)
            return;
        if (_942._1425)
            _942._1416(_942._1429, _1470);
        else
            _942._1416(_1470, _942._1430);
        _1469 = 1;
        _1470 = 0;
        document.removeEventListener("click", _1471);
    }
    function _1471()
    {
        if (!_1470)
            return;
        let _1472;
        _1472 = _942.getBoundingClientRect();
        let x, y;
        x = event.clientX;
        y = event.clientY;
        if (!(_1472.left <= x && x <= _1472.right && _1472.top <= y && y <= _1472.bottom))
            _1459();
    }
    function _1473()
    {
        if (!_942._834)
            return;
        if (_1469 == 1)
        {
            if (_942._1425)
                _1470 = _942._1430;
            else
                _1470 = _942._1429;
            document.addEventListener("click", _1471);
       }
        if (_1469 >= 6)
            return;
        _1469++;
        if (_942._1425)
            _942._1416(_942._1429, _1470 * _1469);
        else
            _942._1416(_1470 * _1469, _942._1430);
    }
    _942._1077 = function (_582)
    {
        if (_582)
            _942.ondblclick = _1473;
        else
        {
            _1459();
            _942.ondblclick = null;
        }
    }
    


    _942._1462(false);
    _942._1080(false);
    _942._837(value);
}

