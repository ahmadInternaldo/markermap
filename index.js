let mymap = L.map('mapid').setView([19.037896, 78.325483], 5);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
}).addTo(mymap);


//just example
  let marker_1 = L.marker([19.037896, 78.325483]).addTo(mymap)
  let marker_2 = L.marker([19.037896, 80.325483]).addTo(mymap)
  let marker_3 = L.marker([19.037896, 82.325483]).addTo(mymap)
  let marker_4 = L.marker([21.037896, 78.325483]).addTo(mymap)
  let marker_5 = L.marker([21.037896, 80.325483]).addTo(mymap)
  let marker_6 = L.marker([21.037896, 82.325483]).addTo(mymap)

  marker_1.bindPopup("<b>You clicked Mark: 2</b>").openPopup()
  marker_2.bindPopup("<b>You clicked Mark: 2</b>").openPopup()
  marker_3.bindPopup("<b>You clicked Mark: 2</b>").openPopup()
  marker_4.bindPopup("<b>You clicked Mark: 2</b>").openPopup()
  marker_5.bindPopup("<b>You clicked Mark: 2</b>").openPopup()
  marker_6.bindPopup("<b>You clicked Mark: 2</b>").openPopup()

//