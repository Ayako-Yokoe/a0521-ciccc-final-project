
function initMap() {
  const shop = { lat: 49.303552, lng: -123.131477 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: shop,
  });
  const marker = new google.maps.Marker({
    position: shop,
    map: map,
  });
}
