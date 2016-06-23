(function(){
	var myCenter=new google.maps.LatLng(51.508742,-0.120850);
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
	
	
})();