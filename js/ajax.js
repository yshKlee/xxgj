// 获取接口地址
function getUrl() {
	var url = "/";
	return url;
}

function getRealtorUrl() {
	var url = "../../webrealtor/";
	return url;
}

function getImgUrl() {
	var url = "";
	return url;
}
// 获取URL参数
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}
// AJAX封装
var ajax = {
	/**
	 * 基本的Ajax请求
	 *
	 * 无需每次都设置请求地址,主要用户获取请求接口
	 *
	 * @interfaceName    {string}  接口名称
	 * @requestData    {string}   请求的数据
	 * @callback   回调函数
	 *
	 */
	fileAjax: function(interfaceName, callback) {
		$.ajax({
			type: "get",
			dataType: "json",
			url: interfaceName,
			success: function(data) {
				return callback(data);
			}
		})
	},
	/**
	 * 基本的Ajax请求
	 *
	 * 无需每次都设置请求地址,主要用户获取请求接口
	 *
	 * @interfaceName    {string}  接口名称
	 * @requestData    {string}   请求的数据
	 * @callback   回调函数
	 *
	 */
	baseAjax: function(interfaceName, requestData, callback) {
		$.ajax({
			type: "post",
			dataType: "json",
			url: getUrl() + interfaceName,
			data: requestData,
			success: function(data) {
				return callback(data);
			}
		})
	},
	/**
	 * 带用户验证的Ajax请求
	 *
	 * 无需每次都设置请求地址,主要用户获取请求接口
	 *
	 * @interfaceName    {string}  接口名称
	 * @requestData    {string}   请求的数据
	 * @callback   回调函数
	 *
	 */
	verifyUserAjax: function(interfaceName, requestData, callback) {
		$.ajax({
			type: "post",
			dataType: "json",
			url: getUrl() + interfaceName,
			data: requestData,
			success: function(data) {
				if(data.code != 0 && data.code != 1 && data.code != 1001) {
					$.toast(data.msg, "text");
				} else if(data.code == 1001) { //登录状态已过期(用户已在别处登录)
					goLoginOut();
					$.toast(data.msg, "text");
				} else {
					return callback(data);
				}
			}
		})
	},

}
//toast时间
$.toast.prototype.defaults.duration = 2000;

function setToken(token, imgUrl) {
	if(token === 0) {
		localStorage.removeItem("token");
	} else if(token) {
		localStorage.removeItem("token");
		localStorage.setItem("token", token);
		if(imgUrl) {

			upLoadImg(imgUrl);
		}
	} else {
		$.toast("noTokenToSet", "text");
	}

}

function getToken() {
	if(localStorage.getItem("token")) {
		return localStorage.getItem("token");
	} else {
		return undefined;
	}
}

function removeToken() {
	sessionStorage.removeItem("token");
}

function toLogin(code) {
	if(code == 1001) {
		$.alert("请先登录", "温馨提示");
		goLoginOut();
		return;
	}
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if(isAndroid) {
		window.android.setLoginType(code);
	} else if(isiOS) {
		setLoginType(code);
	}
}

//lat，lng
function setPosition() {

	var positionStr;
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if(isAndroid) {
		positionStr = window.android.getPosition();
	} else if(isiOS) {
		getPosition();
	}

	if(positionStr) {
		return positionStr;
		//		{
		//			lat: positionStr.split(",")[0],
		//			lng: positionStr.split(",")[1]
		//		};
	}

}

// 退出登录 LoginOut
function goLoginOut() {
	//	if(!confirm("确定要退出吗？")) {
	//		return;
	//	}
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if(isAndroid) {
		window.android.LoginOut();
	} else if(isiOS) {
		LoginOut();
	}
}

function toCall(code) {
	console.log(code);
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if(isAndroid) {
		window.android.Call(code);
	} else if(isiOS) {
		Call(code);
	}
}

function upLoadImg(file) {
	if(file) {
		window.location.reload();
	}

}

function toTakePh() {
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if(isAndroid) {
		window.android.TakePh();
	} else if(isiOS) {
		TakePh();
	}
}