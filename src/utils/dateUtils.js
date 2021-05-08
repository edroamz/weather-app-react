function GetUTCHoursFromUnixTimestamp(UnixTimestamp) {
  return new Date(UnixTimestamp * 1000).getUTCHours();
}

export { GetUTCHoursFromUnixTimestamp };
