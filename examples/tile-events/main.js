// Manhattan
var coords = [40.739940, -73.988801];

var world = MapGL.world('world', {
  skybox: false,
  postProcessing: false
}).setView(coords);

// Add controls
MapGL.Controls.orbit().addTo(world);

// CartoDB basemap
var imageTiles = MapGL.rasterTileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

imageTiles.addTo(world).then(function() {
  console.log('Added Raster Tile Layer to world.');
});

// Will be emitted every time the image layer updates the tile list
// All tiles in view are sent with each update
imageTiles.on('tilesList', function(tiles) {
  console.log(tiles);
});
