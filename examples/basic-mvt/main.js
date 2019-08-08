// Manhattan
var coords = [40.739940, -73.988801];

var world = MapGL.world('world', {
  skybox: false,
  postProcessing: false
}).setView(coords);

// Add controls
MapGL.Controls.orbit().addTo(world);

// CartoDB basemap
MapGL.rasterTileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(world).then(function() {
  console.log('Added Raster Tile Layer to world.');
});

//
let _aqua = [

    // Waterway / Natural watercourses
    'river', 'riverbank', 'stream', 'tidal_channel', 'lake',

    // Waterway / Man-made waterways
    'canal', 'drain', 'ditch', 'pressurised', 'fairway',

    // Natural / Water related
    'water', 'wetland', 'beach', 'coastline',

    // Place / Other places
    'sea', 'ocean',

    // Amenity / Other places
    'fountain',

    // Landuse / Other Landuse Key Values
    'basin',

];

//
let _wood = [

    // Leisure
    'park',

];

let _grass = [

    // Leisure
    'playground', 'park',

];

// Buildings from Tilezen
MapGL.mvtTileLayer('https://tile.nextzen.org/tilezen/vector/v1/all/{z}/{x}/{y}.mvt?api_key=-P8vfoBlQHWiTrDduihXhA', {
  interactive: true,
  style: ( feature ) => {
    var height;

    // https://wiki.openstreetmap.org/wiki/Map_Features

    if (feature.properties.height) {
      height = feature.properties.height;
    } else {
      height = 10 + Math.random() * 10;
    }

    //


    if ( _aqua.includes( feature.properties.kind ) ) {

        let _color = '#436981'; // harp.gl
        // let _color = '#75CFF0'; // mapbox-gl
        return {
          color: _color,
          height: 0.03,
        };

    }

    if ( feature.properties.kind == 'earth' ) {

        let _color = '#87959A'; // harp.gl
        // let _color = '#EAE6E0'; // mapbox-gl
        return {
          color: _color,
          height: 0.02,
        };

    }

    if ( feature.properties.kind == 'roads' ) {

        let _color = '#E3D39A'; // harp.gl
        // let _color = '#EAE6E0'; // mapbox-gl
        return {
          color: _color,
          height: 0.02,
        };

    }

    if ( _wood.includes( feature.properties.kind ) ) {

        let _color = '#718989'; // harp.gl
        // let _color = '#B6E59E'; // mapbox-gl
        return {
          color: _color,
          height: 0.02,
        };

    }


    // console.dir( feature );

    return {
      height: height
    };
  },
  // layers: ['buildings', 'water', 'earth', 'roads'],
  // layers: ['grass', 'greenfield'],
  // layers: _aqua.concat(['roads', 'wood', 'buildings']),
  filter: function(feature) {
    // Don't show points
    return feature.geometry.type !== 'Point';
  },

  onEachFeature: function(feature, layer) {
    layer.on('click', function(layer, point2d, point3d, intersects) {
      // var id = layer.feature.properties.LAD11CD;
      // var value = layer.feature.properties.POPDEN;

      // console.log(id + ': ' + value, layer, point2d, point3d, intersects);
      // console.log('kind' + ': ' + layer.feature.feature.properties.kind);
      console.log(feature, layer);
    });
},

  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://whosonfirst.mapzen.com#License">Who\'s On First</a>.'
}).addTo(world).then(function() {
  console.log('Added MVT Tile Layer to world.');
});
