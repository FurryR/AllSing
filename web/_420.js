class _932
{
	static _933 = null;
	static _1206 = null;
	static _935 = null;
	static _6264 = null;
	static _6265 = 0;
	static _6266 = 0;
	static _6267()
	{
		if (_932._6265 == 0 && _932._6266 == 0)
		{
			_914();
			_915(L("欢迎使用《大市唱》"),"Loading...");
			_916(0, 100);
			return;
        }
		if (_932._6265 == 1 && _932._6266 == 1)
		{
			_916(100, 100);
			_905();
			return;
		}
		let _909;
		_909 = _932._6265 * 0.1 + _932._6266 * 0.9;
		_916(_909 * 100, 100);
    }
	static async _6268()
	{
		_932._6265 = 0;
		_932._6267();
		for (let _6269 = 0; _6269 < 2; _6269++)
		{
			let _6270;
			switch (_6269)
			{
				case 0: _6270 = _932._933; break;
				case 1: _6270 = _932._1206; break;
			}
			if (_6270 == null)
			{
				let _6271;
				let _6272;
				_6272 = false;
				for (let _6273 = 0; _6273 < 5; _6273++)
				{
					try
					{
						let _1510;
						switch (_6269)
						{
							case 0: _1510 = "Binary/trill_random_frequency.bin"; break;
							case 1: _1510 = "Binary/zhaolei_unfiltered_vocal_cords_sound.bin"; break;
						}
						_1510 = await fetch(_1510);
						_6271 = await _1510.arrayBuffer();
						_6272 = true;
						break;
					}
					catch (_678)
					{
						_6272 = false;
					}
				}
				if (!_6272)
				{
					;
					return;
				}
				switch (_6269)
				{
					case 0:
						{
							let _6274;
							_6274 = _6271.byteLength;
							
							let _6275;
							_6275 = _6271.slice(4, _6274);
							_932._933 = new Float64Array(_6275);
						}
						break;
					case 1:
						_932._1206 = _6271;
						break;
				}
			}
			switch (_6269)
			{
				case 0: _849._1201(); break;
				case 1: _849._1202(); break;
			}
		}
		_932._6265 = 1;
		_932._6267();
	}
	static _6276()
	{
		_932._6266 = 0;
		_932._6267();
		function _6277(buffer)
		{
			buffer._636();
			buffer._783(_932._6264);
			buffer._637();
			buffer._783(_932._6264);
			_932._6264 = null;
		}
		async function _6278()
		{
			let _6279;
			let _6280;
			let _6281;
			_6281 = false;
			for(let _635=0;_635<5;_635++)
			{
				try
				{
					let _1510;
					_1510 = "Binary/install_data.bin";
					
					_1510 = await fetch(_1510, { _6282: 'force-cache' });
					let _1414;
					_1414 = parseInt(_1510.headers.get('content-length'));
					_6280 = _1510.headers.get("last-modified");
					_6280 = new Date(_6280);
					_6280 = _6280.getTime();
					let _682;
					_682 = _1510.body.getReader();
					let _6283;
					_6283 = 0;
					_6279 = new Array();
					while (true)
					{
						let { _6284, value } = await _682.read();
						if (_6284)
							break;
						if (!value)
							break;
						_6279.push(value.buffer);
						_6283 += value.length;

						_932._6266 = _6283/_1414;
						_932._6267();
						if (_6283 >= _1414)
							break;
					}
					_6281 = true;
					break;
				}
				catch(_678)
				{
					_6281 = false;
				}
			}
			if (!_6281)
			{
				;
				return;
            }
			let _784;
			_784 = new _634();
			for (let _635 = 0; _635 < 2; _635++)
			{
				if (_635 == 0)
					_784._636();
				else
					_784._637();
				_784._778(_6280);
				for (let _6285 = 0; _6285 < _6279.length; _6285++)
					_784._783(_6279[_6285]);
			}
			;
			_932._935 = _784._640;
			_932._6264 = _932._935;
			_849._1203();
			_6237("install_data", _6277);
		};
		async function _6286(_982)
		{
			
			try
			{
				let _6287 = new AbortController();
				let signal = _6287.signal;
				let _6280;
				_6280 = "Binary/install_data.bin";
				_6280 = await fetch(_6280, {signal:signal});
				_6280 = _6280.headers.get("Last-Modified");
				_6280 = new Date(_6280);
				_6280 = _6280.getTime();
				_6287.abort();
				let _6288;
				_6288 = _982.position;
				_982.position = 0;
				let _6289;
				_6289 = _982._790();
				_982.position = _6288;
				if (_6289 < _6280)
				{
					await _6278();
					return;
				}
			}
			catch (_678)
			{
			}
			;
			_932._935 =_982._640;
			_849._1203();
			_932._6266 = 1;
			_932._6267();
		};
		_6240("install_data",_6286,_6278);
	}
	static async _587()
	{
		await _932._6268();
		_932._6276();
    }
}


