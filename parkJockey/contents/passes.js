
(function(){
	
debugger;

	var ApassList=["Pass1","Pass2","Pass3","Pass4","Pass5"];
	$(ApassList).each(function(i, el){
	debugger;   
        var li = document.createElement('li');
        li.setAttribute('class','liItemsN');
       /* li.appendChild(document.createTextNode(el));*/
    	li.addEventListener("click",function(e){
    		debugger;
    		//alert("nothing to go");
    		/* document.getElementById("expimg").src = expimg.src.replace("../images/calender.png", "../images/london.jpg");*/
    		
    
			/*if (!e) var e = window.event;
			e.cancelBubble = true;
			if (e.stopPropagation) e.stopPropagation();*/
		});
    	 var divTop=document.createElement('div');
	        divTop.setAttribute('class','divTop');
	        divTop.appendChild(document.createTextNode(el));
	        li.appendChild(divTop);
	        
	        $("#ListPassesA")[0].appendChild(li);
	
	
	
});
	

})();