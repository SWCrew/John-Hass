$( document ).ready(function() {
    // http://api.openweathermap.org/data/2.5/forecast?id=5713376&APPID=0aa02fd6e1747160cab3b61cf5073a02
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#inates").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  });
}
});

