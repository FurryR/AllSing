


class _1035
{
	static _1513=null;
	static _1514=null;
	static _1515=null;
	static _1516=null;
	static _1517=null;
	static _1518 = false;
	static _1519 = null;
	static _1520()
	{
		if (_1035._1519 == null)
		{
			let _1521 = document.createElement("span");
			_1035._1519 = _1521;
			_1521.style.display = "inline-block";
			_1521.style.backgroundColor = "white";
			_1521.style.borderStyle = "solid";
			_1521.style.borderColor = "black";
			_1521.style.position = "Fixed";
			_1521.style.zIndex = 1000000;
			_1521.style.borderWidth = "1px";
			_1521.style.padding = "7px";
			_1521.style.fontSize = "small";
			document.body.appendChild(_1521);
		}
		let _1521;
		_1521 = _1035._1519;
		_1521.innerText=_1035._1515;
		_1521.style.left=_1035._1516+10;
		_1521.style.top=_1035._1517;
		_1521.style.display="";
	}
	static _1522()
	{
		if (_1035._1519 != null)
		{
			document.body.removeChild(_1035._1519);
			_1035._1519 = null;
			
		}
	}
	static _1523()
	{
		let x,y;
		x=event.clientX;
		y=event.clientY;
		let _956;
		_956=_1035._1513.getBoundingClientRect();
		if(_956.left<=x&&x<=_956.right&&_956.top<=y&&y<=_956.bottom)
		{
			if(_1035._1514)
			{
				clearTimeout(_1035._1514);
				_1035._1514=null;
				_1035._1514=setTimeout(_1035._1524,800);
			}
			else
			{
				_1035._1522();
			}
		}
		else
		{
			_1035._1522();
			_1035._720();
		}
	}
	static _1524()
	{
		_1035._1514=null;
		_1035._1520();
	}
	static _720()
	{
		if(_1035._1518)
		{
			_1035._1518=false;
			document.removeEventListener("mousemove",_1035._1523);
		}
		if(_1035._1514)
		{
			clearTimeout(_1035._1514);
			_1035._1514=null;
		}
		_1035._1522();
		_1035._1513=null;
	}
	static _1040(text)
	{
		if(_1035._1513==event.target)
			return;
		_1035._720();

		_1035._1513=event.target;
		_1035._1515=text;
		_1035._1516=event.clientX;
		_1035._1517=event.clientY;

		document.addEventListener("mousemove",_1035._1523);
		_1035._1518=true;
		_1035._1514=setTimeout(_1035._1524,800);
	}
}

function _218(text)
{
	_1035._1040(text);
}

