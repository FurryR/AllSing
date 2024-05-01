class _634
{
	_772=false;
	position=0;
	_640=null;
	_773=null;

	_774(x)
	{
		if(!this._772)
			this._773.setInt8(this.position,x);
		this.position++;
	}
	_775(x)
	{
		let _776;
		if(x)
			_776=1;
		else
			_776=0;
		this._774(_776);
	}
	_777(x)
	{
		if(!this._772)
			this._773.setInt32(this.position,x);
		this.position+=4;
	}
	_778(x)
	{
		if(!this._772)
			this._773.setBigInt64(this.position,BigInt(x));
		this.position+=8;
	}
	_779(x)
	{
		if(!this._772)
			this._773.setFloat64(this.position,x,true)
		this.position+=8;
	}
	_638(x)
	{
		this._777(x.length);
		for(let _570=0;_570<x.length;_570++)
			this._777(x.charCodeAt(_570));
	}
	_780(x)
	{
		if (x.position != 0)
			console.assert(0);
		if(!this._772)
		{
			let _781=new Uint8Array(this._640);
			let _782=new Uint8Array(x._640);
			_781.set(_782,this.position);
		}
		this.position+=x._640.byteLength;
	}
	_783(x)
	{
		let _784=new _634();
		_784._785(x);
		this._780(_784);
	}
	_667(_786)
	{
		this._777(_786.length);
		for (let _570 = 0; _570 < _786.length; _570++)
			this._779(_786[_570]);
	}

	_787()
	{
		let _569;
		_569=this._773.getInt8(this.position);
		this.position++;
		return _569;
	}
	_788()
	{
		let x;
		x=this._787();
		if(x)
			return true;
		return false;
	}
	_789()
	{
		let _569;
		_569=this._773.getInt32(this.position);
		this.position+=4;
		return _569;
	}
	_790()
	{
		let _569;
		_569=this._773.getBigInt64(this.position);
		this.position+=8;
		return _569;
	}
	_791()
	{
		let _569;
		_569=this._773.getFloat64(this.position,true)
		this.position+=8;
		return _569;
	}
	_792()
	{
		let _569;
		_569="";
		let length;
		length=this._789();
		for(let _570=0;_570<length;_570++)
			_569+=String.fromCharCode(this._789());
		return _569;
	}
	_793(_794,length)
	{
		console.assert(_794.position==0);
		_794._640=this._640.slice(this.position,this.position+length-1+1);
		_794._773=new DataView(_794._640);
		this.position+=length;
	}
	_795(length)
	{
		let _569;
		_569=this._640.slice(this.position,this.position+length);
		this.position+=length;
		return _569;
	}
	_796(_786)
	{
		_786.length = this._789();
		for (let _570 = 0; _570 < _786.length; _570++)
			_786[_570] = this._791();
	}

	_636()
	{
		this.position=0;
		this._772=true;
	}
	_637()
	{
		this._640=new ArrayBuffer(this.position);
		this.position=0;
		this._772=false;
		this._773=new DataView(this._640);
	}
	_797(length)
	{
		this.position=length;
		this._637();
	}
	_785(_798)
	{
		this.position=0;
		this._640=_798;
		this._773=new DataView(this._640);
	}
	_799(_800)
	{
		let _681=new Blob([this._640],{type: 'application/bin'});
		let _801=document.createElement('a');
		_801.href=window.URL.createObjectURL(_681);
		_801.download=_800;
		_801.click();
		_801.remove();
	}

	_802(x)
	{
		if(this._640.byteLength!=x._640.byteLength)
			return false;
		for(let _570=0;_570<this._640.byteLength;_570++)
			if(this._640[_570]!=x._640[_570])
				return false;
		return true;
	}

	_803()
	{
		return this._640.byteLength;
	}

	_720()
	{
		this._772=false;
		this.position=0;
		this._640=null;
		this._773=null;
	}
};

