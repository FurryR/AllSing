function _1049(_232,width,height)
{
	if(_232.style.position!="absolute"&&_232.style.position!="relative")
		_232.style.position="relative";
	{
		let _956;
		_956=_232.getBoundingClientRect();
		if(width)
		{
			_232.style.display="inline-block";
			_232.style.width=width+"px";
			_232.width=width;
		}
		else
			_232.width=_956.width;
		if(height)
		{
			_232.style.display="inline-block";
			_232.style.height=height+"px";
			_232.height=height;
		}
		else
			_232.height=_956.height;
		_232.value=0;
		_232.max=100;
	}

	let background;
	background=document.createElement("div");
	background.style.fontSize="medium";
	background.style.position="absolute";
	background.style.left="0px";
	background.style.top="0px";
	background.style.width=_232.width+"px";
	background.style.height=_232.height+"px";
	background.style.borderStyle = "inset";
	if (height<15)
		background.style.borderWidth = "1px";
	else
		background.style.borderWidth = "2px";
	_232.appendChild(background);
	_232.background=background;

	let left;
	left=document.createElement("img");
	left.src="_204.png";
	left.style.position="absolute";
	left.style.left="3px";
	left.style.top="4px";
	left.style.width="10px";
	left.style.height=(_232.height-3)+"px";
	_232.appendChild(left);
	_232.left=left;

	let _1413;
	_1413=document.createElement("img");
	_1413.src="_203.png";
	_1413.style.position="absolute";
	_1413.style.left="13px";
	_1413.style.top=left.style.top
	_1413.style.width="10px";
	_1413.style.height=left.style.height;
	_232.appendChild(_1413);
	_232._1413=_1413;

	let right;
	right=document.createElement("img");
	right.src="_205.png";
	right.style.position="absolute";
	right.style.left="23px";
	right.style.top=left.style.top
	right.style.width=left.style.width;
	right.style.height=left.style.height;
	_232.appendChild(right);
	_232.right=right;

	_232._837=function(value,max)
	{
		this.value=value;
		this.max=max;
		let background,left,_1413,right;
		background=this.background;
		left=this.left;
		_1413=this._1413;
		right=this.right;

		let margin;
		margin=parseInt(left.style.left);
		let _1414;
		_1414=_232.width;
		_1414-=margin;
		let _1415=10;

		let length;
		if(max==0)
			length=1;
		else
			length=parseInt(_1414*value/max);
		if(length<_1415*2)
		{
			_1415=length/2;
			left.style.width=(_1415)+"px";
			_1413.style.left=(margin+_1415)+"px";
			_1413.style.width="1px";
			right.style.width=(_1415)+"px";
			right.style.left=(margin+_1415+1)+"px";
		}
		else
		{
			left.style.width=(_1415)+"px";
			_1413.style.left=(margin+_1415)+"px";
			_1413.style.width=(length-_1415*2)+"px";
			right.style.width=(_1415)+"px";
			right.style.left=(margin+length-_1415)+"px";
		}
	};

	_232._967 = function (_834)
	{
		if (_834)
		{
			left.style.webkitFilter = "";
			_1413.style.webkitFilter = "";
			right.style.webkitFilter = "";
		}
		else
		{
			left.style.webkitFilter = "grayscale(100%)";
			_1413.style.webkitFilter = "grayscale(100%)";
			right.style.webkitFilter = "grayscale(100%)";
		}
	}

	_232._1416 = function (width, height)
	{
		_232.style.width = width + "px";
		_232.width = width;
		_232.style.height = height + "px";
		_232.height = height;

		background.style.width = _232.width + "px";
		background.style.height = _232.height + "px";

		if (height < 15)
			background.style.borderWidth = "1px";
		else
			background.style.borderWidth = "2px";

		left.style.height = (_232.height - 3) + "px";
		_1413.style.height = left.style.height;
		right.style.height = left.style.height;

		_232._837(_232.value, _232.max);

	}
}
