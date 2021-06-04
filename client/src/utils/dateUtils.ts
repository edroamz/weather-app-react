function GetHoursFromUnixUTCTimestamp(UnixTimestamp: number) {
  if (Number.isNaN(UnixTimestamp)) return NaN;
  return new Date(UnixTimestamp * 1000).getHours();
}

function GetShortWeekdayFromUnixUTCTimestamp(
  UnixTimestamp: number,
  locales = undefined
) {
  if (Number.isNaN(UnixTimestamp)) return NaN;

  return new Date(UnixTimestamp * 1000).toLocaleDateString(locales, {
    weekday: "short",
  });
}

export { GetHoursFromUnixUTCTimestamp, GetShortWeekdayFromUnixUTCTimestamp };
