function _6090(_6091,_6092)
{
	if(_6092)
	{
		for(let _570=0;_570<_6091.length;_570++)
		{
			let _2414;
			_2414=(_570+1)/(_6091.length+1);
			_2414=0.5+0.5*_2414;
			_6091[_570]._1294*=_2414;
		}
	}
	else
	{
		for(let _570=0;_570<_6091.length;_570++)
		{
			let _2414;
			_2414=(_570+1)/(_6091.length+1);
			_2414=1-_2414;
			_2414=0.5+0.5*_2414;
			_6091[_570]._1294*=_2414;
		}
	}
}
function _6093(_6091)
{
	let _6094;
	_6094=Math.round(_6091.length/2);
	let _6095;
	_6095=_6091.slice(_6094);
	for(let _570=0;_570<_6095.length;_570++)
		_6095[_570]._1294=0;
	let _6096;
	_6096=_6091.slice(0,_6094);
	let result;
	result=_6095.concat(_6096);
	_6097(_6091,result);
}
function _6098(_6091,_377)
{
	switch(_377)
	{
		case "no_change":
			break;
		
		case "incress":
			_6090(_6091,true);
			break;
		case "decress":
			_6090(_6091,false);
			break;
		
		case "delay half quarter":
			break;
		case "delay a quarter":
			break;
		case "delay half sentence":
			_6093(_6091);
			break;
	}
}

