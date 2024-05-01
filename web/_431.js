function _644(_6518)
{
	function _6519(_1240)
	{
		if (_6518 != "_7689")
			return true;
		if (_1240.length < 2)
			console.assert(0);
		let _610;
		_610 = _1240[1];
		let _6520 =
			[
				F("文件签名"), F("主版本号"), F("副版本号"), F("歌曲名称"), F("文件名"),
				F("作者"), F("组织"), F("说明"), F("正在编辑的行的索引"), F("声乐曲"), F("音色")
			];
		return _6520.includes(_610);
	}
	let _3150 = new _1209();
	_3150._1235(false,true,_6519);
	
	_3150.String(F("文件签名"), "dscm");
	_3150._1242(F("主版本号"), 1);
	_3150._1242(F("副版本号"), 2);
	_3150.String(F("歌曲名称"), _607());
	_3150.String(F("文件名"),_608);
	_3150.String(F("作者"), F("赵磊"));
	_3150.String(F("组织"),L("没有组织是个人"));
	_3150.String(F("说明"),L("这家伙很懒，什么都没留下"));
	_3150._1242(F("采样频率"),_929._6338);
	_3150._1242(F("正在编辑的行的索引"), _584);
	_3150._1254(F("声乐曲"))
	for (let _570 = 0; _570 < _585.length; _570++)
	{
		let _445;
		_445 = _585[_570];
		if (_6518 == "_7689")
			if (_445._1137)
				continue;
		_3150._1247(_445._1886(_6518));
	}
	_3150._1255(F("声乐曲"));
	_3150._1247(F("音色"), _39.contentWindow._590());
	_3150._1247(F("打节拍"), _40.contentWindow._590());
	_3150._1247(F("编曲"), _595._590());
	_3150._1247(F("字典"), _41.contentWindow._590());
	_3150._1247(F("谱曲"), _37.contentWindow._590());
	return _3150._1260();
}

