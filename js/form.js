window.onload = function(){		//在页面加载完成后进行动态事件绑定
	document.getElementById('loginForm').addEventListener('submit',function(e){
		console.log(e) ;
		var emailObj = document.getElementById('email') ;
		if (emailObj.value == '') {
			emailObj.className = 'failure' ;
			if (e && e.preventDefault) {	//现在是w3c标准下执行
				e.preventDefault() ;	//阻止浏览器的动作
			} else {	//专门针对ie浏览器的处理
				window.event.returnValue = false ;
			}
		} else{	
			if (/^\w+@\w+\.\w+$/.test(emailObj.value)) {	//输入正确，理论上可以提交
				emailObj.className = 'success' ;
				this.submit() ;		//当前元素提交表单
			} else{
				emailObj.className = 'failure' ;
				if (e && e.preventDefault) {	//现在是w3c标准下执行
					e.preventDefault() ;	//阻止浏览器的动作
				} else {	//专门针对ie浏览器的处理
					window.event.returnValue = false ;
				}
			}
		}
	},false) ;
}
