// Manhattan
var coords = [40.739940, -73.988801];

var world = MapGL.world('world', {
  skybox: false,
  postProcessing: false
}).setView(coords);

// Add controls
MapGL.Controls.orbit().addTo(world);

// Leave a single CPU for the main browser thread
world.createWorkers(7).then(function() {
  console.log('Workers ready.');

  // CartoDB basemap
  MapGL.rasterTileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  }).addTo(world).then(function() {
    console.log('Added Raster Tile Layer to world.');
  });

  // Buildings from Tilezen
  MapGL.mvtTileLayer('https://tile.nextzen.org/tilezen/vector/v1/all/{z}/{x}/{y}.mvt?api_key=-P8vfoBlQHWiTrDduihXhA', {
    workers: true,
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
    layers: ['buildings'],
    // TODO: Work out why this isn't filtering out points
    filter: function(feature) {
      // Don't show points
      return feature.geometry.type !== 'Point';
    },
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://whosonfirst.mapzen.com#License">Who\'s On First</a>.'
  }).addTo(world).then(function() {
    console.log('Added MVT Tile Layer to world.');
  });
});
