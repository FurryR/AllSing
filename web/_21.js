function _820(_821,_822,name,width,height,_823)
{
	if(!width)
		width=37;
	if(!height)
		height=37;
	if(!_823&&_823!=0&&_823!=false)
		_823=true;
	var _824;
	_824="<span style='display:inline-block;text-align:center;"+"'>\r\n";
	_824+="	<img src='_23.png' style='width:"+width+"px;height:"+height+"px;' />\r\n";
	_824+="	<img src='_22.png' style='width:"+width+"px;height:"+height+"px;' />\r\n";
	if(name)
	{
		if(_823)
			_824+="<br/>\r\n";
		_824+="<span>"+name+"</span>\r\n";
	}
	_824+="</span>\r\n";
	_821.innerHTML=_824;
	_821._822 = _822;
	{
		let _825;
		_825 = _821.getElementsByTagName("span")[0];
		let _826;
		_826 = _825.getElementsByTagName("img");
		_821._23 = _826[0];
		_821._22 = _826[1];
		_821._827 = _825.getElementsByTagName("span")[0];
	}
	_821._23._821 = _821;
	_821._22._821 = _821;
	_821._828=function ()
	{
		this._829=true;
		this._830(true);
	}
	_821._831=function ()
	{
		this._829=false;
		this._830(true);
	}
	_821._830=function (_832)
	{
		if(this._829)
		{
			this._23.style.display="inline";
			this._22.style.display="none";
		}
		else
		{
			this._22.style.display="inline";
			this._23.style.display="none";
		}
		if(_832)
		{
			if(this._822!=null)
				this._822(this._829);
		}
	}
	_821._833=function (_834)
	{
		this._835=_834;
		if(this._835)
		{
			this._23.style.webkitFilter ="";
			this._22.style.webkitFilter ="";
			this._23.style.cursor="hand";
			this._22.style.cursor="hand";
			if(this._827)
				this._827.style.color="";
			this._830(false);
			if (this._23._836)
				this._23.onclick = this._23._836;
			if (this._22._836)
				this._22.onclick = this._22._836;
		}
		else
		{
			this._23.style.webkitFilter ="grayscale(100%)";
			this._22.style.webkitFilter ="grayscale(100%)";
			this._23.style.cursor="";
			this._22.style.cursor="";
			if(this._827)
				this._827.style.color = "gray";
			if (!this._23._836)
				this._23._836 = this._23.onclick;
			this._23.onclick = null;
			if (!this._22._836)
				this._22._836 = this._22.onclick;
			this._22.onclick=null;
		}
	}
	_821._837=function (value)
	{
		this._829=value;
		this._830(false);
	}
	_821._23.onclick=function()
	{
		if(!this._821._835)
			return;
		this._821._831(this);
	}
	_821._22.onclick=function()
	{
		if(!this._821._835)
			return;
		this._821._828(this);
	}
	_821._833(true);
	_821._830(false);
}

