(function(){
	
	alert("hello");
	
	var page = document.getElementById( "events" );
	var AEventList=["Event1","Event2","Event3","Event4","Event5"];
	page.addEventListener("pageshow", function() {
	
	});
	
	page.addEventListener("pagebeforeshow", function() {
		
		function cretaePassesList(AEventList){
			$("#ListEventsA")[0].innerHTML="";
			$(AEventList).each(function(i, el){
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
				        
				        $("#ListEventsA")[0].appendChild(li);
			});
		}
		cretaePassesList(AEventList);
	});
	
	 page.addEventListener("pagehide", function() {
	      /* Release the object */
	   });
	
})();