var _3151 = false;
function _643(_893)
{
	if (_3151)
	{
		let buffer = _893;
		
		buffer.position = 0;
		if (buffer._792() != "dscm")
			return;
		if (buffer._789() > ((1 << 16) | 2))
			return;
		_605(buffer._792());
		_609(buffer._792());
		buffer._792();
		buffer._792();
		buffer._792();
		buffer._789();
		_584 = buffer._789();
		_585 = new Array(buffer._789());
		for (let _570 = 0; _570 < _585.length; _570++)
		{
			let _445;
			_445 = new _658();
			_585[_570] = _445;
			let _6521;
			_6521 = buffer._789();
			let _6522 = new _634();
			buffer._793(_6522, _6521);
			_445._2726(_6522);
		}
		if (_585.length == 1 && _585[0]._1164.length == 0)
			_584 = 0;
		if (1)
		{
			{
				let _6523 = new _634();
				let _6524 = buffer._789();
				buffer._793(_6523, _6524);
				_39.contentWindow._587(_6523);
				_589();
			}
			{
				let _6299;
				_6299 = buffer._792();
				_40.contentWindow._587(_6299);
				_630();
			}
			{
				let _596;
				_596 = buffer._792();
				_595._587(_596);
			}
			if (0)
			{
				{
					let _3152;
					_3152 = buffer._789();
					let _6525 = new Array(_3152);
					for (let _3153 = 0; _3153 < _6525.length; _3153++)
					{
						let _6526;
						_6525[_3153] = _6526 = new Object();
						_6526._3149 = buffer._792();
						_6526._913 = buffer._792();
					}
					_41.contentWindow._587(_6525);
				}
				if (0)
				{
					let _601;
					_601 = buffer._792();
					_37.contentWindow._2590(_601);
				}
			}
		}
		else
		{
			for (let _620 = 0; _620 < _585.length; _620++)
			{
				let _445;
				_445 = _585[_620];
				_615(_445);
				let _1681;
				_1681 = _445._1164;
				for (let _1578 = 0; _1578 < _1681.length; _1578++)
					_1681[_1578]._6527.length = 0;
			}
		}
		_616();
		_617._618();
		
	}
	else
	{
		
		let _1580 = new _1261();
		if (!_1580._1264(_893))
			return "parse json string failed";
		let _623;

		if (_1580.String(F("文件签名")) != "dscm")
		{
			_2153 = _1043._1574(_893);
			return _2153;
		}
		{
			let _6528;
			_6528 = _1580._1242(F("主版本号"));
			if (_6528 == undefined)
				return "major version not found";
			let _6529;
			_6529 = _1580._1242(F("副版本号"));
			if (_6529 == undefined)
				return "minor version not found";
			let _6530;
			_6530 = (_6528 << 16) | _6529;
			if (_6530 > ((1 << 16) | 2))
				return "version not support";
		}
		_584 = -1;
		_605(_1580.String(F("歌曲名称")));
		if ((_623 = _1580._1242(F("文件名"))) !== undefined)
			_609(_623);
		_1580.String(F("作者"));
		_1580.String(F("组织"));
		_1580.String(F("说明"));
		_1580._1242(F("采样频率"));
		if ((_623 = _1580._1242(F("正在编辑的行的索引"))) !== undefined)
			_584 = _623;
		if ((_623 = _1580._1254(F("声乐曲"))) !== undefined)
		{
			let _6531;
			_6531 = _1580._1266();
			_585.length = 0;
			for (let _570 = 0; _570 < _6531; _570++)
			{
				let _445;
				_445 = new _658();
				_585.push(_445);
				let _2153;
				_2153 = _445._2726(_1580._1247(_570));
				if (_2153)
				{
					_614();
					return _2153;
				}
			}
			_1580._1255(F("声乐曲"));
		}
		if (_585.length == 1 && _585[0]._1164.length == 0)
			_584 = 0;
		if (_584 >= _585.length)
			_584 = _585.length - 1;
		if ((_623 = _1580._1247(F("音色"))) !== undefined)
		{
			_39.contentWindow._587(_623);
			_589();
		}
		if ((_623 = _1580._1247(F("打节拍"))) !== undefined)
		{
			_40.contentWindow._587(_623);
			_630();
		}
		if ((_623 = _1580._1247(F("编曲"))) !== undefined)
			_595._587(_623);
		if ((_623 = _1580._1247(F("字典"))) !== undefined)
			_41.contentWindow._587(_623);
		if ((_623 = _1580._1247(F("谱曲"))) !== undefined)
			_37.contentWindow._587(_623);
		for (let _620 = 0; _620 < _585.length; _620++)
			_615(_585[_620]);
		_616();
		_617._618();
		return "";
		
	}
}
function _1036()
{
	let files;
	files=_46.files;
	let length;
	length=files.length;
	if(length<1)
		return;
	let _6532;
	_6532 = files[0];
	
	let _682;
	_682 = new FileReader();
	if (_3151)
	{
		_682.onload = function (buffer)
		{
			let _784 = new _634();
			_784._785(buffer.target.result);
			_643(_784);
		};
		_682.readAsArrayBuffer(_6532);
	}
	else
	{
		_682.onload = function (buffer)
		{
			let _1267;
			_1267 = buffer.target.result;
			let error;
			error = _643(_1267);
			if (error)
				_908(L("加载错误"), error)
		};
		_682.readAsText(_6532);
	}
	_46.value="";
}
function _1689(_610,_893)
{
	const _6533 = "\uFEFF"; 
	const _6534 = _6533 + _893; 

	const _681 = new Blob([_6534], { type: 'text/plain;charset=utf-8' });
	const _1305 = URL.createObjectURL(_681);

	const _6535 = document.createElement('a');
	_6535.href = _1305;
	_6535.download = _610;
	_6535.click();

	URL.revokeObjectURL(_1305);
}
function _1038(_6518 = '_590')
{
	let _6536;
	_6536 = _644(_6518);
	let _610;
	_610 = _608;
	if (!_610)
		_610 = L("未命名");
	if (_6518 == '_7689')
		_610 += L("_简化");
	_610 += ".dsc";
	_1689(_610, _6536);
}

