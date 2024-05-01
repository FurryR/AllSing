_581._673("/_9/mp3worker/mp3worker.js");
_581._673("/_9/pcmdata.js/binarystream.js");
_581._673("/_9/pcmdata.js/pcmdata.js");
function _674(_640,_675,_676)
{
	if(!window.Worker)
	{
		_676("Mp3 decode error, worker not support.");
		return;
	}
	var _677=new Worker("/_9/mp3worker/mp3worker.min.js");
	_677.onmessage=function(_678) 
	{
		var data=_678.data;
		var _679=data["channelData"][0];
		
		
		_675(_679,data.sampleRate);
	};
	_677.postMessage(_640);
}
function _680(_640,_675,_676)
{
	var _681=new Blob([_640])
	var _682=new FileReader();
	_682.onload=function(event)
	{
		var _683=event.target.result;
		_683=_683.substr("data:application/octet-stream;base64,".length);
		let _684=PCMData["decode"](atob(_683));
		let _685;
		_685=_684.data
		if(_684.channelCount==2)
		{
			let _686;
			_686=new Float32Array(_685.length/2);
			for(let _570=0;_570<_686.length;_570++)
				_686[_570]=_685[_570*2];
			_675(_686, _684.sampleRate);
		}
		else
			_675(_685, _684.sampleRate);
	};
	_682.readAsDataURL(_681);
}
function _687(name,_640,_675,_676)
{
	let _688=name.substring(name.lastIndexOf(".")+1);
	_688=_688.toLowerCase();
	if(_688=="mp3")
		_674(_640,_675,_676);
	else if(_688=="wav")
		_680(_640,_675,_676);
	else
		_676(L("只支持MP3和WAV格式！"));
}

