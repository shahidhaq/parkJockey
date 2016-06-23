/**
 * 
 */
(function(){
	
debugger;

	var productList=["London","Barcelona","Columbus","Paris","Amesterdam"];
	$(productList).each(function(i, el){
	debugger;   
        var li = document.createElement('li');
        li.setAttribute('class','liItemsN');
       /* li.appendChild(document.createTextNode(el));*/
    	li.addEventListener("click",function(e){
    		debugger;
    		//alert("nothing to go");
    		/* document.getElementById("expimg").src = expimg.src.replace("../images/calender.png", "../images/london.jpg");*/
    		
    		if(e.target.innerText=="London"){
    		$("#expimg").attr("src","../images/london.jpg");
    		tau.changePage("../contents/locationDetails.html");
    		}
    		else if(e.target.innerText=="Barcelona")
    			$("#expimg").attr("src","../images/barcelona.jpg");
    		else if(e.target.innerText=="Columbus")
    			$("#expimg").attr("src","../images/columbus.jpg");
    		else if(e.target.innerText=="Paris")
    			$("#expimg").attr("src","../images/paris.jpg");
			/*if (!e) var e = window.event;
			e.cancelBubble = true;
			if (e.stopPropagation) e.stopPropagation();*/
		});
    	 var divTop=document.createElement('div');
	        divTop.setAttribute('class','divTop');
	        divTop.appendChild(document.createTextNode(el));
	        li.appendChild(divTop);
	        
	        $("#ListItems")[0].appendChild(li);
	
	
	
});
	

})();