function _1045(_6518)
{
	let _6537,_2835;
	if (_6518 == '_7690')
	{
		_6537 = _65;
		_2835 = _64;
	}
	else
	{
		_6537 = _59;
		_2835 = _58;
	}
	_6537.appendChild(_66);
	const _6538=new Worker("_30.js");
	_6538.onmessage=function(x)
	{
		if(x.data._871=="start")
		{
			_581._582(_2835,false);
			_6537.style.display='';
		}
		else if(x.data._871=="progress")
		{
			_66._837(x.data._1001,x.data._1002);
		}
		else if(x.data._871=="end")
		{
			let _977;
			_977 = x.data._977;
			if (_6518 == '_7690')
			{
				_977.forEach(function (_2291, _570, _6539){_6539[_570] *= 0x7fff});
				let _1845;
				_1845 = new Int16Array(_977);
				let _6540 = _1844(_1845, _929._6338);
				let _681 = new Blob([_6540], { "type": "audio/wav", });
				let _801 = document.createElement("a");
				_801.href = window.URL.createObjectURL(_681);
				_801.download = L("导出的声乐曲.wav");
				_801.click();
				_801.remove();
			}
			else
			{
				_629._6479(_977);
            }
			_581._582(_2835,true);
			_6537.style.display='none';
			_6538.terminate();
		}
	};
	let _970 = new Array();
	_970.length = _585.length;
	let _971 = new Array();;
	_971.length = _585.length;
	for (let _620 = 0; _620 < _585.length; _620++)
	{
		let _445;
		_445 = _585[_620];

		let _6541;
		_6541 = new Object();
		_970[_620] = _6541;
		let _6542;
		_6542 = _595._1626(_620);
		_6541._1014 = Math.round(_6542._1014 * _929._6338 * 60 / _445._1158);
		_6541._1010 = Math.round(_6542._1297 * _929._6338 * 60 / _445._1158);

		let _510;
		_971[_620] = _510 = new Object();
		[_510._1008, _510._1009, _510._443, _510._878, _510._879] = _1011._6543(_445);
		
    }
	const _976=new Object();
	_976._585=_585;
	_976._969 = _74.value;
	_976._970 = _970;
	_976._971 = _971;
	_6538.postMessage(_976);
}
function _901()
{
	_6237("templ_save", function (buffer)
	{
		let _6536;
		_6536 = _644("_590");
		buffer._636();
		buffer._638(_6536);
		buffer._637();
		buffer._638(_6536);
	});
}
function _1204()
{
	if (_3151)
	{
		_6240("templ_save", function (data) { _643(data) });
	}
	else
	{
		_6240("templ_save", function (data)
		{
			_643(data._792())
		});
	}
}
function _1161()
{
	_6544("templ_save");
}
function _6545(event)
{
	let _6546=event.target.result;
	try
	{
		
		_6546.createObjectStore("templ_save",{"keyPath": "id"});
		_6546.createObjectStore("clipboard",{"keyPath": "id"});
		_6546.createObjectStore("configure",{"keyPath": "id"});
		_6546.createObjectStore("install_data",{"keyPath": "id"});
	}
	catch(_678)
	{
	}
}
function _6237(name,_822)
{
	let _6547=indexedDB.open("DaShiChangDatabase",1);
	_6547.name=name;
	_6547._822=_822;
	_6547.onerror=function(event)
	{
		;
	};
	_6547.onupgradeneeded=_6545;
	_6547.onsuccess=function(event)
	{
		let _6546=event.target.result;
		let transaction=_6546.transaction([this.name],"readwrite");
		let objectStore=transaction.objectStore(this.name);
		let _6548=objectStore.get(0);
		_6548._822=this._822;
		_6548.onsuccess=function(_678)
		{
			let buffer=new _634();
			this._822(buffer);
			if(typeof (_678.target.result)=="undefined")
				objectStore.add({"id": 0,"binary": buffer._640});
			else
				objectStore.put({"id": 0,"binary": buffer._640});
		};
	};
}

function _6240(name,_6549,_6550)
{
	let _6547=indexedDB.open("DaShiChangDatabase");
	_6547.name=name;
	_6547._6549=_6549;
	_6547._6550=_6550;
	_6547.onerror=function(event)
	{
		;
	};
	_6547.onupgradeneeded=_6545;
	_6547.onsuccess=function(event)
	{
		let _6546=event.target.result;
		let transaction=_6546.transaction([this.name]);
		let objectStore=transaction.objectStore(this.name);
		let _6548=objectStore.get(0);
		_6548._6549=this._6549;
		_6548._6550=this._6550;
		_6548.onsuccess=function(_678)
		{
			if(typeof(_678.target.result)=="undefined")
			{
				
				if(this._6550)
					this._6550();
			}
			else
			{
				let buffer=new _634();
				buffer._785(_678.target.result.binary);
				this._6549(buffer);
			}
		};
		_6548.onerror=function(_678)
		{
			if(this._6550)
				this._6550();
		}
	};
}
function _6544(name)
{
	let _6547=indexedDB.open("DaShiChangDatabase");
	_6547.name=name;
	_6547.onerror=function(event)
	{
		;
	};
	_6547.onupgradeneeded=_6545;
	_6547.onsuccess=function(event)
	{
		let _6546=event.target.result;
		let transaction=_6546.transaction([this.name],"readwrite");
		let objectStore=transaction.objectStore(this.name);
		let _6548=objectStore.get(0);
		_6548.onsuccess=function(_678)
		{
			let buffer = new _634();
			let _6536;
			_6536 = _644("_590");
			buffer._636();
			buffer._638(_6536);
			buffer._637();
			buffer._638(_6536);
			if(typeof (_678.target.result)=="undefined")
				objectStore.delete(0);
		};
	};
}
function _1042()
{
	function _644(buffer)
	{
		for(let _635=0;_635<2;_635++)
		{
			if(_635==0)
				buffer._636();
			else
				buffer._637();
			buffer._638(_86.value);
			buffer._777(_1075._1076);
			buffer._777(_106.value);
			buffer._775(_617._1740);
			buffer._775(_53.checked);
			buffer._775(_63.checked);
		}
	}
	_6237("configure",_644);
}
function _1167()
{
	function _643(buffer)
	{
		_86.value=buffer._792();
		_86.onchange();
		_100._837(buffer._789());
		_100._822(_100.value, true);
		_106._837(buffer._789());
		_106._822(_106.value, true);
		_617._1055(buffer._788());
		if (buffer._788())
		{
			_53.checked = true;
			_54.checked = false;
		}
		else
		{
			_53.checked = false;
			_54.checked = true;
		}
		_63.checked = buffer._788();
	}
	_6240("configure",_643);
}

