class _2136
{
	_1139 = false;
	_1921 = false;
	_1926 = false;
	_2434 = 0.5;
	_2467 = true;
	_2092 = 0.5;
	_2546 = "";
	_2706 = false;
	_2702 = "";
	_2707 = false;
	_2550 = "";
	_2708 = false;
	
	
	
	
	
	
	
	
	
	_2040 = false;
	_2115 = false;
	_2041 = false;
	_2112 = false;
	_2042 = false;
	_6691 = false;
	_2314(_2742)
	{
		_581._1324(this, _2742);
	}
	_6692()
	{
		let _3150 = new _1209();
		_3150._1235();
		_3150._1241(F("自然段开始"),this._1139);
		_3150._1241(F("高潮开始"),this._1921);
		_3150._1241(F("句子对开始"),this._1926);
		_3150._1244(F("整体势值"),this._2434);
		_3150._1241(F("整体势值自动"),this._2467);
		_3150._1244(F("句子结构最高点"),this._2092);
		_3150.String(F("应用句子开头特色名称"), this._2546);
		_3150._1241(F("应用句子开头特色名称_成对时反转"), this._2706);
		_3150.String(F("应用句子中间特色名称"), this._2702);
		_3150._1241(F("应用句子中间特色名称_成对时反转"), this._2707);
		_3150.String(F("应用句子结尾特色名称"), this._2550);
		_3150._1241(F("应用句子结尾特色名称_成对时反转"), this._2708);
		if (typeof this._2040 == "string")
			_3150.String(F("句子音高音量对比值"), this._2040);
		else
			_3150._1241(F("句子音高音量对比值"), this._2040);
		_3150._1241(F("句子音高音量对比开始"), this._2115);
		if (typeof this._2041 == "string")
			_3150.String(F("句子上下行对比值"), this._2041);
		else
			_3150._1241(F("句子上下行对比值"), this._2041);
		_3150._1241(F("句子上下行对比开始"), this._2112);
		if (typeof this._2042 == "string")
			_3150.String(F("句子音节数对比值"), this._2042);
		else
			_3150._1241(F("句子音节数对比值"), this._2042);
		_3150._1241(F("句子音节数对比开始"), this._6691);
		return _3150._1260();
	}
	_6693(_893)
	{
		let _985 = JSON.parse(_893);
		let _623;
		_623 = _985[F("自然段开始")]; if (_623 != undefined) this._1139 = _623;
		_623 = _985[F("高潮开始")]; if (_623 != undefined) this._1921 = _623;
		_623 = _985[F("句子对开始")]; if (_623 != undefined) this._1926 = _623;
		_623 = _985[F("整体势值")]; if (_623 != undefined) this._2434 = _623;
		_623 = _985[F("整体势值自动")]; if (_623 != undefined) this._2467 = _623;
		_623 = _985[F("句子结构最高点")]; if (_623 != undefined) this._2092 = _623;
		_623 = _985[F("应用句子开头特色名称")]; if (_623 != undefined) this._2546 = _623;
		_623 = _985[F("应用句子开头特色名称_成对时反转")]; if (_623 != undefined) this._2706 = _623;
		_623 = _985[F("应用句子中间特色名称")]; if (_623 != undefined) this._2702 = _623;
		_623 = _985[F("应用句子中间特色名称_成对时反转")]; if (_623 != undefined) this._2707 = _623;
		_623 = _985[F("应用句子结尾特色名称")]; if (_623 != undefined) this._2550 = _623;
		_623 = _985[F("应用句子结尾特色名称_成对时反转")]; if (_623 != undefined) this._2708 = _623;
		_623 = _985[F("句子音高音量对比值")]; if (_623 != undefined) this._2040 = _623;
		_623 = _985[F("句子音高音量对比开始")]; if (_623 != undefined) this._2115 = _623;
		_623 = _985[F("句子上下行对比值")]; if (_623 != undefined) this._2041 = _623;
		_623 = _985[F("句子上下行对比开始")]; if (_623 != undefined) this._2112 = _623;
		_623 = _985[F("句子音节数对比值")]; if (_623 != undefined) this._2042 = _623;
		_623 = _985[F("句子音节数对比开始")]; if (_623 != undefined) this._6691 = _623;
	}
	_2102()
	{
		let _2091;
		if (this._2041 == F("下行"))
			_2091 = 0;
		else if (this._2041 == F("上行"))
			_2091 = 1;
		else
			_2091 = this._2092;
		return _2091;
	}
	static _2137(_2133, _2091)
	{
		let _2134;
		let _2135;
		_2134 = _581._761(0, _2133.length, 0, 1, _2091);
		if (_2134 >= _2133.length)
		{
			_2134 = _2133.length - 1;
			_2135 = 1;
		}
		else if (_2134 <= 0)
		{
			_2134 = 0;
			_2135 = 0;
		}
		else
		{
			_2135 = _2134 - Math.floor(_2134);
			_2134 = Math.floor(_2134);
		}
		return [_2134, _2135];
	}
}
class _658
{
	
	
	static _659 = 5;
	_1153 = Array.from({ length: _658._659 }, () => "");
	_1152 = Array.from({ length: _658._659 }, () => "");
	_1156 = "chinese";
	_1164 = new Array();
	_6694 = new Array();
	_1629=true;
	_920=0x3c-12;
	_1158=88;
	_1147 = false;
	_1138 = new _2136();
	_1154 = "";
	_1137=false;
	_1148=false;
	_2346=new Array();
	_655 = new _929();
	_662 = Array.from({ length: _658._659 }, () => new _929());
	_663=new _929();
	_664 = new _929();
	_665 = new _929();
	_973 = 0.84;
	_974 = 1;
	_993 = 0.42;
	_998 = 0.5;
	_1000 = 0.5;
	_1159 = true;
	_899="";
	_1149=null;
	_1150 = null;
	_1827 = new Date().getTime();
	_994()
	{
		return this._973 * this._974; 
    }
	_995()
	{
		return this._973;
    }
	_896()
	{
		let _301;
		_301 = "";
		for (let _657 = 0; _657 < _658._659; _657++)
		{
			_301 += this._1153[_657];
			if (_657 != _658._659 - 1)
				_301 += ",";
		}
		_301 += L("✾");
		_301 += _1141._1142(this);
		return _301;
	}
	_895()
	{
		let _301;
		_301="";
		for(let _754=0;_754<this._1164.length;_754++)
		{
			let _6695;
			_6695=this._1164[_754];
			_301+=_6695._1634;
			_301+=",";
			_301+=_6695._1635;
			_301+=";";
		}
		return _301;
	}
	_2727()
	{
		if (this._1137)
			return;
		this._6694 = _1011._6235(this._1164);
		this._1137 = true;
		_1011._1840(this);
	}
	_6696()
	{
		if (!this._1137)
			return;
		function _6697(_6698, _6699)
		{
			_6698[0]._1637 = false;
			for (let _754 = 1; _754 < _6698.length; _754++)
				_6698[_754]._1637 = true;
			_6698[0]._1621._2314(_6699[0]._1621);
		}
		function _6700(_1632, _1631)
		{
			_1632._1637 = _1631._1637;
			if (!_1632._1637)
				_1632._1621._2314(_1631._1621);
        }
		_1011._6701(this._1164, this._6694, _6697, _6700);
		this._1137 = false;
		_1011._1840(this);
    }
	_451(_1842)
	{
		if(_1842=="")
		{
			this._1164.length=0;
			return;
		}			
		if (this._1137)
		{
			let _6702;
			_6702 = this._1164.length;
			let _6703;
			{
				
				let _6704;
				{
					_6704 = true;
					if ((_1842.length % 2) != 1)
						_6704 = false;
					if (_1842.length == 0)
						_6704 = false;
					if (_6704)
					{
						for (let _979 = 0; _979 < _1842.length / 2-1; _979++)
							if (_1842.substring(_979 * 2, _979*2+2) != "X ")
							{
								_6704 = false;
								break;
							}
					}
				}
				if (_6704)
					_6703 = (_1842.length+1) / 2;
				else
					_6703 = _1842.length;
			}
			let _301;
			if (_6703 == _6702)
			{
				_301 = true;
			}
			else if (_6703 <= _6702)
			{
				_301 = true;
				this._1164.length = _6703;
			}
			else 
			{
				
				_301 = false;
				_1842 = _1141._1142(this);
				let _6705;
				switch (this._1156)
				{
					case "chinese": _6705 = F("啦"); break;
					case "english": _6705 = F(" la"); break;
					case "japanese": _6705 = F("ラ"); break;
					case "cantonese": _6705 = F("嗱"); break;
				}
				let _1013;
				_1013 = _6703 - _6702;
				for (let _979 = 0; _979 < _1013; _979++)
					_1842 += _6705;
			}
			if (_301)
			{
				_1011._1660(this);
				_1011._1661(this);
				_611._612();
				_1011._1840(this);
				return;
			}
		}


		let _6706;
		_6706 = _1011._6235(this._1164);
		
		{
			this._1164.length = 0;
			let _2941 = new Array();
			_2935._1626(_2941, _1842, this._1156);
			for (let _754 = 0; _754 < _2941.length; _754++)
			{
				let _358;
				_358 = _2941[_754];
				let _1102;
				_1102 = new _1633();
				this._1164.push(_1102);
				_1102._1621._2314(_358);
				_1102._5992._2319 = _358._2955;
				for (let _6707 = 0; _6707 < _358._3002; _6707++)
				{
					let _6564;
					_6564 = new _1633();
					this._1164.push(_6564);
					_6564._1637 = true;
                }
			}
		}
		function _6708(_6698, _6699)
		{
			let _6709;
			_6709 = Math.min(_6698.length, _6699.length);
			let _754;
			let _6710;
			for (_754 = 0; _754 < _6709; _754++)
			{
				let _1632 = _6698[_754];
				let _1631 = _6699[_754];
				_6710=_1632._1634 = _1631._1634;
				_1632._1635 = _1631._1635;
				_1632._2426 = _1631._2426;
				_1632._2427 = _1631._2427;
			}
			for (; _754 < _6698.length; _754++)
				_6698[_754]._1634 = _6710;

			let _6711, _6712;
			_6711 = _6698[0];
			_6712 = _6698[_6698.length-1];
			let _6713, _6714;
			_6713 = _6699[0];
			_6714 = _6699[_6699.length - 1];

			_6711._6715(_6713);
			_6711._5992._2314(_6713._5992);

			_6711._6716 = _6713._6716;
			_6711._6575 = _6713._6575;
			_6711._6576 = _6713._6576;
			_6712._6717 = _6714._6717;
			_6712._6577 = _6714._6577;
			_6712._6578 = _6714._6578;
		}
		function _6718(_1632, _1631)
		{
			_1632._1634 = _1631._1634;
			_1632._1635 = _1631._1635;
			_1632._2426 = _1631._2426;
			_1632._2427 = _1631._2427;
			_1632._6716 = _1631._6716;
			_1632._6575 = _1631._6575;
			_1632._6576 = _1631._6576;
			_1632._6717 = _1631._6717;
			_1632._6577 = _1631._6577;
			_1632._6578 = _1631._6578;
			if (!_1632._1637)
			{
				_1632._6715(_1631);
				_1632._5992._2314(_1631._5992);
			}
		}
		{
			let _1653;
			_1653 = _1141._1654(this);
			
			_1011._1655(_1653);
			_1141._1659(this, _1653);
		}
		_1011._6701(this._1164, _6706, _6708, _6718);
		_1011._1660(this);
		_1011._1661(this);


		function _6719(_6698, _6699)
		{
			let _6711;
			_6711 = _6698[0];
			let _6713;
			_6713 = _6699[0];
			let _1638, _6720;
			_1638 = _6711._1621;
			_6720 = _6713._1621;
			if (_1638._5631(_6720))
				_1638._1773._3038(_6720._1773);
		}
		function _6721(_1632, _1631)
		{
			if (!_1632._1637)
			{
				let _1638, _6720;
				_1638 = _1632._1621;
				_6720 = _1631._1621;
				if (_1638._5631(_6720))
					_1638._1773._3038(_6720._1773);
			}
		}
		{
			let _1653;
			_1653 = _1141._1654(this);
			
			for (let _1656 = 0; _1656 < _1653.length; _1656++)
				_1653[_1656]._1657._1658(_1653, _1656)
			_1141._1659(this, _1653);
			
			_1011._6701(this._1164, _6706, _6719, _6721);
		}
		_611._612();
		_1011._1840(this);
	}

