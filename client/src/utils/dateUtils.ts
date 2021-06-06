function GetHoursFromUnixUTCTimestamp(UnixTimestamp: number): number {
  if (Number.isNaN(UnixTimestamp)) return NaN;
  return new Date(UnixTimestamp * 1000).getHours();
}

function GetShortWeekdayFromUnixUTCTimestamp(
  UnixTimestamp: number,
  locales = undefined
): string | number {
  if (Number.isNaN(UnixTimestamp)) return NaN;

  return new Date(UnixTimestamp * 1000).toLocaleDateString(locales, {
    weekday: "short",
  });
}

export { GetHoursFromUnixUTCTimestamp, GetShortWeekdayFromUnixUTCTimestamp };
