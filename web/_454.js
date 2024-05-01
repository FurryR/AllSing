class _856
{
	static _6981=0;
	static _6982=0;
	static _6983=0;
	static _6984=1;
	static _6985=0;

	static _892=0;
	static _858=0;
	static _857=0;
	static _6986=0;
	static _6987=0;

	static _6988()
	{
		_856._6983++;
		if(_856._6983>100*60)
			clearInterval(_856._6988);
	}
	static _6989()
	{
		_856._6981=event.clientX;
		_856._6982=event.clientY;
		window.removeEventListener("mousemove",_856._6989);
	}
	static _1029()
	{
		let _6990;
		if(_849._850)
			_6990=10;
		else
			_6990=30;
		setInterval(_856._6988,_6990);
		window.addEventListener("mousemove",_856._6989);
		_856._6984=navigator.hardwareConcurrency;
	}
	static _1192()
	{
		clearInterval(_856._6988);
		_856._892=window.innerWidth+_856._6981+Object.keys(window).length;
		_856._857=window.innerHeight+_856._6982;
		_856._6986=_856._6984+_856._6985+_856._6983;
	}
};
_856._1029();

