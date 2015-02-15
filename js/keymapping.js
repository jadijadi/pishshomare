var mapper = {};
mapper.char_mapping = {
    ' ':' ',
    'ظ': 'z',
    'ط':'x',
    'ز':'c',
    'ر':'v',
    'ذ':'b',
    'د':'n',
    'پ':'m',
    'و':',',
    'گ':'\'',
    'ک':';',
    'م':'l',
    'ن':'k',
    'ت':'j',
    'ا':'h',
    'ل':'g',
    'ب':'f',
    'ی':'d',
    'س':'s',
    'ش':'a',
    'چ':']',
    'ج':'[',
    'ح':'p',
    'خ':'o',
    'ه':'i',
    'ع':'u',
    'غ':'y',
    'ف':'t',
    'ق':'r',
    'ث':'e',
    'ص':'w',
    'ض':'q',
    'ك':'z',
    'ژ':'c',
    'ء':'m',
    'ة':'j',
    'ئ':'s',
    'آ':'h',
    'أ':'g',
    'إ':'f',
    'ي':'d',
    'ؤ':'a',    
    '۰':'0',
    '۱':'1',
    '۲':'2',
    '۳':'3',
    '۴':'4',
    '۵':'5',
    '۶':'6',
    '۷':'7',
    '۸':'8',
    '۹':'9',
    '،':'&',
    
};
mapper.farsi_mapper = function(farsi_word){
    var nonsense_word = "";
    if(farsi_word===undefined) return nonsense_word;
    for (var i = 0, len = farsi_word.length; i < len; i++){
        if(mapper.char_mapping[farsi_word.charAt(i)]!==undefined){
            nonsense_word +=mapper.char_mapping[farsi_word.charAt(i)];
        }else return "";
    }
    return nonsense_word;
}

