/**
 * obj:表示当前要改变颜色的对象
 * color：设置要显示的颜色种类
*/
function changeColor(obj,color){
	obj.bgColor = color ;
}
window.onload = function(){
	var trObj = document.all('infoTr') ;
	for (var x = 0; x < trObj.length ; x++) {
		trObj[x].addEventListener('mouseover',function(){
			//this表示当前操作的对象，即tr
			changeColor(this,'FFFFFF') ;
		},false) ;
		trObj[x].addEventListener('mouseout',function(){
			changeColor(this,'F2F2F2') ;
		},false) ;
	}
}