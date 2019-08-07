// Manhattan
var coords = [40.739940, -73.988801];

var world = MapGL.world('world', {
  skybox: false,
  postProcessing: false
}).setView(coords);

// Add controls
MapGL.Controls.orbit().addTo(world);

// CartoDB basemap
MapGL.imageTileLayer('http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(world);

// MTA routes
MapGL.geoJSONLayer('https://gist.githubusercontent.com/sermonis/97b42e5f4b598bf8a79bb10289b73bf1/raw/05d097d2f6ca1ffe6d4f02215203b19c05de2f71/london-overground-routes.geojson', {
  output: true,
  interactive: false,
  style: function(feature) {
    var colour = (feature.properties.color) ? '#' + feature.properties.color : '#ffffff';

    return {
      lineColor: colour,
      lineWidth: 1.5,
      lineRenderOrder: 2
    };
  },
  attribution: '&copy; NYC MTA.'
}).addTo(world);
