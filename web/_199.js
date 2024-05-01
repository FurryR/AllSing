class _581
{
	static _582(_821,_834)
	{
		if(!_821.getAttribute("enable"))
		{
			_821.setAttribute("enable","true");
			_821._836 = _821.onclick;
			_821._1299 = _821.style.cursor;
		}
		var _1300,text;
		_1300 = _821.getElementsByTagName("img")[0];
		if (!_1300)
			_1300 = _821;
		text=_821.getElementsByTagName("span")[0];
		if(_834)
		{
			_821.setAttribute("enable", "true");
			if(_1300)
				_1300.style.webkitFilter = "";
			if(text)
				text.style.color="";
			_821.style.cursor = _821._1299;
			_821.onclick=_821._836;
		}
		else
		{
			_821.setAttribute("enable", "false");
			if(_1300)
				_1300.style.webkitFilter = "grayscale(100%)";
			if (text)
				text.style.color="gray";
			_821.style.cursor="";
			_821.onclick=null;
		}
	}
	static _1301=new Array();
	static _1302(_1303)
	{
		var _1304=document.createElement("script");
		_1304.onload=function()
		{
			let _1301;
			_1301=_581._1301;
			if(_1301[0]._822)
				_1301[0]._822();
			_1301.shift();
			if(_1301.length)
				_581._1302(_1301[0]);
		}
		_1304.setAttribute('type','text/javascript');
		_1304.setAttribute('src',_1303._1305);
		document.getElementsByTagName('head')[0].appendChild(_1304);
	}
	static _673(_1305,_822)
	{
		let _1306=new Object();
		_1306._1305=_1305;
		_1306._822=_822;
		this._1301.push(_1306);
		if(this._1301.length==1)
			this._1302(_1306);
	}
	static _1307()
	{
		function _1308()
		{
			document.removeEventListener("mouseup",_1308);
			document.onselectstart=null;
		};
		document.addEventListener("mouseup",_1308);
		document.onselectstart=function()
		{
			return false;
		}
	}
	static _1309(_1310)
	{
		if(_1310<=1)
			return _1310/2;
		return 0.5+0.5*(_1310-1)/(10-1);
	}
	static _1311(_1312)
	{
		if(_1312<=0.5)
			return _1312*2;
		return 1+(10-1)*(_1312-0.5)/(1-0.5);
	}
	static _1313(_1314)
	{
		if(_1314<=50)
			return _1314/50;
		return 1+(10-1)*(_1314-50)/50;
	}
	static _1315(_1310)
	{
		if(_1310<=1)
			return _1310*50;
		
		return 50+50*(_1310-1)/(10-1);
	}
	static _1316(_1314)
	{
		if(_1314<=50)
			return 0.1+(1-0.1)*_1314/50;
		return 1+(10-1)*(_1314-50)/50;
	}
	static _1317(_1318)
	{
		if(_1318<=1)
			return 50*(_1318-0.1)/(1-0.1);
		return 50+50*(_1318-1)/(10-1);
	}
	static _761(_539, y1, _690, x1, x)
	{
		if (x1 == _690)
			return (_539 + y1) / 2;
		return _539 + (y1 - _539) * (x - _690) / (x1 - _690);
	}

	static _1319(x, y, _1320)
	{
		let _1321;
		let _1322;
		_1322 = x * x + y * y;
		_1322 = Math.sqrt(_1322);
		if (_1322 == 0)
			_1321 = 0;
		else
		{
			_1321 = Math._1323(x / _1322);
			if (y < 0)
				_1321 = Math.PI * 2 - _1321;
		}
		if (_1320)
			_1320(_1322);
		return _1321;
	}



	static _1324(result,_798)
	{
		if (_798 == null)
			return null;
		if (Array.isArray(result) != Array.isArray(_798))
			console.assert(0);
		if (Array.isArray(result))
			result.length = 0;
		for (let key in result)
			if (typeof result[key] != "function")
				delete result[key];
		for (let key in _798)
		{
			if (_798.hasOwnProperty(key))
			{
				let _1325;
				_1325 = _798[key];
				if (typeof _1325 != 'function')
				{
					if (typeof _1325 == 'object')
						result[key] = _581._1326(_1325);
					else
						result[key] = _1325;
				}
			}
		}
    }
	static _1326(_798)
	{
		if (_798 == null)
			return null;
		let _1327;
		_1327 = Array.isArray(_798);
		let result;
		if (_1327)
			result = new Array();
		else
			result = new Object();
		this._1324(result, _798);
		return result;
	}

	static _1328(_798)
	{
		if(_798==null)
			return null;
		let _1327;
		_1327 = Array.isArray(_798);
		let result;
		if (_1327)
			result = new Array();
		else
			result = new Object();
		for(let key in _798)
		{
			if(_798.hasOwnProperty(key))
			{
				let _1325;
				_1325 = _798[key];
				if (typeof _1325 == 'object')
					result[key] = _581._1328(_1325); 
				else if (typeof _1325 == 'function')
					result[key] = _581._1329(_1325,result);
				else
					result[key] = _1325;
			}
		}

		if (!_1327)
		{
			let _1330;
			_1330 = _798.constructor;
			if (_1330)
			{
				var propertyNames = Object.getOwnPropertyNames(_1330.prototype);
				for (let _754 = 0; _754 < propertyNames.length; _754++)
				{
					let _1232 = propertyNames[_754];
					if (_1232 == "constructor" || _1232 == "__defineGetter__" || _1232 == "__defineSetter__" || _1232 == "hasOwnProperty" || _1232 == "__lookupGetter__" || _1232 == "__lookupSetter__" || _1232 == "isPrototypeOf" || _1232 == "propertyIsEnumerable" || _1232 == "toString" || _1232 == "valueOf" || _1232 == "__proto__" || _1232 == "toLocaleString")
						continue;
					let _1331 = _1330.prototype[_1232];
					if (typeof _1331 == "function")
						result[_1232] = _581._1329(_1331, result);
					else
						result[_1232] = _1331;
				}
			}
		}
		return result;
	}
	static _1332(_1267)
	{
		var _569;
		_569 = _1267;
		_569 = _569.replace(/\\/g, "\\\\");
		_569 = _569.replace(new RegExp("\"", "gm"), "\\\"");
		_569 = _569.replace(new RegExp("\'", "gm"), "\\\'");
		return _569;
	}
	static _1333(_1267)
	{
		var _569;
		_569 = _1267;
		_569 = _569.replace(new RegExp("&", "gm"), "&amp;");
		_569 = _569.replace(new RegExp("<", "gm"), "&lt;");
		_569 = _569.replace(new RegExp(">", "gm"), "&gt;");
		return _569;
	}
	static _1334()
	{
		if (self.frameElement && self.frameElement.tagName == "IFRAME")
			return true;
		return false;
	}
	static _1329(_1335,_839)
	{
		if (_1335._1336)
			_1335 = _1335._1336;
		let _569;
		_569 = _1335.bind(_839);
		_569._1336 = _1335;
		return _569;
	}
	static _1337(_1338,_1339)
	{
		if (_1338 == -1)
			return -1;
		if (_1338 == _1339)
			return -1;
		if (_1339 < _1338)
			return _1338 - 1;
		return _1338;
    }
	static _1340(_1338, _1341)
	{
		if (_1338 == -1)
			return -1;
		if (_1338 >= _1341)
			_1338++;
		return _1338;
	}
	
	
	
	
	
	static _1342(_1343)
	{
		return _1343.toString().match(/\/\*\s([\s\S]*)\s\*\//)[1];
	}
	static _1344(_1267, _1345)
	{
		return _1267.substr(_1267.length - _1345);
	}
	static _1221(_1267,_1345)
	{
		return _1267.substr(0,_1345);
	}
	static _1250(_1267,_1346)
	{
		if (_1267.length >= _1346.length)
			if (_581._1221(_1267,_1346.length) == _1346)
				return true;
		return false;
	}
	static _1220(_1267, _1347)
	{
		if (_1267.length >= _1347.length)
			if (_581._1344(_1267,_1347.length) == _1347)
				return true;
		return false;
	}
	static _1348(_1267, _1349, substring)
	{
		let _569;
		let _1350, _1351;
		if (_1349 < 0)
			_1349 = 0;
		if (_1349 < _1267.length)
			_1350 = _581._1221(_1267, _1349);
		else
			_1350 = _1267;
		if (_1349 + substring.length < _1267.length)
			_1351 = _1267.substr(_1349 + substring.length);
		else
			_1351 = "";
		_569 = _1350 + substring +_1351;
		return _569;
	}
	static _1352()
	{
		switch (navigator.language.toLowerCase())
		{
			case "zh-cn":
			case "zh-sg":
			case "zh-tw":
				return "chinese";
			case "ja":
			case "ja-jp":
				return "japanese";
			case "zh-hk":
			case "yue":
			case "zh-yue":
			case "zh-yue-hk":
			case "yue-hk":
				return "cantonese";
			
			default:
				return "english";
		}
	}
	static _1353(_1354,_979,_1355)
	{
		if (_1354 < 0)
			_1354 = 0;
		if (_1354 > 1)
			_1354 = 1;
		let _1356;
		function _1357()
		{
			
			
			
			
			
			if (_1354 < 4 / 6.)
				_1354 = this._761(0., 4 / 6., 4 / 6., 0., _1354);
			else
				_1354 = this._761(4 / 6., 1., 1., 4 / 6., _1354);
			_1356 = Math.floor(_1354 * (255 * 6 - 1));
		}
		if ((!_1355) && _979)
			_1356 = Math.floor(_1354 * (255 * 6 - 1));
		else if ((!_1355) && (!_979))
			_1356 = Math.floor(_1354 * 255 * 5);
		else if (_1355 && _979)
			_1357.bind(this)();
		else
		{
			_1354 *= (5 / 6.);
			_1357.bind(this)();
		}
			
		let _1358, _1359, _1360;
		let value;
		if (_1356 < 255)
		{
			value=_1356;
			_1358 = 255;
			_1359 =value ;
			_1360 = 0;
		}
		else if (_1356 < 255 * 2)
		{
			value=_1356-255;
			_1358 = 255 -value ;
			_1359 = 255;
			_1360 = 0;
		}
		else if (_1356 < 255 * 3)
		{
			value=_1356-255 * 2;
			_1358 = 0;
			_1359 = 255;
			_1360 =value ;
		}
		else if (_1356 < 255 * 4)
		{
			value=_1356-255 * 3;
			_1358 = 0;
			_1359 = 255 -value ;
			_1360 = 255;
		}
		else if (_1356 < 255 * 5)
		{
			value=_1356-255 * 4;
			_1358 =value ;
			_1359 = 0;
			_1360 = 255;
		}
		else if (_1356 < 255 * 6)
		{
			value=_1356-255 * 5;
			_1358 = 255;
			_1359 = 0;
			_1360 = 255 -value ;
		}
		return [_1358, _1359, _1360];
	}
	static _1361(_1362,_1363)
	{
		let _1364 = _1362[0].length;
		let _1365, _1366, _1367, _1368;
		for (let _1369 = 1; _1369 < _1364; _1369++)
		{
			let _1370;
			_1370 = _1369 - 1;
			let _1371, _1372;
			_1371 = _1370 / (_1364 - 1);
			_1372 = _1369 / (_1364 - 1);
			if (!(_1371 <= _1363 && _1363 <= _1372))
				continue;
			let _1373, _1374, _1375, _1376;
			let _1377, _1378, _1379, _1380;
			_1373 = _1362[0][_1370];
			_1374 = _1362[1][_1370];
			_1375 = _1362[2][_1370];
			_1376 = _1362[3][_1370];
			_1377 = _1362[0][_1369];
			_1378 = _1362[1][_1369];
			_1379 = _1362[2][_1369];
			_1380 = _1362[3][_1369];
			_1365 = _581._761(_1373, _1377, _1371, _1372, _1363);
			_1366 = _581._761(_1374, _1378, _1371, _1372, _1363);
			_1367 = _581._761(_1375, _1379, _1371, _1372, _1363);
			_1368 = _581._761(_1376, _1380, _1371, _1372, _1363);
			break;
		}
		return [_1365, _1366, _1367, _1368];
	}


	static _1381(_1382, _1383)
	{
		function _1384(_1385)
		{
			return _1385 > 64 && _1385 < 91
				? _1385 - 65
				: _1385 > 96 && _1385 < 123
					? _1385 - 71
					: _1385 > 47 && _1385 < 58
						? _1385 + 4
						: _1385 === 43
							? 62
							: _1385 === 47
								? 63
								: 0;
		}

		const _1386 = _1382.replace(/[^A-Za-z0-9+/]/g, ""); 
		const _1387 = _1386.length;
		const _1388 = _1383
			? Math.ceil(((_1387 * 3 + 1) >> 2) / _1383) * _1383
			: (_1387 * 3 + 1) >> 2;
		const _1389 = new Uint8Array(_1388);

		let _1390;
		let _1391;
		let _1392 = 0;
		let _1393 = 0;
		for (let _1394 = 0; _1394 < _1387; _1394++)
		{
			_1391 = _1394 & 3;
			_1392 |= _1384(_1386.charCodeAt(_1394)) << (6 * (3 - _1391));
			if (_1391 === 3 || _1387 - _1394 === 1)
			{
				_1390 = 0;
				while (_1390 < 3 && _1393 < _1388)
				{
					_1389[_1393] = (_1392 >>> ((16 >>> _1390) & 24)) & 255;
					_1390++;
					_1393++;
				}
				_1392 = 0;
			}
		}

		return _1389;
	}
	static _1268(_1382, _1383)
	{
		return this._1381(_1382, _1383).buffer;
	}


	
	static _1395(_1396)
	{
		function _1397(_1398)
		{
			return _1398 < 26
				? _1398 + 65
				: _1398 < 52
					? _1398 + 71
					: _1398 < 62
						? _1398 - 4
						: _1398 === 62
							? 43
							: _1398 === 63
								? 47
								: 65;
		}

		let _1390 = 2;
		let _1386 = "";

		const _1399 = _1396.length;
		let _1392 = 0;
		for (let _1400 = 0; _1400 < _1399; _1400++)
		{
			_1390 = _1400 % 3;
			
			
			
			

			_1392 |= _1396[_1400] << ((16 >>> _1390) & 24);
			if (_1390 === 2 || _1396.length - _1400 === 1)
			{
				_1386 += String.fromCodePoint(
					_1397((_1392 >>> 18) & 63),
					_1397((_1392 >>> 12) & 63),
					_1397((_1392 >>> 6) & 63),
					_1397(_1392 & 63),
				);
				_1392 = 0;
			}
		}
		return (
			_1386.substring(0, _1386.length - 2 + _1390) +
			(_1390 === 2 ? "" : _1390 === 1 ? "=" : "==")
		);
	}
	static _1259(_1396)
	{
		return this._1395(new Uint8Array(_1396));
	}

	static _1037(_1401)
	{
		let _956 = _1401.getBoundingClientRect();
		if (event.clientX >= _956.left && event.clientX <= _956.right && event.clientY >= _956.top && event.clientY <= _956.bottom)
			return true;
		return false;
	}

	static _1402(_1403, _1404)
	{
		let _1405;
		_1405 = _1403 % _1404;
		if (_1405 < 0)
			_1405 += _1404;
		return _1405;
	}
}
function _1406(_821,_834)
{
	_581._582(_821,_834);
}




function CMisc_GetLongString(_1343)
{
	return _1343.toString().match(/\/\*\s([\s\S]*)\s\*\//)[1];
}

class _1407
{
	_1408=5;
	_1409(_1408)
	{
		this._1408=_1408;
	}
	_703()
	{
		this._1408=(this._1408*9301+49297)%233280;
		return this._1408/233280.0;
	}
}



function _1410(_1411)
{
	return "({get value(){return " + _1411 + ";}, set value(v){" + _1411 + "=v;}})";
}
function _771(_1412, value)
{
	_1412.value = value;
}

