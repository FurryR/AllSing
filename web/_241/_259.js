class _2541
{
	static _2553(_2056,_2554,_2555)
	{
		let _987;
		_987=null;
		let _2556;
		_2556=_2056._2556;
		let _2557;
		_2557=_2056._2557;
		if(_2557._2520=="not_used")
			_2557=null;
		if(_2554)
		{
			for(let _754=0;_754<_2556.length;_754++)
			{
				let _2558;
				_2558=_2556[_754];
				if(_2557&&_2558._2521+1==_2557._2522)
					continue;
				let _2559;
				_2559=_2555(_2558);
				if(_2559)
					_987=_2559;
			}
		}
		else
		{
			let _2560;
			_2560=0;
			for(let _754=0;_754<_2556.length-1;_754++)
			{
				let _2558;
				_2558=_2556[_754];
				if(_2557&&_2558._2521+1==_2557._2522)
				{
					_2560=0;
					continue;
				}
				let _2561;
				_2561=_2556[_754-_2560];
				let _2562;
				_2562=_2556[_754+1];
				let _2563;
				_2563=_2562._2521-_2561._2522+1;
				let _2564;
				{
					let _2565;
					_2565=_2056._2154(_2558._2521);
					if(_2565._2298()>0.5+0.1)
						_2564=true;
					else
						_2564=false;
				}
				if(_2563>=6&&!_2564)
				{
					_2560=0;
					if(_2558._2520=="_7750")
					{
						let _2559;
						_2559=_2555(_2558);
						if(_2559)
							_987=_2559;
					}
					if(_2562._2520=="_7751")
					{
						let _2559;
						_2559=_2555(_2562);
						if(_2559)
							_987=_2559;
					}
				}
				else
					_2560++;
			}
		}
		return _987;
	}
	static _2542(_2056)
	{
		if(_2513(L("句子开头的节拍变慢"))||_2513(L("句子开头的节拍停顿")))
			return null;
		function _2555(_2556)
		{
			if(_2556._2520=="_7750")
			{
				let _2053;
				_2053=_2556._2521-_2556._2522+1;
				if(_2053<=1)
					return L("一个上行最少要有两个音节");
				if(_2053==2)
				{
					let _2304;
					_2304=_2056._2154(_2556._2521);
					_2304._2065(1);
				}
				else
				{
					let _2304;
					_2304=_2056._2154(_2556._2521);
					let _2566;
					_2566=_2556._2521-1;
					if(_2566<0)
						return L("一个上行最少要有两个音节");
					_2566=_2056._2154(_2566);
					_2566._2065(0.25);
					_2304._2193(_2566._2325-2);
					_2304._2065(1);
				}
			}
			else
			{
				console.assert(_2556._2520=="_7751");
				_2056._2154(_2556._2522)._2065(0.25);
			}
			return null;
		}
		return _2541._2553(_2056,true,_2555);
	}
	static _2543(_2056)
	{
		if(_2513(L("句子开头的节拍变慢"))||_2513(L("句子开头的节拍停顿")))
			return null;
		function _2555(_2556)
		{
			if(_2556._2520=="_7750")
			{
				let _2053;
				_2053=_2556._2521-_2556._2522+1;
				if(_2053<1)
					return L("一个上行最少要有一个音节");
				let _2304;
				_2304=_2056._2154(_2556._2521);
				_2304._2065(1);
			}
			return null;
		}
		return _2541._2553(_2056,false,_2555);
	}
}

