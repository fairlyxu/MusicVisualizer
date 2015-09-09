 function changeArray(array) {
 	if(!array){
 		return array.join('_');
 	}
 	return null;
 		
 }

==============================================================
 function get_url_value (url,key) {
	var regex = new RegExp('\\?.*&'+key+'=([^&]+)&?','g')
	var result = regex.exec(url);
	if (result) {
		return result[1] || null;
	}
	return null;
}

=================================================================

 Array.prototype.remove = function(array) {
 	var result = [];
 	for(var i = 0 ; i< array.length ; ++ i) {
 		if (result.indexOf(array[i])) {
 			result.push (array[i]);
 		}
 	}
 	return result;
 }

=================================================================
 var doms = ducument.getElementById('test');
 for( var i = 0; i< doms.length; ++i){
 	doms[i].onclick  = (function(dom){
 	    alert(dom.innerText); 
 	 })(doms[i]);
 }

=================================================================
Jquery.prototype.test = function(dom, attrs){
 	for(var i in attrs) {
 		dom.setAttribute(i, attrs[i]);
 	}
 }

================================================================
 function Node(words) {
     if (words)
         return;
     var words = []; //存字符串
     var nums = []; // 存数字串
     var flag = []; //存该位是数字还是字符
     var wordIndex;
     var numsIndex;
     for (var i = 0; i < words.length; ++i) {
         var s = words[i];
         var sbr = [];
         for (; i < s.length && '0' <= s[i] && s[i] <= '9'; ++i) {
             sbr.push(s[i]);
         }
         nums.push(parseInt(sbr.join("")));
         sbr = [];
         for (; i < s.length && '0' > s.charAt(i) && s.charAt(i) > '9'; ++i) {
             sbr.push(s[i]);
         }
         words.push(sbr.join(""));
     }

 }

var al = [];
var ss = ['A111', 'A3', 'A23', 'A1', 'B1'];
for (var  s in ss) {
    al.push(new Node(s));
}
 
al.sort(function (a, b) {
            var i = 0;
            for (; i < a.length + a.length && i < b.words.length + b.nums.length; ++i) {
                if (i % 2 == 0) { //偶数，比较字符
                    if (!a.words[(i / 2)] === (b.words[(i / 2)])) {
                        return a.words[(i / 2)].localeCompare((obj.words[(i / 2)]);
                        }
                    } else {
                        if (!a.nums.get(i / 2) === (b.nums[(i / 2)])) {
                            return a.nums[(i / 2)] - b.nums[(i / 2)]
                        }
                    }
                }
                if (i == a.words.length + a.nums.length && i == b.words.length + b.nums.length)
                    return 0;
                else if (i < a.words.length + a.nums.length)
                    return 1; //obj小
                else
                    return -1; //obj大
            }
        );