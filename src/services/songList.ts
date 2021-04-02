const apiKey = "f29fa04AmSbWKcPe64B7y3T3Y65jY9pWrhX3Qa3Q9eFAjuaTcD8R6SM6";

export const fetchSongsByBpm = (bpm: number) =>
  fetch(`https://api.happi.dev/v1/music/bpm/playlist/${bpm}?limit=5`, {
    headers: { "x-happi-key": apiKey },
    method: "GET",
  });
