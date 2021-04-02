const apiKey = "8eb62ce0275de20f105ecd282f20663c";

export const fetchSongsByBpm = (bpm: number) =>
  fetch(`https://api.getsongbpm.com/tempo/?bpm=${bpm}`, {
    headers: { "X-API-KEY": apiKey },
    method: "GET",
  });
