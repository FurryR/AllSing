class _847
{
	static _848()
	{
		if(_849._850)
		{
			if(_849._851)
				return true;
			return false;
		}
		else
		{
			if(_852._853==null||_852._854)
				return false;
			return true;
		}
	}
	static _855()
	{
		let buffer=new _634();
		for(let _635=0;_635<2;_635++)
		{
			if(_635==0)
				buffer._636();
			else
				buffer._637();
			buffer._638("Start");
			if(_849._850)
				buffer._777(navigator.hardwareConcurrency);
			else
				buffer._777(0);
			buffer._777(_856._857);
			buffer._777(_856._858);
		}
		_847._859(buffer._640);
	}
	static _860()
	{
		_852._861();
	}
	static _862()
	{
		_67.style.display="inline-block";
		if(window.location.host==null||window.location.host=="")
		{
			_581._582(_67,false);
			_67._863=_67.title;
			_67.title=L("本地运行，无法连接服务器");
		}
		else
		{
			_581._582(_67,true);
			_67.title=_67._864;
		}
		_68.style.display="none";
		_69.style.display="none";
		_617._865();
		_595._866();
	}
	static _867()
	{
		_67.style.display="none";
		_68.style.display="none";
		_69.style.display="inline-block";
		_581._582(_124,false);
		_581._582(_137,false);
	}
	static _868()
	{
		if (_849._850)
		{
			_67.style.display = "none";
			_68.style.display = "none";
			_69.style.display = "none";
			_125.style.display = "none";
        }
		else
		{
			_67.style.display = "none";
			_68.style.display = "inline-block";
			_69.style.display = "none";
			_125.style.display = "none";
		}
	}
	static _869(data)
	{
		let buffer=new _634();
		buffer._785(data);
		switch(buffer._792())
		{
			case "WebSocketOrWebAssemblyReady":
				_849._870();
				break;
			case "FileSystemInMainThreadCppCallJs":
				{
					
					
					
					
					let buffer = new _634();
					let _871 = "FileSystemInMainThreadJsCallCpp";
					buffer._636();
					buffer._638(_871);
					buffer._637();
					buffer._638(_871);
					_847._859(buffer._640);
				}
				break;
			case "VocalMusicFromSpeechStarted":
				this._872(buffer._792(), buffer._789());
				break;
			case "VocalMusicFromSpeechReady":
				{
					let _653;
					_653 =new _634();
					buffer._793(_653, buffer._789() * 8);
					let _873;
					_873 = buffer._789();
					let _654 = new Array(_873);
					for (let _657 = 0; _657 < _873; _657++)
					{
						let _660;
						_660 = new _634();
						_654[_657] = _660;
						buffer._793(_660, buffer._789() * 8);
					}
					let _874;
					_874=buffer._792();
					let _875;
					_875=buffer._789();
					let _876;
					let _877;
					_877=buffer._789()*8;
					if(_877==0)
						_876=null;
					else
					{
						_876=new _634();
						buffer._793(_876,_877);
					}
					let _878;
					_877 = buffer._789() * 8;
					if (_877 == 0)
						_878 = null;
					else
					{
						_878 = new _634();
						buffer._793(_878, _877);
					}
					let _879;
					_877 = buffer._789() * 8;
					if (_877 == 0)
						_879 = null;
					else
					{
						_879 = new _634();
						buffer._793(_879, _877);
					}
					this._880(_653, _654, _876, _878, _879, _874, _875);
				}
				break;
			case "VocalMusicFromSpeechError":
				this._137(buffer._792(),buffer._789(),buffer._792());
				break;
			case "VocalMusicFromSpeechProgress":
				this._881(buffer._789(),buffer._789(),buffer._792(),buffer._789());
				break;
			case "VocalMusicFromSpeechSetTimbreProgress":
				this._882(buffer._792(), buffer._792(), buffer._789(), buffer._789(), buffer._792(), buffer._789());
				break;
			case "VocalMusicFromSpeechSetTerm":
				{
					let length;
					length=buffer._789();
					let _784=new _634();
					buffer._793(_784,length*8);
					this._883(_784,buffer._792(),buffer._789());
				}
				break;
			case "VocalMusicFromSpeechSetKeySignature":
				{
					let _884;
					_884=buffer._789();
					this._885(_884,buffer._792(),buffer._789());
				}
				break;
			case "MidiFileReady":
				{
					let size;
					size=buffer._789();
					let _784=new _634();
					buffer._793(_784,size);
					this._886(_784);
				}
				break;
			case "MidiWaveReady":
				{
					let _887;
					_887=new _634();
					buffer._793(_887,buffer._789()*8);
					this._888(_887);
				}
				break;
			case "API_ServerModeEnter":
				_43.contentWindow._579();
				break;
			case "API_ServerModeLeave":
				_43.contentWindow._583();
				break;
			case "API_ProjectString":
				{
					let _649;
					_649 = buffer._792();
					_43.contentWindow._648(_649);
				}
				break;
			case "API_VocalMusicMixing":
				{
					let _653;
					_653 = new _634();
					buffer._793(_653, buffer._789() * 8);
					let _873;
					_873 = buffer._789();
					let _654 = new Array(_873);
					for (let _657 = 0; _657 < _873; _657++)
					{
						let _660;
						_660 = new _634();
						_654[_657] = _660;
						buffer._793(_660, buffer._789() * 8);
					}
					_43.contentWindow._652(_653, _654);
				}
				break;
			case "AspWebSpace_To_AwayFromKeyboardKing_keep_alive":
				_43.contentWindow._668();
				break;
			case "AwayFromKeyboardKing_To_AspWebSpace_keep_alive":
				_43.contentWindow._670();
				break;
			case "AwayFromKeyboard_AspWebSpace_Disconnected":
				_43.contentWindow._671();
				break;
			case "AwayFromKeyboard_AspWebSpace_Connected":
				_43.contentWindow._672();
				break;
		}
	}
	static _859(buffer)
	{
		if(_849._850)
		{
			let Module = _34.contentWindow.Module;
			if (Module)
			{
				
				
				let _889 = new Uint8Array(buffer);
				let _890 = Module._malloc(_889.length);
				Module.HEAPU8.set(_889, _890);
				Module._JavascriptCallCpp(_890, _889.length);
				Module._free(_890);
			}
			else
				console.error("WebAssembly not ready, can not send data.");
		}
		else 
		{
			if(_852._853!=null&&!_852._854)
				_852._859(buffer)
			else
				console.error("WebSocket not connected, can not send data.");
		}
	}

	static _419(_874, _875, _891, _876, _646)
	{
		if(!_847._848())
			return false;
		let buffer=new _634();
		for(let _635=0;_635<2;_635++)
		{
			if(_635==0)
				buffer._636();
			else
				buffer._637();
			buffer._638("VocalMusicFromSpeech");
			buffer._638(_874);
			buffer._777(_875);
			buffer._777(_856._892);
			buffer._638(_646);
			buffer._638(_891);
			buffer._638(_876._893);
		}
		_847._859(buffer._640);
		return true;
	}
	static _894(_874,_875)
	{
		if(_875<0||_875>=_585.length)
			return null;
		let _445;
		_445=_585[_875];
		if(_445._895()+_445._896()!=_874)
			return null;
		return _445;
	}
	static _872(_874, _875)
	{
		let _445;
		_445 = _847._894(_874, _875);
		if (_445)
			_617._897(_875);
		else
			_617._897(-1);
	}
	static _880(_653, _654, _876, _878, _879, _874,_875)
	{
		let _445;
		_445=_847._894(_874,_875);
		if(_445==null)
		{
			_617._898(-1);
			return;
		}
		
		_445._655._656 = new Float64Array(_653._640);
		for (let _657 = 0; _657 < _658._659; _657++)
		{
			let _660;
			_660 = _654[_657];
			let _661;
			if (_660)
				_661 = _660._640;
			if (_661)
				_445._662[_657]._656 = new Float64Array(_661);
			else
				_445._662[_657]._656 = null;
		}
		if (_876 ==null)
			_445._663._656=null;
		else
			_445._663._656 = new Float64Array(_876._640);
		if (_878 == null)
			_445._664._656 = null;
		else
			_445._664._656 = new Float64Array(_878._640);
		if (_879 == null)
			_445._665._656 = null;
		else
			_445._665._656 = new Float64Array(_879._640);
		_445._899="";
		_900();
		_901();
		_617._898(_875);
		if (_109.checked)
			_902._903();
	}
	static _137(_874,_875,_904)
	{
		_905();
		let _445;
		_445=_847._894(_874,_875);
		if(_445 == null)
		{
			if(_904 == "User canceled")
				_617._906(-1);
			else
				_617._907(-1);
			return;
		}
		if (_904 == "User canceled")
			_617._906(_875);
		else
		{
			_445._899 = _904;
			_617._907(_875);
		}
		if (_904 != "User canceled")
			_908(_904);
	}
	static _881(_909,_910,_874,_875)
	{
		_617._911(_909, _910, _874, _875);
	}
	static _882(_912,_913,_909, _910, _874, _875)
	{
		if (_909 != _910)
		{
			_914();
			_915(L(_912), L(_913));
			_916(_909, _910);
		}
		else
		{
			_905();
        }
    }
	static _883(_917,_874,_875)
	{
		let _445;
		_445=_847._894(_874,_875);
		if(_445==null)
			return;
		_445._918=_917._640.slice(0);
		_901();
	}
	static _885(_919,_874,_875)
	{
		let _445;
		_445=_847._894(_874,_875);
		if(_445==null)
			return;
		_445._920=_919;
		if(_875==_584)
		{
			_142.value=_919;
			_921();
		}
		_901();
	}

	static _922(_620)
	{
		if(!_847._848())
			return false;
		_923._924(_620);
		let buffer=new _634();
		for(let _635=0;_635<2;_635++)
		{
			if(_635==0)
				buffer._636();
			else
				buffer._637();
			buffer._638("VocalMusicFromSpeechCancel");
			buffer._638(_923._445._895()+_923._445._896());
			buffer._777(_620);
		}
		_847._859(buffer._640);
		return true;
	}

	static _925(_926)
	{
		if(!_847._848())
			return false;
		let buffer=new _634();
		for(let _635=0;_635<2;_635++)
		{
			if(_635==0)
				buffer._636();
			else
				buffer._637();
			buffer._638("GetMidiFile");
			buffer._638(_926);
		}
		_847._859(buffer._640);
	}
	static _886(_784)
	{
		let _681=new Blob([_784._640],{type: "audio/mid",});
		let _801=document.createElement("a");
		_801.href=window.URL.createObjectURL(_681);
		_801.download=L("背景音乐.mid");
		_801.click();
		_801.remove();
		_581._582(_51,true);
	}

	static _927(_926)
	{
		let _928=new _634();
		for(let _635=0;_635<2;_635++)
		{
			if(_635==0)
				_928._636();
			else
				_928._637();
			_928._638("GetMidiWave");
			_928._638(_926);
		}
		_847._859(_928._640);
	}
	static _888(_887)
	{
		let _510;
		_510=new _929();
		_510._656=new Float64Array(_887._640);
		_510._930();
	}

	static _931()
	{
		let _798;
		_798 = _932._933;
		let _928=new _634();
		for(let _635=0;_635<2;_635++)
		{
			if(_635==0)
				_928._636();
			else
				_928._637();
			_928._638("SetTrillData");
			_928._777(_798.length);
			_928._783(_798.buffer);
		}
		_847._859(_928._640);
	}
	static _934()
	{
		let _798;
		_798 = _932._935;
		let _928=new _634();
		for(let _635=0;_635<2;_635++)
		{
			if(_635==0)
				_928._636();
			else
				_928._637();
			_928._638("SetInstallData");
			_928._783(_798);
		}
		_847._859(_928._640);
		_932._935 =null;
	}

	static _936()
	{
		if(!_847._848())
			return false;
		let buffer=new _634();
		for(let _635=0;_635<2;_635++)
		{
			if(_635==0)
				buffer._636();
			else
				buffer._637();
			buffer._638("UserClosedWindow");
		}
		_847._859(buffer._640);
		return true;
	}
}
function CCppInterface_OnDataRecevied(data)
{
	_847._869(data);
}
function _937(_938,_939,_145)
{
	_847._927(_938,_939,_145);
}
function _940()
{
	return _847._848();
}
function _639(buffer)
{
	return _847._859(buffer);
}
