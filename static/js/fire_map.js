
// Create layer for background

let basemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
// Initialize layer groups.  Make an object containing the different layers

let layers = {
  "2000": new L.LayerGroup(),
  "2001": new L.LayerGroup(),
  "2002": new L.LayerGroup(),
  "2003": new L.LayerGroup(),
  "2004": new L.LayerGroup(),
  "2005": new L.LayerGroup(),
  "2006": new L.LayerGroup(),
  "2007": new L.LayerGroup(),
  "2008": new L.LayerGroup(),
  "2009": new L.LayerGroup(),
  "2010": new L.LayerGroup(),
  "2011": new L.LayerGroup(),
  "2012": new L.LayerGroup(),
  "2013": new L.LayerGroup(),
  "2014": new L.LayerGroup(),
  "2015": new L.LayerGroup(),
  "2016": new L.LayerGroup(),
  "2017": new L.LayerGroup(),
  "2018": new L.LayerGroup(),
  "2019": new L.LayerGroup(),
  "2020": new L.LayerGroup()

};

// Create a map using Leaflet and pass in options and layers

let map = L.map('map', {
  center: [
      36.78, -119.45
  ],
  zoom: 8,
  layers: [
    layers["2020"]
  ]
});

// Create an overlay and add layer controls

let overlays = {
  "2000": layers["2000"],
  "2001": layers["2001"],
  "2002": layers["2002"],
  "2003": layers["2003"],
  "2004": layers["2004"],
  "2005": layers["2005"],
  "2006": layers["2006"],
  "2007": layers["2007"],
  "2008": layers["2008"],
  "2009": layers["2009"],
  "2010": layers["2010"],
  "2011": layers["2011"],
  "2012": layers["2012"],
  "2013": layers["2013"],
  "2014": layers["2014"],
  "2015": layers["2015"],
  "2016": layers["2016"],
  "2017": layers["2017"],
  "2018": layers["2018"],
  "2019": layers["2019"],
  "2020": layers["2020"]
}

// Create control for layers and add the overlays

L.control.layers(null, overlays).addTo(map);

// Add background to the map

basemap.addTo(map);


// Retrieve the data from the geojson

d3.json('https://raw.githubusercontent.com/supvadakkeveetil/Project3_Group1/main/Fire_Map/wildfire_geo_CA2.geojson')
  .then(data => {
    data.features.forEach(feature => {
      var year = overlays[String(feature.properties.FIRE_YEAR)]
      var coordinates = [feature.properties.LATITUDE, feature.properties.LONGITUDE];
      var fireName = feature.properties.FIRE_NAME;
      var classification = feature.properties.NWCG_CAUSE_CLASSIFICATION;
      var cause = feature.properties.NWCG_GENERAL_CAUSE;
      var fireSize = feature.properties.FIRE_SIZE;
      var county = feature.properties.FIPS_NAME;
      
        // Add marker icons for wildfire locations
        
      var wildFireIcon = L.icon({
        iconUrl: 'IMG/wildfires_icon.png',
        iconSize: [30, 30],  //Adjust size as needed
        iconAnchor: [6, 20],
        popupAnchor: [0, -16]

    });
      L.marker(coordinates, {icon: wildFireIcon})
      .bindPopup("<h3><h3>Fire Name:" + fireName + "<h3><h3>County: " + county + "<h3><h3>Fire Size: " + fireSize + "<h3><h3>Classification: " + classification + "<h3><h3> Cause: " + cause + "</h3>").addTo(year)


   
    });
        

          });


 
   
  



