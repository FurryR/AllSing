function _900()
{
	let _1837;
	_1837 = true;
	for (let _754 = 0; _754 < _585.length; _754++)
	{
		let _445 = _585[_754];
		if (_445._655._656 && _445._662[0]._656)
		{
			_1837 = false;
			break;
		}
	}
	if (_1837)
	{
		_581._582(_64, false);
		_581._582(_58, false);
	}
	else
	{
		_581._582(_64, true);
		_581._582(_58, true);
	}
}

function _1144()
{
	if (_585.length == 1)
		if (_585[0]._1164.length == 0)
			return true;
	return false;
}

function _1838(_1839 = true)
{
	_1011._1840(_585[_584], _1839);
}
function _1841()
{
	for (let _570 = 0; _570 < _585.length; _570++)
		_1011._1840(_570);
	_616();
}

function _609(_610)
{
    _608 = _610;
    _48.title = L("下载到：") + _610 + ".dsc";
}
function _605(_606)
{
	if (_606 == "" || _606 == _1134)
		_90.value = _90._1064;
	else
		_90.value = _606;
}
function _607()
{
	let name;
	name = _90.value;
	if (name == _90._1064)
		name = "";
	return name;
}

function _1155(_445)
{
	let _1842;
	if (_445._1137)
		_1842 = _1141._1843(_445);
	else
		_1842 = _1141._1142(_445);
	if (_1842 == "")
		_1842 = _94._1133;
	_94.value = _1842;
}
function _1844(_1845, _1846)
{
	let _1847 = 1;
	let _1848 = 16;
	let _1849 = true
	let _1850;
	_1850 = new DataView(_1845.buffer);
	function _638(data, _1851, _1852)
	{
		for (var _1279 = 0; _1279 < _1852.length; _1279++)
		{
			data.setUint8(_1851 + _1279, _1852.charCodeAt(_1279))
		}
	}
	let _1853 = _1848
	let buffer = new ArrayBuffer(44 + _1850.byteLength)
	let data = new DataView(buffer)
	let _1854 = _1847
	let _1851 = 0
	
	_638(data, _1851, 'RIFF')
	_1851 += 4
	
	data.setUint32(_1851, 36 + _1850.byteLength, true)
	_1851 += 4
	
	_638(data, _1851, 'WAVE')
	_1851 += 4
	
	_638(data, _1851, 'fmt ')
	_1851 += 4
	
	data.setUint32(_1851, 16, true)
	_1851 += 4
	
	data.setUint16(_1851, 1, true)
	_1851 += 2
	
	data.setUint16(_1851, _1854, true)
	_1851 += 2
	
	data.setUint32(_1851, _1846, true)
	_1851 += 4
	
	data.setUint32(_1851, _1854 * _1846 * (_1853 / 8), true)
	_1851 += 4
	
	data.setUint16(_1851, _1854 * (_1853 / 8), true)
	_1851 += 2
	
	data.setUint16(_1851, _1853, true)
	_1851 += 2
	
	_638(data, _1851, 'data')
	_1851 += 4
	
	data.setUint32(_1851, _1850.byteLength, true)
	_1851 += 4

	
	for (let _1279 = 0; _1279 < _1850.byteLength;)
	{
		data.setUint8(_1851, _1850.getUint8(_1279), true)
		_1851++
		_1279++
	}

	return data
}
class _621
{
	static _1855 = null;
	static _1856 = null;
	static _1857 = null;
	static _1858 = null;
	static _1859 = null;
	static _1860 = null;
	static _1029()
	{
		if (_621._1855 != null)
			return;
		_621._1855 = new Map();
		_621._1856 = new Map();
		_621._1857 = new Map();
		_621._1858 = new Map();
		_621._1859 = new Map();
		_621._1860 = new Map();
		let _1861 = _39.contentWindow._1792();
		let _1862 = _40.contentWindow._1863();
		let _1864 = _36.contentWindow._1865();
		function _1866(_1867, _1868, _1869)
		{
			for (let _754 = 0; _754 < _1869.length; _754++)
			{ 
				let _1870;
				_1870 = _1869[_754]._1232;
				let _1871;
				_1871 = L(_1870);
				_1867.set(_1871,_1870);
				_1868.set(_1870,_1871);
				_1869[_754]._1232 = _1871;
			}
		}
		
		
		
		
		function _1872(_1867, _1868, _1869)
		{
			for (let _754 = 0; _754 < _1869.length; _754++)
			{
				let _1870;
				_1870 = _1869[_754]._1873;
				let _1871;
				_1871 = L(_1870);
				_1867.set(_1871, _1870);
				_1868.set(_1870, _1871);
				_1869[_754]._1873 = _1871;
			}
		}
		_1872(_621._1855, _621._1856, _1861);
		_1866(_621._1857, _621._1858, _1862);
		_1866(_621._1859, _621._1860, _1864);
	}
	static _590(_1867, _1874)
	{
		if (!_1867)
			return _1874;
		let _301;
		_301 = _1867.get(_1874);
		if (!_301)
			_301 = _1874;
		return _301;
    }
	static _622(_1874)
	{
		return _621._590(_621._1855, _1874)
	}
	static _627(_1874)
	{
		return _621._590(_621._1857, _1874)
	}
	static _625(_1874)
	{
		return _621._590(_621._1859, _1874)
	}
	static _587(_1868, _311)
	{
		if (!_1868)
			return _311;
		let _301;
		_301 = _1868.get(_311);
		if (!_301)
			_301 = _311;
		return _301;
	}
	static _624(_311)
	{
		return _621._587(_621._1856, _311)
	}
	static _628(_311)
	{
		return _621._587(_621._1858, _311)
	}
	static _626(_311)
	{
		return _621._587(_621._1860, _311)
	}
}
function _1875()
{
	return _621;
}
function _1124()
{
	let _1876 = false;
	let _991 = false;
	let _997 = false;
	let _999 = false;
	switch (_74.value)
	{
		case "vocal":
			_1876 = true;
			break;
		case "modification":
			_991 = true;
			break;
		case "beat":
			_997 = true;
			_999 = true;
			break;
		case "instrument":
			_991 = true;
			_997 = true;
			_999 = true;
			break;
		case "vocal and instrument":
			_1876 = true;
			_991 = true;
			_997 = true;
			_999 = true;
			break;
	}
	_156._967(_1876);
	_171._967(_1876);
	_158._967(_991);
	_160._967(_997);
	if (_999)
	{
		_923._612();
		let _1877;
		_1877 = _40.contentWindow._1878(_923._445._1154);
		if (_1877._1879 == "none")
			_999 = false;
		if (_999)
			if (!_1011._1880(_923._445))
				if (_1877._1881 == "clove4")
					_999 = false;
    }
	_162._967(_999);
}
function _1051()
{
	_1124();
	if (_109.checked)
		_109.onclick();
}
function _1025()
{
	function _1882(_1883, _1305)
	{
		let _824 =
			'<html>\r\n' +
			'<meta charset="UTF-8">\r\n' +
			'<body>\r\n' +
			_1883 + '\r\n' +
			'<script>\r\n' +
			'setTimeout(function () { location.href = "' + _1305 + '"; }, 2000);\r\n' +
			'</script>\r\n' +
			'</body>\r\n' +
			'</html>\r\n';
		let _681 = new Blob([_824], { type: 'text/html' });
		window.location.href = URL.createObjectURL(_681);
	}
	if (location.hostname == "127.0.0.1")
		return true;
	if (location.hostname == "localhost")
	{
		_1882(L("检测到 localhost, 2秒钟后跳转到 127.0.0.1"), location.protocol + "//127.0.0.1:" + location.port + location.pathname + location.search);
		return false;
	}
	if (location.protocol != "https:")
	{
		_1882(L("检测到 http，不支持多线程WAsm, 2秒钟后跳转到 https"), "https://" + location.hostname + location.pathname + location.search);
		return false;
	}
	return true;
}
function _908(_912,_913)
{
	if (_38 && _38.contentWindow._1831)
	{
		_38.contentWindow._1831(_912, _913);
		_914();
	}
}
function _915(_912, _913)
{
	if (_38 && _38.contentWindow._1833)
		_38.contentWindow._1833(_912, _913);
}
function _916(_1835, _1836)
{
	if (_38 && _38.contentWindow._1834)
		_38.contentWindow._1834(_1835, _1836);
}
function _905()
{
	document.body.style.overflow = '';
	_38.style.height = '1px';
	_38.style.top = '-1px';
}
function _914()
{
	document.body.style.overflow = 'hidden';
	_38.style.height = '100%';
	_38.style.top = '0px';
}
function _1884()
{
	document.body.style.overflow = '';
	_42.style.height = '1px';
	_42.style.top = '-1px';
	document.body.focus();

	_923._612();
	if (_42._1885 != _923._445._1886("_7741"))
		_1011._1840(_923._445);
	_42._1885 = null;
}
function _1887()
{
	_923._612();
	_42._1885 = _923._445._1886("_7741");

	_1035._720();
	document.body.style.overflow = 'hidden';
	_42.style.height = '100%';
	_42.style.top = '0px';
	_42.focus();
} 

function _1888()
{
	let _1889;
	_1889 = new Map();
	let _1861 = _39.contentWindow._1792();
	for (let _1890 = 0; _1890 < _1861.length; _1890++)
	{
		let _456;
		_456 = _1861[_1890];
		_1889.set(_456._1891, _1892._1893(_456));
	}
	return _1889;
}
function _1894()
{
	document.body.style.overflow = '';
	_39.style.height = '1px';
	_39.style.top = '-1px';
	_1895();
	_616();
	document.body.focus();

	let _1896;
	_1896 = _39._1889;
	_39._1889 = null;
	let _1897;
	_1897 = _1888();
	for (let _620 = 0; _620 < _585.length; _620++)
	{
		let _445 = _585[_620];
		let _1898 = _445._1153;
		for (_1899 = 0; _1899 < _1898.length; _1899++)
		{
			let _1900;
			_1900 = _1898[_1899];
			if (!_1900)
				continue;
			if (_1896.get(_1900) != _1897.get(_1900))
			{
				_1011._1840(_445);
				break;
			}
		}
	}
}
function _1058()
{
	_39._1889 = _1888();

	document.body.style.overflow = 'hidden';
	_39.style.height = '100%';
	_39.style.top = '0px';
	_39.focus();
}

