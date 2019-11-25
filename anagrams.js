var anagramCheck = function (str1, str2) {
    var str1Letters = {};
    var str2Letters = {};
    if (str1.length === str2.length) {
        for (var _i = 0, str1_1 = str1; _i < str1_1.length; _i++) {
            var key = str1_1[_i];
            str1Letters[key] = str1Letters[key] + 1 || 1;
        }
        for (var _a = 0, str2_1 = str2; _a < str2_1.length; _a++) {
            var key = str2_1[_a];
            str2Letters[key] = str2Letters[key] + 1 || 1;
        }
        for (var props in str1Letters) {
            if (str1Letters[props] !== str2Letters[props]) {
                return false;
            }
        }
        return true;
    }
    return false;
};
console.log(anagramCheck("charli", "ilrach"));
