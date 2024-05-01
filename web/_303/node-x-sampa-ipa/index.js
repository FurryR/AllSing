/*
//https://github.com/andrefs/node-x-sampa-ipa
<html>
<head>
    <script src="Misc.js"></script>
    <script src="capital.json.js"></script>
    <script src="diacritics.json.js"></script>
    <script src="lowercase.json.js"></script>
    <script src="other.json.js"></script>
    <script src="index.js"></script>
</head>
<body>
    <script>
        var x;
        x = CXSampaIpa.ipa2xsampa("ˌɑːtɪˈfɪʃl");
        var i;
        i = CXSampaIpa.xsampa2ipa(x);
        let a;
        a = 2;
    </script>
</body>
</html>
*/
class CXSampaIpa
{
    static lowercase = JSON.parse(_g_node_x_sampa_ipa__lowercase);
    static capital = JSON.parse(_g_node_x_sampa_ipa__capital);
    static other = JSON.parse(_g_node_x_sampa_ipa__other);
    static diacritics = JSON.parse(_g_node_x_sampa_ipa__diacritics);

    static _table = [
      ...this.lowercase,
        ...this.capital,
        ...this.other,
        ...this.diacritics
    ];

    static _xsampa = {};
    static _ipa = {};
    static xsRE;
    static ipaRE;
    static _初始化()
    {
        for (const [i, e] of this._table.entries())
            this._xsampa[e['X-SAMPA']] = i;
        for (const [i, e] of this._table.entries())
            this._ipa[e['IPA']] = i;
        function _escape (s) 
        {
            return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        };
        this.xsRE = new RegExp('(' + Object.keys(this._xsampa).filter(x => !!x).map(_escape).join('|')+')', 'g');
        this.ipaRE = new RegExp('(' + Object.keys(this._ipa).filter(x => !!x).map(_escape).join('|')+')', 'g');
    }

    static xsampa2ipa(text)
    {
        return text.replace(this.xsRE, xs => {
            const i = this._xsampa[xs];
            const x = this._table[i]['IPA'];
            if(!xs){ return ''; }
            return x;
        });
    }

    static ipa2xsampa(text,interval)
    {
        if (!interval)
            interval = "";
        let ret;
        ret=text.replace(this.ipaRE, ipa => {
            const i = this._ipa[ipa];
            const x = this._table[i]['X-SAMPA'];
            if(!ipa){ return ''; }
            return x + interval;
        });
        if (interval.length && interval.length)
            ret = ret.substr(0, ret.length - interval.length);
        return ret;
    }
}
CXSampaIpa._初始化();
