var g_language_index;
function LanguageSetCurrentLanguage(type)
{
    switch(type)
    {
    case "zh-cn":
        g_language_index=1;
        break;
    //case "en-us":
    default:
        g_language_index=0;
        break;
    }
}
LanguageSetCurrentLanguage(navigator.language.toLowerCase());
//g_language_index=0;//debug
function L(chinese)
{
    if(chinese==null||chinese=="")
        return chinese;
    if(typeof (chinese)=="object")
    {
        //   /✾/g,
        //   /,⌒/g
        //   /，⌒/g
        //   /， /g
        //   /\.⌒/g
        //   /。⌒/g
        //   /。 /g
        //   /⌒/g
        //   /。/g
        //   /，/g
        //   /、/g
        //   /^⌒+/g
        return chinese;
    }
    for(var index=0;index<g_language_fix.length;index++)
    {
        if(g_language_fix[index]==null)
            break;
        if(g_language_fix[index]==chinese)
            return chinese;
    }
    for(var index=0;index<g_language.length;index++)
    {
        if(g_language[index]==null)
            break;
        if(g_language[index][1]==chinese)
            return g_language[index][g_language_index];
    }
    return chinese;
}
function F(chinese)//保留的 汉语 F short for Fix
{
    return chinese;
}
function TranslateAll()
{
    var elements;
    elements = document.getElementsByTagName("*");
    for(var index = 0;index < elements.length; index++)
    {
        var current;
        current=elements[index];
        var text;
        text=current.innerHTML;
        if (text && text != "")
        {
            if (text.substr(0, 2) == "L(" && text.substr(text.length - 1, 1) == ")")
                current.innerHTML = L(text.substr(2, text.length - 3));
            else if (text.substr(0, 2) == "F(" && text.substr(text.length - 1, 1) == ")")
                current.innerHTML = text.substr(2, text.length - 3);
        }
        text=current.title;
        if (text && text != "")
        {
            if (text.substr(0, 2) == "L(" && text.substr(text.length - 1, 1) == ")")
                current.title = L(text.substr(2, text.length - 3));
            else if (text.substr(0, 2) == "F(" && text.substr(text.length - 1, 1) == ")")
                current.title = text.substr(2, text.length - 3);
        }
        text=current.value;
        if (text && text != "" && typeof (text) == "string" && current.tagName != "SELECT")
        {
            if (text.substr(0, 2) == "L(" && text.substr(text.length - 1, 1) == ")")
                current.value = L(text.substr(2, text.length - 3));
            else if (text.substr(0, 2) == "F(" && text.substr(text.length - 1, 1) == ")")
                current.value = text.substr(2, text.length - 3);
        }
    }
    document.title=L(document.title);
}
var g_language_fix=
[
        "好的",
        "★ ",
        "☆ ",
        "✾",
        "⌒",
        "，",
        "、",
        "。",
        "赵磊",
        "赵磊公司",
        "说明",
        "∮",
        "の",

        //不用全部枚举，这里只有《用户词典英语.htm》
        "ʧ",  "ʦ", "θ", "ʃ",
        "ʣ", "ʤ", "ð", "ʒ", "ŋ", 
        "ɪ", "ʊ", "ɛ", "ʌ",
        "æ", "ɒ", "ə",
        "iː", "uː", "ɜː", "ɔː", "ɑː",
        "eɪ", "ɔɪ", "əʊ", "aɪ", "aʊ",
        "ɪə", "ʊə", "ɛə",
        "ŋ", "ɫ",
];
var g_language=
[
        ["All Sing","大市唱"],
        ["About","关于"],
	    ["Open","打开"],
        ["Save","保存"],
	    ["Stop","停止"],
        ["Text to speech","文本转朗读"],
        ["Set lyric","设置歌词"],
        ["Text to speech, working","正在把文本转化成朗读"],
        ["Text to speech failed, click to retry.","朗读转化为声乐曲失败，点击重试"],
        ["Play","播放"],
        ["Copy lyric divide","拷贝朗读切分"],
        ["Paste lyric divide","黏贴朗读切分"],
        ["To add a skill, drage an icon to left","将图标拖到左边，即可添加演唱技巧"],
        ["Convert","转化"],
        ["Speech to vocal music failed, click to retry","朗读转化为声乐曲失败，点击重试"],
        ["Copy","拷贝"],
        ["Paste","黏贴"],
        ["Delete","删除"],
        ["Insert","插入"],
        ["Copy this line","拷贝本行"],
        ["Paste to this line","黏贴本行"],
        ["Delete this line","删除本行"],
        ["Insert new line","插入新行"],
        ["Fold up","向上收起"],
        ["Text to speech failed","文本转化为朗读失败"],
        ["Text to speech failed!","文本转化成朗读失败！"],
        ["Speech to vocal music failed","朗读转化为声乐曲失败"],
        ["(Please input song name here)","（请在这里输入歌名）"],
        ["(Please input lyric here)","（请在这里输入歌词）"],
        ["Lyric:","歌词："],
        ["Divide lyric:","朗读切分："],
        ["Music score:","歌谱："],
        ["Longest=♩","长线=♩"],
        ["Longest=Quarter note","长线=1/4 四分音符"],
        ["Amplitude","强度"],
        ["Frequency","频率"],
        ["Trill","颤音"],
        ["Echo","回音"],
        ["Beat","节拍"],
        ["Bubble","气泡音"],
        ["vocal_music_download.bin","下载的声乐编辑文件.bin"],
        ["Off line. click to connect","离线中，点击连接"],
        ["Connect","连接"],
        ["On line","在线"],
        ["On line, double click to reconnect","在线，双击重连"],
        ["Connecting","连接中"],
        ["Open local file","打开本地文件"],
        ["Open","打开"],
        ["New","新建"],
        ["Save to local, will be auto opened when fresh or open this url next time.","保存在本地，刷新或者下次打开网页时自动打开"],
        ["Save temporaryly","临时保存"],
        ["Download to local","下载到本地"],
        ["Upload","上传"],
        ["Download","下载"],
        ["Export vocal music","导出声乐曲"],
        ["Export","导出"],
        ["Text to speech engine","语音转文本引擎"],
        ["Xunfei 小燕 Chinese","讯飞小燕 普通话"],
        ["Xunfei 许久 Chinese","讯飞许久 普通话"],
        ["Xunfei 小萍 Chinese","讯飞小萍 普通话"],
        ["Xunfei 小婧 Chinese","讯飞小婧 普通话"],
        ["Xunfei 许小宝 Chinese","讯飞许小宝 普通话"],
        ["Xunfei 小月 Cantonese","讯飞小月 粤语"],
        ["Xunfei Catherine English","讯飞凯瑟琳 英语"],
        ["Xunfei John English","讯飞John 英语"],
        ["Xunfei Steve English","讯飞Steve 英语"],
        ["Background image","背景图片"],
        ["Exported vocal music.wav","导出的声乐曲.wav"],
        ["Vocal music generating progress: ","声乐生成进度："],
        ["Cancel vocal music generating","取消声乐曲生成"],
        ["Cancel","取消"],
        ["Insert tuplet: '⌒'","插入连音符号：“⌒”"],
        ["Insert rest: ','","插入休止符：“，”"],
        ["Drag to left window","拖动到左侧窗口"],
        ["To remove the skill, drag it in here","拖进来，删除技巧"],
        ["Download midi","下载midi"],
        ["Download midi music","下载midi音乐"],
        ["Can not download midi music!","无法下载midi音乐！"],
        ["Background music.mid","背景音乐.mid"],
        ["Import speech","导入朗读"],
        ["Failed to import audio file!","导入音频文件失败！"],
        ["Only mp3 and wav file format is supported!","只支持MP3和WAV格式！"],
        ["Key signature","调号"],
        ["Auto","自动"],
        ["Quarter count per minute","每分钟拍数"],
        ["Rap","说唱"],
        ["Just music","纯音乐"],
        ["Just speak","纯朗读"],
        ["Vocal volume: ","声乐曲音量："],
        ["Instrument volume: ","器乐曲音量："],
        ["Copy to all other lines","复制到所有行"],
        ["Global trill","全局颤音"],
        ["Method","方式"],
        ["Speed","速度"],
        ["Amplitude","幅度"],
        ["- One pitch higher","-高一个音高"],
        ["- Half pitch higher","-高半个音高"],
        ["- No change","-不变"],
        ["- Half pitch lower","-低半个音高"],
        ["- One pitch lower","-低一个音高"],
        ["-Twice","-两倍"],
        ["-One and a half times","-一倍半"],
        ["-No change","-不变"],
        ["-Half","-一半"],
        ["-Zero","-零"],
        ["0 second","0秒"],
        ["1 second","1秒"],
        ["2 second","2秒"],
        ["3 second","3秒"],
        ["4 second","4秒"],
        ["5 second","5秒"],
        ["0th beat","0拍"],
        ["1st beat","1拍"],
        ["2nd beat","2拍"],
        ["3rd beat","3拍"],
        ["4th beat","4拍"],
        ["5th beat","5拍"],
        ["Display only","只显示"],
        ["Display all","显示全部"],
        ["Display wave","显示波形"],
        ["Skill editor height","技巧编辑器高度："],
        ["Mode","模式"],
        ["vocal","声乐曲"],
        ["instrument","器乐曲"],
        ["vocal and instrument","声乐曲和器乐曲"],
        ["Enunciate","吐字"],
        ["Convert all speech to vocal music","把所有朗读全部转化为声乐曲"],
        ["Convert all","全部转化"],
        ["Cancle all converting task","取消所有转化任务"],
        ["Cancle converting","取消转化"],
        ["Arrange background music","背景音乐编曲"],
        ["Arrange","编曲"],
        ["Back to vocal editor","返回到音乐编辑器"],
        ["Back","返回"],
        ["Preset","预置"],
        ["Light music","轻音乐"],
        ["Heavy music","重音乐"],
        ["User define","用户自定义"],
        ["Prelude","序曲"],
        ["Prelude instrument","序曲乐器"],
        ["One instrument","一种乐器"],
        ["Two instruments alternating","两种乐器交替"],
        ["Test","试听"],
        ["Prelude content","序曲内容"],
        ["One sentence","一句"],
        ["Two sentences","两句"],
        ["Three sentences","三句"],
        ["Fore sentences","四句"],


        ["Piano","钢琴"],
        ["Acoustic Grand Piano","大钢琴（声学钢琴）"],
        ["Bright Acoustic Piano","明亮的钢琴"],
        ["Electric Grand Piano","电钢琴"],
        ["Honky-tonk Piano","酒吧钢琴"],
        ["Rhodes Piano","柔和的电钢琴"],
        ["Chorused Piano","加合唱效果的电钢琴"],
        ["Harpsichord","羽管键琴（拨弦古钢琴）"],
        ["Clavichord","科拉维科特琴（击弦古钢琴）"],

        ["Chromatic Percussion","色彩打击乐器"],
        ["Celesta","钢片琴"],
        ["Glockenspiel","钟琴"],
        ["Music box","八音盒"],
        ["Vibraphone","颤音琴"],
        ["Marimba","马林巴"],
        ["Xylophone","木琴"],
        ["Tubular Bells","管钟"],
        ["Dulcimer","大扬琴"],


        ["Organ","风琴"],
        ["Hammond Organ","击杆风琴"],
        ["Percussive Organ","打击式风琴"],
        ["Rock Organ","摇滚风琴"],
        ["Church Organ","教堂风琴"],
        ["Reed Organ","簧管风琴"],
        ["Accordian","手风琴"],
        ["Harmonica","口琴"],
        ["Tango Accordian","探戈手风琴"],



        ["Guitar","吉他"],
        ["Acoustic Guitar(nylon)","尼龙弦吉他"],
        ["Acoustic Guitar(steel)","钢弦吉他"],
        ["Electric Guitar(jazz)","爵士电吉他"],
        ["Electric Guitar(clean)","清音电吉他"],
        ["Electric Guitar(muted)","闷音电吉他"],
        ["Overdriven Guitar","加驱动效果的电吉他"],
        ["Distortion Guitar","加失真效果的电吉他"],
        ["Guitar Harmonics","吉他和音"],

        ["Bass  family","贝司"],
        ["Acoustic Bass","大贝司（声学贝司）"],
        ["Electric Bass(finger)","电贝司（指弹）"],
        ["Electric Bass(pick)","电贝司（拨片）"],
        ["Fretless Bass","无品贝司"],
        ["Slap Bass 1","掌击贝司 1"],
        ["Slap Bass 2","掌击贝司 2"],
        ["Synth Bass 1","电子合成贝司 1"],
        ["Synth Bass 2","电子合成贝司 2"],


        ["Strings","弦乐"],
        ["Violin","小提琴"],
        ["Viola","中提琴"],
        ["Cello","大提琴"],
        ["Contrabass","低音大提琴"],
        ["Tremolo Strings","弦乐群颤音音色"],
        ["Pizzicato Strings","弦乐群拨弦音色"],
        ["Orchestral Harp","竖琴"],
        ["Timpani","定音鼓"],

        ["Ensemble","合奏/合唱"],
        ["String Ensemble 1","弦乐合奏音色1"],
        ["String Ensemble 2","弦乐合奏音色2"],
        ["Synth Strings 1","合成弦乐合奏音色1"],
        ["Synth Strings 2","合成弦乐合奏音色2"],
        ["Choir Aahs","人声合唱“啊”"],
        ["Voice Oohs","人声“嘟”"],
        ["Synth Voice","合成人声"],
        ["Orchestra Hit","管弦乐敲击齐奏"],


        ["Brass","铜管"],
        ["Trumpet","小号"],
        ["Trombone","长号"],
        ["Tuba","大号"],
        ["Muted Trumpet","加弱音器小号"],
        ["French Horn","法国号（圆号）"],
        ["Brass Section","铜管组（铜管乐器合奏音色）"],
        ["Synth Brass 1","合成铜管音色1"],
        ["Synth Brass 2","合成铜管音色2"],


        ["Reed","簧管"],
        ["Soprano Sax","高音萨克斯风"],
        ["Alto Sax","次中音萨克斯风"],
        ["Tenor Sax","中音萨克斯风"],
        ["Baritone Sax","低音萨克斯风"],
        ["Oboe","双簧管"],
        ["English Horn","英国管"],
        ["Bassoon","巴松（大管）"],
        ["Clarinet","单簧管（黑管）"],



        ["Pipe","笛"],
        ["Piccolo","短笛"],
        ["Flute","长笛"],
        ["Recorder","竖笛"],
        ["Pan Flute","排箫"],
        ["Bottle Blow","吹瓶口"],
        ["Shakuhachi","日本尺八"],
        ["Whistle","口哨声"],
        ["Ocarina","奥卡雷那"],


        ["Synth Lead","合成主音"],
        ["Lead 1(square)","合成主音1（方波）"],
        ["Lead 2(sawtooth)","合成主音2（锯齿波）"],
        ["Lead 3(caliope lead)","合成主音3"],
        ["Lead 4(chiff lead)","合成主音4"],
        ["Lead 5(charang)","合成主音5"],
        ["Lead 6(voice)","合成主音6（人声）"],
        ["Lead 7(fifths)","合成主音7（平行五度）"],
        ["Lead 8(bass+lead)","合成主音8（贝司加主音）"],


        ["Synth Pad","合成音色"],
        ["Pad 1(new age)","合成音色1（新世纪）"],
        ["Pad 2(warm)","合成音色2 （温暖）"],
        ["Pad 3(polysynth)","合成音色3"],
        ["Pad 4(choir)","合成音色4 （合唱）"],
        ["Pad 5(bowed)","合成音色5"],
        ["Pad 6(metallic)","合成音色6 （金属声）"],
        ["Pad 7(halo)","合成音色7 （光环）"],
        ["Pad 8(sweep)","合成音色8"],




        ["Synth Effects","合成效果"],
        ["FX 1(rain)","合成效果 1 雨声"],
        ["FX 2(soundtrack)","合成效果 2 音轨"],
        ["FX 3(crystal)","合成效果 3 水晶"],
        ["FX 4(atmosphere)","合成效果 4 大气"],
        ["FX 5(brightness)","合成效果 5 明亮"],
        ["FX 6(goblins)","合成效果 6 鬼怪"],
        ["FX 7(echoes)","合成效果 7 回声"],
        ["FX 8(sci-fi)","合成效果 8 科幻"],



        ["Ethnic","民间乐器"],
        ["Sitar","西塔尔（印度）"],
        ["Banjo","班卓琴（美洲）"],
        ["Shamisen","三昧线（日本）"],
        ["Koto","十三弦筝（日本）"],
        ["Kalimba","卡林巴"],
        ["Bagpipe","风笛"],
        ["Fiddle","民族提琴"],
        ["Shanai","山奈"],



        ["Percussive","打击乐器"],
        ["Tinkle Bell","叮当铃"],
        ["Agogo","拉丁打铃组"],
        ["Steel Drums","钢鼓"],
        ["Woodblock","木鱼"],
        ["Taiko Drum","太鼓"],
        ["Melodic Tom","通通鼓"],
        ["Synth Drum","合成鼓"],
        ["Reverse Cymbal","铜钹"],


        ["Sound Effects","声音效果"],
        ["Guitar Fret Noise","吉他换把杂音"],
        ["Breath Noise","呼吸声"],
        ["Seashore","海浪声"],
        ["Bird Tweet","鸟鸣"],
        ["Telephone Ring","电话铃"],
        ["Helicopter","直升机"],
        ["Applause","鼓掌声"],
        ["Gunshot","枪声"],


        ["Drum and others","鼓和其他"],
        ["Brake branch","树枝折断"],
        ["Laser gun","激光枪"],
        ["Whip","皮鞭"],
        ["Stick in air","空中舞棍"],
        ["Wooden club","敲棒槌"],
        ["Bamboo pole","敲竹竿"],
        ["Put down cloth","放下衣服"],
        ["Stick","棒子"],
        ["Doorbell","门铃"],
        ["Acoustic Bass Drum","声学低音鼓"],
        ["Bass Drum 1","低音鼓1"],
        ["Side Stick","响弦鼓"],
        ["Acoustic Snare","原声军鼓"],
        ["Electric Snare","电子军鼓"],
        ["Hand Clap","拍手"],
        ["Low Floor Tom","低音落地嗵鼓"],
        ["High Floor Tom","高音落地嗵鼓"],
        ["Low Tom","低音嗵鼓"],
        ["Low-Mid Tom","中低音嗵鼓"],
        ["Hi-Mid Tom","中高音嗵鼓"],
        ["High Tom","高音嗵鼓"],
        ["Closed Hi-Hat","闭镲"],
        ["Pedal Hi-Hat","踩镲"],
        ["Open Hi-Hat","开镲"],
        ["Crash Cymbal 1","撞击钹1"],
        ["Ride Cymbal 1","点钹"],
        ["Chinese Cymbal","中国钹"],
        ["Splash Cymbal","溅音钹"],
        ["Crash Cymbal 2","撞击钹2"],
        ["Ride Cymbal 2","点钹2"],
        ["Ride Bell","镲铃"],
        ["Tambourine","手铃"],
        ["Cowbell","牛铃"],
        ["Vibraslap","颤音叉"],
        ["Hi Bongo","高音邦戈"],
        ["Low Bongo","低音邦戈"],
        ["Mute Hi Conga","弱音康加鼓"],
        ["Open Hi Conga","开康加鼓"],
        ["Low Conga","低音康加鼓"],
        ["High Timbale","高音铜鼓"],
        ["Low Timbale","低音铜鼓"],
        ["High Agogo","高音拉丁打铃"],
        ["Low Agogo","低音拉丁打铃"],
        ["Cabasa","卡巴沙铃"],
        ["Maracas","砂槌"],
        ["Short Whistle","短口哨"],
        ["Long Whistle","长口哨"],
        ["Short Guiro","短锯琴"],
        ["Long Guiro","长锯琴"],
        ["Claves","音棒"],
        ["Hi Wood Block","高音敲木块"],
        ["Low Wood Block","低音敲木块"],
        ["Mute Cuica","弱音鸟鸣桶"],
        ["Open Cuica","开音鸟鸣桶"],
        ["Mute Triangle","弱音三角铁"],
        ["Open Triangle","开三角铁"],
        ["Sweeping","扫地"],
        ["A string of coins","一串铜钱"],
        ["Dream","梦幻"],
        ["Plastic block fells","塑料块掉地上"],
        ["Broken drum","破鼓"],
        ["Strange drum","怪音鼓"],



        ["Misc","杂项"],

        ["Divide lyric","朗读切分"],
        ["Unvoiced consonant shorter","清辅音缩短"],
        ["To remove the unvoiced consonant shorter, drag it in here","拖进来，删除清辅音缩短"],
        ["New unvoiced consonant shorter","新建清辅音缩短"],

        ["(Deleted)","（已经删除）"],
        ["(Empty file)","（空文档）"],
        ["(No more lines)","（没有更多的行）"],
        ["(The climax not found)","（没有找到高潮）"],
        ["(The second paragraph not found)","（没有找到第二段）"],

        ["Instrument 1","乐器1"],
        ["Instrument 2","乐器2"],
        ["Instrument A","乐器A"],
        ["Instrument B","乐器B"],
        ["Instrument C","乐器C"],
        ["Instrument D","乐器D"],
        ["Instrument","乐器"],
        ["1st sentence","第一句"],
        ["2nd sentence","第二句"],
        ["3rd sentence","第三句"],
        ["4th sentence","第四句"],
        ["1st climax sentence","高潮第一句"],
        ["2nd climax sentence","高潮第二句"],

        ["Instrument volume","器乐曲音量"],
        ["Chord","和弦"],
        ["Volume of accompany in prelude","序曲里伴奏音量"],
        ["Volume of accompany in postlude","尾声里伴奏音量"],

        ["Don not beat","不需要节拍"],
        ["Beat music sheet 1","节拍歌谱1"],
        ["Beat music sheet 2","节拍歌谱2"],
        ["Beat music sheet 3","节拍歌谱3"],
        ["Beat music sheet 4", "节拍歌谱4"],

        ["Zhao Lei", "赵磊"],
        ["Zhao Lei raw", "赵磊原音"],
        ["Zhao Lei female", "赵磊女声"],


        ["Clove", "丁香"],

        ["Piano last beat", "钢琴最后一个节拍"],
        ["Piano last 2 note", "钢琴最后两个音符"],
        ["Piano last 4 note", "钢琴最后四个音符"],
        ["Notes for long duration", "长音一串音符"],
        ["3 fast notes for long duration", "长音三个音符快"],
        ["3 slow notes for long duration", "长音三个音符慢"],
        ["4 echo notes", "回音四个音符"],
        ["Start sing dream", "开始唱梦幻"],
        ["Start sing crash cymbal", "开始唱撞击钹"],
        ["Before climax auto", "自动高潮前"],
        ["Before climax melodic tom", "高潮前通鼓"],
        ["Climax start Open Hi-Hat", "高潮开始开镲"],
        ["Climax start Crash Cymbal", "高潮开始撞击鼓"],
        ["Beat Woodblock Bassoon", "节拍木鱼和巴松"],
];
