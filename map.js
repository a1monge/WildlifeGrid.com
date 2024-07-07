let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 40.586258, lng: -98.389870 },
    zoom: 5,
  });

  const image = {
    url: "img/prairie_dog.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(13, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32),
  };

  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  new google.maps.Marker({
    position: { lat: 33.576698, lng: -101.855072 },
    map,
    icon: image,
    shape: shape,
    title: "Praire_Dog_Lubbock",
  });

  new google.maps.Marker({
    position: { lat: 31.845682, lng: -102.367645 },
    map,
    icon: image,
    shape: shape,
    title: "Praire_Dog_Odessa",
  });

  new google.maps.Marker({
    position: { lat: 28.63528, lng: -106.08889 },
    map,
    icon: image,
    shape: shape,
    title: "Praire_Dog_Chihuahua",
  });

  new google.maps.Marker({
    position: { lat: 33.5842, lng: -102.3700 },
    map,
    icon: image,
    shape: shape,
    title: "Praire_Dog_Levelland",
  });

  new google.maps.Marker({
    position: { lat: 32.2393, lng: -101.4718 },
    map,
    icon: image,
    shape: shape,
    title: "Praire_Dog_Big_Spring",
  });

  new google.maps.Marker({
    position: { lat: 30.358494, lng: -103.661694 },
    map,
    icon: image,
    shape: shape,
    title: "Praire_Dog_Alpine",
  });

}

initMap();
