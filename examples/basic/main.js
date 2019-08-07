// Manhattan
var coords = [40.739940, -73.988801];

var world = MapGL.world('world', {
  skybox: false,
  postProcessing: false
}).setView(coords);

// Add controls
MapGL.Controls.orbit().addTo(world);

// CartoDB basemap
MapGL.imageTileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  // attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  attribution: null,
}).addTo(world).then(function() {
  console.log('Added image tile layer to world');
});

// Buildings from OSMBuildings (Range Not Satisfiable)
// https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json

// Buildings from Mapzen (Out of service)
// https://tile.mapzen.com/mapzen/vector/v1/buildings/{z}/{x}/{y}.topojson?api_key=vector-tiles-NT5Emiw

// Buildings from Nextzen (Very slow)
// https://{s}.tile.nextzen.org/tilezen/vector/v1/all/{z}/{x}/{y}.topojson?api_key=rRhSxwrKR4q6Enrlw1ikEQ

// Buildings from Mapzen
// MapGL.topoJSONTileLayer('https://tile.mapzen.com/mapzen/vector/v1/buildings/{z}/{x}/{y}.topojson?api_key=vector-tiles-NT5Emiw', {
MapGL.topoJSONTileLayer('https://{s}.tile.nextzen.org/tilezen/vector/v1/all/{z}/{x}/{y}.topojson?api_key=rRhSxwrKR4q6Enrlw1ikEQ', {
// MapGL.topoJSONTileLayer('https://{s}.tile.nextzen.org/tilezen/vector/v1/buildings/{z}/{x}/{y}.topojson?api_key=rRhSxwrKR4q6Enrlw1ikEQ', {
// MapGL.topoJSONTileLayer('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json', {
// MapGL.topoJSONTileLayer('https://tile.nextzen.org/tilezen/vector/v1/buildings/{z}/{x}/{y}.topojson?api_key=rRhSxwrKR4q6Enrlw1ikEQ', {
  interactive: false,
  style: function(feature) {
    var height;

    if (feature.properties.height) {
      height = feature.properties.height;
    } else {
      height = 10 + Math.random() * 10;
    }

    return {
      height: height
    };
  },
  filter: function(feature) {
    // Don't show points
    return feature.geometry.type !== 'Point';
  },
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://whosonfirst.mapzen.com#License">Who\'s On First</a>.'
// https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json
}).addTo(world).then(function() {
  console.log('Added TopoJSON layer to world');
});
