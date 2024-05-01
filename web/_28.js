
function _941(_942,_822,_943,_944,_945,_946,_947)
{
    let options=new Array(Math.floor((arguments.length-4)/3));
    for(let _570=0;_570<options.length;_570++)
    {
        options[_570]=new Object();
        options[_570].value=arguments[4+_570*3+0];
        options[_570].text=arguments[4+_570*3+1];
        options[_570]._948=arguments[4+_570*3+2];
    }
    _942._822=_822;
    _942.options=options;
    _942._943=_943;
    _942._944=_944;
    _942.style.display="inline-block";
    _942.style.cursor="pointer";
    



    let window;
    window=document.createElement("span");
    _942.window=window;
    window._942=_942;
    window.style.display="inline-block";
    window.style.overflow="hidden"
    window.style.position="relative";
    _942.appendChild(window);

    let _949;
    _949=document.createElement("img");
    _942._949=_949;
    _949._942=_942;
    _949.src="_29.png";
    _949.style.width="15px"
    _949.style.height="18px";
    _949.style.verticalAlign="top";
    _949.style.position="relative";
    _949.style.top=((_944-18)/2)+"px";
    _942.appendChild(_949);
    let _950;
    _950=document.createElement("span");
    _942._950=_950;
    _950._942=_942;
    _950.style.position="relative";
    _950.style.textAlign="left";
    window.appendChild(_950);

    _942._951=function()
    {
        let options=this.options;
        let _942=this;
        let _950=this._950;
        _950.childNodes.length=0;
        for(let _570=0;_570<options.length;_570++)
        {
            let _952;
            _952=document.createElement("div");
            _952._942=_942;
            _952._570=_570;
            _952.innerHTML="<span style='inline-block'><img src='"+options[_570]._948+"' style='width:"+_943+"px;height:"+_944+"px;' ><span>"+options[_570].text+"</span></span>\r\n";
            _950.appendChild(_952);
        }
    }
    _942._951();

    _949.onclick=function()
    {
        let _942=this._942;
        let options=_942.options;
        let _950=_942._950;
        let window=_942.window;
        window.style.overflow="";
        _950.style.top="0px";
        let _953;
        _953=0;
        for(let _570=0;_570<_950.childNodes.length;_570++)
        {
            let _952=_950.childNodes[_570];
            if(_570==_942._954)
                _952.style.backgroundColor="rgb(200,200,255)";
            else
                _952.style.backgroundColor = "rgb(230 230 230 / 0.8)";
            _952.onmouseover=function()
            {
                let _952=this;
                let _942=this._942;
                if(_952._570==_942._954)
                    _952.style.backgroundColor="rgb(200,200,255)";
                else
                    _952.style.backgroundColor="rgb(200,250,200)";
            }
            _952.onmouseout=function()
            {
                let _952=this;
                let _942=this._942;
                if(_952._570==_942._954)
                    _952.style.backgroundColor="rgb(200,200,255)";
                else
                    _952.style.backgroundColor = "rgb(230 230 230 / 0.8)";
            }
            _952.onclick=function()
            {
                let _952=this;
                let _942=this._942;
                _942._955(_952._570,true);
            }
            _956=_952.childNodes[0].getBoundingClientRect();
            let _957;
            _957=_956.width;
            if(_957>_953)
                _953=_957;
        }
        window.style.width=_953+"px";
        event.stopPropagation();
        document.addEventListener("click",_949._958);
        document._959=_942;
    }
    _949._958=function()
    {
        let _942=document._959;
        if(!_942)
            return;
        document._959=null;
        let _949=_942._949;
        document.removeEventListener("click",_949._958);
        _942._960(_942._954);
    }

    _942._955=function(_954,_961)
    {
        let _942=this;
        let options=_942.options;
        let _950=_942._950;
        let window=_942.window;
        let _962;
        _942._954=_954;
        _942.value=options[_954].value;
        _962=0;
        for(let _570=0;_570<_954;_570++)
        {
            let _952;
            _952=_950.childNodes[_570];
            let _956;
            _956=_952.getBoundingClientRect();
            _962+=_956.height;
        }
        let _963;
        _963=_950.childNodes[_954];
        let _964,_965;
        {
            let _956;
            _956=_963.getBoundingClientRect();
            _965=_956.height;
            _956=_963.childNodes[0].getBoundingClientRect();
            _964=_956.width;
        }
        window.style.width=_964+"px";
        window.style.height=_965+"px";
        window.style.overflow="hidden";
        _950.style.top=(-_962)+"px";
        for(let _570=0;_570<_950.childNodes.length;_570++)
        {
            let _952;
            _952=_950.childNodes[_570];
            _952.style.backgroundColor="";
            _952.onmouseover=null;
            _952.onmouseout=null;
            _952.onclick=null;
        }
        _963.onclick=_942._949.onclick;
        if(_961&&_942._822)
            _942._822(_942.value);

    }
    _942._960=function(_954)
    {
        _942._955(_954,false)
    }
    _942._960(0);
    _942._837=function(value)
    {
        let options=this.options;
        let _942=this;
        for(let _570=0;_570<options.length;_570++)
            if(options[_570].value==value)
            {
                _942._960(_570);
                return;
            }
    }
    _942._966=true;
    _942._967=function(_834)
    {
        let _942=this;
        if(_942._966==_834)
            return;
        _942._966=_834;
        let _949;
        _949=_942._949;
        let _950;
        _950=_942._950;
        let _963;
        _963=_950.childNodes[_942._954];
        let _948,text;
        _948=_963.childNodes[0].getElementsByTagName("img")[0];
        text=_963.childNodes[0].getElementsByTagName("span")[0];
        if(!_834)
        {
            _949._836=_949.onclick;
            _949.onclick=null;
            _963.onclick=null;
            _949.style.webkitFilter="grayscale(100%)";
            _948.style.webkitFilter="grayscale(100%)";
            text.style.color="gray";
            _942.style.cursor="";
        }
        else
        {
            _949.onclick=_949._836;
            _963.onclick=_949._836;
            _949._836=null;
            _949.style.webkitFilter="";
            _948.style.webkitFilter="";
            text.style.color="";
            _942.style.cursor="pointer";
        }
    }
}

