var marker,i,locations=[['<div class="infobox"><h3 class="title"><a href="#">OUR USA OFFICE</a></h3><span>NEW YORK CITY 2045 / 65</span><span>+90 555 666 77 88</span></div>',52.370216,4.895168,2]],map=new google.maps.Map(document.getElementById("map"),{zoom:14,scrollwheel:!1,navigationControl:!0,mapTypeControl:!1,scaleControl:!1,draggable:!0,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{featureType:"poi.business",elementType:"geometry.fill",stylers:[{visibility:"on"}]}]}],center:new google.maps.LatLng(52.370216,4.895168),mapTypeId:google.maps.MapTypeId.ROADMAP}),infowindow=new google.maps.InfoWindow;for(i=0;i<locations.length;i++)marker=new google.maps.Marker({position:new google.maps.LatLng(locations[i][1],locations[i][2]),map:map,icon:"images/loaders/loader-realestate.gif"}),google.maps.event.addListener(marker,"click",function(e,o){return function(){infowindow.setContent(locations[o][0]),infowindow.open(map,e)}}(marker,i));