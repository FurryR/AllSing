class _929
{
	static _7584;
	static _6338 = 16000;
	_7585=null;
	_656=null;
	_228()
	{
		if(!this._7585)
			return;
		try
		{
			this._7585.stop()
		}
		catch(_678)
		{
			;
		}
		this._7585.onended = null;
		this._7585=null;
	}
	_930(_2349,_2351)
	{
		if(this._656==null)
			return;
		this._228();
		if(_2349==null)
			_2349=0;
		if(_2351==null)
			_2351=this._6373();
		let _1370,_2457;
		_1370=this._7586(_2349);
		_2457=this._7586(_2351);
		if(_1370>_2457)
		{
			let _2799;
			_2799=_1370;
			_1370=_2457;
			_2457=_2799;
		}
		let _7587;
		_7587=this._656.subarray(_1370,_2457+1);
		for(let _754=0;_754<_7587.length;_754++)
		{
			if(_7587[_754]<-1)
				_7587[_754]=-1;
			else if(_7587[_754]>1)
				_7587[_754]=1;
		}
		let _753;
		_753 = _2457 - _1370 + 1;
		let _6271;
		_6271 = _929._7584.createBuffer(1, _753, _929._6338);
		_6271.copyToChannel(new Float32Array(_7587),0,0);
		this._7585=_929._7584.createBufferSource();
		this._7585.buffer=_6271;
		this._7585.connect(_929._7584.destination);
		this._7585.start();
		this._7585.onended = this._228.bind(this);
	}
	_6374(_2090,_2124)
	{
		let _913;
		_913="";
		if(_2090<2)
			return _913;
		if(_2124<2)
			return _913;
		if(this._656==null||this._656.length<=1)
		{
		}
		else
		{
			for(let x=0;x<_2090;x++)
			{
				let _7588;
				_7588=Math.floor((this._656.length-1)*x/_2090);
				let _7589;
				_7589=Math.floor((this._656.length-1)*(x+1)/_2090);
				if(_7589>=this._656.length)
					_7589=this._656.length-1;
				let _2498,_1739;
				_2498=0;
				_1739=0;
				let _7590;
				_7590=10*_929._6338/16000;
				for(let _754=_7588;_754<=_7589;_754+=_7590)
				{
					let _510;
					_510=this._656[_754];
					if(_510<_2498)
						_2498=_510;
					if(_510>_1739)
						_1739=_510;
				}
				function _5945(_510)
				{
					if(_510>1)
						_510=1;
					if(_510<-1)
						_510=-1;
					let y;
					y=(_2124-2)/2+((_2124-2)/2)*_510;
					_913+="<line x1='"+x+"' y1='"+(_2124/2)+"' x2='"+x+"' y2='"+y+"' style='stroke:rgb(0 25 100 / 0.5);stroke-width:1' />\r\n";
				}
				_5945(_2498);
				_5945(_1739);
			}
		}
		return _913;
	}
	_1079(_5367,_2090)
	{
		let _2124;
		{
			let _1472;
			_1472=_5367.getBoundingClientRect();
			_2124=_1472.height;
		}
		_5367.style.width=Math.round(_2090)+"px";
		_5367.innerHTML=this._6374(_2090,_2124);
	}
	_6373()
	{
		if(this._656==null)
			return 0;
		return this._656.length/_929._6338;
	}
	_6511()
	{
		return this._656.length;
    }
	_7586(_2200)
	{
		let _987;
		_987=Math.round(_2200*_929._6338);
		if(_987<0)
			_987=0;
		if(_987>=this._656.length)
			_987=this._656.length-1;
		return _987;
	}
	_7591(_1103)
	{
		if(!_1103._656)
		{
			this._656=null;
			return;
		}
		this._656=_1103._656.slice(0);
	}
	_7592()
	{
		if(this._656==null)
			return 0;
		let _7593;
		_7593=0;
		for(let _570=0;_570<this._656.length;_570++)
		{
			let _7594;
			_7594=Math.abs(this._656[_570]);
			if(_7594>_7593)
				_7593=_7594;
		}
		return _7593;
	}
	_7595()
	{
		let _7593;
		_7593=this._7592();
		if(_7593==0)
			return;
		for(let _570=0;_570<this._656.length;_570++)
			this._656[_570]/=_7593;
	}
}

if (typeof AudioContext == "undefined")
{
	_929._7584 = null;
}
else
{
	_929._7584 = new AudioContext();
	_929._7584.resume()
}
_929._7585=null;

