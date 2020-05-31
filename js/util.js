/*
	本文件为js工具文件，里面提供一系列属性，函数
	本方法主要验证输入元素内容是否为空
*/
function validateEmpty(eleId) {
	var obj = document.getElementById(eleId) ;		//取得一个表单元素
	var spanObj = document.getElementById(eleId + 'Span') ;		//取得提示信息的元素
	if (obj != null) {
		if (obj.value == '') {		//数据错误
			obj.className = 'failure' ;		//设置错误的样式
			spanObj.innerHTML = '<font color="red">×</font>' ;	//设置元素内部内容
			return false ;//验证失败
		} else{
			obj.className = 'success' ;		//设置正确的样式
			spanObj.innerHTML = '<font color="green">√</font>' ;	//设置元素内部内容
			return true ;	//验证成功
		}
	}
	return false ;
}