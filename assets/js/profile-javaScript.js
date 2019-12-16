function initMap() {
    // The location of Uluru
    var uluru = {lat: 13.8420245, lng: 100.5439775};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), 
        {
            zoom: 15, 
            center: uluru
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map
    });
  }

  13.8420245,100.5439775 //ค่าละติจูด ลองที่ติจูด

 // AIzaSyBEMsadlezXG6IXRqAnmWnIqUJmtv8J8PQ ***API Key
