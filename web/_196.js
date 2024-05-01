

class _1209
{
    _1210;
    _1211;
    _1212 = new Array();
    _1213 = new Array();
    _1214 = null;
    _1215 = new Array();
    _1216 = 0x7fffffff;
    _1217()
    {
        let _987;
        _987 = this._1211.lastIndexOf("\r\n");
        if (_987 == -1)
            return this._1211.length;
        return this._1211.length - _987-2;
    }
    _1218()
    {
        if (!this._1219())
        {
            if (this._1217()>1000)
            {
                if (_581._1220(this._1211, " "))
                    this._1211 = _581._1221(this._1211, this._1211.length - 1);
                this._1211 += "\r\n";
            }
            else
                return;
        }
        for (let _979 = 0; _979 < this._1210; _979++)
            this._1211 += "\t";
    }
    _1222()
    {
        if (_581._1220(this._1211, ",\r\n"))
        {
            this._1211 = _581._1221(this._1211, this._1211.length - ",\r\n".length);
            this._1211 += "\r\n";
        }
        else if (_581._1220(this._1211, ", "))
        {
            this._1211 = _581._1221(this._1211, this._1211.length - 2);
        }
        else if (_581._1220(this._1211, ","))
        {
            this._1211 = _581._1221(this._1211, this._1211.length - 1);
        }
    }
    _1223()
    {
        if (!_581._1220(this._1211, " "))
            return;
        this._1211 = _581._1221(this._1211, this._1211.length - 1);
    }
    _1224()
    {
        if (!_581._1220(this._1211, "\r\n"))
            return;
        this._1211 = _581._1221(this._1211, this._1211.length - 2);
    }
    _1225()
    {
        let _1226;
        _1226 = false;
        for (let _754 = this._1211.length-1; _754 >= 0; _754--)
        {
            let _1227;
            _1227 = this._1211.charAt(_754);
            if (_1227 == '\t')
                _1226 = true;
            else if (_1227 == '\r' || _1227 == '\n')
                break;
            else
                return false;
        }
        return _1226;
    }
    _1228()
    {
        while (_581._1220(this._1211, "\t"))
            this._1211 = _581._1221(this._1211, this._1211.length - 1);
    }
    static _1229(_893)
    {
        return JSON.stringify(_893);
    }
    _1230()
    {
        return this._1212[this._1212.length - 1];
    }
    _1219()
    {
        return this._1213[this._1213.length - 1];
    }
    _1231(_1232)
    {
        if (!this._1230())
            this._1211 += _1209._1229(_1232)+": ";
    }
    _1233(_1232, _982)
    {
        if (!this._1230())
            return _982;
        if (typeof _982 == "undefined")
            return _1232;
        return _982;
    }
    _1234()
    {
        this._1211 += ",";
        if (this._1219())
            this._1211 += "\r\n";
        else
            this._1211 += " ";
    }
    _1235(_1236 = false, _1237 = true, _1238=null)
    {
        this._1210 = 0;
        this._1212.length = 0;
        this._1213.length = 0;
        if (_1236)
            this._1211 = "[\r\n";
        else
            this._1211 = "{\r\n";
        this._1210++;
        this._1212.push(_1236);
        this._1213.push(_1237);
        this._1214 = _1238;
        if (this._1214)
        {
            this._1215.push("/");
            this._1216 = 0x7fffffff;
        }
    }
    _1238(_1239, _982)
    {
        if (this._1214 == null)
            return _1239;
        if (this._1215 >= this._1216)
            return false;
        let _1240;
        _1240 = this._1215.slice();
        _1240.push(_1239);
        if (this._1214(_1240, _982))
            return _1240[_1240.length - 1];
        return false;
    }
    _1241(_1232, _982)
    {
        if ((_1232 = this._1238(_1232, _982))  === false)
            return;

        this._1218();
        this._1231(_1232);
        _982 = this._1233(_1232, _982);

        this._1211 += (_982 ? "true" : "false");
        this._1234();
    }
    _1242(_1232, _982)
    {
        if ((_1232 = this._1238(_1232, _982)) === false)
            return;

        this._1218();
        this._1231(_1232);
        _982 = this._1233(_1232, _982);

        this._1211 += _982;
        this._1234();
    }
    _1243(_1232, _982)
    {
        if ((_1232 = this._1238(_1232, _982)) === false)
            return;

        this._1218();
        this._1231(_1232);
        _982 = this._1233(_1232, _982);

        this._1211 += _982;
        this._1234();
    }
    _1244(_1232, _982)
    {
        if ((_1232 = this._1238(_1232, _982)) === false)
            return;

        this._1218();
        this._1231(_1232);
        _982 = this._1233(_1232, _982);

        if (_982 == 0)
        {
            this._1211 += "0.0";
            this._1234();
            return;
        }
        let _893;
        if (Number.isInteger(_982))
        {
            _893 = _982.toString();
        }
        else
        {
            let _1245;
            _1245 = 20 - Math.log10(Math.abs(_982));
            _1245 = Math.ceil(_1245);
            if (_1245 < 1)
                _1245 = 1;
            _893 = _982.toFixed(_1245);
        }
        
        let _1236 = _893.split(".");
        if (_1236.length === 2)
        {
            let _1246 = _1236[1].replace(/0+$/, "");
            if (_1246.length > 0)
                _893 = _1236[0] + "." + _1246;
            else
                _893 = _1236[0]
        }
        this._1211 += _893;
        this._1234(); 
    }
    String(_1232, _982)
    {
        if ((_1232 = this._1238(_1232, _982)) === false)
            return;

        this._1218();
        this._1231(_1232);
        _982 = this._1233(_1232, _982);

        this._1211 += _1209._1229(_982);
        this._1234(); 
    }
    _1247(_1232, _893)
    {
        if ((_1232 = this._1238(_1232, _893)) === false)
            return;

        this._1218();
        this._1231(_1232);
        _893 = this._1233(_1232, _893);

        if (_893.includes('\n') || _893.includes('\r'))
        {
            _893 = _893.replaceAll("\r\n", "\n");
            _893 = _893.replaceAll("\r", "\n");
            _893 = _893.replaceAll("\n", "\r\n");
            if (_581._1220(_893, "\r\n"))
                _893 = _581._1221(_893, _893.length-2);
            let _1248;
            _1248 = "";
            for (let _979 = 0; _979 < this._1210; _979++)
                _1248 += "\t";
            let _1249;
            if (_581._1250(_893, "{") || _581._1250(_893, "["))
                _1249 = true;
            else
            {
                _1249 = false;
                _1248 += "\t";
            }
            _893 = _893.replaceAll("\r\n", "\r\n" + _1248);
            _893 = _1248 + _893;
            if (!_1249)
            {
                _1248 = _581._1221(_1248, _1248.length - 1);
                _893 = _1248 + "{\r\n" + _893 + "\r\n" + _1248 + "}";
            }
            this._1223();
            if (this._1225())
                this._1228();
            else
                this._1211 += "\r\n";
            this._1211 += _893;
            this._1234();
        }
        else
        {
            if ((!_581._1250(_893, "{")) && (!_581._1250(_893, "[")))
                _893 = "{" + _893 + "}";
            this._1211 += _893;
            this._1234();
        }        
    }
    Object(_1232, _1251, _1237=true)
    {
        if ((_1232 = this._1238(_1232, _1251)) === false)
            return;

        if (_1237)
        {
            let _893;
            _893 = JSON.stringify(_1251,null,'\t');
            this._1247(_1232, _893);
        }
        else
        {
            this._1218();
            this._1231(_1232);
            _1251 = this._1233(_1232, _1251);

            this._1211 += JSON.stringify(_1251);
            this._1234();
        }
    }
    _1252(_1232, _1237 = true)
    {
        if ((_1232 = this._1238(_1232)) === false)
        {
            this._1215.push(_1232);
            if (this._1216 == 0x7fffffff)
                this._1216 = this._1215.length;
            return;
        }

        if (!this._1230())
        {
            this._1218();
            this._1231(_1232);
        }
        if (_1237)
        {
            this._1223();
            if (!_581._1220(this._1211, "\r\n"))
                this._1211 += "\r\n";
            this._1218();
        }
        else
        {
            this._1224();
            if (!_581._1220(this._1211, " "))
                this._1211 += " ";
        }
        this._1211 += "{";
        if (_1237)
            this._1211 += "\r\n";
        this._1210++;
        this._1212.push(false);
        this._1213.push(_1237);
        this._1215.push(_1232);
    }
    _1253()
    {
        if (this._1214)
        {
            if (this._1215.length >= this._1216)
            {
                if (this._1215.length == this._1216)
                    this._1216 = 0x7fffffff;
                this._1215.pop();
                return;
            }
        }

        this._1210--;
        this._1212.pop();
        this._1222();
        this._1218();
        this._1213.pop();
        this._1215.pop();
        this._1211 += "}";
        this._1234();
    }
    _1254(_1232, _1237 = true)
    {
        if ((_1232 = this._1238(_1232)) === false)
        {
            this._1215.push(_1232);
            if (this._1216 == 0x7fffffff)
                this._1216 = this._1215.length;
            return;
        }

        if (!this._1230())
        {
            this._1218();
            this._1231(_1232);
        }
        if (_1237)
        {
            this._1223();
            if (!_581._1220(this._1211, "\r\n"))
                this._1211 += "\r\n";
            this._1218();
        }
        else
        {
            this._1224();
            if (!_581._1220(this._1211, " "))
                this._1211 += " ";
        }
        this._1211 += "[";
        if (_1237)
            this._1211 += "\r\n";
        this._1210++;
        this._1212.push(true);
        this._1213.push(_1237);
        this._1215.push(_1232);
    }
    _1255()
    {
        if (this._1214)
        {            
            if (this._1215.length >= this._1216)
            {
                if (this._1215.length == this._1216)
                    this._1216 = 0x7fffffff;
                this._1215.pop();
                return;
            }
        }

        this._1210--;
        this._1212.pop();
        this._1222();
        this._1218();
        this._1213.pop();
        this._1215.pop();
        this._1211 += "]";
        this._1234();
    }
    _1256(_1232, _1257)
    {
        if (this._1238(_1232, _1257) === false)
            return;

        this._1247(_1232, JSON.stringify(_1257));
    }
    _1258(_1232, _640)
    {
        if (this._1238(_1232, _640) === false)
            return;

        this.String(_1232, _581._1259(_640));
    }
    _1260()
    {
        this._1212.pop();
        if (this._1212.length != 0)
            console.assert(0);
        this._1213.pop();
        if (this._1213.length != 0)
            console.assert(0);
        if (this._1214)
        {
            this._1215.pop();
            if (this._1215.length != 0)
                console.assert(0);
        }
        this._1210--;
        if (this._1210 != 0)
            console.assert(0);
        this._1222();
        if (_581._1250(this._1211,"{"))
            this._1211 += "}\r\n";
        else
            this._1211 += "]\r\n";

        return this._1211;
    }
}
class _1261
{
    _985;
    _1262 = new Array();
    _1263()
    {
        return this._1262[this._1262.length - 1];
    }
    _1264(_982)
    {
        try
        {
            this._985 = JSON.parse(_982);
        }
        catch (_678)
        {
            return false;
        }
        this._1262.length = 1;
        this._1262[0] = this._985;
        return true;
    }
    _1241(_1232)
    {
        return this._1263()[_1232];
    }
    _1242(_1232)
    {
        return this._1263()[_1232];
    }
    _1243(_1232)
    {
        return this._1263()[_1232];
    }
    _1244(_1232)
    {
        return this._1263()[_1232];
    }
    String(_1232)
    {
        return this._1263()[_1232];
    }
    _1247(_1232)
    {
        return JSON.stringify(this._1263()[_1232]);
    }
    Object(_1232)
    {
        return this._1263()[_1232];
    }
    _1252(_1232)
    {
        let _1265;
        _1265 = this._1263()[_1232];
        if (_1265 === undefined)
        {
            
            return _1265;
        }
        if (typeof _1265 != "object")
            console.assert(0);
        this._1262.push(_1265);

        return _1265;
    }
    _1253()
    {
        this._1262.pop();
    }
    _1254(_1232)
    {
        let _1265;
        _1265 = this._1263()[_1232];
        if (_1265 === undefined)
        {
            
            return _1265;
        }
        if (!Array.isArray(_1265))
            console.assert(0);
        this._1262.push(_1265);

        return _1265;
    }
    _1255()
    {
        this._1262.pop();
    }
    _1266()
    {
        if (!Array.isArray(this._1263()))
            console.assert(0);
        return this._1263().length;
    }
    _1256(_1232)
    {
        return this._1263()[_1232];
    }
    _1258(_1232)
    {
        let _1267;
        _1267 = this.String(_1232);
        return _581._1268(_1267);
    }
}

