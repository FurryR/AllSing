class _852
{
	static _853=null;
	static _854=false;
	static _1690=new _634();
	static _1691=new _634();
	static _1692=(1024*1024*3-1024);
	static _1693=new Array();
	static _1694()
	{
		if(_852._853==null)
		{
			_847._862();
			_849._1199();
		}
		else if(_852._854)
			_847._867();
		else
		{
			_847._868();
			_849._1196();
		}
	}
	static _861()
	{
		if(window.location.host==null||window.location.host=="")
		{
			_852._1694();
			return;
		}
		_852._853=null;
		_852._854=true;
		_852._1694();
		
		_852._853="ws://localhost:48750";
		try
		{
			_852._853=new WebSocket(_852._853);
		}
		catch(_678)
		{
			_852._854=false;
			_852._853=null;
			_852._1694();
			return;
		}
		_852._853.onopen=function(_1695)
		{
			_852._854=false;
			_852._853.binaryType="arraybuffer";
			_852._1690._720();
			_852._1691._720();
			_852._1693.length=0;
			_852._853.onerror=null;
			_852._853.onclose=function(data)
			{
				if(!_852._854)
				{
					_852._854=false;
					_852._853=null;
					_852._1694();
				}
			};
			_852._1694();
		};
		_852._853.onmessage=function(_1695)
		{
			if(typeof _1695.data=="string")
			{
			}
			else
			{
				_852._1696(_1695.data);
			}
		};
		_852._853.onerror=function(_1695)
		{
			_852._854=false;
			_852._853=null;
			_852._1694();
		}
		_852._853.onclose=null;
		_852._1694();
	}
	static _1696(data)
	{
		let buffer=new _634();
		buffer._785(data);
		let _1697;
		_1697=buffer._789();
		if(_1697==0x11225503)
		{
			let _1698;
			let _1699;
			let _1414;
			_1698=buffer._789();
			_1699=buffer._789();
			_1414=buffer._789();
			if(_1698==0&&_852._1690._640!=null)
				console.error("receive before last received finshed.");
			if(_1698!=0)
				if(_1698!=_852._1690._803())
					console.error("receive bad protecle.");
			let _1700=new _634();
			if(_852._1690._640)
				_1700._785(_852._1690._640.slice(0));
			else
				_1700._785(new ArrayBuffer(0));
			let _1701=new _634();
			buffer._793(_1701,_1699);
			_852._1690._720();
			for(let _635=0;_635<2;_635++)
			{
				if(_635==0)
					_852._1690._636();
				else
					_852._1690._637();
				_852._1690._780(_1700);
				_852._1690._780(_1701);
			}
			if(_852._1690._803()>=_1414)
			{
				_847._869(_852._1690._640);
				_852._1690._720();
			}
			
			let _1702;
			_1702=_1699+16;
			if(buffer.length>_1702)
				this._1696(data.slice(_1702));
		}
		else if(_1697==0x11225502)
		{
			_852._1703();
			if(buffer.length>4)
				this._1696(data.slice(4));
		}
		else
			console.error("unkown magic received "+_1697.toString(16));
	}
	static _1703()
	{
		if(_852._1691._640==null)
			return;
		let length;
		length=_852._1691._803()-_852._1691.position;
		if(length>_852._1692)
			length=_852._1692;
		if(length==0)
		{
			console.error("web socket big, send data not null, but no data left!");
			return;
		}
		let start,_1704;
		start=_852._1691.position;
		_1704=start+length;
		let _734=new _634();
		_734._785(_852._1691._640.slice(start,_1704));
		let send=new _634();
		for(let _635=0;_635<2;_635++)
		{
			if(_635==0)
				send._636();
			else
				send._637();
			send._777(0x11225501);
			send._777(_852._1691.position);
			send._777(length);
			send._777(_852._1691._803());
			send._780(_734);
		}
		_852._853.send(send._640);
		_852._1691.position+=length;
		if(_852._1691.position>=_852._1691._803())
		{
			_852._1691._720();
			if(_852._1693.length)
			{
				let _1705=_852._1693.pop();
				let send=new _634();
				send._785(_1705);
				for(let _635=0;_635<2;_635++)
				{
					if(_635==0)
						_852._1691._636();
					else
						_852._1691._637();
					_852._1691._780(send);
				}
				_852._1691.position=0;
			}
		}
	}
	static _859(buffer)
	{
		if(_852._1691._640!=null)
		{
			_852._1693.push(buffer);
			return;
		}
		let send=new _634();
		send._785(buffer);
		for(let _635=0;_635<2;_635++)
		{
			if(_635==0)
				_852._1691._636();
			else
				_852._1691._637();
			_852._1691._780(send);
		}
		_852._1691.position=0;
		_852._1703();
	}
}

