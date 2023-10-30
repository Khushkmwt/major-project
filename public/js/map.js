
 console.log(mapToken);
 mapboxgl.accessToken = mapToken;

 const map = new mapboxgl.Map({
 container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
 style: 'mapbox://styles/mapbox/streets-v12', // style URL
 center: listing.geometry.coordinates, // starting position [lng, lat]
 zoom: 8 // starting zoom
 });

 console.log(listing.geometry);
const customMarker = document.createElement('div');
customMarker.className = 'custom-marker';
customMarker.innerHTML = '<div class="icon"><div class="inner-icon"><i class="fa-solid fa-street-view"></i></div></div>';

// Change the inner HTML of the icon on hover
customMarker.addEventListener('mouseenter', function () {
    this.classList.add('hovered');
    this.querySelector('.inner-icon').innerHTML = '<i class="fa-regular fa-compass"></i>';
});

// Reset the inner HTML when mouse leaves
customMarker.addEventListener('mouseleave', function () {
    this.classList.remove('hovered');
    this.querySelector('.inner-icon').innerHTML = '<i class="fa-solid fa-street-view"></i>'; 
});
// Create a marker with the custom icon
const marker =  new mapboxgl.Marker({ element: customMarker })
    .setLngLat(listing.geometry.coordinates) // Marker's coordinates
    .setPopup(
        new mapboxgl.Popup({ closeOnClick: false , offset: 25 }) .setHTML(
            `<div class="custom-popup">
            <h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>
             </div> `)
    )
    .addTo(map);

    