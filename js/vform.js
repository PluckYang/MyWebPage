/*
	本文件为调用util.js工具文件的js文件，因此具有window.onload（）函数，且事件皆为动态事件绑定
*/
window.onload = function () {
	document.getElementById('uid').addEventListener('blur',function(){
		validateUid() ;
	},false) ;
	document.getElementById('password').addEventListener('blur',function(){
		validatePassword() ;
	},false) ;
}
function validateUid() {	//专门验证uid数据
	return validateEmpty('uid') ;	//传入元素名称	
}
function validatePassword() {	//专门验证password数据
	return validateEmpty('password') ;	//传入元素名称
}