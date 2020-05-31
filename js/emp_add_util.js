function changeColor(obj,color){
	obj.bgColor = color ;
}
//取得元素对象的操作
function ele(eleId) {
	return document.getElementById(eleId) ;
}
//取得一组元素的操作
function eleAll(eleId) {
	return document.all(eleId) ;
}
//绑定处理事件
function bind(eventType,obj,fun) {
	obj.addEventListener(eventType,fun,false) ;
}
//验证数据是否为空
function validateEmpty(eleId) {
	var obj = ele(eleId) ;	//取得指定名称的对象
	if(obj != null) {	//已经取得了数据
		if (obj.value == "") {	//数据验证出错
			setFailureStyle(obj) ;
			return false ;
		} else{	//数据验证成功
			setSuccessStyle(obj) ;
			return true ;
		}
	}
	return false ;
}
//正则验证
function validateRegex(eleId,regex) {
	var obj = ele(eleId) ;	//取得指定名称的对象
	if (validateEmpty(eleId)) {	//有数据
		if (!regex.test(obj.value)) {	//没有通过
			etFailureStyle(obj) ;
			return false ;
		} else{	//数据验证成功
			setSuccessStyle(obj) ;
			return true ;
		}
	}
}
//数字验证
function validateNumber(eleId) {
	return validateRegex(eleId,/^\d+(\.\d+)?$/) ;
}
//日期验证
function validateDate(eleId) {
	return validateRegex(eleId,/^\d{4}-\d{2}-\d{2}$/) ;
}

//设置成功样式与信息提示
function setSuccessStyle(obj) {	//设置成功样式
	if (obj != null) {
		obj.className = "success" ;
		var spanObj = ele(obj.id + "Span") ;
		if (spanObj != null) {	//给出了提示元素位置
			spanObj.innerHTML = "<font color='green'>√</font>"
		} 
	}
}
//设置失败样式与信息提示
function setFailureStyle(obj) {	//设置失败样式
	if (obj != null) {
		obj.className = "failure" ;
		var spanObj = ele(obj.id + "Span") ;
		if (spanObj != null) {	//给出了提示元素位置
			spanObj.innerHTML = "<font color='red'>×</font>"
		}
	}
}

