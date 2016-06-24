/**
 * 
 */
(function(){
	//alert("OMG!!!");
	debugger;
	var page = document.getElementById( "locationDetails" ),
	element = document.getElementById("sectionchanger"),
	testSection=document.getElementById("testSection"),
	sectionChanger, idx=1;
	
	   var lot=51.508742;
	   var lan=-0.120850;
	   var checkOne;

	page.addEventListener("pageshow", function() {
		debugger;
		/* Create the SectionChanger object */
		sectionChanger = tau.widget.SectionChanger(element, {
			circular: false,
			orientation: "horizontal",
			useBouncingEffect: true
		});
	});
	page.addEventListener("pagebeforeshow", function() {
		debugger;

		var actualData=[{locationName:'LONDON WELBACK STREET-NCP',address:'74-77 WELBECK STREET, LONDON'},
		                {locationName:'PARIS WELBACK STREET-NCP',address:'74-77 WELBECK STREET, LONDON'},
		                {locationName:'BARCELONA WELBACK STREET-NCP',address:'74-77 WELBECK STREET, LONDON'}];
debugger;
		for(var i = 0; i < actualData.length; i++) {
			var section = document.createElement("section");
			section.setAttribute("class", "sectionLocation");
			var divLocInfo=document.createElement("div");
			divLocInfo.setAttribute("class", "divLocInfo");
			var infoLocation=document.createElement("div");
			infoLocation.setAttribute("class", "infoLocation");

			var textSpanFont2=document.createElement("span");
			textSpanFont2.setAttribute("class", "textSpanFont");
			textSpanFont2.setAttribute("id", "textSpanLocation");
			//var locationTitle=document.createTextNode("LONDON	WELBACK STREET-NCP");
			var locationTitle=document.createTextNode(actualData[i].locationName);

			textSpanFont2.appendChild(locationTitle);

			var divNormal1=document.createElement("div");
			divNormal1.setAttribute("id", "divNormal12");
			divNormal1.setAttribute("class", "divNormal1");
			var textSpanAddress=document.createElement("div");
			textSpanAddress.setAttribute("class", "textSpanAddress12");
			divLocInfo.setAttribute("class", "textSpanAddress");
			var textSpanFont3=document.createElement("span");
			textSpanFont3.setAttribute("class", "textSpanFont");
			var locationAddress=document.createTextNode("74-77 WELBECK STREET, LONDON");

			textSpanFont3.appendChild(locationAddress);
			textSpanAddress.appendChild(textSpanFont3);
			divNormal1.appendChild(textSpanAddress);

			var textManWithInfo=document.createElement("div");
			textManWithInfo.setAttribute("class", "textManWithInfo");
			var manImgSpan=document.createElement("span");
			manImgSpan.setAttribute("id", "manImg");
			var imageMan=document.createElement("img");
			imageMan.setAttribute("src","../images/men.png");

			var textSpanFont1=document.createElement("div");
			textSpanFont1.setAttribute("class", "textSpanFont");
			var lineHeightZero1=document.createElement("h3");
			lineHeightZero1.setAttribute("class", "lineHeightZero");
			var locationHoursTime=document.createTextNode("2 min");

			var textSpanFont5=document.createElement("span");
			textSpanFont5.setAttribute("class", "textSpanFont lineHeightZero");
			var locationNameText=document.createTextNode("To London");

			textSpanFont5.appendChild(locationNameText);


			lineHeightZero1.appendChild(locationHoursTime);
			textSpanFont1.appendChild(lineHeightZero1);
			
			
			var divBtnWith=document.createElement("div");
			divBtnWith.setAttribute("class", "divBtnWith");
			
			var btnSetText=document.createElement("div");
			btnSetText.setAttribute("class", "ui-btn btnSetText btnPriceText");
			btnSetText.setAttribute("id", "bookBtnRate");
			
			var divSetAll=document.createElement("div");
			divSetAll.setAttribute("class", "divSetAll");
			
			var spantestText=document.createElement("span");
			spantestText.setAttribute("class", "spantestText");
			var spantestTextFor=document.createTextNode("BOOK FROM ");
			spantestText.appendChild(spantestTextFor);
			
			var spantestTextRate=document.createElement("span");
			spantestTextRate.setAttribute("class", "spantestText");
			var spantestTextRateFor=document.createTextNode("$16.00");
			spantestTextRate.appendChild(spantestTextRateFor);
//			spantestTextRate.addEventListener('click', function(){
//				tau.changePage("vehicles.html");
//				
//			});
			
			
			divSetAll.appendChild(spantestText);
			divSetAll.appendChild(spantestTextRate);
			
			btnSetText.appendChild(divSetAll);
			divBtnWith.appendChild(btnSetText);

			manImgSpan.appendChild(imageMan);
			textManWithInfo.appendChild(manImgSpan);
			textManWithInfo.appendChild(textSpanFont1);
			textManWithInfo.appendChild(textSpanFont5);
			divNormal1.appendChild(textManWithInfo);
			infoLocation.appendChild(textSpanFont2);
			infoLocation.appendChild(divNormal1);
			divLocInfo.appendChild(infoLocation);
			divLocInfo.appendChild(divBtnWith);
			section.appendChild(divLocInfo); 
			testSection.appendChild(section); 
			element.appendChild(testSection); 
		}
		
		var durationChange = document.getElementById("2btnPopup-cancel");
		durationChange.addEventListener("click", function(evt){
			tau.openPopup("#hoursPopUp");
		}); 
		
		$(".hoursli").click(function(){
			alert(this.value);
			$("#spanHours").html(this.value+" HOURS");
			 tau.closePopup();
			});
		
		//$('#dp').datetimepicker();

		//pay button 
		$( ".spantestText").unbind('click').on("click", function(event) {	
			tau.changePage("vehicles.html");
		});
		
		//Section Changer events
		var changer = document.getElementById("sectionchanger");
		   changer.addEventListener("sectionchange", function(evt) 
		   {
		   //  alert(evt.detail.active + " section is active.");
		     if(evt.detail.active==1){
		    	 createMap(48.856614,2.3522219);
		     }else if(evt.detail.active==2){
		    	 createMap(41.3850639,2.1734035);
		     }else{
		    	 createMap(51.508742,-0.120850);
		     }
		     
		   });
		   
		
		 function createMap(lot,lan){
			 var myCenter=new google.maps.LatLng(lot,lan);
				var marker;

				function initialize()
				{
				var mapProp = {
				  center:myCenter,
				  zoom:5,
				  mapTypeId:google.maps.MapTypeId.ROADMAP
				  };

				var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

				var marker=new google.maps.Marker({
				  position:myCenter,
				  animation:google.maps.Animation.BOUNCE
				  });

				marker.setMap(map);
				}
				initialize(); 
		 }  
		 createMap(lot,lan);
		 
//		   var myCenter=new google.maps.LatLng(51.508742,-0.120850);
//			var marker;
//
//			function initialize()
//			{
//			var mapProp = {
//			  center:myCenter,
//			  zoom:5,
//			  mapTypeId:google.maps.MapTypeId.ROADMAP
//			  };
//
//			var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
//
//			var marker=new google.maps.Marker({
//			  position:myCenter,
//			  animation:google.maps.Animation.BOUNCE
//			  });
//
//			marker.setMap(map);
//			}
//			initialize();
			//google.maps.event.addDomListener(window, 'load', initialize);
	});

	page.addEventListener("pagehide", function() {
		/* Release the object */
		sectionChanger.destroy();
	});
	
	
})();