class _804
{
	_805;
	_806;
	_807(buffer, _808)
	{
		this._806 = buffer;
		this._805 = _808;
		if (_808 == "write_to_file")
			this._809.length = 0;
		else
			this._810();
	}
	_811()
	{
		if (_808 == "write_to_file")
			console.assert(this._809.length == 0);
		else
			this._812.length = 0;
	}
	
	_812 = new Array();
	_810()
	{
		this._812.length = 0;
		while (true)
		{
			if (this._806.position >= this._806._803())
				break;
			let name;
			name = this._806._792();
			let length;
			length = this._806._789();
			let buffer = new _634();
			buffer._797(length);
			this._806._793(buffer, length);
			buffer.position = 0;
			let _726;
			_726 = new Object();
			_726.name = name;
			_726.buffer = buffer;
			this._812.push(_726);
		}
	}
	_813(name)
	{
		for (let _570 = 0; _570 < this._812.length; _570++)
		{
			let _814 = this._812[_570];
			if (_814.name == name)
				return _814.buffer;
		}
		return null;
	}
	
	_809 = new Array();
	_815(name)
	{
		this._806._638(name);
		this._809.push(this._806.position);
		this._806._777(0);
	}
	_816()
	{
		let _817, _818;
		_818 = this._806.position;
		if (this._809.length == 0)
			console.assert(0);
		_817 = this._809.pop();
		this._806.position = _817;
		this._806._777(_818 - (_817 + 4));
		this._806.position = _818;
	}
	_819(name)
	{
		this._816();
		this._815(name);
	}

	
	
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	

	
}

