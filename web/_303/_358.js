class _2944
{
	_1622 = false;
	_3002 = 0;
	
	
	
	
	_1671 = "";
	_1672 = "";
	_1673 = "";
	_1674 = "";
	_1675 = "";
	_2967 = new _2973();
	
	_1623 = "";
	_1640 = "";     
	_1641 = "";     
	_1642 = "";        
	_1645 = 0;  
	_1643 = 0;         
	_1644 = 0;  
	_2955 = false;  
	_1773 = new _3054();

	
	_3279 = false;
	_3280 = false;
	_3286 = false;
	_3281 = false;
	_3282 = true;
	_3283 = false;
	_3284 = false;
	_3287 = false;
	_3288 = false;
	_3285="";
	

	static _5574 = 1000;

	static _2987(_2941, _754)
	{
		if (_754 + 1 >= _2941.length || _2941[_754 + 1]._1643 == 0)
			return true;
		return false;
	}
	_2314(_358)
	{
		this._1773._2314(_358._1773)
		for (let key in this)
			if (this[key] != this._1773)
				this[key] = _358[key];
	}
	_5575(_358)
	{
		if (this._1642 != _358._1642)
			return false;
		if (this._1645 != _358._1645)
			return false;
		if (this._1643 != _358._1643)
			return false;
		return true;
	}
	_5410()
	{
		if (_2982._2983(this._1642) && !this._1622 && this._1643!=0)
			return "-";
		return "";
    }
	_1688()
	{
		
		if (_2982._2983(this._1642) && !this._1622 && !this._2955)
			return "-";
		return "";
	}

	_3273(_5576=true)
	{
		let _3211 = _1665._4856(this._1671);
		let _3212 = _1665._4856(this._1672);
		let _3213 = _1665._4856(this._1673);
		let _3214 = _1665._4856(this._1674);
		let _3215 = _1665._4856(this._1675);
		[_3212, _3213] = _5314._5315(_3212, _3213);
		if (_5576)
		{
			if (this._3281)
				_3215 = "";
			else if (this._3280)
				_3215 = _581._1221(_3215, _3215.length - 1);
			if (this._3284)
			{
				if (_3212)
					console.assert(0);
				_3212 = this._3285 + _3212;
			}
			if (this._3288)
				_3211 = "";
		}
		return [_3211, _3212, _3213, _3214, _3215];
	}
	_5577()
	{
		let _3211, _3212, _3213, _3214, _3215;
		[_3211, _3212, _3213, _3214, _3215] = this._3273();
		let _5578;
		_5578 = _3211 + _3212 + _3213 + _3214 + _3215;
		if (_5578.length == 0)
			return null;
		let _5579;
		_5579 = _5578[0];
		let _987;
		_987 = _5579;
		if (_3211.length == 0 && _3213.length != 0 && _5579 == _3212[0])
		{
			switch (_5579)
			{
				case 'b': _987 = _1665._3292; break;
				case 'd': _987 = _1665._3293; break;
				case 'g': _987 = _1665._3294; break;
				default: _987 = _1665._5307(_5579, _3213[0]); break;
			}
		}
		return _987;
    }
	_5580()
	{
		let _3211, _3212, _3213, _3214, _3215;
		[_3211, _3212, _3213, _3214, _3215] = this._3273();
		let _5578;
		_5578 = _3211 + _3212 + _3213 + _3214 + _3215;
		if (_5578.length == 0)
			return null;
		let _987;
		_987 = _5578[_5578.length - 1];
		if (_3215.length == 0 && _3213.length != 0 && _987 == _3214)
			_987 = _1665._5001(_987, _3213[_3213.length - 1], this._2967);
		return _987;
	}

	static _5571(_5581, _3212, _3213, _3214, _359)
	{

		
		
		
		for (let _5582 = 0; _5582 < _3212.length; _5582++)
			_5003._5583(_5581, _3212[_5582], _3213);

		
		
		_5003._5584(_5581, _3212[_3212.length - 1], _3213[0]);

		
		
		_5003._5585(_5581, _3212[_3212.length - 1], _3213[0])

		
		_5003._5586(_5581, _3212[_3212.length - 1], _3213[0]);


		
		
		
		
		_5003._5587(_5581, _3212[_3212.length - 1], _3213[0]);

		
		
		
		
		_5003._5588(_5581, _3212[_3212.length - 1], _3213[0]);

		
		
		
		_5003._5589(_5581, _3212, _3213);

		
		
		

		
		
		_5003._5590(_5581, _3212, _3213);

		
		
		_5003._5591(_5581, _3212, _3213);


		
		
		
		
		
		
		
		
		
		
		
		if (_3213)
		{
			_5003._5592(_5581, _3212, _3213[0]);
			_5546._5593(_5581, 0, _359);
			for (let _5594 = 1; _5594 < _3213.length; _5594++)
			{
				_5003._5595(_5581, _3213[_5594]);
				_5546._5593(_5581, _3213, _5594, _359);
			}
			if (_359)
				_3065._3081(_5581, _359);
			
		}

		
		
		
		
		
		
		
		
		
		
		
		
		_5003._5596(_5581, _3212, _3213);
		_5003._5597(_5581, _3212, _3213);


		_5003._5598(_5581, _3214, _359);
	}

	_1658(_2133, _1656)
	{
		let _1772;
		_1772 = this._1773;

		let _333;
		_333 = _2133[_1656];
		let _358;
		_358 = _333._1657;

		let _3211, _3212, _3213, _3214, _3215;
		[_3211, _3212, _3213, _3214, _3215] = _358._3273();

		let _1779 = _1772._1780;
		_1779._3022 = "过度声带音";
		_1779._1781 = false;

		if (!_3213)
		{
			if (_3211 || _3214 || _3215)
				console.assert(0);
			if (_3212.length != 1)
				console.assert(0);
			_1772._1776.length = 0;
			_1772._1777.length = 0;
			let _5599;
			_5599 = null;
			if (_1656 - 1 >= 0)
			{
				let _5600;
				_5600 = _2133[_1656 - 1];
				let _5601;
				_5601 = _5600._1657;
				let _5602;
				_5602 = _5601._1773;
				if (_5602._1778.length == 0)
					if (_5602._1777.length)
						_5599 = _5602._1777[_5602._1777.length - 1];
			}
			_5003._5603(_1772._1777, _5599, _3212);
			_1772._1778.length = 0;
		}
		else
		{
			_1772._1776.length = 0;
			_5604._5605(_1772._1776, null, _3211,null,null);

			let _5581 = _1772._1777;
			_5581.length = 0;

			
			let _5606;
			_5606 = null;
			if (_3212.length >= 2)
			{
				let _5607 = _581._1221(_3212, 2);
				if (_5607 == "p" + _1665._3253 || _5607 == "pl" || _5607 == "k" + _1665._3253 || _5607 == "kl")
				{
					let _5608, _5609;
					_5608 = _3212[0];
					_5609 = _3212[1];
					_3212 = _581._1344(_3212, _3212.length - 1);
					_5606 = _5604._5610(_5608, _5609);
				}
			}

			_2944._5571(_5581, _3212, _3213, _3214, this._2967);

			if (_5606)
			{
				if (_5581.length)
				{
					let _5611;
					_5611 = _5606[_5606.length - 1];
					let _5612;
					_5612 = _5581[0];
					_5611._1787 = _5612._1784;
					_5611._3024 = true;
					_5612._3023 = true;
				}
				_5581.splice(0, 0, ..._5606);
			}
			
			
			
			{
				let _5613;
				_5613 = _2944._5574;
				let _5614;
				_5614 = 0;
				let _5615;
				let _5616 = 0, _5617 = 1, _1013 = 2;
				for (let _1774 = 0; _1774 < _1013; _1774++)
				{
					for (let _754 = 0; _754 < _5581.length; _754++)
					{
						let _305 = _5581[_754];
						if (_305._3045())
						{
							let _5618 = 1, _5619 = 2;
							function _5620()
							{
								
								if (_305._1787 == 'ŋ')
									return _5619;
								else if (_305._1784 == 'ŋ')
									return _5618;

								
								
								if (_305._1787 == 'm' || _305._1784 == 'm')
									return _5618;

								
								function _5621(_331)
								{
									if (_331 == 'ռ' || _331 == 'ᵰ')
										return true;
									return false;
								}
								if (_5621(_305._1784) || _5621(_305._1787))
									return _5619;
								
								if (_305._1784 == '𝓃' || _1665._4990(_305._1784))
									return _5618;

								
								if (_1665._4958(_305._1784))
									return _5618;

								if (_305._3022 == "爆破声带音" || _305._3022 == "_7754" || _305._3022 == "浊辅音过度到元音")
									return _5618;
								return _5619;
							}
							if (_5620() == _5618)
							{
								if (_1774 == _5616)
									_5613 -= _305._3017;
							}
							else
							{
								if (_1774 == _5616)
									_5614 += _305._3017;
								else if (_1774 == _5617)
									_305._3017 *= _5615;
							}
							
						}
					}
					if (_1774 == _5616)
						_5615 = _5613 / _5614;
				}
			}

			_1772._1778.length = 0;

			let _5622;
			_5622 = null;
			if (_5581.length)
				_5622 = _5581[_5581.length - 1];

			let _5623;
			_5623 = null;
			if (_1011._5624(_2133, _1656, "_1351"))
			{
				if (_1656 + 1 < _2133.length)
				{
					let _5625;
					_5625 = _2133[_1656 + 1];
					let _5626;
					_5626 = _5625._1657;
					_5623 = _5626._5577();
				}
			}
			_5604._5605(_1772._1778, _1779, _3215, _5622,_5623);
		}

		
		this._5627(_2133, _1656, "_1350");
		this._5627(_2133, _1656, "_1351");
		
		
		
		
		

		{
			let _5628;
			_5628 = _1772._1776.concat(_1772._1777, _1772._1778);
			if (_1772._1780._1781)
				_5628.push(_1772._1780);

			
			
			for (let _5629 = 0; _5629 < _5628.length; _5629++)
			{
				let _305 = _5628[_5629];
				if (_1665._5281(_305._1784)._5630 != _1665._5281(_305._1787)._5630)
					console.assert(0);
			}
			

			for (let _5629 = 0; _5629 < _5628.length; _5629++)
			{
				let _305 = _5628[_5629];
				if (_305._3039())
					if (_305._3027 < _305._3017)
						_305._3027 = _305._3017;
				if (_305._3042() || _305._3041())
					if (_305._3029 < _305._3017)
						_305._3029 = _305._3017;
			}
		}

	}
	_5631(_358)
	{
		if (this._1671 == _358._1671 && this._1672 == _358._1672 && this._1673 == _358._1673 && this._1674 == _358._1674 && this._1675 == _358._1675)
			return true;
		return false;
    }
	
	_5627(_2133, _1656, _5632)
	{
		if (!_1011._5624(_2133, _1656, _5632))
		{
			
			
			
			let _5633, _5634, _1779;
			[_5634, _5633, _1779] = _5635._5636(this._1773, _2133, _1656, _5632);
			if (_5633)
				_5633._3024 = false;
			if (_1779)
			{
				_1779._3022 = "过度声带音";
				_1779._1781 = false;
			}
			if (_5634)
				_5634._3023 = false;
			return false;
		}
		if (!_5635._5637(this._1773,_2133, _1656, _5632))
			if (!_5635._5638(this._1773, _2133, _1656, _5632))
				if (!_5635._5639(this._1773, _2133, _1656, _5632))
					if (!_5635._5640(this._1773, _2133, _1656, _5632))
						return _5635._5641(this._1773, _2133, _1656, _5632);
	}
}