	_1886(_6518)
	{
		return _6722._1886.call(this, _6518);
    }
	_2726(_893)
	{
		return _6722._2726.call(this, _893);
    }
	_2285(_2055)
	{
		for (let _754 = 0; _754 < _2055.length; _754++)
			if (_2055[_754] == this)
				return _754;
		return -1;
	}
	_6484()
	{
		return this._2285(_585);
	}
	_666()
	{
		if (!this._662[0]._656)
			return null;
		let _510 = new _929();
		let _6542;
		_6542 = _595._1626(this._6484());
		let _1014 = Math.round(_6542._1014 * _929._6338 * 60 / this._1158);
		let _1010 = Math.round(_6542._1297 * _929._6338 * 60 / this._1158);

		let _1003, _1004, _1005, _1006, _1007;
		[_1003, _1004, _1005, _1006, _1007] = _1011._6543(this);

		let _6723;
		_6723 = _1014;
		if (_1005)
			if (_1005.length - _1010 > _6723)
				_6723 = _1005.length - _1010;
		let _5953;
		_5953 = Math.min(0, -_1010);
		_510._656 = new Float64Array(_6723 - _5953);
		for (let _979 = _5953; _979 < _6723; _979++)
		{
			let _1016;
			if (_1003 == null || _979 < 0 || _979 >= _1003.length)
				_1016 = 0;
			else
				_1016 = _1003[_979];
			let _1017;
			if (_1004 == null || _979 < 0 || _979 >= _1004.length)
				_1017 = 0;
			else
				_1017 = _1004[_979];
			let _1018;
			_1018 = _979 + _1010;
			let _1019;
			if (_1005 == null || _1018 < 0 || _1018 >= _1005.length)
				_1019 = 0;
			else
				_1019 = _1005[_1018];
			let _1020;
			if (_1006 == null || _979 < 0 || _979 >= _1006.length)
				_1020 = 0;
			else
				_1020 = _1006[_979];
			let _1021;
			if (_1007 == null || _979 < 0 || _979 >= _1007.length)
				_1021 = 0;
			else
				_1021 = _1007[_979];
			let _990;
			switch (_74.value)
			{
				case "vocal":
					_990 = _1016 * this._994() + _1017 * this._995();
					break;
				case "modification":
					_990 = _1019 * this._993;
					break;
				case "beat":
					_990 = _1020 * this._998 + _1021 * this._1000;
					break;
				case "instrument":
					_990 = _1019 * this._993 + _1020 * this._998 + _1021 * this._1000;
					break;
				case "vocal and instrument":
					_990 = _1016 * this._994() + _1017 * this._995() + _1019 * this._993 + _1020 * this._998 + _1021 * this._1000 ;
					break;
			}
			_510._656[_979 - _5953] = _990;
        }
		return _510;
	}
	_930()
	{
		let _510;
		_510=this._666();
		if(_510!=null)
			_510._930();
	}
	_1754()
	{
		this._655._656 = null;
		for (let _657 = 0; _657 < _658._659; _657++)
			this._662[_657]._656 = null;
		this._663._656 = null;
		this._664._656 = null;
		this._665._656 = null;
	}
}

