
function _6076(_942, width,height,_6077)
{
    let _6078;
    _6078 = document.createElement("span");
    _942._6078 = _6078;
    _942._6077 = _6077;
    _6078._942 = _942;
    _6078.style.display = "inline-block";
    _6078.style.width = width+"px";
    _6078.style.height = height+"px";
    _6078.style.cursor = "pointer";
    _6078.style.borderWidth = "2px";
    _6078.style.borderStyle = "outset";
    _6078.onclick = function ()
    {
        if (this.dialog)
            return ;
        let dialog;
        dialog = document.createElement("span");
        this.dialog = dialog;
        dialog._6078 = this;
        let _956;
        _956 = this.getBoundingClientRect();
        let x, y;
        x = (_956.left + _956.right) / 2;
        y = _956.bottom;
        x += document.body.scrollLeft;
        y += document.body.scrollTop;
        let _6079 = ["Black", "Navy", "DarkBlue", "MediumBlue", "Blue", "DarkGreen", "Green", "Teal", "DarkCyan", "DeepSkyBlue", "DarkTurquoise", "MediumSpringGreen", "Lime", "SpringGreen", "Aqua", "Cyan", "MidnightBlue", "DodgerBlue", "LightSeaGreen", "ForestGreen", "SeaGreen", "DarkSlateGray", "LimeGreen", "MediumSeaGreen", "Turquoise", "RoyalBlue", "SteelBlue", "DarkSlateBlue", "MediumTurquoise", "Indigo", "DarkOliveGreen", "CadetBlue", "CornflowerBlue", "MediumAquaMarine", "DimGray", "SlateBlue", "OliveDrab", "SlateGray", "LightSlateGray", "MediumSlateBlue", "LawnGreen", "Chartreuse", "Aquamarine", "Maroon", "Purple", "Olive", "Gray", "SkyBlue", "LightSkyBlue", "BlueViolet", "DarkRed", "DarkMagenta", "SaddleBrown", "DarkSeaGreen", "LightGreen", "MediumPurple", "DarkViolet", "PaleGreen", "DarkOrchid", "YellowGreen", "Sienna", "Brown", "DarkGray", "LightBlue", "GreenYellow", "PaleTurquoise", "LightSteelBlue", "PowderBlue", "FireBrick", "DarkGoldenRod", "MediumOrchid", "RosyBrown", "DarkKhaki", "Silver", "MediumVioletRed", "IndianRed", "Peru", "Chocolate", "Tan", "LightGray", "Thistle", "Orchid", "GoldenRod", "PaleVioletRed", "Crimson", "Gainsboro", "Plum", "BurlyWood", "LightCyan", "Lavender", "DarkSalmon", "Violet", "PaleGoldenRod", "LightCoral", "Khaki", "AliceBlue", "HoneyDew", "Azure", "SandyBrown", "Wheat", "Beige", "WhiteSmoke", "MintCream", "GhostWhite", "Salmon", "AntiqueWhite", "Linen", "LightGoldenRodYellow", "OldLace", "Red", "Fuchsia", "Magenta", "DeepPink", "OrangeRed", "Tomato", "HotPink", "Coral", "DarkOrange", "LightSalmon", "Orange", "LightPink", "Pink", "Gold", "PeachPuff", "NavajoWhite", "Moccasin", "Bisque", "MistyRose", "BlanchedAlmond", "PapayaWhip", "LavenderBlush", "SeaShell", "Cornsilk", "LemonChiffon", "FloralWhite", "Snow", "Yellow", "LightYellow", "Ivory", "White",            "Black", "Navy", "DarkBlue", "MediumBlue",];
        let _6080;
        _6080 = Math.sqrt(_6079.length);
        _6080 = Math.ceil(_6080);
        let _6081;
        _6081 = Math.ceil(_6079.length / _6080);
        let _6082=25, _6083 = 25;
        dialog.style.position = "absolute";
        dialog.style.width = (_6080 * _6082+4+5) + "px";
        dialog.style.height = (_6081 * _6083 + 4+5) + "px";
        dialog.style.borderWidth = "2px";
        dialog.style.borderStyle = "outset";
        dialog.style.textAlign = "center";
        dialog.style.backgroundColor = "LightGray";
        {
            let _6084;
            _6084 = parseInt(dialog.style.width);
            let left;
            left = x - _6084 / 2;
            let _6085;
            _6085 = window.innerWidth;
            if (left + _6084 > _6085)
                left = _6085 - _6084;
            if (left < 0)
                left = 0;
            dialog.style.left = left + "px";
        }
        dialog.style.top = y + "px";
        dialog.innerHTML = "<div style='font-size:smaller;line-height:5px;' />&nbsp</div>";
        for (let _570 = 0; _570 < _6079.length; _570++)
        {
            let color;
            color = _6079[_570];
            let _949;
            _949 = document.createElement("span");
            _949.dialog = dialog;
            _949.style.display = "inline-block";
            _949.style.width = (_6082-4)+"px";
            _949.style.height = (_6083-4) + "px";
            _949.style.borderWidth = "1px";
            _949.style.borderStyle = "outset";
            _949.style.backgroundColor = color;
            _949.style.margin = "1px";
            _949.style.cursor = "pointer";
            _949.title = color;
            _949.value = color;
            _949.onclick = function ()
            {
                let color;
                color = this.value;
                let dialog;
                dialog = this.dialog;
                let _6078;
                _6078 = dialog._6078;
                _6078.style.backgroundColor = color;
                _6078._942.value = color;
                let _6077;
                _6077 = _6078._942._6077;
                dialog._6086();
                if (_6077)
                    _6077(this.value);
            };
            dialog.appendChild(_949);
        }
        dialog._6086 = function ()
        {
            document.body.removeChild(this);
            this._6078.dialog = null;
            this._6078 = null;
            document.removeEventListener("click", this._6087);
        }
        dialog._6087 = function ()
        {
            let x, y;
            x = event.clientX;
            y = event.clientY;
            let _956;
            _956 = dialog.getBoundingClientRect();
            if (!(_956.left <= x && x <= _956.right && _956.top <= y && y <= _956.bottom))
                dialog._6086();
        }
        document.body.appendChild(dialog);
        document.addEventListener("click", dialog._6087);
        event.stopPropagation();
    };
    _942.appendChild(_6078);
    _942._693 = function (color)
    {
        this._6078.style.backgroundColor = color;
        this.value = color;
    };
    _942._967 = function (_6088)
    {
        if (_6088)
        {
            if (_6078._836)
            {
                _6078.onclick = _6078._836;
                _6078._836 = null;
            }
            _6078.style.cursor = "pointer";
            _6078.style.borderWidth = "2px";
        }
        else
        {
            if (_6078.onclick)
            {
                _6078._836 = _6078.onclick;
                _6078.onclick = null;
            }
            _6078.style.cursor = "default";
            _6078.style.borderWidth = "1px";
        }
    }
}

