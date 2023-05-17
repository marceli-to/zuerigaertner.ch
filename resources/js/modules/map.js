// Define a function to load the Mapbox script
function loadMapboxScript() {
  var script = document.createElement('script');
  script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.js';
  script.onload = initializeMap; // Call the function to initialize the map once the script is loaded
  document.head.appendChild(script);
}

// Define a function to initialize the map
function initializeMap() {
  mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY2VsaXRvb29vIiwiYSI6ImNrMHNsdmhwdjAzcjIzZ3BldTlqdWhnaWEifQ.EWZE383Tn4xBt0E5pSXh6Q';
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/marcelitoooo/ck16ms7m51nlo1cmwnqrbjuyq',
      center: [8.497271271164212,47.38291388911902],
      zoom: 12
  });
  map.addControl(new mapboxgl.NavigationControl());
  map.scrollZoom.disable();
  
  var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [8.497271271164212,47.38291388911902],
      },
      properties: {
        title: 'Zürigärtner GmbH',
        description: 'Zürigärtner GmbH'
      }
    }]
  };
  
  // add markers to map
  geojson.features.forEach(function(marker) {
  
  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';
  
  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
  });
}

function scrollEventHandler() {
  if (window.pageYOffset > 500) {
    loadMapboxScript();
    window.removeEventListener('scroll', scrollEventHandler);
  }
}

window.addEventListener('scroll', scrollEventHandler);

