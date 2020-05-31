window.onload = function() {
	//为表格的行增加动态处理效果
	var trObj = eleAll("empTr") ;
	for (var x = 0 ; x < trObj.length ; x ++){
		bind("mouseover",trObj[x],function(){
			changeColor(this,"#FFFFFF") ;
		}) ;
		bind("mouseout",trObj[x],function(){
			changeColor(this,"#F2F2F2") ;
		}) ;
	}
	//2.设置empno的验证操作
	bind("blur",ele("empno"),function(){
		validateEmpno() ;
	}) ;
	bind("blur",ele("job"),function(){
		validateJob() ;
	}) ;
	bind("blur",ele("ename"),function(){
		validateEname() ;
	}) ;
	bind("blur",ele("hiredate"),function(){
		validateHiredate() ;
	}) ;
	bind("blur",ele("sal"),function(){
		validateSal() ;
	}) ;
	bind("blur",ele("comm"),function(){
		validateComm() ;
	}) ;
	//3.处理表单的绑定
	bind("submit",ele("empForm"),function(){
		if (validateForm()) {
			this.submit() ;//提交表单
		} else {
			if (e && e.preventDefault) {	//现在是w3c标准下执行
				e.preventDefault() ;	//阻止浏览器的动作
			} else {	//专门针对ie浏览器的处理
				window.event.returnValue = false ;
			}
		}
	}) ;
}
function validateEmpno() {
	return validateRegex("empno",/^\d{4}$/) ;
}
function validateEname() {
	return validateEmpty("ename") ;
}
function validateJob() {
	return validateEmpty("job") ;
}
function validateHiredate() {
	return validateDate("hiredate") ;
}
function validateSal() {
	return validateRegex("sal",/^\d{1,5}(\.{1,2})?$/) ;
}
function validateComm() {
	return validateRegex("comm",/^\d{1,5}(\.{1,2})?$/) ;
}
function validateForm() {
	return validateEmpno() && validateEname() && validateHiredate() && validateJob() && validateSal() && validateComm() ;	
}