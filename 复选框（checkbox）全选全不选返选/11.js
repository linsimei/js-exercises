
window.onload=function(){
	oA=document.getElementsByTagName("a")[0];
	oLabel=document.getElementsByTagName("label")[0];
	oInput=document.getElementsByTagName("input");
	var checkAll=function(){
		var n=0;
		for(var i=1;i<oInput.length;i++){
			oInput[i].checked && n++;
		}
		oInput[0].checked=n==oInput.length-1;
		oLabel.innerHTML=oInput[0].checked ? "全不选" : "全选";
	}

	//全选或者全不选：
	oInput[0].onclick=function(){
		for(var i=1;i<oInput.length;i++){
			oInput[i].checked=this.checked;
		}
		checkAll()
	}

	//反选
	oA.onclick=function(){
		for(var i=1;i<oInput.length;i++){
			oInput[i].checked=!oInput[i].checked;
		}
		checkAll()
	}


	//根据复选个数更新全选框状态
	for(var i=1;i<oInput.length;i++){
			oInput[i].onclick= function() {
               checkAll()
           }
       }
	}
