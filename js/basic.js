function getTime() {
	var timestamp = Date.parse(new Date());
	return formatDate(timestamp);
}

function getTime1() {
	var timestamp = Date.parse(new Date());
	return formatDate1(timestamp);
}
// 获取URL参数
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

function formatDate(now) {
	var time = new Date(now);
	var year = time.getYear() + 1900;
	var month = time.getMonth() + 1;
	var date = time.getDate();
	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();
	if(month < 10) {
		month = "0" + month;
	}
	if(date < 10) {
		date = "0" + date;
	}
	if(hour < 10) {
		hour = "0" + hour;
	}
	if(minute < 10) {
		minute = "0" + minute;
	}
	if(second < 10) {
		second = "0" + second;
	}

	return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}

function formatDate1(now) {
	var time = new Date(now);
	var year = time.getYear() + 1900;
	var month = time.getMonth() + 1;
	var date = time.getDate();
	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();
	if(month < 10) {
		month = "0" + month;
	}
	if(date < 10) {
		date = "0" + date;
	}
	if(hour < 10) {
		hour = "0" + hour;
	}
	if(minute < 10) {
		minute = "0" + minute;
	}
	if(second < 10) {
		second = "0" + second;
	}

	return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}

function formatDate2(now) {
	var time = new Date(now);
	var year = time.getYear() + 1900;
	var month = time.getMonth() + 1;
	var date = time.getDate();
	if(month < 10) {
		month = "0" + month;
	}
	if(date < 10) {
		date = "0" + date;
	}

	return year + "-" + month + "-" + date;
}

function formatDate3(now) {
	var time = new Date(now);
	var year = time.getYear() + 1900;
	var month = time.getMonth() + 1;
	var date = time.getDate();
	if(month < 10) {
		month = "0" + month;
	}
	if(date < 10) {
		date = "0" + date;
	}

	return year + "." + month + "." + date;
}

Date.prototype.format = function(fmt) { //author: meizz 
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for(var k in o)
		if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}
//数组取编号
Array.prototype.indexOf = function(val) {
	for(var i = 0; i < this.length; i++) {
		if(this[i] == val) return i;
	}
	return -1;
};
//数组去内容
Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if(index > -1) {
		this.splice(index, 1);
	}
};
//数组去重
Array.prototype.unique = function() {
	var res = [];
	var json = {};
	for(var i = 0; i < this.length; i++) {
		if(!json[this[i]]) {
			res.push(this[i]);
			json[this[i]] = 1;
		}
	}
	return res;
}
//设置两位小数
function setDoublePoint(value) {
	if(value == null) return 0;
	var value = Math.round(parseFloat(value) * 100) / 100;
	var xsd = value.toString().split(".");
	if(xsd.length == 1) {
		value = value.toString() + ".00";
		return value;
	}
	if(xsd.length > 1) {
		if(xsd[1].length < 2) {
			value = value.toString() + "0";
		}
		return value;
	}
}
/*
 
 * 
 * 
 * 20170921
 * new
 * Ysh
 * 
 * 
 * */

function jiajian() {
	$(".jian").click(function() {
		if(parseInt($(this).next().val()) > 0) {
			$(this).next().val(parseInt($(this).next().val()) - 1);
		}
	});
	$(".jia").click(function() {
		if($(this).prev().val()) {
			$(this).prev().val(parseInt($(this).prev().val()) + 1);
		}
	});
}

function checkPhone(phone) {
	//  phone = $("#phone").val().replace(/\s/g,"");
	var reg = new RegExp("^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$", "g");
	return reg.exec(phone);
}

function checkPassword(pw) {
	var reg = new RegExp("((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{8,16}$", "g");
	return reg.exec(pw);
}
//检测浏览器版本
function checkBrowser() {
	var NV = {};
	var UA = navigator.userAgent.toLowerCase();
	try {
		NV.name = !-[1, ] ? 'ie' :
			(UA.indexOf("firefox") > 0) ? 'firefox' :
			(UA.indexOf("chrome") > 0) ? 'chrome' :
			window.opera ? 'opera' :
			window.openDatabase ? 'safari' :
			'unkonw';
	} catch(e) {};
	try {
		NV.version = (NV.name == 'ie') ? UA.match(/msie ([\d.]+)/)[1] :
			(NV.name == 'firefox') ? UA.match(/firefox\/([\d.]+)/)[1] :
			(NV.name == 'chrome') ? UA.match(/chrome\/([\d.]+)/)[1] :
			(NV.name == 'opera') ? UA.match(/opera.([\d.]+)/)[1] :
			(NV.name == 'safari') ? UA.match(/version\/([\d.]+)/)[1] :
			'0';
	} catch(e) {};
	try {
		NV.shell = (UA.indexOf('360ee') > -1) ? '360极速浏览器' :
			(UA.indexOf('360se') > -1) ? '360安全浏览器' :
			(UA.indexOf('se') > -1) ? '搜狗浏览器' :
			(UA.indexOf('aoyou') > -1) ? '遨游浏览器' :
			(UA.indexOf('theworld') > -1) ? '世界之窗浏览器' :
			(UA.indexOf('worldchrome') > -1) ? '世界之窗极速浏览器' :
			(UA.indexOf('greenbrowser') > -1) ? '绿色浏览器' :
			(UA.indexOf('qqbrowser') > -1) ? 'QQ浏览器' :
			(UA.indexOf('baidu') > -1) ? '百度浏览器' :
			'未知或无壳';
	} catch(e) {}
	alert('浏览器UA=' + UA +
		'\n\n浏览器名称=' + NV.name +
		'\n\n浏览器版本=' + parseInt(NV.version) +
		'\n\n浏览器外壳=' + NV.shell);
}

/*
 
 * 
 * 新增
 * */
function formatIconStyle(item) {
	item.addClass("weui-bar__item--on");
	item.attr("href", "javascript:;");
	//	console.log(item.find("img").attr("src"));
	var imgSrcArr = item.find("img").attr("src").split(".p");
	var newSrc = imgSrcArr[0] + "-1.p" + imgSrcArr[1];
	item.find("img").attr("src", newSrc);
}

function calcFunc() {
	$(".minus").click(function() {
		if(parseInt($(this).next().text()) > 1) {
			$(this).next().text(parseInt($(this).next().text()) - 1);
		} else if(parseInt($(this).next().text()) == 1) {
			console.log("del?")
		}
	});
	$(".add").click(function() {
		if($(this).prev().text()) {
			$(this).prev().text(parseInt($(this).prev().text()) + 1);
		}
	});
}