// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQC8P3HuwCfhAswkeer2RvLKXuYt7A9s41FnsPIlo1Mj8XbBn_Xv-JtlRPO3nQvNoj31tQ7jJHL6O9iI2UOKxIPdquxJPyQ5jdhmP9nQBO5NAoxI4plfYNyc06nokyrTS8iGXcwaLpOaXrqjpRVXpu2rlYRJkP6sC2se613bj_y7RltbAAINHUVeGOVMo0UK4OnexZtmIMgzOeD5p3F2RiDNTFVI2NMsdt3S0d71PCPhcukVOTBjqILoOpTaEty2wt5r1LnUa7A';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);