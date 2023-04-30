export const fetcher = (url) => fetch(url).then((res) => res.json());

export const HaversineDistanceInMiles = (lat1, lon1, lat2, lon2) => {
  const R = 3958.8; // Radius of the earth in miles
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in miles
  return +d.toFixed(2);
};

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
